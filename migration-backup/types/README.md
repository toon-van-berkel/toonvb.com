# Current type inventory

## Project
- Location: src/lib/content/projects.ts
- Properties: slug, title, type, status, summary, technologies, logo, image, optional external, optional sections.
- Used by: project data and ProjectShowcase.svelte.

## ResearchTopic
- Location: src/lib/content/research.ts
- Properties: slug, title, type, status, description.
- Used by: research topic dataset.

## Locale
- Location: src/lib/i18n/types.ts
- Values: en or nl.

## Copy
- Location: src/lib/i18n/types.ts
- Used by: translations.ts and $copy consumers.
- Contains common, navigation, footer, researchPage, projectsPage, playgroundPage and home. Several nested fields currently use any.

## HomeCopy
- Location: src/lib/i18n/types.ts
- Definition: Copy['home'].

## IconName
- Location: src/lib/components/icon/Icon.svelte
- Used by Icon.svelte and icon consumers.
- Contains visual, usability, performance, accessibility, sustainability, experiment, prototype, idea, developer, designer, researcher, overcomplicator, ts, sv, personal, web, responsive and client.

## InterviewInsight
- Location: src/lib/components/research/InterviewInsight.svelte
- Properties: title, profile, finding, optional quote and optional highlight.
