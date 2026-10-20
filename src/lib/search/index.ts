import type { Locale } from '$lib/types/locale';
import { getProjects } from '$lib/pages/projects/lookup';
import { page as projectsEn } from '$lib/pages/projects/projects-en';
import { page as projectsNl } from '$lib/pages/projects/projects-nl';
import { page as researchEn } from '$lib/pages/research/research-en';
import { page as researchNl } from '$lib/pages/research/research-nl';
import { getResearchTopics } from '$lib/pages/research/lookup';
import { page as aboutEn } from '$lib/pages/about/about-en';
import { page as aboutNl } from '$lib/pages/about/about-nl';
import { page as contactEn } from '$lib/pages/contact/contact-en';
import { page as contactNl } from '$lib/pages/contact/contact-nl';
import { page as playgroundEn } from '$lib/pages/playground/playground-en';
import { page as playgroundNl } from '$lib/pages/playground/playground-nl';

export type SearchResultType = 'Page' | 'Project' | 'Research';

export interface SearchEntry {
	id: string;
	href: string;
	title: string;
	description: string;
	type: SearchResultType;
	keywords: readonly string[];
}

const normalize = (value: string) =>
	value
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.replace(/\s+/g, ' ')
		.trim();

function pageEntries(locale: Locale): SearchEntry[] {
	const about = locale === 'en' ? aboutEn : aboutNl;
	const contact = locale === 'en' ? contactEn : contactNl;
	const projects = locale === 'en' ? projectsEn : projectsNl;
	const research = locale === 'en' ? researchEn : researchNl;

	return [
		{ id: 'home', href: '/', title: 'Home', description: 'Toon van Berkel portfolio website.', type: 'Page', keywords: ['start', 'portfolio'] },
		{ id: 'about', href: '/about', title: about.header.title, description: about.header.description ?? '', type: 'Page', keywords: ['about', 'over mij', 'toon'] },
		{ id: 'contact', href: '/contact', title: contact.header.title, description: contact.header.description ?? '', type: 'Page', keywords: ['contact', 'website laten maken', 'conversation'] },
		{ id: 'projects', href: '/projects', title: projects.header.title, description: projects.header.description ?? '', type: 'Page', keywords: ['projects', 'projecten', 'work'] },
		{ id: 'research', href: '/research', title: research.header.title, description: research.header.description ?? '', type: 'Research', keywords: ['research', 'onderzoek', 'topics'] },
		{ id: 'playground', href: '/playground', title: 'Playground', description: 'Experiments and prototypes.', type: 'Page', keywords: ['playground', 'experiments', 'prototypes'] },
		...((locale === 'en' ? playgroundEn : playgroundNl).items.filter((item) => item.href).map((item) => ({ id: 'parametric-screw', href: item.href!, title: item.title, description: item.description, type: 'Page' as const, keywords: ['screw', 'schroef', 'openscad', '3d', 'parametric', 'parametrisch'] }))),
		{ id: 'mallorca-2026', href: '/about/travel/mallorca-2026', title: 'Mallorca 2026', description: locale === 'en' ? 'Places visited, walks taken and moments from a trip to Mallorca.' : 'Plekken, wandelingen en momenten van een reis naar Mallorca.', type: 'Page', keywords: ['mallorca', 'travel', 'vakantie', 'spain', 'majorca'] },
		{ id: 'changelog', href: '/changelog', title: 'Changelog', description: 'Recent website updates.', type: 'Page', keywords: ['updates', 'release notes'] },
		{ id: 'roadmap', href: '/roadmap', title: 'Roadmap', description: 'What is coming next.', type: 'Page', keywords: ['future', 'planning'] }
	];
}

export function getSearchEntries(locale: Locale): readonly SearchEntry[] {
	const projects = locale === 'en' ? projectsEn : projectsNl;
	const projectEntries = getProjects(locale, projects.projectOrder).map((project) => ({
		id: `project-${project.slug}`,
		href: `/projects/${project.slug}`,
		title: project.title,
		description: project.summary,
		type: 'Project' as const,
		keywords: [...project.technologies, project.type, project.slug, ...(project.slug === 'dnd-portal' ? ['DND', 'D&D', 'Dungeons and Dragons'] : [])]
	}));

	const research = locale === 'en' ? researchEn : researchNl;
	const topicEntries = getResearchTopics(locale, research.topicOrder).map((topic) => ({
		id: `topic-${topic.slug}`,
		href: '/research',
		title: topic.title,
		description: topic.description,
		type: 'Research' as const,
		keywords: [topic.slug, 'research', 'onderzoek']
	}));

	return [...pageEntries(locale), ...projectEntries, ...topicEntries];
}

export function getSearchSuggestions(locale: Locale): readonly SearchEntry[] {
	return getSearchEntries(locale).filter((entry) => ['home', 'projects', 'research', 'about', 'contact'].includes(entry.id));
}

export function getSearchResults(locale: Locale, query: string): readonly SearchEntry[] {
	const normalizedQuery = normalize(query);
	if (!normalizedQuery) return getSearchSuggestions(locale);

	const terms = normalizedQuery.split(' ');
	return getSearchEntries(locale)
		.map((entry) => {
			const title = normalize(entry.title);
			const description = normalize(entry.description);
			const keywords = entry.keywords.map(normalize);
			const searchable = [title, description, ...keywords];
			if (!terms.every((term) => searchable.some((field) => field.includes(term)))) return null;

			let score = 0;
			for (const term of terms) {
				if (title === term) score += 1000;
				else if (title.startsWith(term)) score += 700;
				else if (title.includes(term)) score += 500;
				else if (keywords.some((keyword) => keyword === term)) score += 300;
				else score += 150;
			}
			return { entry, score };
		})
		.filter((item): item is { entry: SearchEntry; score: number } => item !== null)
		.sort((a, b) => b.score - a.score)
		.slice(0, 8)
		.map(({ entry }) => entry);
}
