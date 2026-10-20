import type { ResearchTopicDefinition } from '$lib/types/research';

export const topic = {
    slug: 'visual-design',
    content: {
        en: {
            title: 'Visual design',
            type: 'Topic',
            status: 'topic',
            description: 'A subject I use to think about hierarchy, typography, colour, composition and the feeling of an interface.'
        },
        // Dutch translation is not available yet; retain the approved English content.
        nl: {
            title: 'Visual design',
            type: 'Topic',
            status: 'topic',
            description: 'A subject I use to think about hierarchy, typography, colour, composition and the feeling of an interface.'
        }
    }
} satisfies ResearchTopicDefinition;
