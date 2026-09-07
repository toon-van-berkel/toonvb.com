export type Project = {
    slug: string;
    title: string;
    type: string;
    status: string;
    summary: string;
    technologies: string[];
    logo: string;
    image: string;
    external?: string;
    sections?: Array<{ title: string; body: string }>;
};

export const projects: Project[] = [
    { slug: 'dnd-portal', title: 'DND-Portal', type: 'Personal project', status: 'Live and evolving', summary: 'A custom platform for campaigns, characters, lore and worldbuilding.', technologies: ['SvelteKit', 'TypeScript'], logo: '/logos/dnd-portal.svg', image: '/images/projects/dnd-portal.webp', external: 'https://www.dnd-portal.com', sections: [
        { title: 'What it is', body: 'DND-Portal is a personal platform built around campaigns, characters, lore and worldbuilding.' },
        { title: 'Why it exists', body: 'The project grew from wanting one focused place for the information that makes a campaign feel like a world. It is also a practical way to explore how a larger web application should organise connected content.' },
        { title: 'What I built', body: 'The repository documents the project as a SvelteKit and TypeScript platform. The portfolio materials show the campaign and worldbuilding environment as the central experience.' }
    ] },
    { slug: 'antarctica-sc', title: 'Antarctica SC', type: 'Client project', status: 'Published', summary: 'A public-facing website focused on presenting information clearly through a modern and accessible web experience.', technologies: ['Web development', 'Responsive design'], logo: '/logos/antarctica-sc.svg', image: '/images/projects/antarctica-sc.webp', external: 'http://antarctica-sc.nl/' }
];

export function getProject(slug: string) {
    return projects.find((project) => project.slug === slug);
}
