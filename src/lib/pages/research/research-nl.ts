import type { ResearchOverviewDefinition } from '$lib/types/research';

// Dutch overview copy is not available yet; retain the current English copy.
export const page = {
    header: {
        eyebrow: 'Research and reasoning',
        title: 'I like knowing why something works.',
        description: 'Research gives me a way to move beyond assumptions. I use it to understand what should be built and why.'
    },
    topicOrder: ['visual-design', 'usability', 'web-performance', 'accessibility']
} as const satisfies ResearchOverviewDefinition;
