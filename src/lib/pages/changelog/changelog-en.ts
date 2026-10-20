import type { ChangelogPageDefinition } from '$lib/types/page';

export const page = {
    entries: [
        { date: '2026-09-06', title: 'Portfolio structure reworked', description: 'The portfolio is being rebuilt around reusable Svelte components, maintainable SCSS modules and content that can grow with the site.' }
    ]
} satisfies ChangelogPageDefinition;
