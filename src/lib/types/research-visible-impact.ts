export interface SharedVisibleImpactResearchData {
    slug: 'visible-impact';
    classification: 'research-case';
    prototypeImage?: string;
    relatedProjects?: readonly string[];
}

export interface VisibleImpactMetadataLabels {
    readonly [key: string]: string;
}

export interface VisibleImpactHero {
    eyebrow: string;
    title: string;
    lead: string;
    metadata?: VisibleImpactMetadataLabels;
}

export interface VisibleImpactTextSection {
    eyebrow?: string;
    title: string;
    body: readonly string[];
}

export interface VisibleImpactGoal {
    title: string;
    description: string;
}

export interface VisibleImpactPrototype extends VisibleImpactTextSection {
    image?: string;
    imageAlt?: string;
}

export interface VisibleImpactMethodDetail {
    label: string;
    value: string;
}

export interface VisibleImpactMethod {
    eyebrow?: string;
    title: string;
    details: readonly VisibleImpactMethodDetail[];
}

export interface VisibleImpactParticipant {
    label: string;
    value: string;
}

export interface VisibleImpactParticipants {
    eyebrow?: string;
    title: string;
    breakdown: readonly VisibleImpactParticipant[];
}

export interface VisibleImpactInterviewFinding {
    title: string;
    profile: string;
    finding: string;
    quote?: string;
    highlight?: string;
}

export interface VisibleImpactFindings {
    eyebrow?: string;
    title: string;
    items: readonly VisibleImpactInterviewFinding[];
}

export interface VisibleImpactResults {
    eyebrow?: string;
    title: string;
    columns: readonly string[];
    moments: readonly string[];
    rows: readonly (readonly string[])[];
    highlight?: string;
    analysis?: string;
}

export interface VisibleImpactInsight {
    title: string;
    description: string;
}

export interface VisibleImpactInsights {
    eyebrow?: string;
    title: string;
    items: readonly VisibleImpactInsight[];
}

export interface VisibleImpactImplication {
    title: string;
    description: string;
}

export interface VisibleImpactImplications {
    eyebrow?: string;
    title: string;
    items: readonly VisibleImpactImplication[];
}

export interface VisibleImpactConclusion extends VisibleImpactTextSection {
    highlightedStatement?: string;
}

export interface VisibleImpactResearchDefinition {
    hero: VisibleImpactHero;
    question: VisibleImpactTextSection;
    goal: {
        eyebrow?: string;
        title: string;
        items: readonly VisibleImpactGoal[];
    };
    prototype: VisibleImpactPrototype;
    method: VisibleImpactMethod;
    participants: VisibleImpactParticipants;
    findings: VisibleImpactFindings;
    results: VisibleImpactResults;
    insights: VisibleImpactInsights;
    implications: VisibleImpactImplications;
    conclusion: VisibleImpactConclusion;
}

