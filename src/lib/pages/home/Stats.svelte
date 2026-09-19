<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import { copy } from '$lib/i18n';

    const values = ['3+', '950K+', '16', '5', '9', '3', '9+'];
</script>

<section class="section" aria-labelledby="stats-title">
    <SectionHeader {...$copy.home.stats} id="stats-title" />
    <div class="stats">
        {#each values as value, index}
            <div class="stat">
                <strong class="stat__value">{value}</strong>
                <span class="stat__label">{$copy.home.stats.labels[index]}</span>
            </div>
        {/each}
    </div>
</section>
