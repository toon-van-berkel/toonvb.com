import type { PlaygroundPageDefinition } from '$lib/types/page';

export const page = {
    items: [
        { title: 'Experiments', description: 'A place for small investigations into interactions, visuals and technical possibilities.', status: 'Empty for now' },
        { title: 'Prototypes', description: 'A place for ideas that need to become tangible before I can decide whether they work.', status: 'Empty for now' },
        { title: 'Weird ideas', description: 'A place for questions that take an unexpected turn and become more elaborate than planned.', status: 'Empty for now' },
        { title: 'Small tools', description: 'A place for useful little things that remove friction from a workflow or solve a specific problem.', status: 'Empty for now' },
        { title: 'Parametric screw', description: 'An experiment in parametric 3D modelling, with an interactive viewer and downloadable OpenSCAD and STL files.', status: 'Experiment', href: '/playground/experiments/parametric-screw', icon: 'experiment', image: '/playground/screw/parametric-screw.png', imageAlt: 'Parametric screw model preview', tags: [{ label: 'OpenSCAD', icon: 'experiment' }, { label: '3D', icon: 'prototype' }, { label: 'Parametric modelling', icon: 'developer' }] }
    ],
    emptyMessage: 'The playground is still taking shape. Experiments and prototypes will appear here as I have something to share.'
} satisfies PlaygroundPageDefinition;
