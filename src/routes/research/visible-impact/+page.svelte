<script lang="ts">
    import '$lib/pages/research/visible-impact/VisibleImpact.scss';
    import { locale } from '$lib/i18n';
    import type { Locale } from '$lib/types/locale';
    import type { VisibleImpactResearchDefinition } from '$lib/types/research-visible-impact';
    import { research } from '$lib/pages/research/visible-impact/visible-impact';
    import { content as contentEn } from '$lib/pages/research/visible-impact/visible-impact-en';
    import { content as contentNl } from '$lib/pages/research/visible-impact/visible-impact-nl';
    import { metadata as metadataEn } from '$lib/pages/research/visible-impact/visible-impact-en.meta';
    import { metadata as metadataNl } from '$lib/pages/research/visible-impact/visible-impact-nl.meta';

    const content: Record<Locale, VisibleImpactResearchDefinition> = { en: contentEn, nl: contentNl };
    const metadata = { en: metadataEn, nl: metadataNl } as const;
    const page = $derived(content[$locale]);
    const hasText = (value: string | undefined) => Boolean(value?.trim());
    const hasBody = (body: readonly string[]) => body.some((paragraph) => hasText(paragraph));
    const visibleMethodDetails = $derived(page.method.details.filter((detail) => hasText(detail.label) || hasText(detail.value)));
    const visibleParticipants = $derived(page.participants.breakdown.filter((participant) => hasText(participant.label) || hasText(participant.value)));
    const visibleFindings = $derived(page.findings.items.filter((item) => hasText(item.title) || hasText(item.profile) || hasText(item.finding) || hasText(item.quote) || hasText(item.highlight)));
    const visibleInsights = $derived(page.insights.items.filter((item) => hasText(item.title) || hasText(item.description)));
    const visibleImplications = $derived(page.implications.items.filter((item) => hasText(item.title) || hasText(item.description)));
    const hasPrototypeImage = $derived(Boolean(page.prototype.image && hasText(page.prototype.imageAlt)));
    const hasResults = $derived(page.results.rows.length > 0 && page.results.columns.length > 0 || hasText(page.results.highlight) || hasText(page.results.analysis));
</script>

<svelte:head>
    <title>{metadata[$locale].title}</title>
    <meta name="description" content={metadata[$locale].description} />
</svelte:head>

