<script lang="ts">
	import './Icon.scss';

	export type IconName =
		| 'visual' | 'usability' | 'performance' | 'accessibility'
		| 'sustainability' | 'experiment' | 'prototype' | 'idea'
		| 'developer' | 'designer' | 'researcher' | 'overcomplicator'
		| 'ts' | 'sv' | 'personal' | 'web' | 'responsive' | 'client';

	let {
		name,
		variant = 'card',
		decorative = true
	}: { name: IconName; variant?: 'card' | 'tag'; decorative?: boolean } = $props();
</script>

<span class="icon icon--{variant} icon--{name}" aria-hidden={decorative} role={decorative ? undefined : 'img'}></span>
