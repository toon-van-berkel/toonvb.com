<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import { locale } from '$lib/i18n';
    import { about } from '$lib/i18n/pages/about';
    import { url } from '$lib/utils/url';
</script>

<svelte:head>
    <title>{$locale === 'nl' ? 'Over mij' : 'About me'} — Toon van Berkel</title>
    <meta name="description" content={about[$locale].lead} />
</svelte:head>

<main>
    <section class="section">
        <SectionHeader eyebrow={$locale === 'nl' ? 'Over mij' : 'About me'} title={$locale === 'nl' ? 'Nieuwsgierigheid heeft de neiging uit de hand te lopen.' : 'Curiosity has a habit of getting out of hand.'} lead={about[$locale].lead} />
        <div class="split split--top">
            <div class="stack">{#each about[$locale].paragraphs as paragraph}<p class="description">{paragraph}</p>{/each}</div>
            <figure class="media media--top"><img src={url('/images/about/toon-workspace.jpg')} alt="Toon van Berkel working at a desk" /></figure>
        </div>
    </section>
    <section class="section">
        <h2 class="section__title">{about[$locale].statement}</h2>
    </section>
    <section class="section">
        <div class="showcase">
            {#each about[$locale].areas as area}<article class="split"><div class="number">{area[0]}</div><div><h2 class="title">{area[0]}</h2><p class="description">{area[1]}</p></div></article>{/each}
        </div>
    </section>
    <section class="section">
        <SectionHeader eyebrow="A little detour" title={about[$locale].ambitiousTitle} />
        <ol class="flow">{#each about[$locale].ambitious as step, index}<li><span class="number">0{index + 1}</span><span class="description">{step}</span></li>{/each}</ol>
    </section>
    <section class="section">
        <ul class="links">
            <li><a class="text-link" href={url('/about/cv')}>{$locale === 'nl' ? 'Bekijk mijn CV' : 'View my CV'} <span aria-hidden="true">→</span></a></li>
            <li><a class="text-link" href={url('/about/interests')}>{$locale === 'nl' ? 'Bekijk mijn interesses' : 'Explore my interests'} <span aria-hidden="true">→</span></a></li>
        </ul>
    </section>
</main>
