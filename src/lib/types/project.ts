import type { PageHeader } from './page';

export interface SharedProjectData {
    slug: string;
    logo: string;
    image: string;
    external?: string;
    technologies: readonly string[];
    category: 'web' | 'applications' | 'games' | 'school';
    projectType: 'personal' | 'client' | 'school';
}

export interface ProjectSection {
    title: string;
    body: string;
}

export interface ProjectFeature {
    title: string;
    body: string;
}

export interface ProjectCaseStudy {
    overview: { title: string; paragraphs: readonly string[] };
    features: { title: string; lead: string; items: readonly ProjectFeature[] };
    details?: { title: string; paragraphs: readonly string[]; columns?: readonly ProjectFeature[] };
    highlight: { title: string; paragraphs: readonly string[] };
}

export interface DndPortalFeature {
    icon: 'prototype' | 'personal' | 'responsive';
    title: string;
}

export interface DndPortalDetail {
    intro: readonly string[];
    origin: { title: string; paragraphs: readonly string[] };
    reference: { title: string; paragraphs: readonly string[]; features: readonly DndPortalFeature[] };
    design: { title: string; paragraphs: readonly string[] };
    comparison: {
        title: string;
        wiki: { title: string; body: string };
        playerPortal: { title: string; body: string };
        closing: string;
    };
    accessibility: { title: string; paragraphs: readonly string[] };
    closing: { title: string; paragraphs: readonly string[]; stats: readonly { value: string; label: string }[] };
    ctas: { primary: string; secondary: string };
}

export interface ProjectContent {
    title: string;
    type: string;
    status: string;
    summary: string;
    intro?: readonly string[];
    sections?: readonly ProjectSection[];
    caseStudy?: ProjectCaseStudy;
    closing?: { title: string; paragraphs: readonly string[]; cta: string };
    dndPortal?: DndPortalDetail;
}

export interface ProjectDefinition extends SharedProjectData, ProjectContent {}

export interface ProjectsOverviewDefinition {
    header: PageHeader;
    projectOrder: readonly string[];
}
