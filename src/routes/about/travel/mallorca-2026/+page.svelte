<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import { locale } from '$lib/i18n';
    import SeoHead from '$lib/components/seo/SeoHead.svelte';
    import { metadata as metadataEn } from '$lib/pages/about/travel/mallorca-2026-en.meta';
    import { metadata as metadataNl } from '$lib/pages/about/travel/mallorca-2026-nl.meta';

    const content = {
        en: {
            title: 'Mallorca 2026',
            intro: 'Places I visited, walks I took and moments from my trip to Mallorca.',
            notice: 'This map is still being refined. Some routes and locations may not be plotted accurately yet.'
        },
        nl: {
            title: 'Mallorca 2026',
            intro: 'Plekken die ik bezocht, wandelingen die ik maakte en momenten van mijn reis naar Mallorca.',
            notice: 'Deze kaart wordt nog verbeterd. Sommige routes en locaties zijn nog niet helemaal nauwkeurig ingetekend.'
        }
    } as const;
    const metadata = { en: metadataEn, nl: metadataNl } as const;
</script>

<SeoHead metadata={metadata[$locale]} path="/about/travel/mallorca-2026/" />

<main>
    <section class="section mallorca-page" data-page-header>
        <SectionHeader pageHeader eyebrow="Travel" title={content[$locale].title} lead={content[$locale].intro} />
        <div class="mallorca-page__notice" role="note">
            <p>{content[$locale].notice}</p>
        </div>
    </section>
</main>

<style>
    .mallorca-page__notice {
        max-width: 720px;
        margin-top: 40px;
        padding: 18px 20px;
        border-left: 3px solid var(--color-primary);
        background: rgba(42, 76, 123, 0.08);
        color: var(--color-baltic-blue);
    }

    .mallorca-page__notice p { margin: 0; line-height: 1.6; }

    @media (max-width: 700px) {
        .mallorca-page__notice { margin-top: 28px; padding: 16px; }
    }
</style>
