<script lang="ts">
    import Icon from '$lib/components/icon/Icon.svelte';
    import SeoHead from '$lib/components/seo/SeoHead.svelte';
    import { locale } from '$lib/i18n';
    import { url } from '$lib/utils/url';
    import { page as en } from '$lib/pages/about/cv/cv-en';
    import { page as nl } from '$lib/pages/about/cv/cv-nl';
    import '$lib/pages/about/cv/Cv.scss';

    const content = $derived($locale === 'nl' ? nl : en);
    function printCv() {
        if (typeof window !== 'undefined') window.print();
    }
</script>

<SeoHead metadata={{ ...content.metadata, locale: $locale }} path="/about/cv/" />

<main class="cv-page" id="cv-content">
    <div class="cv-page__inner">
        <header class="cv-hero" data-page-header>
            <img class="cv-hero__map" src="/images/toonvb-cv-fantasy-map.svg" alt="" aria-hidden="true" />
            <div class="cv-crest" aria-hidden="true"><span>20</span></div>
            <h1 class="cv-hero__name">{content.hero.name}</h1>
            <p class="cv-hero__role">{content.hero.role}</p>
            <p class="cv-hero__disciplines">{content.hero.disciplines}</p>
            <div class="cv-hero__meta" aria-label="Contact links">
                <span>{content.hero.location}</span>
                <a href={url('/')}>{content.hero.website}</a>
                <a href="https://github.com/toon-van-berkel" target="_blank" rel="noreferrer">{content.hero.github}</a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">{content.hero.linkedin}</a>
            </div>
            <div class="cv-hero__actions">
                <button class="cv-button" type="button" title={content.hero.downloadHint} aria-label={`${content.hero.download}. ${content.hero.downloadHint}`} onclick={printCv}>{content.hero.download}</button>
                <a class="cv-link" href={url('/contact')}>{content.hero.contact}</a>
            </div>
            <div class="cv-divider" aria-hidden="true"></div>
        </header>

        <div class="cv-grid">
            <div class="cv-column">
                <section class="cv-panel" aria-labelledby="cv-profile">
                    <h2 class="cv-panel__title" id="cv-profile">{content.profile.title}</h2>
                    <p>{content.profile.body}</p>
                </section>

                <section class="cv-panel" aria-labelledby="cv-projects">
                    <h2 class="cv-panel__title" id="cv-projects">{content.projects.title}</h2>
                    <div class="cv-projects">
                        {#each content.projects.items as project}
                            <article class="cv-project">
                                <h3>{project.title}</h3>
                                <p class="cv-project__eyebrow">{project.eyebrow}</p>
                                <p>{project.description}</p>
                                <ul class="cv-project__tags" aria-label="Technologies">
                                    {#each project.technologies as technology}<li>{technology}</li>{/each}
                                </ul>
                                <a href={url(project.href)}>{project.linkLabel} ↗</a>
                            </article>
                        {/each}
                    </div>
                </section>

                <section class="cv-panel" aria-labelledby="cv-experience">
                    <h2 class="cv-panel__title" id="cv-experience">{content.experience.title}</h2>
                    <ul class="cv-list">
                        {#each content.experience.items as item}<li class="cv-list__item"><span class="cv-list__icon"><Icon name="developer" variant="tag" /></span><div><h3>{item.title}</h3>{#if item.body}<p>{item.body}</p>{/if}</div></li>{/each}
                    </ul>
                </section>
            </div>

            <div class="cv-column">
                <section class="cv-panel" aria-labelledby="cv-education">
                    <h2 class="cv-panel__title" id="cv-education">{content.education.title}</h2>
                    <ul class="cv-list">{#each content.education.items as item}<li class="cv-list__item"><span class="cv-list__icon"><Icon name={item.icon ?? 'prototype'} variant="tag" /></span><div><h3>{item.title}</h3>{#if item.subtitle}<p>{item.subtitle}</p>{/if}{#if item.period}<small>{item.period}</small>{/if}{#if item.body}<p>{item.body}</p>{/if}</div></li>{/each}</ul>
                </section>

                <section class="cv-panel" aria-labelledby="cv-skills">
                    <h2 class="cv-panel__title" id="cv-skills">{content.skills.title}</h2>
                    {#each content.skills.groups as group}<h3 class="cv-skills__group-title">{group.title}</h3><ul class="cv-skills">{#each group.items as skill}<li>{skill}</li>{/each}</ul>{/each}
                </section>

                <section class="cv-panel" aria-labelledby="cv-certificates">
                    <h2 class="cv-panel__title" id="cv-certificates">{content.certificates.title}</h2>
                    <ul class="cv-list">{#each content.certificates.items as item}<li class="cv-list__item"><span class="cv-list__icon"><Icon name={item.icon ?? 'accessibility'} variant="tag" /></span><div><h3>{item.title}</h3>{#if item.subtitle}<p>{item.subtitle}</p>{/if}{#if item.period}<small>{item.period}</small>{/if}</div></li>{/each}</ul>
                </section>

                <section class="cv-panel" aria-labelledby="cv-languages">
                    <h2 class="cv-panel__title" id="cv-languages">{content.languages.title}</h2>
                    <ul class="cv-skills">{#each content.languages.items as language}<li>{language}</li>{/each}</ul>
                </section>
            </div>

            <section class="cv-panel cv-community" aria-labelledby="cv-community">
                <h2 class="cv-panel__title" id="cv-community">{content.community.title}</h2>
                <ul class="cv-list">{#each content.community.items as item}<li class="cv-list__item"><span class="cv-list__icon"><Icon name="personal" variant="tag" /></span><div><h3>{item.title}</h3>{#if item.body}<p>{item.body}</p>{/if}</div></li>{/each}</ul>
            </section>
        </div>
    </div>
</main>
