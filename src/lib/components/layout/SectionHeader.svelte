<script lang="ts">
	let { eyebrow, title, lead, id, pageHeader = false }: { eyebrow: string; title: string; lead?: string; id?: string; pageHeader?: boolean } = $props();
</script>

<header class="section__header" data-page-header={pageHeader ? '' : undefined}>
	<p class="section__eyebrow">{eyebrow}</p>
	<h2 class="section__title" id={id}>{title}</h2>
	{#if lead}<p class="section__lead">{lead}</p>{/if}
</header>


