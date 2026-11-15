<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import ProjectIntro from '$lib/components/projects/ProjectIntro.svelte';
    import Icon from '$lib/components/icon/Icon.svelte';
    import { locale } from '$lib/i18n';
    import { getProject, getProjectMetadata } from '$lib/pages/projects/lookup';
    import { projectUi } from '$lib/pages/projects/ui';
    import SeoHead from '$lib/components/seo/SeoHead.svelte';
    let { data } = $props();

    const project = $derived(getProject(data.slug, $locale));
    const metadata = $derived(getProjectMetadata(data.slug, $locale));
</script>

{#if metadata}<SeoHead metadata={metadata} path={'/projects/' + data.slug + '/'} />{/if}

{#if project}
<main>
    {#if project.dndPortal}
        {@const detail = project.dndPortal}
        <ProjectIntro project={project} locale={$locale} intro={detail.intro} />

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
    <ProjectIntro project={project} locale={$locale} intro={project.intro} />

    {#if project.caseStudy}
        {@const caseStudy = project.caseStudy}
        <section class="section project-case-study__section">
            <header class="project-case-study__header"><h2 class="section__title">{caseStudy.overview.title}</h2></header>
            {#each caseStudy.overview.paragraphs as paragraph}<p class="description">{paragraph}</p>{/each}
        </section>
        <section class="section project-case-study__section">
            <header class="project-case-study__header"><h2 class="section__title">{caseStudy.features.title}</h2></header>
            <p class="description">{caseStudy.features.lead}</p>
            <div class="project-case-study__features">
                {#each caseStudy.features.items as feature}
                    <article><h3>{feature.title}</h3><p class="description">{feature.body}</p></article>
                {/each}
            </div>
        </section>
        {#if caseStudy.details}
            <section class="section project-case-study__section">
                <header class="project-case-study__header"><h2 class="section__title">{caseStudy.details.title}</h2></header>
                {#each caseStudy.details.paragraphs as paragraph}<p class="description">{paragraph}</p>{/each}
                {#if caseStudy.details.columns}
                    <div class="project-case-study__features project-case-study__features--two">
                        {#each caseStudy.details.columns as detail}<article><h3>{detail.title}</h3><p class="description">{detail.body}</p></article>{/each}
                    </div>
                {/if}
            </section>
        {/if}
        <section class="section project-case-study__highlight">
            <header class="project-case-study__header"><h2 class="section__title">{caseStudy.highlight.title}</h2></header>
            {#each caseStudy.highlight.paragraphs as paragraph}<p class="description">{paragraph}</p>{/each}
        </section>
    {:else if project.sections}
        {#each project.sections as section}
            <section class="section">
                <SectionHeader eyebrow={projectUi[$locale].notes} title={section.title} />
                {#each section.body.split('\n\n') as paragraph}<p class="description">{paragraph}</p>{/each}
            </section>
        {/each}
    {/if}
    {#if project.closing}
        <section class="section project-page__closing">
            <header class="project-case-study__header"><h2 class="section__title">{project.closing.title}</h2></header>
            {#each project.closing.paragraphs as paragraph}<p class="description">{paragraph}</p>{/each}
            {#if project.external}<a class="hero__cta hero__cta--primary" href={project.external} target="_blank" rel="noopener noreferrer">{project.closing.cta} <span aria-hidden="true">↗</span></a>{/if}
        </section>
    {/if}
    {/if}
</main>
{/if}

<style>
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
    .project-page__closing { padding-bottom: 64px; }
    .project-case-study__section { padding-block: 42px; }
    .project-case-study__header { margin-bottom: 20px; }
    .project-case-study__section :global(.section__title), .project-case-study__highlight :global(.section__title) { max-width: none; font-size: clamp(2rem, 4vw, 3.5rem); }
    .project-case-study__section .description, .project-case-study__highlight .description { max-width: 900px; margin: 0 0 18px; }
    .project-case-study__features { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; margin-top: 28px; }
    .project-case-study__features article { padding-top: 18px; border-top: 1px solid rgba(81, 103, 141, 0.25); }
    .project-case-study__features--two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .project-case-study__features h3 { margin: 0 0 10px; color: var(--color-dark); }
    .project-case-study__highlight { padding: 36px; border-radius: 16px; background: rgba(81, 103, 141, 0.1); }
    @media (max-width: 800px) {
        .dnd-page__section { padding-block: 30px; }
        .dnd-page__features, .dnd-page__comparison { grid-template-columns: 1fr; }
        .dnd-page__accent { padding: 24px; }
        .project-case-study__section { padding-block: 30px; }
        .project-case-study__features { grid-template-columns: 1fr; }
        .project-case-study__highlight { padding: 24px; }
    }
</style>
