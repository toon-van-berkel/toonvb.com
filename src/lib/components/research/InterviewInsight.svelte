<script lang="ts">
    export type InterviewInsight = { title: string; profile: string; finding: string; quote?: string; highlight?: string };
    let { item, index }: { item: InterviewInsight; index: number } = $props();
</script>

<article class:interview-insight--reverse={index % 2 === 1} class="interview-insight">
    <span class="number" aria-hidden="true">0{index + 1}</span>
    <div>
        <h3>{item.title}</h3>
        <p class="card__meta">{item.profile}</p>
    </div>
    <p class="description">{item.finding}</p>
    {#if item.quote}<blockquote>“{item.quote}”</blockquote>{/if}
    {#if item.highlight}<p class="interview-insight__highlight">{item.highlight}</p>{/if}
</article>
