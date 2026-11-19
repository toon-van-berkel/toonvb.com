<script lang="ts">
	import './Icon.scss';

	export type IconName =
		| 'visual' | 'usability' | 'performance' | 'accessibility'
		| 'sustainability' | 'experiment' | 'prototype' | 'idea'
		| 'developer' | 'designer' | 'researcher' | 'overcomplicator'
		| 'ts' | 'sv' | 'personal' | 'web' | 'responsive' | 'client'
		| 'javascript' | 'php' | 'laravel' | 'html' | 'css' | 'scss'
		| 'git' | 'github' | 'sqlite'
		| 'hat-wizard' | 'scouting-nederland' | 'first-aid' | 'hogeschool-rotterdam'
		| 'chevron-left' | 'chevron-right';

	let {
		name,
		variant = 'card',
		decorative = true
	}: { name: IconName; variant?: 'card' | 'tag' | 'action'; decorative?: boolean } = $props();
</script>

<span class="icon icon--{variant} icon--{name}" aria-hidden={decorative} role={decorative ? undefined : 'img'}></span>
