<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import Icon from '$lib/components/icon/Icon.svelte';
    import { locale } from '$lib/i18n';
    import { page as playgroundEn } from '$lib/pages/playground/playground-en';
    import { page as playgroundNl } from '$lib/pages/playground/playground-nl';
    import { metadata as metadataEn } from '$lib/pages/playground/playground-en.meta';
    import { metadata as metadataNl } from '$lib/pages/playground/playground-nl.meta';
    import SeoHead from '$lib/components/seo/SeoHead.svelte';

    const pages = { en: playgroundEn, nl: playgroundNl } as const;
    const metadata = { en: metadataEn, nl: metadataNl } as const;
</script>

<SeoHead metadata={metadata[$locale]} path="/playground/" />

<main>
    <section class="section playground-overview" data-page-header>
        <SectionHeader pageHeader eyebrow="The playground" title="Things that exist because I wanted to know if they could." lead="Projects are work polished enough to present. The playground is where ideas get tested, stretched and occasionally overcomplicated." />

        <section class="playground-section" aria-labelledby="playground-categories-title">
            <SectionHeader eyebrow={$locale === 'nl' ? 'Categorieën' : 'Categories'} id="playground-categories-title" title={$locale === 'nl' ? 'Verken de playground' : 'Explore the playground'} lead={$locale === 'nl' ? 'Categorieën voor ideeën, experimenten en tools die hier een plek kunnen krijgen.' : 'Categories for ideas, experiments and tools that may find a place here.'} />
            <div class="playground-category-grid">
                {#each pages[$locale].categories as category (category.title)}
                    {#if category.href}
                        <a class="playground-category-card" href={category.href}>
                            <Icon name={category.icon ?? 'idea'} variant="tag" />
                            <span class="playground-card__status">{category.status}</span>
                            <h3>{category.title}</h3>
                            <p>{category.description}</p>
                        </a>
                    {:else}
                        <article class="playground-category-card">
                            <Icon name={category.icon ?? 'idea'} variant="tag" />
                            <span class="playground-card__status">{category.status}</span>
                            <h3>{category.title}</h3>
                            <p>{category.description}</p>
                        </article>
                    {/if}
                {/each}
            </div>
        </section>

        <section class="playground-section playground-creations" aria-labelledby="playground-creations-title">
            <SectionHeader eyebrow={pages[$locale].creationsHeader.eyebrow} id="playground-creations-title" title={pages[$locale].creationsHeader.title} lead={pages[$locale].creationsHeader.description} />
            <div class="playground-creation-grid">
                {#each pages[$locale].creations as creation (creation.title)}
                    {#if creation.href}
                        <a class="playground-creation-card" href={creation.href}>
                            {#if creation.image}<div class="playground-creation-card__preview"><img src={creation.image} alt={creation.imageAlt ?? ''} /></div>{/if}
                            <div class="playground-creation-card__body">
                                <span class="playground-card__status">{creation.status}</span>
                                <h3>{creation.title}</h3>
                                <p>{creation.description}</p>
                                {#if creation.tags}<ul class="playground-tags" aria-label="Tags">{#each creation.tags as tag}<li><Icon name={tag.icon} variant="tag" />{tag.label}</li>{/each}</ul>{/if}
                                <span class="playground-card__link">{$locale === 'nl' ? 'Bekijk experiment' : 'View experiment'} <span aria-hidden="true">↗</span></span>
                            </div>
                        </a>
                    {:else}
                        <article class="playground-creation-card playground-creation-card--upcoming">
                            <div class="playground-creation-card__body">
                                <span class="playground-card__status">{creation.status}</span>
                                <h3>{creation.title}</h3>
                                <p>{creation.description}</p>
                                {#if creation.tags}<ul class="playground-tags" aria-label="Tags">{#each creation.tags as tag}<li><Icon name={tag.icon} variant="tag" />{tag.label}</li>{/each}</ul>{/if}
                            </div>
                        </article>
                    {/if}
                {/each}
            </div>
        </section>
    </section>
</main>

<style>
    .playground-section { margin-top: 72px; }
    .playground-section :global(.section__title) { font-size: clamp(2rem, 4vw, 3.2rem); }
    .playground-category-grid, .playground-creation-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px; margin-top: 32px; align-items: stretch; }
    .playground-category-card { display: flex; min-width: 0; flex-direction: column; padding: 24px; border: 1px solid rgba(42,76,123,.18); border-radius: 15px; background: var(--color-baltic-blue); color: var(--color-light); }
    .playground-category-card :global(.icon) { width: 30px; height: 30px; margin-bottom: 18px; color: var(--color-primary-hover); }
    .playground-category-card h3, .playground-creation-card h3 { margin: 0 0 8px; color: var(--color-light); font-size: 1.5rem; line-height: 1.1; }
    .playground-category-card p, .playground-creation-card p { margin: 0; color: rgba(247,248,248,.82); font-size: 1rem; line-height: 1.5; }
    .playground-card__status { display: block; margin-bottom: 12px; color: var(--color-primary-hover); font-size: .78rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
    .playground-category-card[href], .playground-creation-card[href] { text-decoration: none; transition: transform 180ms ease, background-color 180ms ease; }
    .playground-category-card[href]:hover, .playground-category-card[href]:focus-visible, .playground-creation-card[href]:hover, .playground-creation-card[href]:focus-visible { transform: translateY(-4px); background: var(--color-dusk-blue); outline: 3px solid var(--color-primary); outline-offset: 3px; }
    .playground-creations { padding-top: 12px; border-top: 1px solid rgba(42,76,123,.18); }
    .playground-creation-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .playground-creation-card { display: flex; min-width: 0; flex-direction: column; overflow: hidden; border: 1px solid rgba(42,76,123,.18); border-radius: 15px; background: var(--color-baltic-blue); color: var(--color-light); }
    .playground-creation-card__preview { aspect-ratio: 2 / 1; padding: 20px; background: #172b46; }
    .playground-creation-card__preview img { display: block; width: 100%; height: 100%; object-fit: contain; }
    .playground-creation-card__body { display: flex; min-height: 260px; flex-direction: column; padding: 22px; }
    .playground-creation-card--upcoming .playground-creation-card__body { min-height: 0; }
    .playground-tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0 0; padding: 0; list-style: none; }
    .playground-tags li { display: inline-flex; align-items: center; gap: 6px; padding: 5px 8px; border: 1px solid rgba(247,248,248,.25); border-radius: 999px; color: rgba(247,248,248,.86); font-size: .78rem; }
    .playground-tags :global(.icon) { width: 13px; height: 13px; color: var(--color-primary-hover); }
    .playground-card__link { display: block; margin-top: auto; padding-top: 22px; color: var(--color-primary-hover); font-weight: 600; }
    @media (max-width: 1100px) { .playground-category-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } .playground-creation-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 800px) { .playground-section { margin-top: 52px; } .playground-category-grid, .playground-creation-grid { grid-template-columns: 1fr; gap: 16px; margin-top: 28px; } .playground-category-card, .playground-creation-card__body { padding: 20px; } }
    @media (prefers-reduced-motion: reduce) { .playground-category-card[href], .playground-creation-card[href] { transition: none; } }
</style>
