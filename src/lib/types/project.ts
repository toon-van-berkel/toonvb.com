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
    sections?: readonly ProjectSection[];
    dndPortal?: DndPortalDetail;
}

export interface ProjectDefinition extends SharedProjectData, ProjectContent {}

export interface ProjectsOverviewDefinition {
    header: PageHeader;
    projectOrder: readonly string[];
}
