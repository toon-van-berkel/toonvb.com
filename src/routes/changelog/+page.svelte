<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import { locale } from '$lib/i18n';
    import { page as changelogEn } from '$lib/pages/changelog/changelog-en';
    import { page as changelogNl } from '$lib/pages/changelog/changelog-nl';
    import { metadata as metadataEn } from '$lib/pages/changelog/changelog-en.meta';
    import { metadata as metadataNl } from '$lib/pages/changelog/changelog-nl.meta';

    const pages = { en: changelogEn, nl: changelogNl } as const;
    const metadata = { en: metadataEn, nl: metadataNl } as const;
</script>
<svelte:head><title>{metadata[$locale].title}</title><meta name="description" content={metadata[$locale].description} /></svelte:head>
<main><section class="section"><SectionHeader pageHeader eyebrow="An evolving portfolio" title="The site is part of the work." lead="Toonvb.com is a live project. This is where I keep track of changes that make it clearer, more useful and easier to maintain." /><div class="stack">{#each pages[$locale].entries as entry}<article class="panel"><time datetime={entry.date}>{entry.date}</time><h2 class="title">{entry.title}</h2><p class="description">{entry.description}</p></article>{/each}</div></section></main>
