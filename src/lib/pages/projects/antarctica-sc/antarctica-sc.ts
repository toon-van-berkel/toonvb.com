import type { SharedProjectData } from '$lib/types/project';

export const project = {
    slug: 'antarctica-sc',
    logo: '/logos/antarctica-sc.svg',
    image: '/images/projects/antarctica-sc.webp',
    external: 'http://antarctica-sc.nl/',
    technologies: ['Web development', 'Responsive design'],
    category: 'web',
    projectType: 'client'
} satisfies SharedProjectData;
