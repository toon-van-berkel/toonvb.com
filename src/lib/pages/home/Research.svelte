<script lang="ts">
    import Icon from '$lib/components/icon/Icon.svelte';
</script>

<section class="section" aria-labelledby="research-title">
    <header class="section__header">
        <p class="section__eyebrow">Research</p>

        <h2 class="section__title" id="research-title">
            I like knowing why something works.
        </h2>

        <p class="section__lead">
            Some ideas start with code. Others start with a question.
            Research helps me understand what should be built, for whom and why.
        </p>
    </header>

    <div class="grid grid--3">
        <!-- 01 -->
        <article class="card">
            <Icon name="sustainability" />
            <span class="card__number">01</span>

            <p class="card__meta">
                Trend research · 2026
            </p>

            <h3 class="card__title">
                Sustainability & outdoor purchasing
            </h3>

            <p class="card__text">
                How much does sustainability influence what consumers choose
                when buying outdoor products, clothing and brands?
            </p>

            <a class="text-link" href="/research/sustainability-outdoor">
                Read research →
            </a>
        </article>

        <!-- 02 -->
        <article class="card">
            <Icon name="visual" />
            <span class="card__number">02</span>

            <p class="card__meta">
                Design research
            </p>

            <h3 class="card__title">
                Visual design & first impressions
            </h3>

            <p class="card__text">
                How hierarchy, typography, colour and composition influence
                the first impression of a digital product.
            </p>

            <a class="text-link" href="/research/visual-design">
                Read research →
            </a>
        </article>

        <!-- 03 -->
        <article class="card">
            <Icon name="usability" />
            <span class="card__number">03</span>

            <p class="card__meta">
                UX research
            </p>

            <h3 class="card__title">
                Usability & intuitive interfaces
            </h3>

            <p class="card__text">
                What makes an interface feel intuitive, and how navigation
                and interaction can reduce friction for users.
            </p>

            <a class="text-link" href="/research/usability">
                Read research →
            </a>
        </article>
    </div>

    <div class="section__footer">
        <a class="text-link" href="/research">
            View all research →
        </a>
    </div>
</section>
