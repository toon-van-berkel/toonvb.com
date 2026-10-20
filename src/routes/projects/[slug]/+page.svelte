<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import Icon from '$lib/components/icon/Icon.svelte';
    import { locale } from '$lib/i18n';
    import { getProject, getProjectMetadata } from '$lib/pages/projects/lookup';
    import { projectUi } from '$lib/pages/projects/ui';
    import { url } from '$lib/utils/url';
    let { data } = $props();

    const project = $derived(getProject(data.slug, $locale));
    const metadata = $derived(getProjectMetadata(data.slug, $locale));
</script>

<svelte:head>
    {#if metadata}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {#if metadata.image}<meta property="og:image" content={url(metadata.image)} />{/if}
    {/if}
</svelte:head>

{#if project}
<main>
    {#if project.dndPortal}
        {@const detail = project.dndPortal}
        <section class="section dnd-page__intro" data-page-header>
            <div class="dnd-page__intro-header">
                <p class="section__eyebrow">{project.type}</p>
                <h1 class="section__title">{project.title}</h1>
                <p class="section__lead">{project.summary}</p>
                <p class="dnd-page__status"><strong>{projectUi[$locale].status}:</strong> {project.status}</p>
                <ul class="tags dnd-page__technology-tags" aria-label={projectUi[$locale].technologies}>
                    {#each project.technologies as technology}
                        <li>
                            {#if technology === 'SvelteKit'}<Icon name="sv" variant="tag" />{:else if technology === 'TypeScript'}<Icon name="ts" variant="tag" />{/if}
                            <span>{technology}</span>
                        </li>
                    {/each}
                </ul>
                {#if project.external}<a class="text-link" href={project.external} target="_blank" rel="noopener noreferrer">{projectUi[$locale].visit} <span aria-hidden="true">↗</span></a>{/if}
            </div>
            <div class="dnd-page__intro-copy">
                {#each detail.intro as paragraph}<p class="description">{paragraph}</p>{/each}
            </div>
            <figure class="dnd-page__hero-media">
                <img src={url(project.image)} alt={projectUi[$locale].screenshotOf + ' ' + project.title} />
            </figure>
        </section>

        <section class="section dnd-page__section">
            <header class="section__header"><h2 class="section__title">{detail.origin.title}</h2></header>
            {#each detail.origin.paragraphs as paragraph}<p class="description">{paragraph}</p>{/each}
        </section>

        <section class="section dnd-page__section">
            <header class="section__header"><h2 class="section__title">{detail.reference.title}</h2></header>
            {#each detail.reference.paragraphs as paragraph}<p class="description">{paragraph}</p>{/each}
            <div class="dnd-page__features">
                {#each detail.reference.features as feature}
                    <div class="dnd-page__feature"><Icon name={feature.icon} variant="tag" /><span>{feature.title}</span></div>
                {/each}
            </div>
        </section>

        <section class="section dnd-page__section">
            <header class="section__header"><h2 class="section__title">{detail.design.title}</h2></header>
            {#each detail.design.paragraphs as paragraph}<p class="description">{paragraph}</p>{/each}
        </section>

        <section class="section dnd-page__section">
            <header class="section__header"><h2 class="section__title">{detail.comparison.title}</h2></header>
            <div class="dnd-page__comparison">
                <article><h3>{detail.comparison.wiki.title}</h3><p class="description">{detail.comparison.wiki.body}</p></article>
                <article><h3>{detail.comparison.playerPortal.title}</h3><p class="description">{detail.comparison.playerPortal.body}</p></article>
            </div>
            <p class="description">{detail.comparison.closing}</p>
        </section>

        <section class="section dnd-page__section dnd-page__accent">
            <header class="section__header"><h2 class="section__title">{detail.accessibility.title}</h2></header>
            {#each detail.accessibility.paragraphs as paragraph}<p class="description">{paragraph}</p>{/each}
            <a class="text-link" href="/contact">{projectUi[$locale].contact} <span aria-hidden="true">→</span></a>
        </section>

        <section class="section dnd-page__section dnd-page__closing">
            <header class="section__header"><h2 class="section__title">{detail.closing.title}</h2></header>
            {#each detail.closing.paragraphs as paragraph}<p class="description">{paragraph}</p>{/each}
            <div class="dnd-page__stats">
                {#each detail.closing.stats as stat}<div><strong>{stat.value}</strong><span>{stat.label}</span></div>{/each}
            </div>
            <div class="dnd-page__actions">
                {#if project.external}<a class="hero__cta hero__cta--primary" href={project.external} target="_blank" rel="noopener noreferrer">{detail.ctas.primary} <span aria-hidden="true">↗</span></a>{/if}
                <a class="hero__cta hero__cta--secondary" href="/contact">{detail.ctas.secondary} <span aria-hidden="true">→</span></a>
            </div>
        </section>
    {:else}
    <section class="section">
        <SectionHeader pageHeader eyebrow={project.type} title={project.title} lead={project.summary} />
        <div class="split">
            <div class="stack">
                <p class="description"><strong>{projectUi[$locale].status}:</strong> {project.status}</p>
                <ul class="tags" aria-label={projectUi[$locale].technologies}>
                    {#each project.technologies as technology}<li><span>{technology}</span></li>{/each}
                </ul>
                {#if project.external}
                    <a class="text-link" href={project.external} target="_blank" rel="noopener noreferrer">{projectUi[$locale].visit} <span aria-hidden="true">↗</span></a>
                {/if}
            </div>
            <figure class="media">
                <img src={url(project.image)} alt={projectUi[$locale].screenshotOf + ' ' + project.title} />
            </figure>
        </div>
    </section>

    {#if project.sections}
        {#each project.sections as section}
            <section class="section">
                <SectionHeader eyebrow={projectUi[$locale].notes} title={section.title} />
                <p class="description">{section.body}</p>
            </section>
        {/each}
    {/if}
    {/if}
</main>
{/if}

<style>
    .dnd-page__intro-header { width: 100%; }
    .dnd-page__intro { display: grid; grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr); column-gap: 32px; align-items: start; }
    .dnd-page__intro-header, .dnd-page__intro-copy { grid-column: 1; }
    .dnd-page__intro-copy { grid-row: 2; }
    .dnd-page__hero-media { grid-column: 2; grid-row: 1 / span 2; align-self: start; }
    .dnd-page__status { margin: 24px 0 14px; color: var(--color-baltic-blue); }
    .dnd-page__intro .text-link { margin-top: 20px; }
    .dnd-page__intro-copy { max-width: 900px; margin-top: 28px; }
    .dnd-page__intro-copy .description { margin: 0 0 18px; }
    .dnd-page__hero-media { margin: 0; }
    .dnd-page__hero-media img { display: block; width: 100%; height: auto; border-radius: var(--radius, 16px); }
    .dnd-page__section { padding-block: 42px; }
    .dnd-page__section :global(.section__title) { max-width: none; font-size: clamp(2rem, 4vw, 3.5rem); }
    .dnd-page__section .description { max-width: 900px; margin: 0 0 18px; }
    .dnd-page__features { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; margin-top: 28px; }
    .dnd-page__feature { display: flex; align-items: center; gap: 10px; padding: 16px; border-top: 1px solid rgba(81, 103, 141, 0.25); color: var(--color-dusk-blue); }
    .dnd-page__comparison { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; margin: 28px 0; }
    .dnd-page__comparison article { padding-top: 18px; border-top: 1px solid rgba(81, 103, 141, 0.25); }
    .dnd-page__comparison h3 { margin: 0 0 10px; color: var(--color-dark); }
    .dnd-page__accent { padding: 36px; border-radius: 16px; background: rgba(81, 103, 141, 0.1); }
    .dnd-page__accent .text-link { margin-top: 12px; }
    .dnd-page__stats { display: flex; flex-wrap: wrap; gap: 36px; margin: 30px 0; }
    .dnd-page__stats div { display: flex; flex-direction: column; gap: 4px; }
    .dnd-page__stats strong { font-size: clamp(2rem, 4vw, 2.75rem); line-height: 1; color: var(--color-dark); }
    .dnd-page__stats span { color: var(--color-baltic-blue); }
    .dnd-page__actions { display: flex; flex-wrap: wrap; gap: 12px; }
    .dnd-page__technology-tags { gap: 8px; }
    .dnd-page__technology-tags li { display: inline-flex; align-items: center; gap: 6px; padding: 6px 10px; border-radius: 999px; background: rgba(81, 103, 141, 0.1); color: var(--color-dusk-blue); font-size: 0.8rem; font-weight: 500; }
    @media (max-width: 800px) {
        .dnd-page__intro { grid-template-columns: 1fr; row-gap: 28px; }
        .dnd-page__intro-header, .dnd-page__intro-copy, .dnd-page__hero-media { grid-column: 1; grid-row: auto; }
        .dnd-page__hero-media { margin-top: 0; }
        .dnd-page__section { padding-block: 30px; }
        .dnd-page__features, .dnd-page__comparison { grid-template-columns: 1fr; }
        .dnd-page__accent { padding: 24px; }
    }
</style>
