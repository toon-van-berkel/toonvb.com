import type { PageHeader } from './page';
import type { Locale } from './locale';

export interface LocalizedResearchTopic {
    title: string;
    type: string;
    status: 'topic';
    description: string;
}

export interface ResearchTopicDefinition {
    slug: string;
    content: Record<Locale, LocalizedResearchTopic>;
}

export interface ResearchTopic extends LocalizedResearchTopic {
    slug: string;
}

export interface ResearchOverviewDefinition {
    header: PageHeader;
    topicOrder: readonly string[];
}
