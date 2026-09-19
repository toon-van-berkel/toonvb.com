<script lang="ts">
    import { url } from '$lib/utils/url';
    import Icon from '$lib/components/icon/Icon.svelte';
    import { copy } from '$lib/i18n';

    const icons = ['developer', 'designer', 'researcher', 'overcomplicator'] as const;
</script>

<section class="section" aria-labelledby="about-title">
    <article>
        <header class="section__header">
            <p class="section__eyebrow">{$copy.home.about.eyebrow}</p>
            <h2 class="section__title" id="about-title">{$copy.home.about.title}</h2>
        </header>
        <div class="split split--top">
            <div class="stack">
                <p class="description">{$copy.home.about.first}</p>
                <p class="description">{$copy.home.about.second}</p>
                <ul class="tags" aria-label="Roles and interests">
                    {#each $copy.home.about.roles as role, index}
                        <li><a href={url(index === 2 ? '/research' : '/projects')}><Icon name={icons[index]} variant="tag" />{role}</a></li>
                    {/each}
                </ul>
                <ul class="links">
                    <li><a href={url('/about')} class="text-link">{$copy.home.about.readMore}<span aria-hidden="true">→</span></a></li>
                </ul>
            </div>
            <figure class="media media--top">
                <img src={url('/images/about/toon-workspace.jpg')} alt="Toon van Berkel working at a desk" />
            </figure>
        </div>
    </article>
</section>
