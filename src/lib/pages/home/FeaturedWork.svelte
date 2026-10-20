<script lang="ts">
    import './FeaturedWork.scss';
    import Icon from '$lib/components/icon/Icon.svelte';
    import { copy, locale } from '$lib/i18n';
    import { getProject } from '$lib/pages/projects/lookup';
    import { reveal } from '$lib/utils/reveal';

    const dndPortal = $derived(getProject('dnd-portal', $locale)!);
    const antarctica = $derived(getProject('antarctica-sc', $locale)!);

</script>

<section use:reveal class="section" aria-labelledby="featured-work-title">
    <header class="section__header">
        <p class="section__eyebrow">{$copy.home.featured.eyebrow}</p>
        <h2 class="section__title" id="featured-work-title">
            {$copy.home.featured.title}
        </h2>
        <p class="section__lead">
            {$copy.home.featured.lead}
        </p>
    </header>
    <div class="collection">
        <article class="panel split">
            <div class="stack">
                <div class="logo-mark">
                    <img src={dndPortal.logo} alt={dndPortal.title + ' logo'} />
                </div>
                <span class="number" aria-hidden="true">01</span>
                <h3 class="title">{dndPortal.title}</h3>
                <p class="description">
                    {dndPortal.summary}
                </p>
                <ul class="tags" aria-label="Project technologies">
                    <li>
                        <a href="/projects?filter=sveltekit">
                            <Icon name="sv" variant="tag" />
                            {dndPortal.technologies[0]}
                        </a>
                    </li>
                    <li>
                        <a href="/projects?filter=typescript">
                            <Icon name="ts" variant="tag" />
                            {dndPortal.technologies[1]}
                        </a>
                    </li>
                    <li>
                        <a href="/projects?filter=personal">
                            <Icon name="personal" variant="tag" />
                            {dndPortal.type}
                        </a>
                    </li>
                </ul>
                <ul class="links">
                    <li>
                        <a
                            class="text-link"
                            href="https://www.dnd-portal.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {$copy.home.featured.visit}
                            <span aria-hidden="true">↗</span>
                        </a>
                    </li>
                    <li>
                        <a
                            class="text-link"
                            href={'/projects/' + dndPortal.slug}
                        >
                            {$copy.home.featured.story}
                            <span aria-hidden="true">→</span>
                        </a>
                    </li>
                    <li>
                        <a
                            class="text-link"
                            href="/research?project=dnd-portal"
                        >
                            {$copy.home.featured.related}
                            <span aria-hidden="true">→</span>
                        </a>
                    </li>
                </ul>
            </div>
            <figure class="media">
                <img
                    src={dndPortal.image}
                    alt={$copy.home.featured.dnd.screenshotAlt}
                />
                <figcaption class="caption">
                    <div class="caption__meta">
                        <span>
                            {$copy.home.featured.screenshotOf}
                            <a
                                href="https://www.dnd-portal.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {$copy.home.featured.dnd.domain}
                            </a>
                        </span>
                        <time datetime="2026-09-04">
                            {$copy.home.featured.date}
                        </time>
                    </div>
                    <p>
                        {$copy.home.featured.dnd.caption}
                    </p>
                </figcaption>
            </figure>
        </article>
        <article class="panel split split--reverse">
            <div class="stack">
                <div class="logo-mark">
                    <img src={antarctica.logo} alt={antarctica.title + ' logo'} />
                </div>
                <span class="number" aria-hidden="true">02</span>
                <h3 class="title">{antarctica.title}</h3>
                <p class="description">
                    {$copy.home.featured.antarctica.description}
                </p>
                <ul class="tags" aria-label="Project characteristics">
                    <li>
                        <a href="/projects?filter=web-development">
                            <Icon name="web" variant="tag" />
                            {antarctica.technologies[0]}
                        </a>
                    </li>
                    <li>
                        <a href="/projects?filter=responsive-design">
                            <Icon name="responsive" variant="tag" />
                            {antarctica.technologies[1]}
                        </a>
                    </li>
                    <li>
                        <a href="/projects?filter=client-project">
                            <Icon name="client" variant="tag" />
                            {antarctica.type}
                        </a>
                    </li>
                </ul>
                <ul class="links">
                    <li>
                        <a
                            class="text-link"
                            href="http://antarctica-sc.nl/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {$copy.home.featured.visit}
                            <span aria-hidden="true">↗</span>
                        </a>
                    </li>
                    <li>
                        <a
                            class="text-link"
                            href={'/projects/' + antarctica.slug}
                        >
                            {$copy.home.featured.story}
                            <span aria-hidden="true">→</span>
                        </a>
                    </li>
                    <li>
                        <a
                            class="text-link"
                            href="/research?project=antarctica-sc"
                        >
                            {$copy.home.featured.related}
                            <span aria-hidden="true">→</span>
                        </a>
                    </li>
                </ul>
            </div>
            <figure class="media">
                <img
                    src={antarctica.image}
                    alt={$copy.home.featured.antarctica.screenshotAlt}
                />
                <figcaption class="caption">
                    <div class="caption__meta">
                        <span>
                            {$copy.home.featured.screenshotOf}
                            <a
                                href="http://antarctica-sc.nl/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {$copy.home.featured.antarctica.domain}
                            </a>
                        </span>
                        <time datetime="2026-09-04">
                            {$copy.home.featured.date}
                        </time>
                    </div>
                    <p>
                        {$copy.home.featured.antarctica.caption}
                    </p>
                </figcaption>
            </figure>
        </article>
    </div>
</section>