<main class="visible-impact" data-research={research.slug}>
    {#if hasText(page.hero.title) || hasText(page.hero.lead) || hasText(page.hero.eyebrow)}
        <section class="section visible-impact__hero" aria-labelledby="visible-impact-title" data-page-header data-handles-navbar-offset>
            {#if hasText(page.hero.eyebrow)}<p class="section__eyebrow">{page.hero.eyebrow}</p>{/if}
            {#if hasText(page.hero.title)}<h1 class="section__title" id="visible-impact-title">{page.hero.title}</h1>{/if}
            {#if hasText(page.hero.lead)}<p class="section__lead">{page.hero.lead}</p>{/if}
            {#if page.hero.metadata && Object.keys(page.hero.metadata).length > 0}
                <dl class="visible-impact__metadata">
                    {#each Object.entries(page.hero.metadata) as [label, value]}
                        {#if hasText(value)}<div><dt>{label}</dt><dd>{value}</dd></div>{/if}
                    {/each}
                </dl>
            {/if}
        </section>
    {/if}

    {#if hasText(page.question.title) || hasText(page.question.eyebrow) || hasBody(page.question.body)}
        <section class="section visible-impact__section" aria-labelledby="visible-impact-question">
            {#if hasText(page.question.eyebrow)}<p class="section__eyebrow">{page.question.eyebrow}</p>{/if}
            {#if hasText(page.question.title)}<h2 class="section__title" id="visible-impact-question">{page.question.title}</h2>{/if}
            {#if hasBody(page.question.body)}<div class="visible-impact__body">{#each page.question.body as paragraph}{#if hasText(paragraph)}<p>{paragraph}</p>{/if}{/each}</div>{/if}
        </section>
    {/if}

    {#if hasText(page.goal.title) || page.goal.items.some((goal) => hasText(goal.title) || hasText(goal.description))}
        <section class="section visible-impact__section" aria-labelledby="visible-impact-goal">
            {#if hasText(page.goal.eyebrow)}<p class="section__eyebrow">{page.goal.eyebrow}</p>{/if}
            {#if hasText(page.goal.title)}<h2 class="section__title" id="visible-impact-goal">{page.goal.title}</h2>{/if}
            <div class="visible-impact__goals">
                {#each page.goal.items as goal}
                    {#if hasText(goal.title) || hasText(goal.description)}
                        <article>
                            {#if hasText(goal.title)}<h3>{goal.title}</h3>{/if}
                            {#if hasText(goal.description)}<p>{goal.description}</p>{/if}
                        </article>
                    {/if}
                {/each}
            </div>
        </section>
    {/if}

    {#if hasText(page.prototype.title) || hasText(page.prototype.eyebrow) || hasBody(page.prototype.body) || hasPrototypeImage}
        <section class="section visible-impact__section" aria-labelledby="visible-impact-prototype">
            <div class="visible-impact__split">
                <div>
                    {#if hasText(page.prototype.eyebrow)}<p class="section__eyebrow">{page.prototype.eyebrow}</p>{/if}
                    {#if hasText(page.prototype.title)}<h2 class="section__title" id="visible-impact-prototype">{page.prototype.title}</h2>{/if}
                    {#if hasBody(page.prototype.body)}<div class="visible-impact__body">{#each page.prototype.body as paragraph}{#if hasText(paragraph)}<p>{paragraph}</p>{/if}{/each}</div>{/if}
                </div>
                {#if hasPrototypeImage}<figure class="visible-impact__figure"><img src={page.prototype.image} alt={page.prototype.imageAlt} />{#if hasText(page.prototype.imageAlt)}<figcaption>{page.prototype.imageAlt}</figcaption>{/if}</figure>{/if}
            </div>
        </section>
    {/if}

    {#if visibleMethodDetails.length > 0}
        <section class="section visible-impact__section" aria-labelledby="visible-impact-method">
            {#if hasText(page.method.eyebrow)}<p class="section__eyebrow">{page.method.eyebrow}</p>{/if}
            {#if hasText(page.method.title)}<h2 class="section__title" id="visible-impact-method">{page.method.title}</h2>{/if}
            <dl class="visible-impact__details">{#each visibleMethodDetails as detail}<div>{#if hasText(detail.label)}<dt>{detail.label}</dt>{/if}{#if hasText(detail.value)}<dd>{detail.value}</dd>{/if}</div>{/each}</dl>
        </section>
    {/if}

    {#if visibleParticipants.length > 0}
        <section class="section visible-impact__section" aria-labelledby="visible-impact-participants">
            {#if hasText(page.participants.eyebrow)}<p class="section__eyebrow">{page.participants.eyebrow}</p>{/if}
            {#if hasText(page.participants.title)}<h2 class="section__title" id="visible-impact-participants">{page.participants.title}</h2>{/if}
            <dl class="visible-impact__details">{#each visibleParticipants as participant}<div>{#if hasText(participant.label)}<dt>{participant.label}</dt>{/if}{#if hasText(participant.value)}<dd>{participant.value}</dd>{/if}</div>{/each}</dl>
        </section>
    {/if}

    {#if visibleFindings.length > 0}
        <section class="section visible-impact__section" aria-labelledby="visible-impact-findings">
            {#if hasText(page.findings.eyebrow)}<p class="section__eyebrow">{page.findings.eyebrow}</p>{/if}
            {#if hasText(page.findings.title)}<h2 class="section__title" id="visible-impact-findings">{page.findings.title}</h2>{/if}
            <div class="visible-impact__list">{#each visibleFindings as item, index}<article><span class="visible-impact__number">{String(index + 1).padStart(2, '0')}</span>{#if hasText(item.title)}<h3>{item.title}</h3>{/if}{#if hasText(item.profile)}<p class="visible-impact__profile">{item.profile}</p>{/if}{#if hasText(item.finding)}<p>{item.finding}</p>{/if}{#if hasText(item.quote)}<blockquote>{item.quote}</blockquote>{/if}{#if hasText(item.highlight)}<p class="visible-impact__highlight">{item.highlight}</p>{/if}</article>{/each}</div>
        </section>
    {/if}

    {#if hasResults}
        <section class="section visible-impact__section" aria-labelledby="visible-impact-results">
            {#if hasText(page.results.eyebrow)}<p class="section__eyebrow">{page.results.eyebrow}</p>{/if}
            {#if hasText(page.results.title)}<h2 class="section__title" id="visible-impact-results">{page.results.title}</h2>{/if}
            {#if page.results.columns.length > 0 && page.results.rows.length > 0}<div class="visible-impact__table-wrap"><table><thead><tr>{#each page.results.columns as column}<th scope="col">{column}</th>{/each}</tr></thead><tbody>{#each page.results.rows as row}<tr>{#each row as cell}<td>{cell}</td>{/each}</tr>{/each}</tbody></table></div>{/if}
            {#if hasText(page.results.highlight)}<p class="visible-impact__highlight">{page.results.highlight}</p>{/if}
            {#if hasText(page.results.analysis)}<p class="visible-impact__analysis">{page.results.analysis}</p>{/if}
        </section>
    {/if}

    {#if visibleInsights.length > 0}
        <section class="section visible-impact__section" aria-labelledby="visible-impact-insights">
            {#if hasText(page.insights.eyebrow)}<p class="section__eyebrow">{page.insights.eyebrow}</p>{/if}
            {#if hasText(page.insights.title)}<h2 class="section__title" id="visible-impact-insights">{page.insights.title}</h2>{/if}
            <ol class="visible-impact__list">{#each visibleInsights as item, index}<li><span class="visible-impact__number">{String(index + 1).padStart(2, '0')}</span>{#if hasText(item.title)}<h3>{item.title}</h3>{/if}{#if hasText(item.description)}<p>{item.description}</p>{/if}</li>{/each}</ol>
        </section>
    {/if}

    {#if visibleImplications.length > 0}
        <section class="section visible-impact__section" aria-labelledby="visible-impact-implications">
            {#if hasText(page.implications.eyebrow)}<p class="section__eyebrow">{page.implications.eyebrow}</p>{/if}
            {#if hasText(page.implications.title)}<h2 class="section__title" id="visible-impact-implications">{page.implications.title}</h2>{/if}
            <div class="visible-impact__list">{#each visibleImplications as item, index}<article><span class="visible-impact__number">{String(index + 1).padStart(2, '0')}</span>{#if hasText(item.title)}<h3>{item.title}</h3>{/if}{#if hasText(item.description)}<p>{item.description}</p>{/if}</article>{/each}</div>
        </section>
    {/if}

    {#if hasText(page.conclusion.title) || hasText(page.conclusion.eyebrow) || hasBody(page.conclusion.body) || hasText(page.conclusion.highlightedStatement)}
        <section class="section visible-impact__section" aria-labelledby="visible-impact-conclusion">
            {#if hasText(page.conclusion.eyebrow)}<p class="section__eyebrow">{page.conclusion.eyebrow}</p>{/if}
            {#if hasText(page.conclusion.title)}<h2 class="section__title" id="visible-impact-conclusion">{page.conclusion.title}</h2>{/if}
            {#if hasBody(page.conclusion.body)}<div class="visible-impact__body">{#each page.conclusion.body as paragraph}{#if hasText(paragraph)}<p>{paragraph}</p>{/if}{/each}</div>{/if}
            {#if hasText(page.conclusion.highlightedStatement)}<p class="visible-impact__closing">{page.conclusion.highlightedStatement}</p>{/if}
        </section>
    {/if}

    <div class="section visible-impact__footer">
        <a class="text-link" href="/research">← Back to research</a>
    </div>
</main>
