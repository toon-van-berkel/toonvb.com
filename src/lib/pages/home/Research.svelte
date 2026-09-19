<script lang="ts">
    import { url } from '$lib/utils/url';
    import Icon from '$lib/components/icon/Icon.svelte';
    import { copy } from '$lib/i18n';

    const icons = ['sustainability', 'visual', 'usability'] as const;
</script>

<section class="section" aria-labelledby="research-title">
    <header class="section__header">
        <p class="section__eyebrow">{$copy.home.researchSection.eyebrow}</p>
        <h2 class="section__title" id="research-title">{$copy.home.researchSection.title}</h2>
        <p class="section__lead">{$copy.home.researchSection.lead}</p>
    </header>
    <div class="grid grid--3">
        {#each $copy.home.researchSection.titles as title, index}
            <article class="card">
                <Icon name={icons[index]} />
                <span class="card__number">0{index + 1}</span>
                <p class="card__meta">{$copy.home.researchSection.meta[index]}</p>
                <h3 class="card__title">{title}</h3>
                <p class="card__text">{$copy.home.researchSection.texts[index]}</p>
                <a class="text-link" href={url('/research')}>{$copy.home.researchSection.read}<span aria-hidden="true">→</span></a>
            </article>
        {/each}
    </div>
    <div class="section__footer"><a class="text-link" href={url('/research')}>{$copy.home.researchSection.all}<span aria-hidden="true">→</span></a></div>
</section>
