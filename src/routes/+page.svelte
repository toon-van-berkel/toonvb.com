<script lang="ts">
    import { onMount } from 'svelte';
    import FeaturedWork from "$lib/pages/home/FeaturedWork.svelte";
    import Approach from "$lib/pages/home/Approach.svelte";
    import Stats from "$lib/pages/home/Stats.svelte";
    import Research from "$lib/pages/home/Research.svelte";
    import About from "$lib/pages/home/About.svelte";
    import Playground from "$lib/pages/home/Playground.svelte";
    import ContactCTA from "$lib/pages/home/ContactCTA.svelte";
    import Brands from "$lib/pages/home/Brands.svelte";
    import Icon from '$lib/components/icon/Icon.svelte';
    import { copy } from '$lib/i18n';
    import { url } from '$lib/utils/url';
    import SeoHead from '$lib/components/seo/SeoHead.svelte';
    import { locale } from '$lib/i18n';
    import { metadata as metadataEn } from '$lib/pages/home/home-en.meta';
    import { metadata as metadataNl } from '$lib/pages/home/home-nl.meta';

    const metadata = { en: metadataEn, nl: metadataNl } as const;

    const heroImages = [
        { src: '/images/toonvb-hero-laptop.svg', alt: 'A laptop creating ideas in a minimalist geometric illustration' },
        { src: '/images/toonvb-toon_van_berkel-banner_image_norway.webp', alt: 'A Norwegian landscape representing curiosity and exploration' }
    ];

    let activeHeroImage = $state(0);
    let slideshowPaused = $state(false);
    let activeHeroSlide = $derived($copy.home.hero.slides[activeHeroImage] ?? $copy.home.hero.slides[0]);

    function showPreviousHeroImage() {
        activeHeroImage = (activeHeroImage - 1 + heroImages.length) % heroImages.length;
    }

    function showNextHeroImage() {
        activeHeroImage = (activeHeroImage + 1) % heroImages.length;
    }

    onMount(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const interval = window.setInterval(() => {
            if (!slideshowPaused) activeHeroImage = (activeHeroImage + 1) % heroImages.length;
        }, 8000);

        return () => window.clearInterval(interval);
    });
</script>

<SeoHead metadata={metadata[$locale]} path="/" />

<main>
    <section class="hero" aria-labelledby="hero-title" data-page-header data-handles-navbar-offset>
        {#key activeHeroImage}
            <div class="hero__content hero__content--slide">
            <p class="hero__eyebrow">{activeHeroSlide.eyebrow}</p>
            <h1 id="hero-title">{activeHeroSlide.title}</h1>
            <p>{activeHeroSlide.description}</p>
            <div class="hero__actions">
                <a class="hero__cta hero__cta--primary" href={url('/projects')}>{activeHeroSlide.primaryCta}<span class="hero__chevron" aria-hidden="true"><Icon name="chevron-right" variant="action" decorative /><Icon name="chevron-right" variant="action" decorative /></span></a>
                <a class="hero__cta hero__cta--secondary" href={url('/contact')}>{activeHeroSlide.secondaryCta}<span class="hero__chevron" aria-hidden="true"><Icon name="chevron-right" variant="action" decorative /><Icon name="chevron-right" variant="action" decorative /></span></a>
            </div>
            <ul class="hero__roles" aria-label="Areas of focus">
                {#each activeHeroSlide.roles as role, index}
                    <li class="hero__role" class:hero__role--last={index === activeHeroSlide.roles.length - 1}>
                        {#if role.href}
                            <a href={url(role.href)}>
                                <Icon name={role.icon} variant="tag" />
                                <span class="hero__role-label">{role.label}</span>
                            </a>
                        {:else}
                            <span>
                                <Icon name={role.icon} variant="tag" />
                                <span class="hero__role-label">{role.label}</span>
                            </span>
                        {/if}
                    </li>
                {/each}
            </ul>
            </div>
        {/key}
        <div class="hero__media" role="presentation" onmouseenter={() => (slideshowPaused = true)} onmouseleave={() => (slideshowPaused = false)} onfocusin={() => (slideshowPaused = true)} onfocusout={() => (slideshowPaused = false)}>
            <div class="hero__frame">
                {#each heroImages as image, index}
                    <img class:hero__slide--active={index === activeHeroImage} src={image.src} alt={image.alt} aria-hidden={index !== activeHeroImage} />
                {/each}
            </div>
            <div class="hero__controls" aria-label="Hero slides">
                <span class="hero__counter" aria-live="polite">{String(activeHeroImage + 1).padStart(2, '0')} / {String(heroImages.length).padStart(2, '0')}</span>
                <span class="hero__progress" aria-hidden="true"><span style={`width: ${(100 / heroImages.length) * (activeHeroImage + 1)}%`}></span></span>
                <div class="hero__arrows">
                    <button type="button" aria-label="Previous slide" onclick={showPreviousHeroImage}><Icon name="chevron-left" variant="action" decorative /></button>
                    <button type="button" aria-label="Next slide" onclick={showNextHeroImage}><Icon name="chevron-right" variant="action" decorative /></button>
                </div>
            </div>
        </div>
    </section>

    <Approach />
    <FeaturedWork />
    <Stats />
    <Research />
    <About />
    <Playground />
    <ContactCTA />
    <Brands />
</main>
