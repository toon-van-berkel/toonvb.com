<script lang="ts">
    import SeoHead from '$lib/components/seo/SeoHead.svelte';
    import { locale } from '$lib/i18n';

    const content = $derived($locale === 'nl' ? {
        title: 'Eerste Hulp (EHBO)',
        description: 'Diploma Eerste Hulp van Het Oranje Kruis.',
        eyebrow: 'Certificaat',
        detail: 'Dit certificaat is geldig tot en met april 2027.',
        alt: 'Diploma Eerste Hulp van Het Oranje Kruis op naam van Toon van Berkel.'
    } : {
        title: 'First Aid (EHBO)',
        description: 'First Aid certificate from Het Oranje Kruis.',
        eyebrow: 'Certificate',
        detail: 'This certificate is valid through April 2027.',
        alt: 'First Aid certificate from Het Oranje Kruis issued to Toon van Berkel.'
    });
</script>

<SeoHead metadata={{ title: `${content.title} | Toon van Berkel`, description: content.description, locale: $locale }} path="/about/certificates/ehbo/" />

<main class="certificate-page" data-page-header>
    <div class="certificate-page__inner">
        <p class="section__eyebrow">{content.eyebrow}</p>
        <h1 class="section__title">{content.title}</h1>
        <p class="certificate-page__description">{content.description}</p>
        <figure class="certificate-page__figure">
            <img src="/images/about/ehbo-diploma.png" alt={content.alt} />
        </figure>
        <p class="certificate-page__detail">{content.detail}</p>
    </div>
</main>

<style>
    .certificate-page {
        padding: 32px 0 72px;
    }

    .certificate-page__inner {
        width: min(100% - 48px, 920px);
        margin: 0 auto;
    }

    .certificate-page__description,
    .certificate-page__detail {
        max-width: 65ch;
        color: var(--color-ink-soft, #304460);
        font-size: 1.05rem;
        line-height: 1.6;
    }

    .certificate-page__figure {
        margin: 32px 0 0;
        overflow: hidden;
        border-radius: 14px;
        background: #fff;
        box-shadow: 0 12px 32px rgb(23 42 70 / 12%);
    }

    .certificate-page__figure img {
        display: block;
        width: 100%;
        height: auto;
    }

    .certificate-page__detail {
        margin-top: 20px;
    }

    @media (max-width: 760px) {
        .certificate-page {
            padding: 24px 0 48px;
        }

        .certificate-page__inner {
            width: min(100% - 32px, 920px);
        }
    }
</style>
