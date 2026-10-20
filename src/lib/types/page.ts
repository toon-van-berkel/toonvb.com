export interface PageHeader {
    eyebrow?: string;
    title: string;
    description?: string;
    image?: string | null;
}

export interface PageDefinition {
    header?: PageHeader;
}

export interface AboutPageDefinition extends PageDefinition {
    header: PageHeader;
    intro: readonly string[];
    portrait: string;
    origin: AboutSection;
    dndPortal: AboutProjectSection;
    outsideProgramming: AboutSection;
    collaboration: {
        eyebrow: string;
        title: string;
        website: AboutActionSection;
        funder: AboutActionSection;
    };
}

export interface AboutSection {
    title: string;
    paragraphs: readonly string[];
}

export interface AboutActionSection {
    title: string;
    paragraphs: readonly string[];
    cta: string;
}

export interface AboutProjectSection extends AboutActionSection {
    externalUrl: string;
    stats: readonly AboutStat[];
}

export interface AboutStat {
    value: string;
    label: string;
}

export interface ContactPageDefinition extends PageDefinition {
    header: PageHeader;
    emailLabel: string;
    email: string;
}

export interface PlaygroundItem {
    title: string;
    description: string;
    status: string;
    href?: string;
    image?: string;
    imageAlt?: string;
    icon?: import('$lib/components/icon/Icon.svelte').IconName;
    tags?: readonly { label: string; icon: import('$lib/components/icon/Icon.svelte').IconName }[];
}

export interface PlaygroundPageDefinition extends PageDefinition {
    items: readonly PlaygroundItem[];
    emptyMessage: string;
}

export interface ChangelogEntry {
    date: string;
    title: string;
    description: string;
}

export interface ChangelogPageDefinition extends PageDefinition {
    entries: readonly ChangelogEntry[];
}

export interface RoadmapPageDefinition extends PageDefinition {
    items: readonly string[];
}

export interface HomeCopy {
    hero: {
        slides: Array<{
            eyebrow: string;
            title: string;
            description: string;
            primaryCta: string;
            secondaryCta: string;
            roles: Array<{ label: string; icon: 'developer' | 'designer' | 'researcher' | 'accessibility'; href?: string }>;
        }>;
    };
    approach: { eyebrow: string; title: string; lead: string };
    principles: Array<{ title: string; text: string; link: string; href?: string; researchSlug: string }>;
    research: {
        eyebrow: string;
        title: string;
        lead: string;
        read: string;
        viewAll: string;
        sustainability: { meta: string; title: string; text: string };
        visualDesign: { meta: string; title: string; text: string };
        usability: { meta: string; title: string; text: string };
    };
    featured: {
        eyebrow: string;
        title: string;
        lead: string;
        visit: string;
        story: string;
        related: string;
        screenshotOf: string;
        date: string;
        dnd: { screenshotAlt: string; domain: string; caption: string };
        antarctica: { description: string; screenshotAlt: string; domain: string; caption: string };
    };
}
