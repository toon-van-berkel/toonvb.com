import type { PlaygroundPageDefinition } from '$lib/types/page';

export const page = {
    categories: [
        { title: 'Experiments', description: 'Small investigations into interactions, visuals and technical possibilities.', status: 'Explore', href: '/playground/experiments', icon: 'experiment' },
        { title: 'Prototypes', description: 'Ideas that need to become tangible before deciding whether they work.', status: 'Explore', icon: 'prototype' },
        { title: 'Weird ideas', description: 'Questions that take unexpected turns and become more elaborate than planned.', status: 'Explore', icon: 'idea' },
        { title: 'Small tools', description: 'Useful little things that remove friction from a workflow or solve a specific problem.', status: 'Coming later', icon: 'developer' }
    ],
    creationsHeader: { eyebrow: 'Made in the playground', title: "Things I've actually built.", description: 'Some started as a simple question. Others solved a problem I probably could have ignored. Either way, they ended up here.' },
    creations: [
        { title: 'Parametric screw', description: 'An experiment in parametric 3D modelling, with an interactive viewer and downloadable OpenSCAD and STL files.', status: 'Experiment', href: '/playground/experiments/parametric-screw', image: '/playground/screw/parametric-screw.png', imageAlt: 'Parametric screw model preview', tags: [{ label: 'OpenSCAD', icon: 'experiment' }, { label: '3D', icon: 'prototype' }, { label: 'Parametric modelling', icon: 'developer' }] },
        { title: 'FX Video Converter', description: 'A practical utility for converting video files between formats, built to make a repetitive workflow a little easier.', status: 'Coming later', tags: [{ label: 'Video', icon: 'web' }, { label: 'Conversion', icon: 'responsive' }, { label: 'Utility', icon: 'developer' }] }
    ],
    emptyMessage: 'The playground is still taking shape. Experiments and prototypes will appear here as I have something to share.'
} satisfies PlaygroundPageDefinition;
