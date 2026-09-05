<script lang="ts">
    import SectionHeader from '$lib/components/SectionHeader.svelte';
    import PrincipleGrid from '$lib/components/PrincipleGrid.svelte';
    import { copy } from '$lib/i18n';
</script>

<section class="section" aria-labelledby="design-principles-title">
    <SectionHeader {...$copy.home.approach} id="design-principles-title" />
    <PrincipleGrid principles={$copy.home.principles} />
</section>
