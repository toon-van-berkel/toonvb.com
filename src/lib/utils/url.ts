import { base } from '$app/paths';

/**
 * Creates a URL that respects the SvelteKit base path.
 *
 * Useful when the website is hosted from a subdirectory,
 * such as GitHub Pages.
 */
export function url(path: string): string {
    // Leave external and special URLs untouched
    if (
        path.startsWith('http://') ||
        path.startsWith('https://') ||
        path.startsWith('mailto:') ||
        path.startsWith('tel:') ||
        path.startsWith('#')
    ) {
        return path;
    }

    // Make sure internal paths always start with /
    const normalizedPath = path.startsWith('/')
        ? path
        : `/${path}`;

    return `${base}${normalizedPath}`;
}