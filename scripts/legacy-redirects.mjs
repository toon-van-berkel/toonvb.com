export const legacyRedirects = [
    { path: 'en-gb', target: '/', locale: 'en' },
    { path: 'nl-nl', target: '/', locale: 'nl' },
    { path: 'en-gb/About', target: '/about/' },
    { path: 'en-gb/Contact', target: '/contact/' },
    { path: 'en-gb/Projects', target: '/projects/' },
    { path: 'en-gb/Research', target: '/research/' },
    { path: 'en-gb/Playground', target: '/playground/' },
    { path: 'en-gb/Vacations/Mallorca-2026', target: '/about/travel/mallorca-2026/' }
];

if (import.meta.url === `file://${process.argv[1]?.replaceAll('\\', '/')}`) {
    const { mkdir, writeFile } = await import('node:fs/promises');
    const { dirname, resolve } = await import('node:path');
    const root = resolve(new URL('..', import.meta.url).pathname);
    const template = (target, locale) => `<script lang="ts">\n    import LegacyRedirect from '$lib/components/navigation/LegacyRedirect.svelte';\n</script>\n\n<LegacyRedirect target="${target}"${locale ? ` locale="${locale}"` : ''} />\n`;
    for (const redirect of legacyRedirects) {
        const file = resolve(root, 'src/routes', redirect.path, '+page.svelte');
        await mkdir(dirname(file), { recursive: true });
        await writeFile(file, template(redirect.target, redirect.locale), 'utf8');
    }
}
