import type { ResearchTopicDefinition } from '$lib/types/research';

export const topic = {
    slug: 'web-performance',
    content: {
        en: {
            title: 'Web performance',
            type: 'Topic',
            status: 'topic',
            description: 'A subject I use to think about loading speed, responsiveness and the relationship between technical quality and experience.'
        },
        // Dutch translation is not available yet; retain the approved English content.
        nl: {
            title: 'Web performance',
            type: 'Topic',
            status: 'topic',
            description: 'A subject I use to think about loading speed, responsiveness and the relationship between technical quality and experience.'
        }
    }
} satisfies ResearchTopicDefinition;
