import type { PlaygroundPageDefinition } from '$lib/types/page';

export const page = {
    categories: [
        { title: 'Experimenten', description: 'Kleine onderzoeken naar interactie, beeld en technische mogelijkheden.', status: 'Verkennen', href: '/playground/experiments', icon: 'experiment' },
        { title: 'Prototypes', description: 'Ideeën die eerst tastbaar moeten worden voordat ik kan bepalen of ze werken.', status: 'Verkennen', icon: 'prototype' },
        { title: 'Vreemde ideeën', description: 'Vragen die onverwachte afslagen nemen en uitgebreider worden dan gepland.', status: 'Verkennen', icon: 'idea' },
        { title: 'Kleine tools', description: 'Handige kleine dingen die wrijving uit een workflow halen of een specifiek probleem oplossen.', status: 'Volgt later', icon: 'developer' }
    ],
    creationsHeader: { eyebrow: 'Gemaakt in de playground', title: 'Dingen die ik echt heb gebouwd.', description: 'Sommige begonnen met een eenvoudige vraag. Andere losten een probleem op dat ik waarschijnlijk had kunnen negeren. Hoe dan ook: ze zijn hier beland.' },
    creations: [
        { title: 'Parametrische schroef', description: 'Een experiment met parametrisch 3D-modelleren, met een interactieve viewer en downloadbare OpenSCAD- en STL-bestanden.', status: 'Experiment', href: '/playground/experiments/parametric-screw', image: '/playground/screw/parametric-screw.png', imageAlt: 'Voorbeeld van een parametrische schroef', tags: [{ label: 'OpenSCAD', icon: 'experiment' }, { label: '3D', icon: 'prototype' }, { label: 'Parametrisch modelleren', icon: 'developer' }] },
        { title: 'FX Video Converter', description: 'Een praktische tool om videobestanden tussen formaten om te zetten en een herhaalde workflow iets eenvoudiger te maken.', status: 'Volgt later', tags: [{ label: 'Video', icon: 'web' }, { label: 'Conversie', icon: 'responsive' }, { label: 'Tool', icon: 'developer' }] }
    ],
    emptyMessage: 'De playground krijgt nog vorm. Hier verschijnen experimenten en prototypes zodra ik iets te delen heb.'
} satisfies PlaygroundPageDefinition;
