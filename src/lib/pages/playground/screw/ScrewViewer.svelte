<script lang="ts">
    import { onMount } from 'svelte';

    type ViewerLabels = { open: string; loadExample: string; reset: string; invalid: string; tooLarge: string; webgl: string };
    type Three = typeof import('three');
    type Mesh = import('three').Mesh;

    let { labels }: { labels: ViewerLabels } = $props();
    let canvas: HTMLCanvasElement;
    let fileInput: HTMLInputElement;
    let container: HTMLDivElement;
    let status = $state('');
    let loading = $state(true);
    let renderer: import('three').WebGLRenderer;
    let scene: import('three').Scene;
    let camera: import('three').PerspectiveCamera;
    let controls: import('three/examples/jsm/controls/OrbitControls.js').OrbitControls;
    let currentMesh: Mesh;
    let renderFrame: (() => void) | undefined;
    let resetCamera: (() => void) | undefined;
    let threeModule: Three | undefined;
    let resizeObserver: ResizeObserver | undefined;
    let animationFrame = 0;
    let disposed = false;
    let loadSequence = 0;

    const exampleUrl = '/playground/screw/screw.stl';
    const maxFileSize = 10 * 1024 * 1024;

    function validateGeometry(geometry: import('three').BufferGeometry) {
        const attribute = geometry.getAttribute('position');
        if (!attribute || attribute.count < 3 || attribute.count % 3 !== 0) throw new Error('invalid geometry');
        const values = attribute.array;
        for (let i = 0; i < attribute.count; i += 3) {
            const o = i * 3;
            const ax = Number(values[o]); const ay = Number(values[o + 1]); const az = Number(values[o + 2]);
            const bx = Number(values[o + 3]); const by = Number(values[o + 4]); const bz = Number(values[o + 5]);
            const cx = Number(values[o + 6]); const cy = Number(values[o + 7]); const cz = Number(values[o + 8]);
            if (![ax, ay, az, bx, by, bz, cx, cy, cz].every(Number.isFinite)) throw new Error('non-finite geometry');
            const abx = bx - ax; const aby = by - ay; const abz = bz - az;
            const acx = cx - ax; const acy = cy - ay; const acz = cz - az;
            const crossX = aby * acz - abz * acy;
            const crossY = abz * acx - abx * acz;
            const crossZ = abx * acy - aby * acx;
            if (crossX * crossX + crossY * crossY + crossZ * crossZ < 1e-16) throw new Error('degenerate geometry');
        }
    }

    function applyExampleNormals(THREE: Three, geometry: import('three').BufferGeometry) {
        const positions = geometry.getAttribute('position');
        const faceNormals: import('three').Vector3[] = [];
        const corners = new Map<string, number[]>();
        for (let face = 0; face < positions.count / 3; face++) {
            const offset = face * 9;
            const a = new THREE.Vector3(positions.array[offset], positions.array[offset + 1], positions.array[offset + 2]);
            const b = new THREE.Vector3(positions.array[offset + 3], positions.array[offset + 4], positions.array[offset + 5]);
            const c = new THREE.Vector3(positions.array[offset + 6], positions.array[offset + 7], positions.array[offset + 8]);
            const normal = new THREE.Vector3().crossVectors(b.sub(a), c.sub(a)).normalize();
            faceNormals.push(normal);
            for (let corner = 0; corner < 3; corner++) {
                const vertexOffset = offset + corner * 3;
                const key = [positions.array[vertexOffset], positions.array[vertexOffset + 1], positions.array[vertexOffset + 2]].map((value) => value.toFixed(6)).join(',');
                corners.set(key, [...(corners.get(key) ?? []), face]);
            }
        }

        const normals = new Float32Array(positions.count * 3);
        const smoothAngle = Math.cos(THREE.MathUtils.degToRad(42));
        for (let face = 0; face < faceNormals.length; face++) {
            for (let corner = 0; corner < 3; corner++) {
                const vertexOffset = face * 9 + corner * 3;
                const key = [positions.array[vertexOffset], positions.array[vertexOffset + 1], positions.array[vertexOffset + 2]].map((value) => value.toFixed(6)).join(',');
                const current = faceNormals[face];
                const normal = new THREE.Vector3();
                for (const neighbour of corners.get(key) ?? []) {
                    if (current.dot(faceNormals[neighbour]) >= smoothAngle) normal.add(faceNormals[neighbour]);
                }
                normal.normalize();
                normals.set([normal.x, normal.y, normal.z], vertexOffset);
            }
        }
        geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
    }

    function scheduleRender() {
        if (animationFrame || disposed || !renderFrame) return;
        const frame = () => {
            animationFrame = 0;
            if (disposed || !controls) return;
            const moving = controls.update();
            renderFrame?.();
            if (moving) animationFrame = requestAnimationFrame(frame);
        };
        animationFrame = requestAnimationFrame(frame);
    }

    function fitModel(THREE: Three, mesh: Mesh) {
        mesh.geometry.computeBoundingSphere();
        const sphere = mesh.geometry.boundingSphere;
        if (!sphere) throw new Error('missing bounds');
        const center = sphere.center.clone();
        const radius = Math.max(sphere.radius, 0.001);
        const verticalFov = THREE.MathUtils.degToRad(camera.fov);
        const aspectCorrection = camera.aspect < 1 ? 1 / Math.max(camera.aspect, 0.1) : 1;
        const distance = radius / Math.tan(verticalFov / 2) * aspectCorrection * 1.35;
        const direction = new THREE.Vector3(1, 0.72, 1).normalize();
        camera.position.copy(center).addScaledVector(direction, distance);
        camera.near = Math.max(radius / 1000, distance - radius * 2.5, 0.001);
        camera.far = Math.max(distance + radius * 4, camera.near + radius * 10);
        camera.updateProjectionMatrix();
        controls.target.copy(center);
        controls.minDistance = radius * 0.55;
        controls.maxDistance = distance * 4;
        controls.saveState();
        controls.update();
        scheduleRender();
    }

    async function loadBuffer(buffer: ArrayBuffer, name: string, smoothExample = false) {
        const sequence = ++loadSequence;
        if (buffer.byteLength > maxFileSize) { status = labels.tooLarge; loading = false; return; }
        try {
            const THREE = await import('three');
            const { STLLoader } = await import('three/examples/jsm/loaders/STLLoader.js');
            if (disposed || sequence !== loadSequence) return;
            const geometry = new STLLoader().parse(buffer);
            validateGeometry(geometry);
            if (smoothExample) applyExampleNormals(THREE, geometry);
            else geometry.computeVertexNormals();
            const material = new THREE.MeshStandardMaterial({ color: 0x8fa9c6, metalness: 0.28, roughness: 0.48 });
            const mesh = new THREE.Mesh(geometry, material);
            fitModel(THREE, mesh);
            const previous = currentMesh;
            scene.add(mesh);
            currentMesh = mesh;
            if (previous) {
                scene.remove(previous);
                previous.geometry.dispose();
                (previous.material as import('three').Material).dispose();
            }
            status = name;
            loading = false;
            renderFrame?.();
        } catch {
            status = labels.invalid;
            loading = false;
        }
    }

    async function loadExample() {
        loading = true;
        try {
            const response = await fetch(exampleUrl);
            if (!response.ok) throw new Error('example unavailable');
            await loadBuffer(await response.arrayBuffer(), 'Example screw', true);
        } catch { status = labels.invalid; loading = false; }
    }

    async function handleFile(file?: File) {
        if (!file) return;
        loading = true;
        if (!file.name.toLowerCase().endsWith('.stl')) { status = labels.invalid; loading = false; return; }
        try { await loadBuffer(await file.arrayBuffer(), file.name); }
        catch { status = labels.invalid; loading = false; }
    }

    function handleDrop(event: DragEvent) { event.preventDefault(); void handleFile(event.dataTransfer?.files[0]); }

    onMount(() => {
        void (async () => {
            try {
                const THREE = await import('three');
                threeModule = THREE;
                const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');
                if (disposed) return;
                scene = new THREE.Scene();
                scene.background = new THREE.Color(0x172b46);
                camera = new THREE.PerspectiveCamera(42, 1, 0.01, 1000);
                renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
                renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
                renderer.outputColorSpace = THREE.SRGBColorSpace;
                scene.add(new THREE.HemisphereLight(0xdbe9f8, 0x26384d, 2.2));
                const key = new THREE.DirectionalLight(0xffffff, 3); key.position.set(4, 6, 8); scene.add(key);
                controls = new OrbitControls(camera, canvas);
                controls.enableDamping = true;
                controls.dampingFactor = 0.08;
                controls.addEventListener('change', scheduleRender);
                renderFrame = () => { if (!disposed) renderer.render(scene, camera); };
                const resize = () => {
                    if (disposed || !container) return;
                    const rect = container.getBoundingClientRect();
                    const width = Math.max(1, rect.width); const height = Math.max(1, rect.height);
                    renderer.setSize(width, height, false);
                    camera.aspect = width / height;
                    camera.updateProjectionMatrix();
                    renderFrame?.();
                };
                resizeObserver = new ResizeObserver(resize);
                resizeObserver.observe(container);
                resize();
                resetCamera = () => {
                    if (currentMesh && threeModule) fitModel(threeModule, currentMesh);
                };
                await loadExample();
            } catch { loading = false; status = labels.webgl; }
        })();

        return () => {
            disposed = true;
            loadSequence += 1;
            resizeObserver?.disconnect();
            if (animationFrame) cancelAnimationFrame(animationFrame);
            controls?.removeEventListener('change', scheduleRender);
            controls?.dispose();
            currentMesh?.geometry.dispose();
            (currentMesh?.material as import('three').Material | undefined)?.dispose();
            renderer?.dispose();
        };
    });
