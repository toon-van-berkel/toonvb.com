import type { SharedProjectData } from '$lib/types/project';

export const project = {
    slug: 'dnd-encounter-library',
    logo: '/logos/dnd-portal.svg',
    image: '/images/projects/dnd-encounter-library.webp',
    external: 'https://dnd-encounter-library.alwaysdata.net/',
    technologies: ['Laravel', 'PHP', 'Blade', 'Livewire', 'SQLite'],
    category: 'school',
    projectType: 'school'
} satisfies SharedProjectData;
