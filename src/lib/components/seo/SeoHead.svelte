<script lang="ts">
    import type { PageMetadata } from '$lib/types/metadata';
    import { url } from '$lib/utils/url';

    let { metadata, path, noindex }: { metadata: PageMetadata; path: string; noindex?: boolean } = $props();
    const canonical = $derived(`https://toonvb.com${path.endsWith('/') ? path : `${path}/`}`);
    const locale = $derived(metadata.locale === 'nl' ? 'nl_NL' : 'en_US');
    const shouldNoindex = $derived(noindex ?? metadata.noindex ?? false);
</script>

<svelte:head>
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
    <link rel="canonical" href={canonical} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonical} />
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:locale" content={locale} />
    {#if metadata.image}<meta property="og:image" content={url(metadata.image)} />{/if}
    <meta name="twitter:card" content={metadata.image ? 'summary_large_image' : 'summary'} />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:description" content={metadata.description} />
    {#if metadata.image}<meta name="twitter:image" content={url(metadata.image)} />{/if}
    {#if shouldNoindex}<meta name="robots" content="noindex, follow" />{/if}
</svelte:head>
