<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import { projects } from '$lib/content/projects';
    import { url } from '$lib/utils/url';
</script>
<svelte:head><title>Projects | Toon van Berkel</title><meta name="description" content="Projects, platforms and experiments built by Toon van Berkel." /></svelte:head>
<main><section class="section">
    <SectionHeader eyebrow="Selected work" title="Things I've built, broken and rebuilt." lead="Projects are where design, development and experimentation come together. Some started as small ideas that grew considerably beyond their original scope." />
    <div class="grid grid--2">{#each projects as project, index}<article class="card"><span class="card__number">0{index + 1}</span><p class="card__meta">{project.type} · {project.status}</p><h2 class="card__title">{project.title}</h2><p class="card__text">{project.summary}</p><ul class="tags">{#each project.technologies as technology}<li><span>{technology}</span></li>{/each}</ul><a class="text-link" href={url('/projects/' + project.slug)}>Read the story <span aria-hidden="true">→</span></a></article>{/each}</div>
</section></main>
