<script lang="ts">
    import { page } from '$app/state';
    import { locale } from '$lib/i18n';
    import { resolveBreadcrumbs } from '$lib/navigation/breadcrumbs';

    const breadcrumbs = $derived(resolveBreadcrumbs(page.url.pathname, $locale));
    const isHome = $derived(page.url.pathname === '/');
    const backLabel = $derived($locale === 'nl' ? 'Terug' : 'Back');
    const navigationLabel = $derived($locale === 'nl' ? 'Broodkruimelnavigatie' : 'Breadcrumb navigation');

    function goBack(event: MouseEvent) {
        event.preventDefault();
        const sameSiteReferrer = typeof document !== 'undefined' && document.referrer.startsWith(window.location.origin);
        if (sameSiteReferrer && history.length > 1) history.back();
        else window.location.assign(breadcrumbs.length > 1 ? breadcrumbs.at(-2)!.href : '/');
    }
</script>

{#if !isHome}
    <nav class="breadcrumbs" aria-label={navigationLabel}>
        <a class="breadcrumbs__back" href={breadcrumbs.length > 1 ? breadcrumbs.at(-2)!.href : '/'} onclick={goBack}>
            <span aria-hidden="true">←</span> <span>{backLabel}</span>
        </a>
        <ol>
            {#each breadcrumbs as crumb, index (crumb.href)}
                <li>
                    {#if index > 0}<span class="breadcrumbs__separator" aria-hidden="true">/</span>{/if}
                    <a href={crumb.href} aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}>{crumb.label}</a>
                </li>
            {/each}
        </ol>
    </nav>
{/if}

<style>
    .breadcrumbs { display: flex; flex-wrap: wrap; align-items: center; gap: 12px 18px; max-width: 1400px; margin: 0 auto; padding: calc(var(--page-content-offset) + 12px) max(24px, calc((100vw - 1400px) / 2)) 0; color: var(--color-dusk-blue); font-size: .85rem; }
    .breadcrumbs ol { display: flex; flex-wrap: wrap; gap: 6px; margin: 0; padding: 0; list-style: none; }
    .breadcrumbs li { display: inline-flex; align-items: center; gap: 6px; }
    .breadcrumbs a { color: inherit; text-decoration: none; }
    .breadcrumbs a:hover, .breadcrumbs a:focus-visible { color: var(--color-primary); text-decoration: underline; }
    .breadcrumbs__back { display: inline-flex; align-items: center; gap: 5px; font-weight: 600; }
    .breadcrumbs__separator { color: var(--color-pale-slate); }
    @media (max-width: 800px) { .breadcrumbs { padding-right: 20px; padding-left: 20px; } }
</style>
