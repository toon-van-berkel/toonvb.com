import type { HomeCopy } from '$lib/types/page';

export const page = {
    hero: { slides: [{ eyebrow: 'Portfolio website van Toon van Berkel', title: 'Ik verander nieuwsgierigheid in dingen die echt werken.', description: 'Ik ben Toon van Berkel — developer, designer en student Creative Media & Game Technologies.', primaryCta: 'Bekijk projecten', secondaryCta: 'Neem contact op', roles: [{ label: 'Developer', icon: 'developer', href: '/projects' }, { label: 'Designer', icon: 'designer', href: '/projects' }, { label: 'Researcher', icon: 'researcher', href: '/research' }, { label: 'UX/UI gericht', icon: 'accessibility', href: '/research' }] }, { eyebrow: 'Van idee naar impact', title: 'Kleine ideeën blijven zelden klein.', description: 'Ik doe meer dan alleen programmeren. Ik reis en probeer zoveel mogelijk van de wereld te zien.', primaryCta: 'Bekijk projecten', secondaryCta: 'Neem contact op', roles: [{ label: 'Developer', icon: 'developer', href: '/projects' }, { label: 'Designer', icon: 'designer', href: '/projects' }, { label: 'Researcher', icon: 'researcher', href: '/research' }, { label: 'UX/UI gericht', icon: 'accessibility', href: '/research' }] }] },
    approach: { eyebrow: 'Mijn kijk op digitaal ontwerp', title: 'Ontwerp is meer dan hoe iets eruitziet', lead: 'Ik ben pas tevreden als iets al goed voelt op het moment dat je het opent. Duidelijk, verzorgd en bewust — nog voordat je ergens op hebt geklikt.' },
    principles: [
        { title: 'Visuele helderheid', text: 'Een sterke hiërarchie, typografie, kleur en compositie bepalen hoe een digitale ervaring voelt voordat iemand ermee heeft geïnterageerd.', link: 'Onderzoek naar visueel ontwerp', researchSlug: 'visual-design' },
        { title: 'Gebruiksvriendelijkheid', text: 'Goede interfaces maken de volgende stap vanzelfsprekend. Navigatie, structuur en interactie helpen mensen te bereiken waarvoor ze kwamen.', link: 'Onderzoek naar gebruiksvriendelijkheid', researchSlug: 'usability' },
        { title: 'Performance', text: 'Een verzorgde website moet ook direct aanvoelen. Laadsnelheid, responsiviteit en vloeiende interactie zijn onderdeel van de ervaring.', link: 'Onderzoek naar web performance', researchSlug: 'web-performance' },
        { title: 'Toegankelijkheid', text: 'Goed webdesign blijft duidelijk en bruikbaar op verschillende apparaten, met verschillende invoermethoden en behoeften.', link: 'Onderzoek naar toegankelijkheid', researchSlug: 'accessibility' }
    ],
    research: {
        eyebrow: 'Research', title: 'I like knowing why something works.', lead: 'Some ideas start with code. Others start with a question. Research helps me understand what should be built, for whom and why.', read: 'Read research', viewAll: 'View all research',
        sustainability: { meta: 'Trend research · 2026', title: 'Sustainability & outdoor purchasing', text: 'How much does sustainability influence what consumers choose when buying outdoor products, clothing and brands?' },
        visualDesign: { meta: 'Design research', title: 'Visuele helderheid', text: 'Een sterke hiërarchie, typografie, kleur en compositie bepalen hoe een digitale ervaring voelt voordat iemand ermee heeft geïnterageerd.' },
        usability: { meta: 'UX research', title: 'Gebruiksvriendelijkheid', text: 'Goede interfaces maken de volgende stap vanzelfsprekend. Navigatie, structuur en interactie helpen mensen te bereiken waarvoor ze kwamen.' }
    },
    featured: {
        eyebrow: 'Featured work', title: "A few things I've built.", lead: 'Some projects are still in progress, others are constantly evolving — but these are already live or presentable.', visit: 'Visit website', story: 'Story behind the development', related: 'Related research', screenshotOf: 'Screenshot of', date: '04 September 2026',
        dnd: { screenshotAlt: 'Screenshot of the DND-Portal website', domain: 'dnd-portal.com', caption: 'The DND-Portal interface showing the main campaign and worldbuilding environment.' },
        antarctica: { description: 'A public-facing website created for Antarctica SC, focused on presenting information clearly through a modern and accessible web experience.', screenshotAlt: 'Screenshot of the Antarctica SC website', domain: 'antarctica-sc.nl', caption: 'The Antarctica SC website, showing the public-facing interface and visual identity of the project.' }
    }
} satisfies HomeCopy;