</script>

<div class="screw-viewer" bind:this={container} role="application" aria-label="Interactive 3D model viewer" ondragover={(event) => event.preventDefault()} ondrop={handleDrop}>
    <canvas bind:this={canvas} aria-label="Interactive 3D screw model"></canvas>
    {#if loading}<p class="screw-viewer__loading" role="status">Loading model…</p>{/if}
</div>
<div class="screw-viewer__controls">
    <input bind:this={fileInput} class="screw-viewer__file" type="file" accept=".stl,model/stl" onchange={(event) => handleFile((event.currentTarget as HTMLInputElement).files?.[0])} />
    <button type="button" onclick={() => fileInput.click()}>{labels.open}</button>
    <button type="button" onclick={loadExample}>{labels.loadExample}</button>
    <button type="button" onclick={() => resetCamera?.()}>{labels.reset}</button>
</div>
{#if status}<p class="screw-viewer__status" role="status">{status}</p>{/if}

<style>
    .screw-viewer { position: relative; min-height: 480px; overflow: hidden; border-radius: 16px; background: #172b46; user-select: none; }
    .screw-viewer canvas { display: block; width: 100%; height: 100%; min-height: 480px; touch-action: none; }
    .screw-viewer__loading { position: absolute; inset: 50% 0 auto; margin: 0; color: white; text-align: center; pointer-events: none; }
    .screw-viewer__controls { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px; }
    .screw-viewer__controls button { padding: 10px 14px; border: 1px solid var(--color-primary); border-radius: 8px; background: transparent; color: var(--color-primary); cursor: pointer; }
    .screw-viewer__controls button:hover, .screw-viewer__controls button:focus-visible { background: var(--color-primary); color: white; }
    .screw-viewer__file { position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none; }
    .screw-viewer__status { margin: 10px 0 0; color: var(--color-pale-slate); font-size: .85rem; }
    @media (max-width: 700px) { .screw-viewer, .screw-viewer canvas { min-height: 340px; } }
</style>
