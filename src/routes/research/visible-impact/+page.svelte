<script lang="ts">
    import '$lib/components/research/VisibleImpact.scss';
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import InterviewInsight from '$lib/components/research/InterviewInsight.svelte';
    import { locale } from '$lib/i18n';
    import { researchVisibleImpact } from '$lib/i18n/pages/researchVisibleImpact';
    import { url } from '$lib/utils/url';

    const content = researchVisibleImpact;
</script>

<svelte:head>
    <title>{content[$locale].hero.title} — Toon van Berkel</title>
    <meta name="description" content={content[$locale].hero.lead} />
</svelte:head>

<main class="visible-impact-page">
    <section class="section">
        <SectionHeader eyebrow={content[$locale].hero.eyebrow} title={content[$locale].hero.title} lead={content[$locale].hero.lead} />
        <div class="visible-impact-meta">
            {#each content[$locale].hero.meta as item}<span>{item}</span>{/each}
        </div>
    </section>

    <section class="section">
        <article class="visible-impact-question">
            <p class="section__eyebrow">{content[$locale].question.eyebrow}</p>
            <h2>{content[$locale].question.title}</h2>
            {#each content[$locale].question.body as paragraph}<p class="description">{paragraph}</p>{/each}
        </article>
    </section>

    <section class="section">
        <SectionHeader eyebrow={content[$locale].goal.eyebrow} title={content[$locale].goal.title} />
        <div class="visible-impact-goals">
            {#each content[$locale].goal.items as item, index}
                <article class="visible-impact-goal"><span aria-hidden="true">0{index + 1}</span><h3>{item[0]}</h3><p class="description">{item[1]}</p></article>
            {/each}
        </div>
    </section>

    <section class="section">
        <article class="split visible-impact-prototype">
            <div class="stack"><p class="section__eyebrow">{content[$locale].prototype.eyebrow}</p><h2 class="title">{content[$locale].prototype.title}</h2>{#each content[$locale].prototype.body as paragraph}<p class="description">{paragraph}</p>{/each}</div>
            <figure class="media"><img src={url('/images/research/visible-impact/prototype.webp')} alt={content[$locale].prototype.alt} onerror={(event) => { (event.currentTarget as HTMLImageElement).hidden = true; }} /></figure>
        </article>
    </section>

    <section class="section">
        <SectionHeader eyebrow={content[$locale].method.eyebrow} title={content[$locale].method.title} />
        <div class="visible-impact-data">
            {#each content[$locale].method.items as item}<div class="visible-impact-data__item"><strong>{item[0]}</strong><span>{item[1]}</span></div>{/each}
        </div>
    </section>

    <section class="section">
        <SectionHeader eyebrow={content[$locale].participants.eyebrow} title={content[$locale].participants.title} />
        <div class="visible-impact-data">
            {#each content[$locale].participants.items as item}<div class="visible-impact-data__item"><strong>{item[0]}</strong><span>{item[1]}</span></div>{/each}
        </div>
    </section>

    <section class="section">
        <SectionHeader eyebrow={content[$locale].findings.eyebrow} title={content[$locale].findings.title} />
        <div class="interview-insights">
            {#each content[$locale].findings.items as item, index}<InterviewInsight {item} {index} />{/each}
        </div>
    </section>

    <section class="section">
        <SectionHeader eyebrow={content[$locale].results.eyebrow} title={content[$locale].results.title} />
        <div class="visible-impact-results">
            <table>
                <thead><tr>{#each content[$locale].results.moments as heading}<th scope="col">{heading}</th>{/each}</tr></thead>
                <tbody>{#each content[$locale].results.rows as row}<tr>{#each row as cell}<td>{cell}</td>{/each}</tr>{/each}</tbody>
            </table>
        </div>
        <div class="visible-impact-highlight"><strong>Highlight</strong><p>{content[$locale].results.highlight}</p><p>{content[$locale].results.analysis}</p></div>
    </section>

    <section class="section">
        <SectionHeader eyebrow={content[$locale].insights.eyebrow} title={content[$locale].insights.title} />
        <ol class="visible-impact-list">
            {#each content[$locale].insights.items as item, index}<li><span class="visible-impact-list__number" aria-hidden="true">0{index + 1}</span><h3>{item[0]}</h3><p class="description">{item[1]}</p></li>{/each}
        </ol>
    </section>

    <section class="section">
        <SectionHeader eyebrow={content[$locale].implications.eyebrow} title={content[$locale].implications.title} />
        <div class="visible-impact-list">
            {#each content[$locale].implications.items as item, index}<div><span class="visible-impact-list__number" aria-hidden="true">0{index + 1}</span><h3>{item[0]}</h3><p class="description">{item[1]}</p></div>{/each}
        </div>
    </section>

    <section class="section">
        <article class="visible-impact-conclusion">
            <p class="section__eyebrow">{content[$locale].conclusion.eyebrow}</p>
            <h2>{content[$locale].conclusion.title}</h2>
            {#each content[$locale].conclusion.body as paragraph}<p>{paragraph}</p>{/each}
            <p class="visible-impact-conclusion__highlight">{content[$locale].conclusion.highlight}</p>
        </article>
    </section>
</main>
