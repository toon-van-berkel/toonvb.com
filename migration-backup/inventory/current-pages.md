# Current public page inventory

## /
- Route: src/routes/+page.svelte
- Content: src/lib/i18n/pages/home.ts
- Components: src/lib/pages/home/*.svelte
- Languages: English and Dutch.
- Assets: homepage hero, project images/logos and icons.
- Important: primary visual reference.

## /about
- Route: src/routes/about/+page.svelte
- Content: src/lib/i18n/pages/about.ts
- Components: SectionHeader and shared layout primitives.
- Languages: English and Dutch.
- Asset: static/images/about/toon-workspace.jpg.

## /contact
- Route: src/routes/contact/+page.svelte
- Content: src/lib/i18n/pages/contact.ts
- Important: contact@toonvb.com.

## /playground
- Route: src/routes/playground/+page.svelte
- Content: src/lib/i18n/pages/playground.ts.
- Alternate content: src/lib/content/playground.ts.

## /projects
- Route: src/routes/projects/+page.svelte
- Content: src/lib/content/projects.ts and src/lib/i18n/pages/projects.ts.
- Component: src/lib/components/projects/ProjectShowcase.svelte.
- Assets: DND-Portal and Antarctica SC images/logos.

## /projects/[slug]
- Routes: src/routes/projects/[slug]/+page.ts and +page.svelte.
- Content: src/lib/content/projects.ts.
- Logic: getProject(slug) and 404 handling.

## /research
- Route: src/routes/research/+page.svelte.
- Content: src/lib/i18n/pages/research.ts.
- Components: SectionHeader, ResearchArchiveItem and Icon.
- Assets: static/images/research/sustainability-outdoor.webp and research-decisions-banner.webp.

## /research/visible-impact
- Route: src/routes/research/visible-impact/+page.svelte.
- Content: src/lib/i18n/pages/researchVisibleImpact.ts.
- Components: SectionHeader and InterviewInsight.
- Styling: VisibleImpact.scss.
- Current content is TODO placeholder content.

## /changelog
- Route: src/routes/changelog/+page.svelte.
- Content: src/lib/content/changelog.ts.

## /roadmap
- Route: src/routes/roadmap/+page.svelte.
- Content: src/lib/content/roadmap.ts.
