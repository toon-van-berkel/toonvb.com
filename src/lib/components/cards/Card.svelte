<script lang="ts">
    import type { Snippet } from 'svelte';
    import Icon, { type IconName } from '$lib/components/icon/Icon.svelte';

    let {
        number,
        meta,
        title,
        text,
        icon,
        href,
        linkLabel,
        children
    }: {
        number?: string;
        meta?: string;
        title: string;
        text?: string;
        icon?: IconName;
        href?: string;
        linkLabel?: string;
        children?: Snippet;
    } = $props();
</script>

<article class="card" class:card--interactive={Boolean(href)}>
    {#if icon}
        <Icon name={icon} />
    {/if}

    {#if number}
        <span class="card__number" aria-hidden="true">{number}</span>
    {/if}

    {#if meta}
        <p class="card__meta">{meta}</p>
    {/if}

    <h2 class="card__title">{title}</h2>

    {#if text}
        <p class="card__text">{text}</p>
    {/if}

    {#if children}
        {@render children()}
    {/if}

    {#if href && linkLabel}
        <a class="text-link" href={href}>{linkLabel}<span aria-hidden="true">→</span></a>
    {/if}
</article>
