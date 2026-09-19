# Current styling inventory

## Global
- src/lib/scss/_reset.scss: reset.
- src/lib/scss/_common.scss: document and body foundations.
- src/lib/scss/_vars.scss: CSS variables/design tokens.
- src/lib/scss/responsive.scss: global responsive rules.
- src/lib/scss/style.scss: global entrypoint.
- src/lib/scss/components/_components.scss: shared SCSS imports.

## Layout primitives
- src/lib/components/layout/scss/section.scss: centered width, spacing and section typography.
- src/lib/components/layout/scss/split.scss: two-column compositions and responsive collapse.
- src/lib/components/layout/scss/stack.scss: vertical stacks.
- src/lib/components/layout/scss/flow.scss: flow/list layouts.
- src/lib/components/layout/scss/panel.scss: shared panel shell.
- src/lib/components/layout/scss/hero.scss: hero treatment.

## Shared component styles
- src/lib/components/content/scss/: links, tags, titles and descriptions.
- src/lib/components/cards/scss/: cards, grids and numbers.
- src/lib/components/media/scss/: media, captions, logos and showcases.
- src/lib/components/stats/scss/stats.scss: stats presentation.

## Feature/page styles
- src/lib/components/navbar/: navbar styles and responsive partials.
- src/lib/components/footer/: footer styles and responsive partials.
- src/lib/components/research/Research.scss: research overview.
- src/lib/components/research/VisibleImpact.scss: research detail.
- src/lib/pages/home/FeaturedWork.scss: homepage featured-work rules.

Reusable candidates are the tokens, layout, content, cards, media and stats primitives. Migration-sensitive/legacy areas are homepage section styles, overlapping content sources and locally imported feature styles.
