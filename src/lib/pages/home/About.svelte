<script lang="ts">
    import { url } from '$lib/utils/url';
</script>

<section
    class="section"
    aria-labelledby="about-title"
>
    <article>
        <header class="section__header">
            <p class="section__eyebrow">
                Beyond the projects
            </p>

            <h2
                class="section__title"
                id="about-title"
            >
                I build things because I’m curious how far an idea can go.
            </h2>
        </header>

        <div class="split split--top">
            <div class="stack">
                <p class="description">
                    I’m <strong>Toon van Berkel</strong>, a developer and
                    designer studying Creative Media & Game Technologies in
                    Rotterdam. Most of my projects start with a small question
                    and somehow end up becoming complete platforms, tools or
                    experiments.
                </p>

                <p class="description">
                    I enjoy working where development, visual design and
                    research overlap — figuring out how something should work,
                    building it, and then polishing it until it feels
                    intentional.
                </p>

                <ul
                    class="tags"
                    aria-label="Roles and interests"
                >
                    <li>
                        <a href={url('/projects')}>
                            <span
                                class="tag__icon tag__icon--developer"
                                aria-hidden="true"
                            ></span>

                            Developer
                        </a>
                    </li>

                    <li>
                        <a href={url('/projects')}>
                            <span
                                class="tag__icon tag__icon--designer"
                                aria-hidden="true"
                            ></span>

                            Designer
                        </a>
                    </li>

                    <li>
                        <a href={url('/research')}>
                            <span
                                class="tag__icon tag__icon--researcher"
                                aria-hidden="true"
                            ></span>

                            Researcher
                        </a>
                    </li>

                    <li>
                        <a href={url('/about')}>
                            <span
                                class="tag__icon tag__icon--overcomplicator"
                                aria-hidden="true"
                            ></span>

                            Professional project overcomplicator
                        </a>
                    </li>
                </ul>

                <ul class="links">
                    <li>
                        <a
                            href={url('/about')}
                            class="text-link"
                        >
                            Read more about me
                            <span aria-hidden="true">→</span>
                        </a>
                    </li>
                </ul>
            </div>

            <figure class="media media--top">
                <img
                    src={url('/images/about/toon-workspace.jpg')}
                    alt="Toon van Berkel working at a desk"
                />
            </figure>
        </div>
    </article>
</section>