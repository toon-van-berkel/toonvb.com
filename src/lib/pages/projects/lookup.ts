import type { Locale } from '$lib/types/locale';
import type { ProjectDefinition } from '$lib/types/project';
import type { PageMetadata } from '$lib/types/metadata';
import { project as dndPortalShared } from './dnd-portal/dnd-portal';
import { content as dndPortalEn } from './dnd-portal/dnd-portal-en';
import { content as dndPortalNl } from './dnd-portal/dnd-portal-nl';
import { project as antarcticaShared } from './antarctica-sc/antarctica-sc';
import { content as antarcticaEn } from './antarctica-sc/antarctica-sc-en';
import { content as antarcticaNl } from './antarctica-sc/antarctica-sc-nl';
import { metadata as dndPortalMetadataEn } from './dnd-portal/dnd-portal-en.meta';
import { metadata as dndPortalMetadataNl } from './dnd-portal/dnd-portal-nl.meta';
import { metadata as antarcticaMetadataEn } from './antarctica-sc/antarctica-sc-en.meta';
import { metadata as antarcticaMetadataNl } from './antarctica-sc/antarctica-sc-nl.meta';
import { project as dndEncounterLibraryShared } from './dnd-encounter-library/dnd-encounter-library';
import { content as dndEncounterLibraryEn } from './dnd-encounter-library/dnd-encounter-library-en';
import { content as dndEncounterLibraryNl } from './dnd-encounter-library/dnd-encounter-library-nl';
import { metadata as dndEncounterLibraryMetadataEn } from './dnd-encounter-library/dnd-encounter-library-en.meta';
import { metadata as dndEncounterLibraryMetadataNl } from './dnd-encounter-library/dnd-encounter-library-nl.meta';

const projectsByLocale: Record<Locale, readonly ProjectDefinition[]> = {
    en: [
        { ...dndPortalShared, ...dndPortalEn },
        { ...antarcticaShared, ...antarcticaEn },
        { ...dndEncounterLibraryShared, ...dndEncounterLibraryEn }
    ],
    nl: [
        { ...dndPortalShared, ...dndPortalNl },
        { ...antarcticaShared, ...antarcticaNl },
        { ...dndEncounterLibraryShared, ...dndEncounterLibraryNl }
    ]
};

export function getProjects(locale: Locale, order: readonly string[]): readonly ProjectDefinition[] {
    const projects = projectsByLocale[locale];
    return order.flatMap((slug) => projects.filter((project) => project.slug === slug));
}

export function getProject(slug: string, locale: Locale): ProjectDefinition | undefined {
    return projectsByLocale[locale].find((project) => project.slug === slug);
}

const metadataByLocale: Record<Locale, Readonly<Record<string, PageMetadata>>> = {
    en: {
        'dnd-portal': dndPortalMetadataEn,
        'antarctica-sc': antarcticaMetadataEn,
        'dnd-encounter-library': dndEncounterLibraryMetadataEn
    },
    nl: {
        'dnd-portal': dndPortalMetadataNl,
        'antarctica-sc': antarcticaMetadataNl,
        'dnd-encounter-library': dndEncounterLibraryMetadataNl
    }
};

export function getProjectMetadata(slug: string, locale: Locale): PageMetadata | undefined {
    return metadataByLocale[locale][slug];
}
