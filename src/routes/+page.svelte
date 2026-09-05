<script lang="ts">
    import FeaturedWork from "$lib/pages/home/FeaturedWork.svelte";
    import Aprouch from "$lib/pages/home/Aprouch.svelte";
    import Stats from "$lib/pages/home/Stats.svelte";
    import Research from "$lib/pages/home/Research.svelte";
    import About from "$lib/pages/home/About.svelte";
    import Playground from "$lib/pages/home/Playground.svelte";
    import ContactCTA from "$lib/pages/home/ContactCTA.svelte";
</script>

<main>
    <div class="hero">
        <img src="/images/toonvb-toon_van_berkel-lets_create_the_future-2026.jpg" alt="">
    </div>

    <Aprouch />
    <FeaturedWork />
    <Stats />
    <Research />
    <About />
    <Playground />
    <ContactCTA />
</main>