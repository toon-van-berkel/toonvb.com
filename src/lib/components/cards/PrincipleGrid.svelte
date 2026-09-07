<script lang="ts">
	import type { Copy } from '$lib/i18n/types';
	import Icon from '$lib/components/icon/Icon.svelte';
	let { principles }: { principles: Copy['home']['principles'] } = $props();
</script>

<div class="grid grid--4">
	{#each principles as principle, index}
		<article class="card">
			<Icon name={['visual', 'usability', 'performance', 'accessibility'][index] as 'visual' | 'usability' | 'performance' | 'accessibility'} />
			<span class="card__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
			<h3 class="card__title">{principle.title}</h3>
			<p class="card__text">{principle.text}</p>
			<a class="text-link" href={principle.href}>{principle.link}<span aria-hidden="true">→</span></a>
		</article>
	{/each}
</div>

