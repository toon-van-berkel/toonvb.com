import type { Locale } from '$lib/types/locale';
import { getProject } from '$lib/pages/projects/lookup';

export type BreadcrumbItem = { href: string; label: string };

const labels = {
    en: {
        home: 'Home', about: 'About', cv: 'CV', interests: 'Interests', anime: 'Anime', games: 'Games', music: 'Music', photography: 'Photography', travel: 'Travel', mallorca: 'Mallorca 2026', contact: 'Contact', accessibility: 'Accessibility', changelog: 'Changelog', cookies: 'Cookies', privacy: 'Privacy', roadmap: 'Roadmap', terms: 'Terms', playground: 'Playground', experiments: 'Experiments', screw: 'Parametric screw', projects: 'Projects', applications: 'Applications & Tools', web: 'Web', school: 'School projects', research: 'Research', visibleImpact: 'Visible Impact'
    },
    nl: {
        home: 'Home', about: 'Over mij', cv: 'CV', interests: 'Interesses', anime: 'Anime', games: 'Games', music: 'Muziek', photography: 'Fotografie', travel: 'Reizen', mallorca: 'Mallorca 2026', contact: 'Contact', accessibility: 'Toegankelijkheid', changelog: 'Changelog', cookies: 'Cookies', privacy: 'Privacy', roadmap: 'Roadmap', terms: 'Voorwaarden', playground: 'Playground', experiments: 'Experimenten', screw: 'Parametrische schroef', projects: 'Projecten', applications: 'Applicaties & tools', web: 'Web', school: 'Schoolprojecten', research: 'Onderzoek', visibleImpact: 'Visible Impact'
    }
} as const satisfies Record<Locale, Record<string, string>>;

const staticRoutes: Record<string, keyof typeof labels.en> = {
    '/about': 'about', '/about/cv': 'cv', '/about/interests': 'interests', '/about/interests/anime': 'anime', '/about/interests/games': 'games', '/about/interests/music': 'music', '/about/photography': 'photography', '/about/travel': 'travel', '/about/travel/mallorca-2026': 'mallorca', '/contact': 'contact', '/accessibility': 'accessibility', '/changelog': 'changelog', '/cookies': 'cookies', '/privacy': 'privacy', '/roadmap': 'roadmap', '/terms': 'terms', '/playground': 'playground', '/playground/experiments': 'experiments', '/playground/experiments/parametric-screw': 'screw', '/projects': 'projects', '/projects/applications': 'applications', '/projects/games': 'games', '/projects/school': 'school', '/projects/web': 'web', '/research': 'research', '/research/visible-impact': 'visibleImpact'
};

function cleanPath(pathname: string) {
    const path = pathname.replace(/\/+$/, '');
    return path || '/';
}

export function resolveBreadcrumbs(pathname: string, locale: Locale): readonly BreadcrumbItem[] {
    const path = cleanPath(pathname);
    if (path === '/') return [{ href: '/', label: labels[locale].home }];

    const result: BreadcrumbItem[] = [{ href: '/', label: labels[locale].home }];
    const segments = path.split('/').filter(Boolean);
    let current = '';
    for (const segment of segments) {
        current += `/${segment}`;
        if (staticRoutes[current]) {
            result.push({ href: current, label: labels[locale][staticRoutes[current]] });
            continue;
        }
        if (current.startsWith('/projects/')) {
            const project = getProject(segment, locale);
            if (project) result.push({ href: current, label: project.title });
            else if (current === path) result.push({ href: current, label: segment.replace(/[-_]/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase()) });
            continue;
        }
        if (current === path) result.push({ href: current, label: segment.replace(/[-_]/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase()) });
    }
    return result;
}

export function getBreadcrumbFallback(pathname: string, locale: Locale): string {
    const segments = cleanPath(pathname).split('/').filter(Boolean);
    return segments.length ? (resolveBreadcrumbs(pathname, locale).at(-1)?.label ?? segments.at(-1)!) : labels[locale].home;
}
