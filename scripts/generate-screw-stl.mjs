import { writeFileSync } from 'node:fs';

// Fallback exporter used because OpenSCAD is not installed in this workspace.
// It uses the same millimetre parameters and a continuous radial surface for
// the shaft/thread, rather than exporting a separate open helix strip.
const out = 'static/playground/screw/screw.stl';
const shaftLength = 34;
const shaftRadius = 4;
const pitch = 3.2;
const headRadius = 7;
const headHeight = 6;
const threadHeight = 0.8;
const thetaSegments = 128;
const threadLength = 32.5;
const threadStepsPerTurn = 40;
const zSegments = Math.ceil(threadLength / pitch * threadStepsPerTurn);
const facets = [];
const add = (a, b, c) => facets.push([a, b, c]);
const ring = (radius, z, segments = thetaSegments) => Array.from({ length: segments }, (_, i) => {
    const angle = i / segments * Math.PI * 2;
    return [radius * Math.cos(angle), radius * Math.sin(angle), z];
});
const connect = (lower, upper) => {
    for (let i = 0; i < lower.length; i++) {
        const n = (i + 1) % lower.length;
        add(lower[i], lower[n], upper[n]); add(lower[i], upper[n], upper[i]);
    }
};

const tipBottom = ring(2.2, 2);
const shaftBottom = ring(shaftRadius, 6);
const threadStart = ring(shaftRadius, 7);
connect(tipBottom, shaftBottom);
connect(shaftBottom, threadStart);
for (let i = 0; i < thetaSegments; i++) add([0, 0, 2], tipBottom[(i + 1) % thetaSegments], tipBottom[i]);

// A continuous radial grid creates a closed shaft with a raised helical ridge.
const wrap = (angle) => Math.atan2(Math.sin(angle), Math.cos(angle));
const threadedRings = [];
for (let zIndex = 0; zIndex <= zSegments; zIndex++) {
    const t = zIndex / zSegments;
    const z = 7.25 + t * threadLength;
    threadedRings.push(Array.from({ length: thetaSegments }, (_, thetaIndex) => {
        const angle = thetaIndex / thetaSegments * Math.PI * 2;
        const phase = wrap((z - 7) / pitch * Math.PI * 2 - angle);
        const ridge = Math.max(0, 1 - Math.abs(phase) / (Math.PI * 0.24)) * threadHeight;
        const radius = shaftRadius + ridge;
        return [radius * Math.cos(angle), radius * Math.sin(angle), z];
    }));
}
for (let zIndex = 0; zIndex < threadedRings.length - 1; zIndex++) connect(threadedRings[zIndex], threadedRings[zIndex + 1]);
connect(threadStart, threadedRings[0]);

const shaftTop = ring(shaftRadius, 40);
connect(threadedRings.at(-1), shaftTop);
const headBottom = ring(headRadius, 40);
connect(shaftTop, headBottom);
const headTop = ring(headRadius, 46);
connect(headBottom, headTop);

// Top annulus, hexagonal socket walls and socket floor.
const hexVertices = Array.from({ length: 6 }, (_, i) => {
    const angle = i / 6 * Math.PI * 2 + Math.PI / 6;
    return [3.5 * Math.cos(angle), 3.5 * Math.sin(angle), 46];
});
const hexRing = (z) => Array.from({ length: thetaSegments }, (_, i) => {
    const side = Math.floor(i / (thetaSegments / 6));
    const u = (i % (thetaSegments / 6)) / (thetaSegments / 6);
    const from = hexVertices[side];
    const to = hexVertices[(side + 1) % 6];
    return [from[0] + (to[0] - from[0]) * u, from[1] + (to[1] - from[1]) * u, z];
});
const hexOuter = hexRing(46);
const hexInner = hexRing(43.2);
for (let i = 0; i < thetaSegments; i++) {
    const n = (i + 1) % thetaSegments;
    add(headTop[i], headTop[n], hexOuter[n]); add(headTop[i], hexOuter[n], hexOuter[i]);
    add(hexOuter[i], hexInner[n], hexInner[i]); add(hexOuter[i], hexOuter[n], hexInner[n]);
    add([0, 0, 43.2], hexInner[i], hexInner[n]);
}

const buffer = Buffer.alloc(84 + facets.length * 50);
buffer.write('parametric screw binary STL', 0, 'ascii');
buffer.writeUInt32LE(facets.length, 80);
facets.forEach(([a, b, c], index) => {
    const offset = 84 + index * 50;
    for (let component = 0; component < 3; component++) buffer.writeFloatLE(0, offset + component * 4);
    [a, b, c].flat().forEach((value, vertexIndex) => buffer.writeFloatLE(value, offset + 12 + vertexIndex * 4));
    buffer.writeUInt16LE(0, offset + 48);
});
writeFileSync(out, buffer);
console.log(`Generated ${out} with ${facets.length} facets`);
