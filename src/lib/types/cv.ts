import type { IconName } from '$lib/components/icon/Icon.svelte';

export interface CvProject {
    title: string;
    eyebrow: string;
    description: string;
    technologies: readonly string[];
    href: string;
    linkLabel: string;
}

export interface CvEntry {
    title: string;
    subtitle?: string;
    body?: string;
    period?: string;
    icon?: IconName;
    href?: string;
    featured?: boolean;
}

export interface CvSection {
    title: string;
    icon: IconName;
}

export interface CvPageDefinition {
    metadata: { title: string; description: string };
    hero: {
        name: string;
        role: string;
        disciplines: string;
        location: string;
        website: string;
        github: string;
        linkedin: string;
        download: string;
        downloadHint: string;
        contact: string;
    };
    profile: { title: string; body: string };
    projects: { title: string; items: readonly CvProject[] };
    experience: { title: string; items: readonly CvEntry[] };
    education: { title: string; items: readonly CvEntry[] };
    skills: { title: string; groups: readonly { title: string; items: readonly (string | { label: string; icon: IconName })[] }[] };
    certificates: { title: string; items: readonly CvEntry[] };
    languages: { title: string; items: readonly string[] };
    community: { title: string; items: readonly CvEntry[] };
}
