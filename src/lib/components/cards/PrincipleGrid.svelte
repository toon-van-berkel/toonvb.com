<script lang="ts">
	import type { Copy } from '$lib/i18n/types';
	import Card from '$lib/components/cards/Card.svelte';
	let { principles }: { principles: Copy['home']['principles'] } = $props();
</script>

<div class="grid grid--4">
	{#each principles as principle, index}
		{@const destination = principle.href ?? (principle.researchSlug ? '/research' : undefined)}
		<Card
			number={String(index + 1).padStart(2, '0')}
			icon={['visual', 'usability', 'performance', 'accessibility'][index] as 'visual' | 'usability' | 'performance' | 'accessibility'}
			title={principle.title}
			text={principle.text}
			href={destination}
			linkLabel={principle.link}
		/>
	{/each}
</div>

