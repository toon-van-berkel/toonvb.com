<script lang="ts">
	import '$lib/scss/style.scss';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
    import Footer from '$lib/components/footer/Footer.svelte';
    import Breadcrumbs from '$lib/components/navigation/Breadcrumbs.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href='/favicon.svg' />
</svelte:head>

<Navbar />
<div class="route-shell">
    <Breadcrumbs />
    {@render children()}
</div>
<Footer />

<style>
    :global(.route-shell > main) {
        padding-top: 24px;
    }

    :global(.route-shell > main > [data-handles-navbar-offset]) {
        padding-top: 24px;
    }
</style>
