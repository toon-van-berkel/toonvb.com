import type { Locale } from '$lib/types/locale';

export interface ProjectUiCopy {
    projects: string;
    status: string;
    technologies: string;
    visit: string;
    notes: string;
    screenshotOf: string;
    contact: string;
    search: string;
    clearSearch: string;
    all: string;
    categories: { web: string; applications: string; games: string; school: string };
    types: { all: string; personal: string; client: string; school: string };
    resultCount: string;
    clearFilters: string;
    noResults: string;
    readStory: string;
}

export const projectUi: Record<Locale, ProjectUiCopy> = {
    en: {
        projects: 'Projects',
        status: 'Status',
        technologies: 'Technologies',
        visit: 'Visit project',
        notes: 'Project notes',
        screenshotOf: 'Screenshot of',
        contact: 'Talk to me', search: 'Search projects…', clearSearch: 'Clear search', all: 'All',
        categories: { web: 'Web', applications: 'Applications & Tools', games: 'Games', school: 'School projects' },
        types: { all: 'All project types', personal: 'Personal', client: 'Client', school: 'School' },
        resultCount: 'projects found', clearFilters: 'Clear filters', noResults: 'No projects found. Try another search or clear your filters.', readStory: 'Read the story'
    },
    nl: {
        projects: 'Projecten',
        status: 'Status',
        technologies: 'Technologieën',
        visit: 'Bekijk project',
        notes: 'Projectnotities',
        screenshotOf: 'Schermafbeelding van',
        contact: 'Neem contact op', search: 'Zoek projecten…', clearSearch: 'Wis zoekopdracht', all: 'Alles',
        categories: { web: 'Web', applications: 'Applicaties & tools', games: 'Games', school: 'Schoolprojecten' },
        types: { all: 'Alle projecttypen', personal: 'Persoonlijk', client: 'Opdrachtgever', school: 'School' },
        resultCount: 'projecten gevonden', clearFilters: 'Wis filters', noResults: 'Geen projecten gevonden. Probeer een andere zoekopdracht of wis je filters.', readStory: 'Bekijk het project'
    }
};
