<script lang="ts">
    import Card from '$lib/components/cards/Card.svelte';
    import { copy, locale } from '$lib/i18n';
    import { getResearchTopics } from '$lib/pages/research/lookup';
    import { reveal } from '$lib/utils/reveal';

    const sharedTopics = $derived(getResearchTopics($locale, ['visual-design', 'usability']));
    const sharedTopicCards = $derived(sharedTopics.map((topic) => topic.slug));
</script>

<section use:reveal class="section" aria-labelledby="research-title">
    <header class="section__header">
        <p class="section__eyebrow">{$copy.home.research.eyebrow}</p>

        <h2 class="section__title" id="research-title">
            {$copy.home.research.title}
        </h2>

        <p class="section__lead">
            {$copy.home.research.lead}
        </p>
    </header>

    <div class="grid grid--3">
        <!-- 01 -->
        <Card
            number="01"
            icon="sustainability"
            meta={$copy.home.research.sustainability.meta}
            title={$copy.home.research.sustainability.title}
            text={$copy.home.research.sustainability.text}
        />

        {#each sharedTopicCards as slug, index}
            <Card
                number={'0' + (index + 2)}
                icon={index === 0 ? 'visual' : 'usability'}
                meta={slug === 'visual-design' ? $copy.home.research.visualDesign.meta : $copy.home.research.usability.meta}
                title={slug === 'visual-design' ? $copy.home.research.visualDesign.title : $copy.home.research.usability.title}
                text={slug === 'visual-design' ? $copy.home.research.visualDesign.text : $copy.home.research.usability.text}
            >
            </Card>
        {/each}
    </div>

    <div class="section__footer">
        <a class="text-link" href="/research">
            {$copy.home.research.viewAll} →
        </a>
    </div>
</section>
