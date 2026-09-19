export type Locale = 'en' | 'nl';

export type Copy = {
	common: {
	language: string;
	close: string;
	open: string;
	};
	navigation: {
		[key: string]: any;
	projects: string;
	research: string;
	about: string;
	playground: string;
	contact: string;
	};
	footer: { [key: string]: any };
	researchPage: any;
	projectsPage: any;
	playgroundPage: any;
	home: {
		[key: string]: any;
	approach: { eyebrow: string; title: string; lead: string };
	principles: Array<{ title: string; text: string; link: string; href: string }>;
	};
};

export type HomeCopy = Copy['home'];
