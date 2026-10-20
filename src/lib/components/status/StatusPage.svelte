<script lang="ts">
    import './StatusPage.scss';
    import Icon from '$lib/components/icon/Icon.svelte';
    import { locale } from '$lib/i18n';
    import { statusCopy as en } from '$lib/pages/status/status-en';
    import { statusCopy as nl } from '$lib/pages/status/status-nl';
    import type { StatusPageMode } from '$lib/types/status-page';
    import { url } from '$lib/utils/url';

    let { mode }: { mode: StatusPageMode } = $props();
    const copy = { en, nl } as const;
    const pages = $derived(copy[$locale][mode === 'under-construction' ? 'underConstruction' : 'notFound']);
</script>

<svelte:head>
    <title>{pages.title} | Toon van Berkel</title>
    <meta name="description" content={pages.description} />
    <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<main class="status-page" data-page-header>
    <section class="status-page__content section" aria-labelledby="status-title">
        <div class="status-page__visual" aria-hidden="true">
            <div class="status-page__window">
                <div class="status-page__window-bar"><span></span><span></span><span></span></div>
                <div class="status-page__terminal"><Icon name="developer" variant="tag" /><span>building<span class="status-page__cursor"></span></span></div>
                <div class="status-page__line status-page__line--short"></div>
                <div class="status-page__line"></div>
            </div>
        </div>
        <div class="status-page__copy">
            <p class="section__eyebrow">{pages.label}</p>
            <h1 class="section__title" id="status-title">{pages.title}</h1>
            <p class="status-page__description">{pages.description}</p>
            <div class="status-page__actions">
                <a class="hero__cta hero__cta--primary" href={url('/')}>{pages.homeCta}<span aria-hidden="true">→</span></a>
                <a class="hero__cta hero__cta--secondary" href={url('/projects')}>{pages.projectsCta}<span aria-hidden="true">→</span></a>
            </div>
        </div>
    </section>
</main>
