<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import { changelog } from '$lib/content/changelog';
</script>
<svelte:head><title>Changelog | Toon van Berkel</title></svelte:head>
<main><section class="section"><SectionHeader eyebrow="An evolving portfolio" title="The site is part of the work." lead="Toonvb.com is a live project. This is where I keep track of changes that make it clearer, more useful and easier to maintain." /><div class="stack">{#each changelog as entry}<article class="panel"><time datetime={entry.date}>{entry.date}</time><h2 class="title">{entry.title}</h2><p class="description">{entry.description}</p></article>{/each}</div></section></main>
