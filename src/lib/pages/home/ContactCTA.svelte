<script lang="ts">
    import { url } from '$lib/utils/url';
</script>

<section
    class="section"
    aria-labelledby="contact-title"
>
    <article>
        <header class="section__header">
            <p class="section__eyebrow">
                Let’s build something
            </p>

            <h2
                class="section__title"
                id="contact-title"
            >
                Got an idea? Let’s see where it can go.
            </h2>

            <p class="section__lead">
                Whether it starts as a rough concept, a weird experiment
                or an actual project, I’m always interested in seeing
                what can be made from it.
            </p>
        </header>

        <p class="description">
            Need a website, application, prototype or someone to help
            figure out how an idea should work?
        </p>

        <ul class="links">
            <li>
                <a
                    href={url('/contact')}
                    class="text-link"
                >
                    Start a conversation
                    <span aria-hidden="true">→</span>
                </a>
            </li>

            <li>
                <a
                    href="mailto:toonvanberkel.public@gmail.com"
                    class="text-link"
                >
                    toonvanberkel.public@gmail.com
                    <span aria-hidden="true">↗</span>
                </a>
            </li>

            <li>
                <a
                    href="https://www.linkedin.com/"
                    class="text-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                    <span aria-hidden="true">↗</span>
                </a>
            </li>
        </ul>
    </article>
</section>