<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import { locale } from '$lib/i18n';
    import { page as roadmapEn } from '$lib/pages/roadmap/roadmap-en';
    import { page as roadmapNl } from '$lib/pages/roadmap/roadmap-nl';
    import { metadata as metadataEn } from '$lib/pages/roadmap/roadmap-en.meta';
    import { metadata as metadataNl } from '$lib/pages/roadmap/roadmap-nl.meta';
    import SeoHead from '$lib/components/seo/SeoHead.svelte';

    const pages = { en: roadmapEn, nl: roadmapNl } as const;
    const metadata = { en: metadataEn, nl: metadataNl } as const;
</script>
<SeoHead metadata={metadata[$locale]} path="/roadmap/" />
<main><section class="section"><SectionHeader pageHeader eyebrow="Still to build" title="A sensible plan, with room for detours." lead="The portfolio is deliberately unfinished. These are the improvements currently worth making next." /><ul class="flow">{#each pages[$locale].items as item}<li>{item}</li>{/each}</ul></section></main>
