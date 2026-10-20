<script lang="ts">
    import { page } from '$app/state';
    import StatusPage from '$lib/components/status/StatusPage.svelte';

    const isNotFound = $derived(page.status === 404);
</script>

{#if isNotFound}
    <StatusPage mode="not-found" />
{:else}
    <main class="section" data-page-header>
        <p class="section__eyebrow">{page.status}</p>
        <h1 class="section__title">{page.error?.message ?? 'Something went wrong.'}</h1>
    </main>
{/if}
