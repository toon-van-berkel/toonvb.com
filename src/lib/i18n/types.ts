export type Locale = 'en' | 'nl';

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
	};
	home: {
	approach: { eyebrow: string; title: string; lead: string };
	principles: Array<{ title: string; text: string; link: string; href: string }>;
	};
};

export type HomeCopy = Copy['home'];
