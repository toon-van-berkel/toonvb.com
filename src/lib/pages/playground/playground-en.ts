import type { PlaygroundPageDefinition } from '$lib/types/page';

export const page = {
    items: [
        { title: 'Experiments', description: 'A place for small investigations into interactions, visuals and technical possibilities.', status: 'Empty for now' },
        { title: 'Prototypes', description: 'A place for ideas that need to become tangible before I can decide whether they work.', status: 'Empty for now' },
        { title: 'Weird ideas', description: 'A place for questions that take an unexpected turn and become more elaborate than planned.', status: 'Empty for now' },
        { title: 'Small tools', description: 'A place for useful little things that remove friction from a workflow or solve a specific problem.', status: 'Empty for now' },
        { title: 'A screw, built with code.', description: 'A small OpenSCAD experiment exploring a parametrically modelled screw with visible helical threads.', status: 'Experiment', href: '/playground/experiments/parametric-screw', icon: 'experiment', tags: [{ label: 'OpenSCAD', icon: 'experiment' }, { label: '3D', icon: 'prototype' }, { label: 'Parametric modelling', icon: 'developer' }] }
    ],
    emptyMessage: 'The playground is still taking shape. Experiments and prototypes will appear here as I have something to share.'
} satisfies PlaygroundPageDefinition;
