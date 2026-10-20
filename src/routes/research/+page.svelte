<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import Icon, { type IconName } from '$lib/components/icon/Icon.svelte';
    import { locale } from '$lib/i18n';
    import { page as researchEn } from '$lib/pages/research/research-en';
    import { page as researchNl } from '$lib/pages/research/research-nl';
    import { metadata as metadataEn } from '$lib/pages/research/research-en.meta';
    import { metadata as metadataNl } from '$lib/pages/research/research-nl.meta';
    import { getResearchTopics } from '$lib/pages/research/lookup';
    import { researchUi } from '$lib/pages/research/ui';
    import { url } from '$lib/utils/url';

    const pages = { en: researchEn, nl: researchNl } as const;
    const metadata = { en: metadataEn, nl: metadataNl } as const;
    const topics = $derived(getResearchTopics($locale, pages[$locale].topicOrder));
    const visibleImpact = $derived({
        title: researchUi[$locale].visibleImpactTitle,
        description: researchUi[$locale].visibleImpactDescription,
        href: '/research/visible-impact'
    });

    function iconForTopic(slug: string): IconName {
        if (slug === 'visual-design') return 'designer';
        if (slug === 'usability') return 'usability';
        if (slug === 'web-performance') return 'performance';
        return 'accessibility';
    }
</script>

<svelte:head><title>{metadata[$locale].title}</title><meta name="description" content={metadata[$locale].description} /></svelte:head>

<main><section class="section research-overview" data-page-header>
    <SectionHeader pageHeader eyebrow={pages[$locale].header.eyebrow ?? ''} title={pages[$locale].header.title} lead={pages[$locale].header.description} />

    <section class="research-overview__section" aria-labelledby="research-cases-title">
        <header class="research-overview__section-header">
            <p class="section__eyebrow">{researchUi[$locale].research}</p>
            <h2 id="research-cases-title">{researchUi[$locale].visibleImpactTitle}</h2>
        </header>
        <div class="research-overview__cases">
            <a class="research-case" href={url(visibleImpact.href)}>
                <div class="research-case__body"><p class="research-case__meta">{researchUi[$locale].research}</p><h3>{visibleImpact.title}</h3><p>{visibleImpact.description}</p><span>{researchUi[$locale].exploreResearch} <span aria-hidden="true">→</span></span></div>
            </a>
        </div>
    </section>

    <section class="research-overview__section research-overview__topics" aria-labelledby="research-topics-title">
        <header class="research-overview__section-header">
            <p class="section__eyebrow">{researchUi[$locale].topics}</p>
            <h2 id="research-topics-title">{researchUi[$locale].topics}</h2>
        </header>
        <div class="research-topic-grid">
            {#each topics as item (item.slug)}
                <article class="research-topic">
                    <Icon name={iconForTopic(item.slug)} variant="tag" />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </article>
            {/each}
        </div>
    </section>
</section></main>

<style>
    .research-overview__section { margin-top: 48px; }
    .research-overview__section-header { margin-bottom: 20px; }
    .research-overview__section-header h2 { max-width: none; margin: 0; color: var(--color-dark); font-size: clamp(2rem, 4vw, 3.5rem); line-height: 1; letter-spacing: -.04em; }
    .research-overview__cases { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; align-items: start; }
    .research-case { display: block; min-width: 0; border: 1px solid rgba(42,76,123,.18); border-radius: 15px; background: var(--color-baltic-blue); color: var(--color-light); text-decoration: none; transition: transform 180ms ease, box-shadow 180ms ease; }
    .research-case:hover { transform: translateY(-3px); box-shadow: 0 14px 28px rgba(9,20,34,.14); }
    .research-case:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 4px; }
    .research-case__body { display: flex; min-height: 210px; flex-direction: column; padding: 24px; }
    .research-case__meta { margin: 0 0 8px; color: rgba(247,248,248,.72); font-size: .78rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; }
    .research-case h3 { margin: 0 0 10px; color: var(--color-light); font-size: clamp(1.5rem, 2vw, 1.75rem); }
    .research-case p:not(.research-case__meta) { margin: 0; color: rgba(247,248,248,.82); font-size: 1rem; line-height: 1.5; }
    .research-case span:last-child { display: inline-flex; gap: 8px; margin-top: auto; padding-top: 22px; color: var(--color-light); font-weight: 600; }
    .research-topic-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px; align-items: stretch; }
    .research-topic { display: flex; min-width: 0; flex-direction: column; padding: 24px; border: 1px solid rgba(42,76,123,.18); border-radius: 15px; background: var(--color-baltic-blue); color: var(--color-light); }
    .research-topic :global(.icon) { width: 30px; height: 30px; margin-bottom: 18px; color: var(--color-primary-hover); }
    .research-topic h3 { margin: 0 0 8px; color: var(--color-light); font-size: 1.5rem; line-height: 1.1; }
    .research-topic p { margin: 0; color: rgba(247,248,248,.82); font-size: 1rem; line-height: 1.5; }
    @media (max-width: 1100px) { .research-topic-grid, .research-overview__cases { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 800px) { .research-overview__section { margin-top: 36px; } .research-topic-grid, .research-overview__cases { grid-template-columns: 1fr; } .research-case__body, .research-topic { padding: 20px; } }
    @media (prefers-reduced-motion: reduce) { .research-case { transition: none; } .research-case:hover { transform: none; } }
</style>
