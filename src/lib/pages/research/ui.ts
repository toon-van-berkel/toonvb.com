import type { Locale } from '$lib/types/locale';

export const researchUi: Record<Locale, {
    research: string;
    topics: string;
    exploreResearch: string;
    visibleImpactTitle: string;
    visibleImpactDescription: string;
}> = {
    en: {
        research: 'Research',
        topics: 'Topics I explore',
        exploreResearch: 'Explore the research',
        visibleImpactTitle: 'Visible Impact',
        visibleImpactDescription: 'Visible Impact research case study. Detailed content is being prepared.'
    },
    nl: {
        research: 'Onderzoeken',
        topics: 'Onderwerpen die ik verken',
        exploreResearch: 'Bekijk het onderzoek',
        visibleImpactTitle: 'Visible Impact',
        visibleImpactDescription: 'Visible Impact-onderzoekscase. De uitgebreide inhoud wordt voorbereid.'
    }
};
