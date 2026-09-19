<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import ProjectShowcase from '$lib/components/projects/ProjectShowcase.svelte';
    import { projects } from '$lib/content/projects';
    import { locale } from '$lib/i18n';
    import { projectsPage } from '$lib/i18n/pages/projects';
</script>

<svelte:head>
    <title>{projectsPage[$locale].eyebrow} — Toon van Berkel</title>
    <meta name="description" content={projectsPage[$locale].lead} />
</svelte:head>

<main>
    <section class="section">
        <SectionHeader eyebrow={projectsPage[$locale].eyebrow} title={projectsPage[$locale].title} lead={projectsPage[$locale].lead} />
        <div class="showcase">
            {#each projects as project, index}
                <ProjectShowcase {project} index={index + 1} reverse={index % 2 === 1} />
            {/each}
        </div>
    </section>

    <section class="section">
        <SectionHeader eyebrow={projectsPage[$locale].otherEyebrow} title={projectsPage[$locale].playgroundTitle} />
        <a class="text-link" href="/playground">{projectsPage[$locale].playgroundLink} <span aria-hidden="true">→</span></a>
    </section>
</main>
