import { readFileSync } from 'node:fs';

const buffer = readFileSync('static/playground/screw/screw.stl');
const triangleCount = buffer.readUInt32LE(80);
if (buffer.length < 84 + triangleCount * 50) throw new Error('Invalid binary STL size');
const vertices = [];
for (let triangle = 0; triangle < triangleCount; triangle++) {
    const offset = 84 + triangle * 50 + 12;
    for (let vertex = 0; vertex < 3; vertex++) {
        const vertexOffset = offset + vertex * 12;
        vertices.push([buffer.readFloatLE(vertexOffset), buffer.readFloatLE(vertexOffset + 4), buffer.readFloatLE(vertexOffset + 8)]);
    }
}

const key = (point) => point.map((value) => value.toFixed(6)).join(',');
const edges = new Map();
let degenerate = 0;
let invalid = 0;
for (let index = 0; index < vertices.length; index += 3) {
    const [a, b, c] = vertices.slice(index, index + 3);
    if ([...a, ...b, ...c].some((value) => !Number.isFinite(value))) invalid++;
    const cross = [
        (b[1] - a[1]) * (c[2] - a[2]) - (b[2] - a[2]) * (c[1] - a[1]),
        (b[2] - a[2]) * (c[0] - a[0]) - (b[0] - a[0]) * (c[2] - a[2]),
        (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])
    ];
    if (Math.hypot(...cross) / 2 < 1e-10) degenerate++;
    for (const [from, to] of [[a, b], [b, c], [c, a]]) {
        const edge = [key(from), key(to)].sort().join('|');
        edges.set(edge, (edges.get(edge) ?? 0) + 1);
    }
}
const usages = [...edges.values()];
const histogram = usages.reduce((result, count) => {
    result[count] = (result[count] ?? 0) + 1;
    return result;
}, {});
console.log(JSON.stringify({
    format: 'binary STL', triangles: triangleCount, uniqueVertices: new Set(vertices.map(key)).size,
    invalid, degenerate, boundaryEdges: usages.filter((count) => count === 1).length,
    nonTwoEdges: usages.filter((count) => count !== 2).length,
    maxEdgeUse: usages.reduce((maximum, count) => Math.max(maximum, count), 0),
    edgeUseHistogram: histogram,
    overused: [...edges.entries()].filter(([, count]) => count > 2).slice(0, 3)
}, null, 2));
