import type { PlaygroundPageDefinition } from '$lib/types/page';

export const page = {
    items: [
        { title: 'Experiments', description: 'A place for small investigations into interactions, visuals and technical possibilities.', status: 'Empty for now' },
        { title: 'Prototypes', description: 'A place for ideas that need to become tangible before I can decide whether they work.', status: 'Empty for now' },
        { title: 'Weird ideas', description: 'A place for questions that take an unexpected turn and become more elaborate than planned.', status: 'Empty for now' },
        { title: 'Small tools', description: 'A place for useful little things that remove friction from a workflow or solve a specific problem.', status: 'Volgt later' },
        { title: 'Parametrische schroef', description: 'Een experiment met parametrisch 3D-modelleren, met een interactieve viewer en downloadbare OpenSCAD- en STL-bestanden.', status: 'Experiment', href: '/playground/experiments/parametric-screw', icon: 'experiment', image: '/playground/screw/parametric-screw.png', imageAlt: 'Voorbeeld van een parametrische schroef', tags: [{ label: 'OpenSCAD', icon: 'experiment' }, { label: '3D', icon: 'prototype' }, { label: 'Parametrisch modelleren', icon: 'developer' }] }
    ],
    emptyMessage: 'De playground krijgt nog vorm. Hier verschijnen experimenten en prototypes zodra ik iets te delen heb.'
} satisfies PlaygroundPageDefinition;
