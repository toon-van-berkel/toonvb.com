<script lang="ts">
    import StatusPage from '$lib/components/status/StatusPage.svelte';
    import { locale } from '$lib/i18n';
</script>

<StatusPage mode="under-construction" />

<p class="travel-link">
    <a href="/about/travel/mallorca-2026">{ $locale === 'nl' ? 'Bekijk Mallorca 2026' : 'View Mallorca 2026' } →</a>
</p>

<style>
    .travel-link { max-width: 720px; margin: -24px auto 48px; padding: 0 24px; text-align: center; }
    .travel-link a { color: var(--color-primary); font-weight: 600; }
</style>
