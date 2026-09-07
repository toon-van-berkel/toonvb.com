<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import { playground } from '$lib/content/playground';
    import { url } from '$lib/utils/url';
</script>
<svelte:head><title>Playground | Toon van Berkel</title><meta name="description" content="Experiments, prototypes, weird ideas and small tools by Toon van Berkel." /></svelte:head>
<main><section class="section">
    <SectionHeader eyebrow="The playground" title="Things that exist because I wanted to know if they could." lead="Projects are work polished enough to present. The playground is where ideas get tested, stretched and occasionally overcomplicated." />
    <div class="grid grid--2">{#each playground as item, index}<article class="card"><span class="card__number">0{index + 1}</span><p class="card__meta">{item.status}</p><h2 class="card__title">{item.title}</h2><p class="card__text">{item.description}</p></article>{/each}</div>
</section></main>
