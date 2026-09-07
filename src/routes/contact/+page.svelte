<script lang="ts">
    import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
    import { locale } from '$lib/i18n';
    import { contact } from '$lib/i18n/pages/contact';
</script>

<svelte:head><title>Contact | Toon van Berkel</title></svelte:head>

<main>
    <section class="section">
        <SectionHeader eyebrow={contact[$locale].eyebrow} title={contact[$locale].title} lead={contact[$locale].lead} />
        <div class="panel">
            <p class="description">{contact[$locale].emailLabel}</p>
            <a class="text-link" href="mailto:{contact[$locale].email}">{contact[$locale].email}<span aria-hidden="true">↗</span></a>
        </div>
    </section>
</main>
