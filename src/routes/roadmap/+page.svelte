<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import { roadmap } from '$lib/content/roadmap';
</script>
<svelte:head><title>Roadmap | Toon van Berkel</title></svelte:head>
<main><section class="section"><SectionHeader eyebrow="Still to build" title="A sensible plan, with room for detours." lead="The portfolio is deliberately unfinished. These are the improvements currently worth making next." /><ul class="flow">{#each roadmap as item}<li>{item}</li>{/each}</ul></section></main>
