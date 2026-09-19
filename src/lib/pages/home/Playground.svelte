<script lang="ts">
    import { url } from '$lib/utils/url';
    import Icon from '$lib/components/icon/Icon.svelte';
    import { copy } from '$lib/i18n';

    const icons = ['experiment', 'prototype', 'idea'] as const;
</script>

<section class="section" aria-labelledby="playground-title">
    <header class="section__header">
        <p class="section__eyebrow">{$copy.home.playgroundSection.eyebrow}</p>
        <h2 class="section__title" id="playground-title">{$copy.home.playgroundSection.title}</h2>
        <p class="section__lead">{$copy.home.playgroundSection.lead}</p>
    </header>
    <div class="grid grid--3">
        {#each $copy.home.playgroundSection.categories as category, index}
            <article class="card">
                <Icon name={icons[index]} />
                <span class="card__number">0{index + 1}</span>
                <p class="card__meta">{category}</p>
                <h3 class="card__title">{$copy.home.playgroundSection.titles[index]}</h3>
                <p class="card__text">{$copy.home.playgroundSection.texts[index]}</p>
                <a class="text-link" href={url('/playground')}>{$copy.home.playgroundSection.links[index]}<span aria-hidden="true">→</span></a>
            </article>
        {/each}
    </div>
    <div class="section__footer"><a class="text-link" href={url('/playground')}>{$copy.home.playgroundSection.enter}<span aria-hidden="true">→</span></a></div>
</section>
