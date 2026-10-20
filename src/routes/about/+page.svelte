<script lang="ts">
    import '$lib/pages/about/About.scss';
    import Icon from '$lib/components/icon/Icon.svelte';
    import { locale } from '$lib/i18n';
    import { page as aboutEn } from '$lib/pages/about/about-en';
    import { page as aboutNl } from '$lib/pages/about/about-nl';
    import { metadata as metadataEn } from '$lib/pages/about/about-en.meta';
    import { metadata as metadataNl } from '$lib/pages/about/about-nl.meta';
    import { url } from '$lib/utils/url';

    const pages = { en: aboutEn, nl: aboutNl } as const;
    const metadata = { en: metadataEn, nl: metadataNl } as const;
</script>

<svelte:head>
    <title>{metadata[$locale].title}</title>
    <meta name="description" content={metadata[$locale].description} />
</svelte:head>

<main class="about-page">
    <section class="about-page__intro section" data-page-header aria-labelledby="about-title">
        <div class="about-page__intro-copy">
            <p class="section__eyebrow">{pages[$locale].header.eyebrow}</p>
            <h1 class="section__title" id="about-title">{pages[$locale].header.title}</h1>
            <div class="about-page__body">
                {#each pages[$locale].intro as paragraph}<p>{paragraph}</p>{/each}
            </div>
        </div>
        <figure class="about-page__portrait"><img src={pages[$locale].portrait} alt="Toon van Berkel" /></figure>
    </section>

    <section class="about-page__story section" aria-labelledby="about-origin-title">
        <div class="about-page__story-grid">
            <h2 class="section__title" id="about-origin-title">{pages[$locale].origin.title}</h2>
            <div class="about-page__body">{#each pages[$locale].origin.paragraphs as paragraph}<p>{paragraph}</p>{/each}</div>
        </div>
    </section>

    <section class="about-page__project section" aria-labelledby="about-project-title">
        <div class="about-page__project-inner">
            <header class="about-page__project-header">
                <p class="section__eyebrow">D&D Portal Wiki</p>
                <h2 class="section__title" id="about-project-title">{pages[$locale].dndPortal.title}</h2>
            </header>
            <div class="about-page__project-copy">
                <div class="about-page__body">{#each pages[$locale].dndPortal.paragraphs as paragraph}<p>{paragraph}</p>{/each}</div>
            </div>
            <aside class="about-page__stats" aria-label="D&D Portal Wiki statistics">
                {#each pages[$locale].dndPortal.stats as stat}
                    <div class="about-page__stat"><strong>{stat.value}</strong><span>{stat.label}</span></div>
                {/each}
            </aside>
            <a class="about-page__project-link text-link" href={pages[$locale].dndPortal.externalUrl} target="_blank" rel="noopener noreferrer">{pages[$locale].dndPortal.cta}</a>
        </div>
    </section>

    <section class="about-page__outside section" aria-labelledby="about-outside-title">
        <div class="about-page__narrow">
            <h2 class="section__title" id="about-outside-title">{pages[$locale].outsideProgramming.title}</h2>
            <div class="about-page__body">{#each pages[$locale].outsideProgramming.paragraphs as paragraph}<p>{paragraph}</p>{/each}</div>
        </div>
    </section>

    <section class="about-page__collaboration section" aria-labelledby="about-collaboration-title">
        <header class="section__header">
            <p class="section__eyebrow">{pages[$locale].collaboration.eyebrow}</p>
            <h2 class="section__title" id="about-collaboration-title">{pages[$locale].collaboration.title}</h2>
        </header>
        <div class="about-page__collaboration-grid">
            <article class="about-page__action">
                <Icon name="web" variant="card" />
                <h3>{pages[$locale].collaboration.website.title}</h3>
                <div class="about-page__body">{#each pages[$locale].collaboration.website.paragraphs as paragraph}<p>{paragraph}</p>{/each}</div>
                <a class="text-link" href={url('/contact')}>{pages[$locale].collaboration.website.cta}</a>
            </article>
            <article class="about-page__action about-page__action--accent">
                <Icon name="personal" variant="card" />
                <h3>{pages[$locale].collaboration.funder.title}</h3>
                <div class="about-page__body">{#each pages[$locale].collaboration.funder.paragraphs as paragraph}<p>{paragraph}</p>{/each}</div>
                <a class="text-link" href={url('/contact')}>{pages[$locale].collaboration.funder.cta}</a>
            </article>
        </div>
    </section>
</main>
