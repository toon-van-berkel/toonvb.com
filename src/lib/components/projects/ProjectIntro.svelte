<script lang="ts">
    import Icon from '$lib/components/icon/Icon.svelte';
    import type { Locale } from '$lib/types/locale';
    import type { ProjectDefinition } from '$lib/types/project';
    import { projectUi } from '$lib/pages/projects/ui';
    import { url } from '$lib/utils/url';

    let { project, locale, intro = [] }: { project: ProjectDefinition; locale: Locale; intro?: readonly string[] } = $props();

    const iconForTechnology = (technology: string) => technology === 'SvelteKit' ? 'sv' : technology === 'TypeScript' ? 'ts' : technology === 'Web development' ? 'web' : technology === 'Responsive design' ? 'responsive' : undefined;
</script>

<section class="section dnd-page__intro" data-page-header>
    <div class="dnd-page__intro-header">
        <p class="section__eyebrow">{project.type}</p>
        <h1 class="section__title">{project.title}</h1>
        <p class="section__lead">{project.summary}</p>
        <p class="dnd-page__status"><strong>{projectUi[locale].status}:</strong> {project.status}</p>
        <ul class="tags dnd-page__technology-tags" aria-label={projectUi[locale].technologies}>
            {#each project.technologies as technology}
                {@const tagIcon = iconForTechnology(technology)}
                <li>
                    {#if tagIcon}<Icon name={tagIcon} variant="tag" />{/if}
                    <span>{technology}</span>
                </li>
            {/each}
        </ul>
        {#if project.external}<a class="text-link" href={project.external} target="_blank" rel="noopener noreferrer">{projectUi[locale].visit} <span aria-hidden="true">↗</span></a>{/if}
    </div>
    {#if intro.length}
        <div class="dnd-page__intro-copy">
            {#each intro as paragraph}<p class="description">{paragraph}</p>{/each}
        </div>
    {/if}
    <figure class="dnd-page__hero-media">
        <img src={url(project.image)} alt={projectUi[locale].screenshotOf + ' ' + project.title} />
    </figure>
</section>

<style>
    .dnd-page__intro { display: grid; grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr); column-gap: 32px; align-items: start; }
    .dnd-page__intro-header, .dnd-page__intro-copy { grid-column: 1; }
    .dnd-page__intro-copy { grid-row: 2; max-width: 900px; margin-top: 28px; }
    .dnd-page__intro-copy .description { margin: 0 0 18px; }
    .dnd-page__hero-media { grid-column: 2; grid-row: 1 / span 2; align-self: start; margin: 0; }
    .dnd-page__hero-media img { display: block; width: 100%; height: auto; border-radius: var(--radius, 16px); }
    .dnd-page__status { margin: 24px 0 14px; color: var(--color-baltic-blue); }
    .dnd-page__intro .text-link { margin-top: 20px; }
    .dnd-page__technology-tags { gap: 8px; }
    .dnd-page__technology-tags li { display: inline-flex; align-items: center; gap: 6px; padding: 6px 10px; border-radius: 999px; background: rgba(81, 103, 141, 0.1); color: var(--color-dusk-blue); font-size: 0.8rem; font-weight: 500; }
    @media (max-width: 800px) {
        .dnd-page__intro { grid-template-columns: 1fr; row-gap: 28px; }
        .dnd-page__intro-header, .dnd-page__intro-copy, .dnd-page__hero-media { grid-column: 1; grid-row: auto; }
        .dnd-page__intro-copy { margin-top: 0; }
    }
</style>
