<script lang="ts">
    import Icon from '$lib/components/icon/Icon.svelte';
    import { locale } from '$lib/i18n';
    import { page as playgroundEn } from '$lib/pages/playground/playground-en';
    import { page as playgroundNl } from '$lib/pages/playground/playground-nl';

    const pages = { en: playgroundEn, nl: playgroundNl } as const;
    const experiments = $derived(pages[$locale].items.filter((item) => item.href));
</script>

<svelte:head>
    <title>{$locale === 'nl' ? 'Experimenten | Playground' : 'Experiments | Playground'} | Toon van Berkel</title>
    <meta name="description" content={$locale === 'nl' ? 'Interactieve experimenten en technische verkenningen.' : 'Interactive experiments and technical explorations.'} />
</svelte:head>

<main><section class="section experiments-page" data-page-header>
    <p class="section__eyebrow">Playground</p>
    <h1 class="section__title">{$locale === 'nl' ? 'Experimenten' : 'Experiments'}</h1>
    <p class="section__lead">{$locale === 'nl' ? 'Kleine onderzoeken naar interactie, beeld en technische mogelijkheden.' : 'Small investigations into interactions, visuals and technical possibilities.'}</p>
    <div class="experiments-grid">
        {#each experiments as experiment (experiment.href)}
            <a class="experiment-card" href={experiment.href}>
                {#if experiment.image}<div class="experiment-card__preview"><img src={experiment.image} alt={experiment.imageAlt ?? ''} /></div>{/if}
                <div class="experiment-card__body">
                    <div class="experiment-card__heading"><Icon name={experiment.icon ?? 'experiment'} variant="tag" /><span>{experiment.status}</span></div>
                    <h2>{experiment.title}</h2><p>{experiment.description}</p>
                    {#if experiment.tags}<ul class="experiment-card__tags">{#each experiment.tags as tag}<li><Icon name={tag.icon} variant="tag" />{tag.label}</li>{/each}</ul>{/if}
                    <span class="experiment-card__cta">{$locale === 'nl' ? 'Bekijk experiment' : 'View experiment'} <span aria-hidden="true">↗</span></span>
                </div>
            </a>
        {/each}
    </div>
</section></main>

<style>
    .experiments-page { overflow: visible; }
    .experiments-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; margin-top: 48px; align-items: start; }
    .experiment-card { display: flex; width: min(100%, 420px); min-width: 0; flex-direction: column; overflow: hidden; border: 1px solid rgba(42,76,123,.18); border-radius: 15px; background: var(--color-baltic-blue); color: var(--color-light); text-decoration: none; transition: transform 180ms ease, background-color 180ms ease, box-shadow 180ms ease; }
    .experiment-card:hover, .experiment-card:focus-visible { transform: translateY(-3px); background: var(--color-dusk-blue); box-shadow: 0 12px 24px rgba(23,43,70,.14); outline: 3px solid var(--color-primary); outline-offset: 3px; }
    .experiment-card__preview { aspect-ratio: 16 / 9; padding: 20px; background: #172b46; }
    .experiment-card__preview img { display: block; width: 100%; height: 100%; object-fit: contain; }
    .experiment-card__body { display: flex; min-height: 260px; flex-direction: column; padding: 22px; }
    .experiment-card__heading { display: flex; align-items: center; gap: 8px; color: var(--color-primary-hover); font-size: .8rem; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; }
    .experiment-card__heading :global(.icon) { width: 18px; height: 18px; color: currentColor; }
    .experiment-card h2 { margin: 18px 0 8px; color: var(--color-light); font-size: clamp(1.5rem,2.2vw,1.8rem); line-height: 1.1; }
    .experiment-card p { margin: 0; color: rgba(247,248,248,.84); font-size: 1rem; line-height: 1.55; }
    .experiment-card__tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0 0; padding: 0; list-style: none; }
    .experiment-card__tags li { display: inline-flex; align-items: center; gap: 6px; padding: 5px 8px; border: 1px solid rgba(247,248,248,.25); border-radius: 999px; color: rgba(247,248,248,.86); font-size: .78rem; }
    .experiment-card__tags :global(.icon) { width: 13px; height: 13px; color: var(--color-primary-hover); }
    .experiment-card__cta { margin-top: auto; padding-top: 24px; color: var(--color-primary-hover); font-weight: 600; }
    @media (max-width:1100px) { .experiments-grid { grid-template-columns: repeat(2,minmax(0,1fr)); } }
    @media (max-width:700px) { .experiments-grid { grid-template-columns: 1fr; gap: 16px; margin-top: 32px; } .experiment-card { width: 100%; } .experiment-card__body { min-height: 0; padding: 20px; } }
    @media (prefers-reduced-motion:reduce) { .experiment-card { transition: none; } }
</style>
