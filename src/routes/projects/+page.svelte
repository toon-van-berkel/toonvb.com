<script lang="ts">
    import { browser } from '$app/environment';
    import { page } from '$app/state';
    import { replaceState } from '$app/navigation';
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import Icon, { type IconName } from '$lib/components/icon/Icon.svelte';
    import { locale } from '$lib/i18n';
    import { page as projectsEn } from '$lib/pages/projects/projects-en';
    import { page as projectsNl } from '$lib/pages/projects/projects-nl';
    import { metadata as metadataEn } from '$lib/pages/projects/projects-en.meta';
    import { metadata as metadataNl } from '$lib/pages/projects/projects-nl.meta';
    import { getProjects } from '$lib/pages/projects/lookup';
    import { projectUi } from '$lib/pages/projects/ui';
    import { url } from '$lib/utils/url';

    const pages = { en: projectsEn, nl: projectsNl } as const;
    const metadata = { en: metadataEn, nl: metadataNl } as const;
    const categoryValues = ['web', 'applications', 'games', 'school'] as const;
    const typeValues = ['personal', 'client', 'school'] as const;
    type Category = (typeof categoryValues)[number];
    type ProjectType = (typeof typeValues)[number];

    const query = $derived.by(() => browser ? page.url.searchParams.get('q')?.trim() ?? '' : '');
    const category = $derived.by(() => {
        const value = browser ? page.url.searchParams.get('category') : null;
        return categoryValues.includes(value as Category) ? value as Category : 'all';
    });
    const type = $derived.by(() => {
        const value = browser ? page.url.searchParams.get('type') : null;
        return typeValues.includes(value as ProjectType) ? value as ProjectType : 'all';
    });
    const allProjects = $derived(getProjects($locale, pages[$locale].projectOrder));
    const availableCategories = $derived(new Set(allProjects.map((project) => project.category)));
    const filteredProjects = $derived(allProjects.filter((project) => {
        const haystack = [project.title, project.summary, project.type, ...project.technologies].join(' ').toLowerCase();
        return (!query || haystack.includes(query.toLowerCase())) && (category === 'all' || project.category === category) && (type === 'all' || project.projectType === type);
    }));
    const filtersActive = $derived(Boolean(query || category !== 'all' || type !== 'all'));

    function updateFilters(changes: { q?: string; category?: string; type?: string }) {
        const params = new URLSearchParams(page.url.searchParams);
        for (const [key, value] of Object.entries(changes)) {
            const trimmed = value?.trim() ?? '';
            if (!trimmed || trimmed === 'all') params.delete(key);
            else params.set(key, trimmed);
        }
        replaceState(`${page.url.pathname}${params.toString() ? `?${params}` : ''}`, {});
    }
    function clearFilters() { updateFilters({ q: '', category: 'all', type: 'all' }); }
    function iconForTechnology(technology: string): IconName | undefined {
        if (technology === 'SvelteKit') return 'sv';
        if (technology === 'TypeScript') return 'ts';
        if (technology.toLowerCase().includes('responsive')) return 'responsive';
        return technology.toLowerCase().includes('web') ? 'web' : 'developer';
    }
</script>

<svelte:head><title>{metadata[$locale].title}</title><meta name="description" content={metadata[$locale].description} /></svelte:head>

