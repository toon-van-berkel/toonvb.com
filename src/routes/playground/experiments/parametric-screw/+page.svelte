<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import Icon from '$lib/components/icon/Icon.svelte';
    import { locale } from '$lib/i18n';
    import ScrewViewer from '$lib/pages/playground/screw/ScrewViewer.svelte';
    import { page as en } from '$lib/pages/playground/screw/screw-en';
    import { page as nl } from '$lib/pages/playground/screw/screw-nl';

    const pages = { en, nl } as const;
    const exampleParameters = [
        ['Shaft length', '34 mm'], ['Shaft diameter', '8 mm'], ['Thread pitch', '3.2 mm'], ['Head diameter', '14 mm'], ['Head height', '6 mm']
    ];
</script>

<svelte:head>
    <title>{pages[$locale].title} | Toon van Berkel</title>
    <meta name="description" content={pages[$locale].intro} />
</svelte:head>

<main>
    <section class="section screw-page" data-page-header>
        <SectionHeader pageHeader eyebrow="Playground experiment" title={pages[$locale].title} lead={pages[$locale].intro} />
        <div class="screw-page__layout">
            <div><ScrewViewer labels={pages[$locale]} /></div>
            <aside class="screw-page__details">
                <p class="screw-page__note">{pages[$locale].modelNote}</p>
                <div class="screw-page__downloads">
                    <a href="/playground/screw/screw.scad" download>Download screw.scad</a>
                    <a href="/playground/screw/screw.stl" download>Download screw.stl</a>
                </div>
                <h2>{pages[$locale].parameters}</h2>
                <dl>{#each exampleParameters as parameter}<div><dt>{parameter[0]}</dt><dd>{parameter[1]}</dd></div>{/each}</dl>
                <ul class="screw-page__tags">{#each pages[$locale].tags as tag, index}<li><Icon name={index === 0 ? 'experiment' : index === 1 ? 'prototype' : 'developer'} variant="tag" />{tag}</li>{/each}</ul>
                <a class="screw-page__back" href="/playground">← {pages[$locale].back}</a>
            </aside>
        </div>
    </section>
</main>

<style>
    .screw-page__layout { display: grid; grid-template-columns: minmax(0, 1.65fr) minmax(260px, .75fr); gap: 32px; margin-top: 48px; }
    .screw-page__details { padding: 24px; border-radius: 15px; background: rgba(42,76,123,.08); }
    .screw-page__note { margin: 0 0 18px; line-height: 1.6; }
    .screw-page__downloads { display: flex; flex-direction: column; gap: 8px; margin: 24px 0 30px; }
    .screw-page__downloads a, .screw-page__back { color: var(--color-primary); font-weight: 600; }
    .screw-page__details h2 { margin: 0 0 12px; font-size: 1.25rem; }
    .screw-page__details dl { margin: 0; }
    .screw-page__details dl div { display: flex; justify-content: space-between; gap: 16px; padding: 8px 0; border-bottom: 1px solid rgba(42,76,123,.15); }
    .screw-page__details dt { color: var(--color-pale-slate); }
    .screw-page__details dd { margin: 0; font-weight: 600; }
    .screw-page__tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 26px 0; padding: 0; list-style: none; }
    .screw-page__tags li { display: inline-flex; align-items: center; gap: 6px; padding: 6px 9px; border: 1px solid rgba(42,76,123,.25); border-radius: 999px; font-size: .8rem; }
    .screw-page__tags :global(.icon) { width: 14px; height: 14px; color: var(--color-primary); }
    @media (max-width: 850px) { .screw-page__layout { grid-template-columns: 1fr; gap: 24px; margin-top: 32px; } }
</style>
