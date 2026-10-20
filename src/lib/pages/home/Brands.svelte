<script lang="ts">
    import { onMount } from 'svelte';
    import './Brands.scss';
    import { reveal } from '$lib/utils/reveal';
    import Icon, { type IconName } from '$lib/components/icon/Icon.svelte';

    type Brand = {
        name: string;
        src: string;
        className?: string;
        description: string;
        href: string;
        tags: readonly { label: string; icon: IconName }[];
    };

    const brands = [
        { name: 'Antarctica SC', src: '/brands/antarctica.svg', className: 'brands__item--antarctica', description: 'A public-facing website focused on presenting information clearly through a modern web experience.', href: '/projects/antarctica-sc', tags: [{ label: 'Web', icon: 'web' }, { label: 'Design', icon: 'designer' }, { label: 'Development', icon: 'developer' }] },
        { name: 'DND-Portal Assets', src: '/brands/assets-dnd-portal-logo-wide.svg', className: 'brands__item--dnd', description: 'A visual identity used within the DND-Portal project and its supporting digital tools.', href: '/projects/dnd-portal', tags: [{ label: 'Web', icon: 'web' }, { label: 'Branding', icon: 'designer' }, { label: 'Interface', icon: 'usability' }] },
        { name: 'DND-Portal Dashboard', src: '/brands/dashboard-dnd-portal-logo-wide.svg', className: 'brands__item--dnd', description: 'A dashboard-focused part of the DND-Portal project, built around clear information and interaction.', href: '/projects/dnd-portal', tags: [{ label: 'Dashboard', icon: 'performance' }, { label: 'UX/UI', icon: 'usability' }, { label: 'Development', icon: 'developer' }] },
        { name: 'DND-Portal', src: '/brands/dnd-portal-logo-wide.svg', className: 'brands__item--dnd', description: 'A project where branding, interface design and development come together.', href: '/projects/dnd-portal', tags: [{ label: 'Platform', icon: 'web' }, { label: 'Design', icon: 'designer' }, { label: 'Development', icon: 'developer' }] },
        { name: 'HTR', src: '/brands/HTR-Logo-2025-Light-Zondertekst.svg', description: 'A collaboration connected to digital design, communication and practical problem-solving.', href: '/projects', tags: [{ label: 'Design', icon: 'designer' }, { label: 'Web', icon: 'web' }, { label: 'Collaboration', icon: 'personal' }] },
        { name: 'Labs31', src: '/brands/labs31.svg', className: 'brands__item--dark', description: 'A technical collaboration explored through digital tools and a clear visual identity.', href: '/projects', tags: [{ label: 'Technology', icon: 'developer' }, { label: 'Design', icon: 'designer' }, { label: 'Development', icon: 'developer' }] },
        { name: 'Vox Host', src: '/brands/vox-host.svg', className: 'brands__item--dark', description: 'A digital collaboration combining technical implementation with a focused user experience.', href: '/projects', tags: [{ label: 'Web', icon: 'web' }, { label: 'Hosting', icon: 'web' }, { label: 'Development', icon: 'developer' }] },
        { name: 'Labolutions', src: '/brands/Logos-Labolutions_Logo_Transparant_zwart.png', description: 'A collaboration shaped around clear digital communication and practical online experiences.', href: '/projects', tags: [{ label: 'Web', icon: 'web' }, { label: 'UX/UI', icon: 'usability' }, { label: 'Collaboration', icon: 'personal' }] }
    ] satisfies readonly Brand[];

    let viewportElement: HTMLDivElement;
    let trackElement: HTMLDivElement;
    let activeBrandIndex = $state<number | null>(null);
    let activeBrandInstance = $state<string | null>(null);
    let trackOffset = $state(0);
    let targetOffset: number | null = null;
    let interactionState = $state<'auto' | 'centering' | 'active'>('auto');
    let sequenceWidth = 0;
    let repeatCount = $state(3);
    const renderedBrands = $derived(
        Array.from({ length: repeatCount }, (_, repeat) => brands.map((brand, brandIndex) => ({ brand, brandIndex, repeat }))).flat()
    );
    let pointerInside = false;
    let keyboardFocused = false;
    let reducedMotionPreference = false;
    let lastPointerPosition: { x: number; y: number } | null = null;

    function measureTrack() {
        if (!trackElement || !viewportElement) return;

        const cards = Array.from(trackElement.querySelectorAll<HTMLElement>('.brands__item')).slice(0, brands.length);
        const gap = Number.parseFloat(getComputedStyle(trackElement).columnGap) || 0;
        sequenceWidth = cards.reduce((total, card) => total + card.getBoundingClientRect().width, 0) + gap * (cards.length - 1);
        if (!sequenceWidth) return;

        const requiredRepeats = Math.max(3, Math.ceil(viewportElement.clientWidth / sequenceWidth) + 2);
        if (sequenceWidth && repeatCount !== requiredRepeats) repeatCount = requiredRepeats;
    }

    function normalizeOffset() {
        if (!sequenceWidth) return;

        while (trackOffset <= -sequenceWidth) trackOffset += sequenceWidth;
        while (trackOffset > 0) trackOffset -= sequenceWidth;
    }

    function isInsideCard(target: EventTarget | null, card: HTMLElement) {
        return target instanceof Node && card.contains(target);
    }

    function getCardFromPoint(x: number, y: number) {
        const element = document.elementFromPoint(x, y);
        return element instanceof Element ? element.closest<HTMLElement>('.brands__item') : null;
    }

    function selectBrand(card: HTMLElement, index: number, pointerPosition?: { x: number; y: number }) {
        const viewportRect = viewportElement.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();

        pointerInside = true;
        lastPointerPosition = pointerPosition ?? lastPointerPosition;
        activeBrandIndex = index;
        activeBrandInstance = card.dataset.brandInstance ?? null;
        targetOffset = trackOffset + viewportRect.left + viewportRect.width / 2 - (cardRect.left + cardRect.width / 2);
        if (reducedMotionPreference) {
            trackOffset = targetOffset;
            targetOffset = null;
            interactionState = 'active';
        } else {
            interactionState = 'centering';
        }
    }

    function centerBrand(event: PointerEvent, index: number) {
        if (interactionState === 'centering') return;

        selectBrand(event.currentTarget as HTMLElement, index, { x: event.clientX, y: event.clientY });
    }

    function handlePointerMove(event: PointerEvent) {
        const nextPosition = { x: event.clientX, y: event.clientY };
        if (
            lastPointerPosition &&
            Math.hypot(nextPosition.x - lastPointerPosition.x, nextPosition.y - lastPointerPosition.y) < 8
        ) {
            return;
        }

        lastPointerPosition = nextPosition;
        if (keyboardFocused) return;

        const card = getCardFromPoint(event.clientX, event.clientY);
        const nextIndex = card?.dataset.brandIndex;

        if (!card || nextIndex === undefined) {
            activeBrandIndex = null;
            activeBrandInstance = null;
            targetOffset = null;
            interactionState = 'auto';
            return;
        }

        const index = Number(nextIndex);
        if (index === activeBrandIndex) return;

        selectBrand(card, index, nextPosition);
    }

    function leaveBrand(event: PointerEvent) {
        const card = event.currentTarget as HTMLElement;
        if (isInsideCard(event.relatedTarget, card)) return;

        pointerInside = false;
        if (interactionState !== 'centering' && !keyboardFocused) {
            activeBrandIndex = null;
            activeBrandInstance = null;
            targetOffset = null;
            interactionState = 'auto';
        }
    }

    function focusBrand(event: FocusEvent, index: number) {
        const card = event.currentTarget as HTMLElement;
        const viewportRect = viewportElement.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();

        keyboardFocused = true;
        activeBrandIndex = index;
        activeBrandInstance = card.dataset.brandInstance ?? null;
        targetOffset = trackOffset + viewportRect.left + viewportRect.width / 2 - (cardRect.left + cardRect.width / 2);
        if (reducedMotionPreference) {
            trackOffset = targetOffset;
            targetOffset = null;
            interactionState = 'active';
        } else {
            interactionState = 'centering';
        }
    }

    function blurBrand(event: FocusEvent) {
        const card = event.currentTarget as HTMLElement;
        if (isInsideCard(event.relatedTarget, card)) return;

        keyboardFocused = false;
        if (interactionState !== 'centering' && !pointerInside) {
            activeBrandIndex = null;
            activeBrandInstance = null;
            targetOffset = null;
            interactionState = 'auto';
        }
    }

    function leaveCarousel() {
        pointerInside = false;
        if (!keyboardFocused) {
            activeBrandIndex = null;
            activeBrandInstance = null;
            targetOffset = null;
            interactionState = 'auto';
        }
    }

    onMount(() => {
        measureTrack();
        reducedMotionPreference = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let frame = 0;
        let previousTime = performance.now();

        const animate = (time: number) => {
            const delta = Math.min(time - previousTime, 40);
            previousTime = time;

            if (targetOffset !== null) {
                const difference = targetOffset - trackOffset;
                if (Math.abs(difference) < 0.5) {
                    trackOffset = targetOffset;
                    targetOffset = null;
                    interactionState = 'active';
                    if (!pointerInside && !keyboardFocused) {
                        activeBrandIndex = null;
                        activeBrandInstance = null;
                        interactionState = 'auto';
                    }
                } else {
                    trackOffset += difference * Math.min(delta / 260, 1);
                }
            } else if (activeBrandIndex === null && !reducedMotionPreference) {
                trackOffset -= delta * 0.025;
                normalizeOffset();
            }

            frame = requestAnimationFrame(animate);
        };

        const resizeObserver = new ResizeObserver(measureTrack);
        resizeObserver.observe(viewportElement);
        resizeObserver.observe(trackElement);
        frame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(frame);
            resizeObserver.disconnect();
        };
    });
