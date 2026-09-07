<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import { locale } from '$lib/i18n';
    import { about } from '$lib/i18n/pages/about';
</script>

<svelte:head><title>About | Toon van Berkel</title></svelte:head>

<main>
    <section class="section">
        <SectionHeader eyebrow={about[$locale].eyebrow} title={about[$locale].title} lead={about[$locale].lead} />
        <div class="stack">
            {#each about[$locale].paragraphs as paragraph}
                <p class="description">{paragraph}</p>
            {/each}
            <ul class="tags" aria-label="Roles and interests">
                {#each about[$locale].tags as tag}<li><a href="/about">{tag}</a></li>{/each}
            </ul>
        </div>
    </section>
</main>
