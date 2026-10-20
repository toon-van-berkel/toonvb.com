export type Locale = 'en' | 'nl';
import type { HomeCopy } from '$lib/types/page';

export type SearchCopy = {
	dialogTitle: string;
	placeholder: string;
	suggestions: string;
	noResults: string;
	clear: string;
	open: string;
	close: string;
	page: string;
	project: string;
	research: string;
	resultCount: (count: number) => string;
};

export type Copy = {
	common: {
	language: string;
	close: string;
	open: string;
	};
	navigation: {
	projects: string;
	research: string;
	about: string;
	playground: string;
	contact: string;
	projectsMenu: {
		all: string;
		web: string;
		applications: string;
		games: string;
		school: string;
	};
	};
	home: HomeCopy;
	search: SearchCopy;
};
