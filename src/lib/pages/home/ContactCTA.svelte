<script lang="ts">
    import { url } from '$lib/utils/url';
    import { copy } from '$lib/i18n';
</script>

<section class="section" aria-labelledby="contact-title">
    <article>
        <header class="section__header">
            <p class="section__eyebrow">{$copy.home.contactSection.eyebrow}</p>
            <h2 class="section__title" id="contact-title">{$copy.home.contactSection.title}</h2>
            <p class="section__lead">{$copy.home.contactSection.lead}</p>
        </header>
        <p class="description">{$copy.home.contactSection.description}</p>
        <ul class="links">
            <li><a href={url('/contact')} class="text-link">{$copy.home.contactSection.start}<span aria-hidden="true">→</span></a></li>
            <li><a href="mailto:contact@toonvb.com" class="text-link">contact@toonvb.com<span aria-hidden="true">↗</span></a></li>
            <li><a href="https://www.linkedin.com/" class="text-link" target="_blank" rel="noopener noreferrer">{$copy.home.contactSection.linkedin}<span aria-hidden="true">↗</span></a></li>
        </ul>
    </article>
</section>
