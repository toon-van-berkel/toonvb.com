<script lang="ts">
    import '$lib/components/research/Research.scss';
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import ResearchArchiveItem from '$lib/components/research/ResearchArchiveItem.svelte';
    import Icon from '$lib/components/icon/Icon.svelte';
    import { locale, copy } from '$lib/i18n';
    import { url } from '$lib/utils/url';
</script>

<svelte:head>
    <title>{$copy.researchPage.eyebrow} — Toon van Berkel</title>
    <meta name="description" content={$copy.researchPage.lead} />
</svelte:head>

<main class="research-page">
    <section class="section">
        <SectionHeader eyebrow={$copy.researchPage.eyebrow} title={$copy.researchPage.title} lead={$copy.researchPage.lead} />
    </section>

    <section class="section">
        <article class="panel split research-featured">
            <div class="stack">
                <Icon name="sustainability" />
                <p class="card__meta">{$copy.researchPage.featuredType}</p>
                <h2 class="title">{$copy.researchPage.featuredTitle}</h2>
                <p class="description">{$copy.researchPage.featuredQuestion}</p>
                <ul class="tags" aria-label="Research topics">
                    {#each $copy.researchPage.featuredTags as tag, index}<li><a href={url('/research')}><Icon name={['sustainability', 'usability', 'performance'][index] as 'sustainability' | 'usability' | 'performance'} variant="tag" />{tag}</a></li>{/each}
                </ul>
                <ul class="links">
                    <li><span class="research-featured__status">{$copy.researchPage.status}</span><span class="research-featured__status-text">{$copy.researchPage.statusText}</span></li>
                    <li><a class="text-link" href={url('/research')}>{$copy.researchPage.view} <span aria-hidden="true">→</span></a></li>
                </ul>
            </div>
            <figure class="media">
                <img class="research-featured__image" src={url('/images/research/sustainability-outdoor.webp')} alt={$copy.researchPage.featuredAlt} />
                <figcaption class="caption"><div class="caption__meta"><span>{$copy.researchPage.featuredType}</span><time datetime="2026">2026</time></div><p>{$copy.researchPage.featuredAlt}</p></figcaption>
            </figure>
        </article>
    </section>

    <section class="section">
        <div class="research-archive__intro">
            <SectionHeader 
                eyebrow={$copy.researchPage.archiveEyebrow}
                title={$copy.researchPage.archiveTitle}
                banner={true}
            />
            <p class="description">{$copy.researchPage.archiveLead}</p>
        </div>
        <div class="research-archive__items">
            {#each $copy.researchPage.archive as item}<ResearchArchiveItem {item} />{/each}
        </div>
    </section>

    <section class="section">
        <div class="research-banner" role="img" aria-label={$copy.researchPage.bannerAlt}>
            <div class="research-banner__content">
                <p class="section__eyebrow">{$copy.researchPage.bannerEyebrow}</p>
                <h2>{$copy.researchPage.bannerTitle} <strong>{$copy.researchPage.bannerAccent}</strong></h2>
                <p>{$copy.researchPage.bannerText}</p>
            </div>
        </div>
    </section>

    <section class="section">
        <SectionHeader 
            eyebrow={$copy.researchPage.processEyebrow} 
            title={$copy.researchPage.processTitle}
            banner={true}
        />
        <ol class="research-process">
            {#each $copy.researchPage.process as step, index}
                <li class="research-process__item">
                    <span class="research-process__number" aria-hidden="true">0{index + 1}</span>
                    <h3>{step[0]}</h3>
                    <p>{step[1]}</p>
                </li>
            {/each}
        </ol>
    </section>

    <section class="section">
        <div class="panel research-product">
            <div><p class="section__eyebrow">{$copy.researchPage.productEyebrow}</p><h2>{$copy.researchPage.productTitle}</h2></div>
            <div class="research-product__details"><p class="description">{$copy.researchPage.productText}</p><a class="text-link" href={url('/projects')}>{$copy.researchPage.productLink} <span aria-hidden="true">→</span></a></div>
        </div>
    </section>
</main>
