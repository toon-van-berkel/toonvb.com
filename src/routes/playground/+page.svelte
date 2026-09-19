<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import { locale } from '$lib/i18n';
    import { playgroundPage } from '$lib/i18n/pages/playground';
</script>

<svelte:head><title>{playgroundPage[$locale].eyebrow} — Toon van Berkel</title><meta name="description" content={playgroundPage[$locale].lead} /></svelte:head>

<main><section class="section">
    <SectionHeader eyebrow={playgroundPage[$locale].eyebrow} title={playgroundPage[$locale].title} lead={playgroundPage[$locale].lead} />
    <div class="showcase">
        {#each playgroundPage[$locale].categories as category, index}
            <article class="split panel">
                <div class="stack"><span class="number" aria-hidden="true">0{index + 1}</span><p class="card__meta">{playgroundPage[$locale].status}</p><h2 class="title">{category}</h2></div>
                <p class="description">{playgroundPage[$locale].lead}</p>
            </article>
        {/each}
    </div>
</section></main>
