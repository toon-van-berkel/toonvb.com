export const search = {
	en: {
		dialogTitle: 'Search this website',
		placeholder: 'Search pages, projects and research…',
		suggestions: 'Suggested pages',
		noResults: 'No pages found. Try a different search.',
		clear: 'Clear search',
		open: 'Open search',
		close: 'Close search',
		page: 'Page',
		project: 'Project',
		research: 'Research',
		resultCount: (count: number) => `${count} ${count === 1 ? 'result' : 'results'}`
	},
	nl: {
		dialogTitle: 'Doorzoek deze website',
		placeholder: 'Zoek pagina’s, projecten en onderzoeken…',
		suggestions: 'Voorgestelde pagina’s',
		noResults: 'Geen pagina’s gevonden. Probeer een andere zoekterm.',
		clear: 'Zoekopdracht wissen',
		open: 'Zoeken openen',
		close: 'Zoeken sluiten',
		page: 'Pagina',
		project: 'Project',
		research: 'Onderzoek',
		resultCount: (count: number) => `${count} ${count === 1 ? 'resultaat' : 'resultaten'}`
	}
} as const;
