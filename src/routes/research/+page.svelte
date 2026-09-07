<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import { research } from '$lib/content/research';
    import { url } from '$lib/utils/url';
</script>
<svelte:head><title>Research | Toon van Berkel</title><meta name="description" content="Research into visual design, usability, performance and accessibility by Toon van Berkel." /></svelte:head>
<main><section class="section">
    <SectionHeader eyebrow="Research and reasoning" title="I like knowing why something works." lead="Research gives me a way to move beyond assumptions. I use it to understand what should be built and why." />
    <div class="grid grid--2">{#each research as item, index}<article class="card"><span class="card__number">0{index + 1}</span><p class="card__meta">{item.type}</p><h2 class="card__title">{item.title}</h2><p class="card__text">{item.description}</p></article>{/each}</div>
</section></main>
