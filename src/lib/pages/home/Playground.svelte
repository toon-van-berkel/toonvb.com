<script lang="ts">
    import { url } from '$lib/utils/url';
    import Icon from '$lib/components/icon/Icon.svelte';
</script>

<section
    class="section"
    aria-labelledby="playground-title"
>
    <header class="section__header">
        <p class="section__eyebrow">
            Playground
        </p>

        <h2
            class="section__title"
            id="playground-title"
        >
            Not everything needs to be a serious project.
        </h2>

        <p class="section__lead">
            Sometimes I build something simply because an idea sounds
            interesting, weird or unnecessarily complicated.
        </p>
    </header>

    <div class="grid grid--3">
        <article class="card">
            <Icon name="experiment" />

            <span
                class="card__number"
                aria-hidden="true"
            >
                01
            </span>

            <p class="card__meta">
                Experiments
            </p>

            <h3 class="card__title">
                Try something new
            </h3>

            <p class="card__text">
                Small experiments where I test technologies, interactions
                or ideas without needing them to become a complete product.
            </p>

            <a
                class="text-link"
                href={url('/playground/experiments')}
            >
                View experiments
                <span aria-hidden="true">→</span>
            </a>
        </article>

        <article class="card">
            <Icon name="prototype" />

            <span
                class="card__number"
                aria-hidden="true"
            >
                02
            </span>

            <p class="card__meta">
                Prototypes
            </p>

            <h3 class="card__title">
                Build it before overthinking it
            </h3>

            <p class="card__text">
                Quick concepts and prototypes used to find out whether an
                idea actually works before turning it into something bigger.
            </p>

            <a
                class="text-link"
                href={url('/playground/prototypes')}
            >
                View prototypes
                <span aria-hidden="true">→</span>
            </a>
        </article>

        <article class="card">
            <Icon name="idea" />

            <span
                class="card__number"
                aria-hidden="true"
            >
                03
            </span>

            <p class="card__meta">
                Weird ideas
            </p>

            <h3 class="card__title">
                Because why not?
            </h3>

            <p class="card__text">
                Ideas that probably did not need to exist, but were
                interesting enough that I wanted to see how far they could go.
            </p>

            <a
                class="text-link"
                href={url('/playground/ideas')}
            >
                Explore weird ideas
                <span aria-hidden="true">→</span>
            </a>
        </article>
    </div>

    <div class="section__footer">
        <a
            class="text-link"
            href={url('/playground')}
        >
            Enter the playground
            <span aria-hidden="true">→</span>
        </a>
    </div>
</section>
