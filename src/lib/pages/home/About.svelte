<script lang="ts">
    import { url } from '$lib/utils/url';
    import Icon from '$lib/components/icon/Icon.svelte';
    import { reveal } from '$lib/utils/reveal';
</script>

<section
    use:reveal
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

        <div class="split split--top about-home__split">
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
                            <Icon name="developer" variant="tag" />

                            Developer
                        </a>
                    </li>

                    <li>
                        <a href={url('/projects')}>
                            <Icon name="designer" variant="tag" />

                            Designer
                        </a>
                    </li>

                    <li>
                        <a href={url('/research')}>
                            <Icon name="researcher" variant="tag" />

                            Researcher
                        </a>
                    </li>

                    <li>
                        <a href={url('/about')}>
                            <Icon name="overcomplicator" variant="tag" />

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

            <figure class="media media--top about-home__photo">
                <img
                    src={url('/images/about/toon-van-berkel-camera.webp')}
                    alt="Toon van Berkel photographing with a camera"
                />
            </figure>
        </div>
    </article>
</section>

<style>
    .about-home__photo {
        position: relative;
        overflow: hidden;
        aspect-ratio: 16 / 9;
    }

    .about-home__photo img {
        position: relative;
        width: 78%;
        max-width: 78%;
        height: 100%;
        margin-left: auto;
        object-fit: cover;
        object-position: 49% 32%;
        -webkit-mask-image: linear-gradient(to right, transparent 0%, black 30%, black 100%);
        mask-image: linear-gradient(to right, transparent 0%, black 30%, black 100%);
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
    }

    .about-home__split {
        grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
        gap: clamp(32px, 4vw, 64px);
    }

    @media (max-width: 800px) {
        .about-home__photo {
            aspect-ratio: 4 / 5;
        }

        .about-home__photo img {
            width: 100%;
            max-width: 100%;
            height: 100%;
            margin: 0 auto;
            object-position: 50% 32%;
        }

        .about-home__photo img {
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 18%, black 100%);
            mask-image: linear-gradient(to right, transparent 0%, black 18%, black 100%);
        }
    }
</style>
