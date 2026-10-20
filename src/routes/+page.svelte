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

    const heroImages = [
        { src: '/images/toonvb-toon_van_berkel-banner_image.webp', alt: "Toon van Berkel's workspace with a laptop showing a digital project" },
        { src: '/images/toonvb-toon_van_berkel-banner_image_norway.webp', alt: 'A Norwegian landscape representing curiosity and exploration' }
    ];

    let activeHeroImage = $state(0);
    let slideshowPaused = $state(false);
    let activeHeroSlide = $derived($copy.home.hero.slides[activeHeroImage] ?? $copy.home.hero.slides[0]);

    onMount(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const interval = window.setInterval(() => {
            if (!slideshowPaused) activeHeroImage = (activeHeroImage + 1) % heroImages.length;
        }, 8000);

        return () => window.clearInterval(interval);
    });
</script>

<main>
    <section class="hero" aria-labelledby="hero-title" data-page-header data-handles-navbar-offset>
        {#key activeHeroImage}
            <div class="hero__content hero__content--slide">
            <p class="hero__eyebrow">{activeHeroSlide.eyebrow}</p>
            <h1 id="hero-title">{activeHeroSlide.title}</h1>
            <p>{activeHeroSlide.description}</p>
            <div class="hero__actions">
                <a class="hero__cta hero__cta--primary" href={url('/projects')}>{activeHeroSlide.primaryCta}<span aria-hidden="true">→</span></a>
                <a class="hero__cta hero__cta--secondary" href={url('/contact')}>{activeHeroSlide.secondaryCta}<span aria-hidden="true">→</span></a>
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
            {#each heroImages as image, index}
                <img class:hero__slide--active={index === activeHeroImage} src={image.src} alt={image.alt} aria-hidden={index !== activeHeroImage} />
            {/each}
        </div>
        <div class="hero__dots" aria-label="Hero slides">
            {#each heroImages as _, index}
                <button
                    class:hero__dot--active={index === activeHeroImage}
                    type="button"
                    aria-label={`Show slide ${index + 1}`}
                    aria-current={index === activeHeroImage ? 'true' : undefined}
                    onclick={() => (activeHeroImage = index)}
                    onfocus={() => (slideshowPaused = true)}
                    onblur={() => (slideshowPaused = false)}
                ></button>
            {/each}
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
