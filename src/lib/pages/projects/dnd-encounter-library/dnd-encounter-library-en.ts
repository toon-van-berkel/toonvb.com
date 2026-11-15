import type { ProjectContent } from '$lib/types/project';

export const content = {
    title: 'D&D Encounter Library',
    type: 'School project',
    status: 'Published',
    summary: 'A Laravel website where people can find, save and share encounters for Dungeons & Dragons.',
    caseStudy: {
        overview: { title: 'Finding the next encounter.', paragraphs: ['Choosing an encounter is part of preparing a Dungeons & Dragons session. For this school project, I built a library where people can browse encounters, inspect the details and save ideas for later.', 'The project combines that familiar subject with the practical work of building a complete web application: accounts, forms, saved favourites, permissions and deployment.'] },
        features: {
            title: 'From browsing to saving an idea.',
            lead: 'Visitors can explore the library without an account. Signing in adds personal favourites and access to the features for contributing encounters.',
            items: [
                { title: 'Find an encounter', body: 'Search by title or description, then filter by type and difficulty to narrow down the active encounters.' },
                { title: 'Explore the details', body: 'Open an encounter to read more. Popular encounters and optional images provide other starting points for exploring the library.' },
                { title: 'Keep ideas for later', body: 'Save favourites to your account so you can return to encounters while preparing a session.' }
            ]
        },
        details: {
            title: 'Taking part in the library.',
            paragraphs: ['Users can register, manage their account settings and maintain the encounters they have created. Creating an encounter becomes available after saving five favourites, making that requirement part of the contribution flow.', 'Authorization separates user and administrator actions and checks which encounters a user is allowed to manage.'],
            columns: [
                { title: 'Account and contributions', body: 'Users can manage their account and maintain the encounters they have created.' },
                { title: 'Access and ownership', body: 'Authorization separates user and administrator actions and checks which encounters a user is allowed to manage.' }
            ]
        },
        highlight: {
            title: 'More than a collection of pages.',
            paragraphs: ['I built the application with Laravel, PHP, Blade and Livewire, using Eloquent to work with an SQLite database.', 'Beyond the interface, the project includes automated tests, static analysis and a manually deployed production environment. It gave me practice connecting the visible parts of an application to its data, access rules and release process.']
        }
    },
    closing: {
        title: 'Explore the encounter library.',
        paragraphs: ['Browse the published project to explore the encounters and see how the library works.'],
        cta: 'Visit D&D Encounter Library'
    }
} satisfies ProjectContent;
