<script lang="ts">
    let { item }: { item: { number: string; category: string; title: string; text: string } } = $props();
</script>

<article class="research-archive__item">
    <span class="research-archive__number" aria-hidden="true">{item.number}</span>
    <p class="section__eyebrow">{item.category}</p>
    <h3>{item.title}</h3>
    <p class="description">{item.text}</p>
    <span class="research-archive__arrow" aria-hidden="true">→</span>
</article>
