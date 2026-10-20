import type { ResearchTopicDefinition } from '$lib/types/research';

export const topic = {
    slug: 'accessibility',
    content: {
        en: {
            title: 'Accessibility',
            type: 'Topic',
            status: 'topic',
            description: 'A subject I use to keep digital experiences clear and usable across different devices, input methods and needs.'
        },
        // Dutch translation is not available yet; retain the approved English content.
        nl: {
            title: 'Accessibility',
            type: 'Topic',
            status: 'topic',
            description: 'A subject I use to keep digital experiences clear and usable across different devices, input methods and needs.'
        }
    }
} satisfies ResearchTopicDefinition;