</script>

<section use:reveal class="section brands" aria-labelledby="brands-title">
    <header class="section__header">
        <p class="section__eyebrow">Selected collaborations</p>
        <h2 class="section__title" id="brands-title">Brands I’ve worked with.</h2>
    </header>

    <div
        bind:this={viewportElement}
        class="brands__grid"
        role="region"
        aria-label="Brands and organisations"
        onpointermove={handlePointerMove}
        onpointerleave={leaveCarousel}
    >
        <div bind:this={trackElement} class="brands__track" style:transform={`translate3d(${trackOffset}px, 0, 0)`}>
            {#each renderedBrands as instance (instance.repeat + '-' + instance.brandIndex)}
                <a
                    class:brands__item--active={activeBrandInstance === `${instance.repeat}-${instance.brandIndex}`}
                    class={`brands__item ${instance.brand.className ?? ''}`}
                    data-brand-index={instance.brandIndex}
                    data-brand-instance={`${instance.repeat}-${instance.brandIndex}`}
                    href={instance.brand.href}
                    aria-hidden={instance.repeat > 0}
                    tabindex={instance.repeat > 0 ? -1 : undefined}
                    onpointerenter={(event) => centerBrand(event, instance.brandIndex)}
                    onpointerleave={leaveBrand}
                    onfocus={(event) => focusBrand(event, instance.brandIndex)}
                    onblur={blurBrand}
                >
                    <span class="brands__logo"><img src={instance.brand.src} alt={instance.repeat > 0 ? '' : instance.brand.name} loading={instance.repeat < 2 ? 'eager' : 'lazy'} decoding="async" /></span>
                    <span class="brands__info-shell">
                        <span class="brands__info">
                            <strong>{instance.brand.name}</strong>
                            <span>{instance.brand.description}</span>
                            <span class="brands__tags">
                                {#each instance.brand.tags as tag}
                                    <span class="brands__tag"><Icon name={tag.icon} variant="tag" decorative />{tag.label}</span>
                                {/each}
                            </span>
                            <span class="brands__link">View project <span aria-hidden="true">↗</span></span>
                        </span>
                    </span>
                </a>
            {/each}
        </div>
    </div>
</section>
