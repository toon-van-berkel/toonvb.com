<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import { locale } from '$lib/i18n';
    import { page as contactEn } from '$lib/pages/contact/contact-en';
    import { page as contactNl } from '$lib/pages/contact/contact-nl';
    import { metadata as metadataEn } from '$lib/pages/contact/contact-en.meta';
    import { metadata as metadataNl } from '$lib/pages/contact/contact-nl.meta';

    const pages = { en: contactEn, nl: contactNl } as const;
    const metadata = { en: metadataEn, nl: metadataNl } as const;
</script>

<svelte:head><title>{metadata[$locale].title}</title><meta name="description" content={metadata[$locale].description} /></svelte:head>

<main>
    <section class="section">
        <SectionHeader pageHeader eyebrow={pages[$locale].header.eyebrow} title={pages[$locale].header.title} lead={pages[$locale].header.description} />
        <div class="panel">
            <p class="description">{pages[$locale].emailLabel}</p>
            <a class="text-link" href={'mailto:' + pages[$locale].email}>{pages[$locale].email}<span aria-hidden="true">↗</span></a>
        </div>
    </section>
</main>
