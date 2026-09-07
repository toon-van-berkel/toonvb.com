<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import { url } from '$lib/utils/url';
    let { data } = $props();
</script>

<svelte:head>
    <title>{data.project.title} | Projects | Toon van Berkel</title>
    <meta name="description" content={data.project.summary} />
</svelte:head>

<main>
    <section class="section">
        <SectionHeader eyebrow={data.project.type} title={data.project.title} lead={data.project.summary} />
        <div class="split">
            <div class="stack">
                <p class="description"><strong>Status:</strong> {data.project.status}</p>
                <ul class="tags" aria-label="Technologies">
                    {#each data.project.technologies as technology}<li><span>{technology}</span></li>{/each}
                </ul>
                {#if data.project.external}
                    <a class="text-link" href={data.project.external} target="_blank" rel="noopener noreferrer">Visit project <span aria-hidden="true">↗</span></a>
                {/if}
            </div>
            <figure class="media">
                <img src={url(data.project.image)} alt={'Screenshot of ' + data.project.title} />
            </figure>
        </div>
    </section>

    {#if data.project.sections}
        {#each data.project.sections as section}
            <section class="section">
                <SectionHeader eyebrow="Project notes" title={section.title} />
                <p class="description">{section.body}</p>
            </section>
        {/each}
    {/if}
</main>
