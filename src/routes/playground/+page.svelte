<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import Icon, { type IconName } from '$lib/components/icon/Icon.svelte';
    import { locale } from '$lib/i18n';
    import { page as playgroundEn } from '$lib/pages/playground/playground-en';
    import { page as playgroundNl } from '$lib/pages/playground/playground-nl';
    import { metadata as metadataEn } from '$lib/pages/playground/playground-en.meta';
    import { metadata as metadataNl } from '$lib/pages/playground/playground-nl.meta';

    const pages = { en: playgroundEn, nl: playgroundNl } as const;
    const metadata = { en: metadataEn, nl: metadataNl } as const;
    const iconByTitle: Record<string, IconName> = {
        Experiments: 'experiment',
        Prototypes: 'prototype',
        'Weird ideas': 'idea',
        'Small tools': 'developer'
    };
    const hasExperiment = (item: typeof pages.en.items[number]) => Boolean(item.href);
</script>

<svelte:head><title>{metadata[$locale].title}</title><meta name="description" content={metadata[$locale].description} /></svelte:head>

<main><section class="section playground-overview" data-page-header>
    <SectionHeader pageHeader eyebrow="The playground" title="Things that exist because I wanted to know if they could." lead="Projects are work polished enough to present. The playground is where ideas get tested, stretched and occasionally overcomplicated." />

    <div class="playground-grid">
        {#each pages[$locale].items as item (item.title)}
            <svelte:element this={item.href ? 'a' : 'article'} class:playground-card--interactive={Boolean(item.href)} class="playground-card" href={item.href}>
                <Icon name={iconByTitle[item.title] ?? 'idea'} variant="tag" />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                {#if item.tags}<ul class="playground-tags">{#each item.tags as tag}<li><Icon name={tag.icon} variant="tag" />{tag.label}</li>{/each}</ul>{/if}
                {#if item.href}<span class="playground-card__link">{ $locale === 'nl' ? (item.image ? 'Bekijk experiment' : 'Bekijk experimenten') : (item.image ? 'View experiment' : 'View experiments') } →</span>{/if}
            </svelte:element>
        {/each}
    </div>

    {#if !pages[$locale].items.some(hasExperiment)}<p class="playground-empty-message">{pages[$locale].emptyMessage}</p>{/if}
</section></main>

<style>
    .playground-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px; align-items: stretch; margin-top: 48px; }
    .playground-card { display: flex; min-width: 0; flex-direction: column; padding: 24px; border: 1px solid rgba(42,76,123,.18); border-radius: 15px; background: var(--color-baltic-blue); color: var(--color-light); }
    .playground-card :global(.icon) { width: 30px; height: 30px; margin-bottom: 18px; color: var(--color-primary-hover); }
    .playground-card h2 { margin: 0 0 8px; color: var(--color-light); font-size: 1.5rem; line-height: 1.1; }
    .playground-card p { margin: 0; color: rgba(247,248,248,.82); font-size: 1rem; line-height: 1.5; }
    .playground-card--interactive { color: inherit; text-decoration: none; transition: transform 180ms ease, background-color 180ms ease; }
    .playground-card--interactive:hover, .playground-card--interactive:focus-visible { transform: translateY(-4px); background: var(--color-dusk-blue); outline: 3px solid var(--color-primary); outline-offset: 3px; }
    .playground-tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0 0; padding: 0; list-style: none; }
    .playground-tags li { display: inline-flex; align-items: center; gap: 6px; padding: 5px 8px; border: 1px solid rgba(247,248,248,.25); border-radius: 999px; color: rgba(247,248,248,.86); font-size: .78rem; }
    .playground-tags :global(.icon) { width: 13px; height: 13px; margin: 0; color: var(--color-primary-hover); }
    .playground-card__link { display: block; margin-top: auto; padding-top: 22px; color: var(--color-primary-hover); font-weight: 600; }
    .playground-empty-message { max-width: 760px; margin: 32px 0 0; color: var(--color-baltic-blue); font-size: 1rem; line-height: 1.6; }
    @media (max-width: 1100px) { .playground-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 800px) { .playground-grid { grid-template-columns: 1fr; gap: 16px; margin-top: 36px; } .playground-card { padding: 20px; } }
</style>
