<script lang="ts">
    let {
        eyebrow,
        title,
        lead,
        id,
        banner = false
    }: {
        eyebrow: string;
        title: string;
        lead?: string;
        id?: string;
        banner?: boolean;
    } = $props();
</script>

<header class:section__header--no-banner={!banner} class="section__header">
    <p class="section__eyebrow">{eyebrow}</p>

    <h2 class="section__title" id={id}>
        {title}
    </h2>

    {#if lead}
        <p class="section__lead">{lead}</p>
    {/if}
</header>
