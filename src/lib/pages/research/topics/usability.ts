import type { ResearchTopicDefinition } from '$lib/types/research';

export const topic = {
    slug: 'usability',
    content: {
        en: {
            title: 'Usability',
            type: 'Topic',
            status: 'topic',
            description: 'A subject I use to examine whether structure, navigation and interaction help people reach their goal.'
        },
        // Dutch translation is not available yet; retain the approved English content.
        nl: {
            title: 'Usability',
            type: 'Topic',
            status: 'topic',
            description: 'A subject I use to examine whether structure, navigation and interaction help people reach their goal.'
        }
    }
} satisfies ResearchTopicDefinition;
