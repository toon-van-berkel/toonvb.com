<script lang="ts">
    import { onMount } from 'svelte';

    let { target, locale }: { target: string; locale?: 'en' | 'nl' } = $props();

    onMount(() => {
        if (locale) localStorage.setItem('locale', locale);
        window.location.replace(`${target}${window.location.search}${window.location.hash}`);
    });
</script>

<svelte:head>
    <link rel="canonical" href={`https://toonvb.com${target}`} />
    <meta http-equiv="refresh" content={`0;url=${target}`} />
</svelte:head>

<main class="legacy-redirect">
    <p>This page has moved. <a href={target}>Continue to the new page</a>.</p>
</main>

<style>
    .legacy-redirect {
        padding: 3rem 1.25rem;
        text-align: center;
    }
</style>
