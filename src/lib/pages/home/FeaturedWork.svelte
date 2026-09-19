<script lang="ts">
    import './FeaturedWork.scss';
    import Icon from '$lib/components/icon/Icon.svelte';
    import { copy } from '$lib/i18n';
</script>

<section class="section" aria-labelledby="featured-work-title">
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
                    <img src="/logos/dnd-portal.svg" alt="DND-Portal logo" />
                </div>
                <span class="number" aria-hidden="true">01</span>
                <h3 class="title">DND-Portal</h3>
                <p class="description">
                    {$copy.home.featured.dndDescription}
                </p>
                <ul class="tags" aria-label="Project technologies">
                    <li>
                        <a href="/projects?filter=sveltekit">
                            <Icon name="sv" variant="tag" />
                            {$copy.home.featured.dndTags[0]}
                        </a>
                    </li>
                    <li>
                        <a href="/projects?filter=typescript">
                            <Icon name="ts" variant="tag" />
                            {$copy.home.featured.dndTags[1]}
                        </a>
                    </li>
                    <li>
                        <a href="/projects?filter=personal">
                            <Icon name="personal" variant="tag" />
                            {$copy.home.featured.dndTags[2]}
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
                            href="/projects/dnd-portal"
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
                    src="/images/projects/dnd-portal.webp"
                    alt="Screenshot of the DND-Portal website"
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
                                dnd-portal.com
                            </a>
                        </span>
                        <time datetime="2026-09-04">
                            {$copy.home.featured.date}
                        </time>
                    </div>
                    <p>
                        {$copy.home.featured.dndCaption}
                    </p>
                </figcaption>
            </figure>
        </article>
        <article class="panel split split--reverse">
            <div class="stack">
                <div class="logo-mark">
                    <img src="/logos/antarctica-sc.svg" alt="Antarctica SC logo" />
                </div>
                <span class="number" aria-hidden="true">02</span>
                <h3 class="title">Antarctica SC</h3>
                <p class="description">
                    {$copy.home.featured.antarcticaDescription}
                </p>
                <ul class="tags" aria-label="Project characteristics">
                    <li>
                        <a href="/projects?filter=web-development">
                            <Icon name="web" variant="tag" />
                            {$copy.home.featured.antarcticaTags[0]}
                        </a>
                    </li>
                    <li>
                        <a href="/projects?filter=responsive-design">
                            <Icon name="responsive" variant="tag" />
                            {$copy.home.featured.antarcticaTags[1]}
                        </a>
                    </li>
                    <li>
                        <a href="/projects?filter=client-project">
                            <Icon name="client" variant="tag" />
                            {$copy.home.featured.antarcticaTags[2]}
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
                            href="/projects/antarctica-sc"
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
                    src="/images/projects/antarctica-sc.webp"
                    alt="Screenshot of the Antarctica SC website"
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
                                antarctica-sc.nl
                            </a>
                        </span>
                        <time datetime="2026-09-04">
                            {$copy.home.featured.date}
                        </time>
                    </div>
                    <p>
                        {$copy.home.featured.antarcticaCaption}
                    </p>
                </figcaption>
            </figure>
        </article>
    </div>
</section>