<main><section class="section projects-overview">
    <SectionHeader pageHeader eyebrow={pages[$locale].header.eyebrow} title={pages[$locale].header.title} lead={pages[$locale].header.description} />
    <form class="projects-filters" onsubmit={(event) => event.preventDefault()}>
        <div class="projects-filters__top">
            <label class="visually-hidden" for="project-search">{projectUi[$locale].search}</label>
            <div class="projects-filters__search">
                <span class="projects-filters__search-icon" aria-hidden="true"></span>
                <input id="project-search" aria-label={projectUi[$locale].search} value={query} placeholder={projectUi[$locale].search} oninput={(event) => updateFilters({ q: event.currentTarget.value })} />
                {#if query}<button type="button" aria-label={projectUi[$locale].clearSearch} onclick={() => updateFilters({ q: '' })}>×</button>{/if}
            </div>
            <label class="visually-hidden" for="project-type">{projectUi[$locale].types.all}</label>
            <div class="projects-filters__type"><select id="project-type" aria-label={projectUi[$locale].types.all} value={type} onchange={(event) => updateFilters({ type: event.currentTarget.value })}><option value="all">{projectUi[$locale].types.all}</option>{#each typeValues as value}<option value={value}>{projectUi[$locale].types[value]}</option>{/each}</select></div>
        </div>
        <div class="projects-filters__bottom">
            <div class="projects-filters__categories" role="group" aria-label="Project categories">
                <button type="button" class:active={category === 'all'} aria-pressed={category === 'all'} onclick={() => updateFilters({ category: 'all' })}>{projectUi[$locale].all}</button>
                {#each categoryValues as value}{#if availableCategories.has(value)}<button type="button" class:active={category === value} aria-pressed={category === value} onclick={() => updateFilters({ category: value })}>{projectUi[$locale].categories[value]}</button>{/if}{/each}
            </div>
            <div class="projects-filters__meta">
                <div class="projects-filters__status" aria-live="polite">{filteredProjects.length} {projectUi[$locale].resultCount}</div>
                {#if filtersActive}<button class="projects-filters__clear" type="button" onclick={clearFilters}>{projectUi[$locale].clearFilters}</button>{/if}
            </div>
        </div>
    </form>
    {#if filteredProjects.length}
        <div class="projects-grid">
            {#each filteredProjects as project (project.slug)}
                <a class="project-card" href={url('/projects/' + project.slug)}>
                    <div class="project-card__media"><img src={url(project.image)} alt={project.title} /></div>
                    <div class="project-card__body"><p class="project-card__meta">{project.type} · {project.status}</p><h2>{project.title}</h2><p class="project-card__summary">{project.summary}</p>
                        <ul class="project-card__tags" aria-label={projectUi[$locale].technologies}>{#each project.technologies as technology}{@const tagIcon = iconForTechnology(technology)}{#if tagIcon}<li><Icon name={tagIcon} variant="tag" /><span>{technology}</span></li>{/if}{/each}</ul>
                        <span class="project-card__link">{projectUi[$locale].readStory}<span aria-hidden="true">→</span></span>
                    </div>
                </a>
            {/each}
        </div>
    {:else}
        <div class="projects-empty"><p>{projectUi[$locale].noResults}</p><button type="button" onclick={clearFilters}>{projectUi[$locale].clearFilters}</button></div>
    {/if}
</section></main>

<style>
    .visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; border: 0; }
    .projects-filters { display: grid; gap: 16px; margin: 28px 0 24px; }
    .projects-filters__top { display: flex; align-items: center; justify-content: flex-start; gap: 16px; }
    .projects-filters__bottom { display: flex; align-items: center; justify-content: space-between; gap: 24px; }
    .projects-filters__search { display: flex; align-items: center; gap: 9px; width: min(440px, 100%); min-height: 46px; padding: 10px 12px; border: 1px solid rgba(42,76,123,.25); border-radius: 9px; background: white; color: var(--color-dusk-blue); }
    .projects-filters__search input { min-width: 0; flex: 1; border: 0; outline: 0; background: transparent; color: var(--color-dark); font: inherit; }
    .projects-filters__search-icon { width: 14px; height: 14px; border: 2px solid currentColor; border-radius: 50%; position: relative; flex: 0 0 14px; }
    .projects-filters__search-icon::after { content: ''; position: absolute; width: 6px; height: 2px; right: -5px; bottom: -2px; transform: rotate(45deg); background: currentColor; }
    .projects-filters__search button { border: 0; background: transparent; color: var(--color-dusk-blue); font-size: 1.3rem; cursor: pointer; }
    .projects-filters__categories { display: flex; flex-wrap: wrap; gap: 6px; }
    .projects-filters__categories button, .projects-filters__clear, .projects-empty button { padding: 9px 12px; border: 1px solid rgba(42,76,123,.3); border-radius: 999px; background: transparent; color: var(--color-dusk-blue); cursor: pointer; font: inherit; }
    .projects-filters__categories button.active, .projects-filters__categories button:hover, .projects-filters__categories button:focus-visible { background: var(--color-dusk-blue); color: var(--color-light); }
    .projects-filters__type select { width: 240px; min-height: 46px; padding: 9px 12px; border: 1px solid rgba(42,76,123,.3); border-radius: 9px; background: white; color: var(--color-dusk-blue); font: inherit; }
    .projects-filters__meta { display: flex; align-items: center; gap: 16px; }
    .projects-filters__status { color: var(--color-baltic-blue); font-size: .9rem; }
    .projects-filters__clear { margin: 0; }
    .projects-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; align-items: stretch; }
    .project-card { display: flex; min-width: 0; flex-direction: column; overflow: hidden; border: 1px solid rgba(42,76,123,.18); border-radius: 15px; background: var(--color-baltic-blue); color: var(--color-light); text-decoration: none; transition: transform 180ms ease, box-shadow 180ms ease; }
    .project-card:hover { transform: translateY(-4px); box-shadow: 0 16px 30px rgba(9,20,34,.16); }
    .project-card:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 4px; }
    .project-card__media { aspect-ratio: 16 / 9; background: var(--color-pale-slate); }
    .project-card__media img { display: block; width: 100%; height: 100%; object-fit: cover; }
    .project-card__body { display: flex; flex: 1; flex-direction: column; gap: 0; padding: 20px 24px 24px; }
    .project-card__meta { margin: 0 0 6px; color: rgba(247,248,248,.72); font-size: .78rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; }
    .project-card h2 { margin: 0 0 8px; color: var(--color-light); font-size: clamp(1.5rem, 2vw, 1.75rem); line-height: 1.1; }
    .project-card__summary { margin: 0; color: rgba(247,248,248,.82); font-size: 1rem; line-height: 1.5; }
    .project-card__tags { display: flex; flex-wrap: wrap; gap: 6px; margin: 16px 0; padding: 0; list-style: none; }
    .project-card__tags li { display: inline-flex; align-items: center; gap: 6px; padding: 5px 8px; border-radius: 999px; background: rgba(247,248,248,.12); color: var(--color-light); font-size: .8rem; }
    .project-card__link { display: flex; align-items: center; gap: 8px; margin-top: auto; color: var(--color-light); font-weight: 600; }
    .projects-empty { padding: 32px 0; color: var(--color-baltic-blue); }.projects-empty button { margin-top: 12px; }
    @media (max-width:1100px) { .projects-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width:800px) { .projects-filters__top, .projects-filters__bottom { align-items: stretch; flex-direction: column; gap: 12px; } .projects-filters__search, .projects-filters__type, .projects-filters__type select { width: 100%; } .projects-filters__meta { justify-content: space-between; flex-wrap: wrap; } .projects-grid { grid-template-columns: 1fr; } .project-card__body { padding: 20px; } }
    @media (prefers-reduced-motion:reduce) { .project-card { transition: none; }.project-card:hover { transform: none; } }
</style>
