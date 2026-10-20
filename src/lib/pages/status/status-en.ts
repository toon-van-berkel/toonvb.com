import type { StatusPageCopy } from '$lib/types/status-page';

export const statusCopy = {
    underConstruction: {
        label: 'WORK IN PROGRESS',
        title: 'Still building this part.',
        description: 'This website is still taking shape. There’s no content here yet, but this page may be added in a future update. In the meantime, feel free to explore what’s already here.',
        homeCta: 'Back to home',
        projectsCta: 'Explore projects'
    },
    notFound: {
        label: '404 — PAGE NOT FOUND',
        title: 'Nothing here. Yet?',
        description: 'We couldn’t find this page. The website is still growing, so some pages may appear later. You can head back home or explore the projects already online.',
        homeCta: 'Back to home',
        projectsCta: 'Explore projects'
    }
} satisfies Record<'underConstruction' | 'notFound', StatusPageCopy>;
