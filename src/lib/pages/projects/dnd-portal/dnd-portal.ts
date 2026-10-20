import type { SharedProjectData } from '$lib/types/project';

export const project = {
    slug: 'dnd-portal',
    logo: '/logos/dnd-portal.svg',
    image: '/images/projects/dnd-portal.webp',
    external: 'https://www.dnd-portal.com',
    technologies: ['SvelteKit', 'TypeScript'],
    category: 'web',
    projectType: 'personal'
} satisfies SharedProjectData;
