<script lang="ts">
    import { url } from '$lib/utils/url';
    import Card from '$lib/components/cards/Card.svelte';
    import { reveal } from '$lib/utils/reveal';
</script>

<section
    use:reveal
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
        <Card number="01" icon="experiment" meta="Experiments" title="Try something new" text="Small experiments where I test technologies, interactions or ideas without needing them to become a complete product." href={url('/playground/experiments')} linkLabel="View experiments" />

        <Card number="02" icon="prototype" meta="Prototypes" title="Build it before overthinking it" text="Quick concepts and prototypes used to find out whether an idea actually works before turning it into something bigger." href={url('/playground/prototypes')} linkLabel="View prototypes" />

        <Card number="03" icon="idea" meta="Weird ideas" title="Because why not?" text="Ideas that probably did not need to exist, but were interesting enough that I wanted to see how far they could go." href={url('/playground/ideas')} linkLabel="Explore weird ideas" />
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
