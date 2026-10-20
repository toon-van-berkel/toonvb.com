import type { Locale } from '$lib/types/locale';
import type { ResearchTopic } from '$lib/types/research';
import { topic as visualDesign } from './topics/visual-design';
import { topic as usability } from './topics/usability';
import { topic as webPerformance } from './topics/web-performance';
import { topic as accessibility } from './topics/accessibility';

const topics = [visualDesign, usability, webPerformance, accessibility] as const;

export function getResearchTopics(locale: Locale, order: readonly string[]): readonly ResearchTopic[] {
    return order.flatMap((slug) => {
        const definition = topics.find((topic) => topic.slug === slug);
        return definition ? [{ slug: definition.slug, ...definition.content[locale] }] : [];
    });
}
