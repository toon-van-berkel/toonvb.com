import type { HomeCopy } from '$lib/types/page';

export const page = {
    hero: { slides: [{ eyebrow: 'Toon van Berkel portfolio website', title: 'I turn curiosity into things that actually work.', description: 'I’m Toon van Berkel — developer, designer and Creative Media & Game Technologies student.', primaryCta: 'View projects', secondaryCta: 'Contact me', roles: [{ label: 'Developer', icon: 'developer', href: '/projects' }, { label: 'Designer', icon: 'designer', href: '/projects' }, { label: 'Researcher', icon: 'researcher', href: '/research' }, { label: 'UX/UI focused', icon: 'accessibility', href: '/research' }] }, { eyebrow: 'From idea to impact', title: 'Small ideas rarely stay small.', description: 'I do more than just program. I travel and try to see as much of the world as I can.', primaryCta: 'View projects', secondaryCta: 'Contact me', roles: [{ label: 'Developer', icon: 'developer', href: '/projects' }, { label: 'Designer', icon: 'designer', href: '/projects' }, { label: 'Researcher', icon: 'researcher', href: '/research' }, { label: 'UX/UI focused', icon: 'accessibility', href: '/research' }] }] },
    approach: { eyebrow: 'How I approach digital design', title: 'Design is more than how it looks', lead: "I’m only happy with something when it already feels right the moment you open it. Clear, polished and intentional — before you’ve even clicked anything." },
    principles: [
        { title: 'Visual clarity', text: 'Strong hierarchy, typography, colour and composition shape how a digital experience feels before a user has even interacted with it.', link: 'Explore visual design research', researchSlug: 'visual-design' },
        { title: 'Usability', text: 'Good interfaces should make the next step feel natural. Navigation, structure and interaction should help users achieve what they came for.', link: 'Explore usability research', researchSlug: 'usability' },
        { title: 'Performance', text: 'A polished website should also feel immediate. Loading speed, responsiveness and smooth interaction are part of the user experience.', link: 'Explore web performance research', researchSlug: 'web-performance' },
        { title: 'Accessibility', text: 'Good web design should remain clear and usable across different devices, input methods and user needs.', link: 'Explore web accessibility research', researchSlug: 'accessibility' }
    ],
    research: {
        eyebrow: 'Research', title: 'I like knowing why something works.', lead: 'Some ideas start with code. Others start with a question. Research helps me understand what should be built, for whom and why.', read: 'Read research', viewAll: 'View all research',
        sustainability: { meta: 'Trend research · 2026', title: 'Sustainability & outdoor purchasing', text: 'How much does sustainability influence what consumers choose when buying outdoor products, clothing and brands?' },
        visualDesign: { meta: 'Design research', title: 'Visual design & first impressions', text: 'How hierarchy, typography, colour and composition influence the first impression of a digital product.' },
        usability: { meta: 'UX research', title: 'Usability & intuitive interfaces', text: 'What makes an interface feel intuitive, and how navigation and interaction can reduce friction for users.' }
    },
    featured: {
        eyebrow: 'Featured work', title: "A few things I've built.", lead: 'Some projects are still in progress, others are constantly evolving — but these are already live or presentable.', visit: 'Visit website', story: 'Story behind the development', related: 'Related research', screenshotOf: 'Screenshot of', date: '04 September 2026',
        dnd: { screenshotAlt: 'Screenshot of the DND-Portal website', domain: 'dnd-portal.com', caption: 'The DND-Portal interface showing the main campaign and worldbuilding environment.' },
        antarctica: { description: 'A public-facing website created for Antarctica SC, focused on presenting information clearly through a modern and accessible web experience.', screenshotAlt: 'Screenshot of the Antarctica SC website', domain: 'antarctica-sc.nl', caption: 'The Antarctica SC website, showing the public-facing interface and visual identity of the project.' }
    }
} satisfies HomeCopy;
