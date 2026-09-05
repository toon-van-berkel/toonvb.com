<script lang="ts">
	import '$lib/scss/style.scss';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href='/favicon.svg' />
</svelte:head>

<Navbar />
{@render children()}
<Footer />
