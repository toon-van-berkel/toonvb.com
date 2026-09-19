<script lang="ts">
    import { url } from '$lib/utils/url';
    import type { Project } from '$lib/content/projects';
    import { locale } from '$lib/i18n';
    import { projectsPage } from '$lib/i18n/pages/projects';

    let { project, index, reverse = false }: { project: Project; index: number; reverse?: boolean } = $props();
</script>

<article class:split--reverse={reverse} class="panel split">
    <div class="stack">
        <div class="logo-mark">
            <img src={url(project.logo)} alt={project.title + ' logo'} />
        </div>
        <span class="number" aria-hidden="true">0{index}</span>
        <p class="card__meta">{project.type} · {project.status}</p>
        <h2 class="title">{project.title}</h2>
        <p class="description">{project.summary}</p>
        <ul class="tags" aria-label={projectsPage[$locale].technologies}>
            {#each project.technologies as technology}<li><span>{technology}</span></li>{/each}
        </ul>
        <ul class="links">
            <li><a class="text-link" href={url('/projects/' + project.slug)}>{projectsPage[$locale].story} <span aria-hidden="true">→</span></a></li>
            {#if project.external}<li><a class="text-link" href={project.external} target="_blank" rel="noopener noreferrer">{projectsPage[$locale].visit} <span aria-hidden="true">↗</span></a></li>{/if}
        </ul>
    </div>
    <figure class="media">
        <img src={url(project.image)} alt={projectsPage[$locale].screenshot + ' ' + project.title} />
    </figure>
</article>
