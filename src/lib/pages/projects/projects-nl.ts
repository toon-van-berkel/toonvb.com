import type { ProjectsOverviewDefinition } from '$lib/types/project';

// Dutch overview copy is not approved yet; existing English copy is retained temporarily.
export const page = {
    header: {
        eyebrow: 'Selected work',
        title: "Things I've built, broken and rebuilt.",
        description: 'Projects are where design, development and experimentation come together. Some started as small ideas that grew considerably beyond their original scope.',
        image: null
    },
    projectOrder: ['dnd-portal', 'antarctica-sc']
} satisfies ProjectsOverviewDefinition;
