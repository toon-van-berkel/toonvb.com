import type { HomeCopy } from '../types';

export const home: Record<'en' | 'nl', HomeCopy> = {
    en: {
        approach: { eyebrow: 'How I approach digital design', title: 'Design is more than how it looks', lead: "I’m only happy with something when it already feels right the moment you open it. Clear, polished and intentional — before you’ve even clicked anything." },
        principles: [
            { title: 'Visual clarity', text: 'Strong hierarchy, typography, colour and composition shape how a digital experience feels before a user has even interacted with it.', link: 'Explore visual design research', href: '/research/visual-design' },
            { title: 'Usability', text: 'Good interfaces should make the next step feel natural. Navigation, structure and interaction should help users achieve what they came for.', link: 'Explore usability research', href: '/research/usability' },
            { title: 'Performance', text: 'A polished website should also feel immediate. Loading speed, responsiveness and smooth interaction are part of the user experience.', link: 'Explore web performance research', href: '/research/web-performance' },
            { title: 'Accessibility', text: 'Good web design should remain clear and usable across different devices, input methods and user needs.', link: 'Explore web accessibility research', href: '/research/accessibility' }
        ],
        featured: {
            eyebrow: 'Featured work',
            title: "A few things I've built.",
            lead: 'Some projects are still in progress, others are constantly evolving — but these are already live or presentable.',
            visit: 'Visit website',
            story: 'Story behind the development',
            related: 'Related research',
            screenshotOf: 'Screenshot of',
            dndCaption: 'The DND-Portal interface showing the main campaign and worldbuilding environment.',
            antarcticaCaption: 'The Antarctica SC website, showing the public-facing interface and visual identity of the project.',
            dndDescription: 'A custom platform for campaigns, characters, lore and worldbuilding.',
            antarcticaDescription: 'A public-facing website created for Antarctica SC, focused on presenting information clearly through a modern and accessible web experience.',
            dndTags: ['SvelteKit', 'TypeScript', 'Personal project'],
            antarcticaTags: ['Web development', 'Responsive design', 'Client project'],
            date: '04 September 2026'
        },
        about: {
            eyebrow: 'Beyond the projects',
            title: 'I build things because I’m curious how far an idea can go.',
            first: 'I’m Toon van Berkel, a developer and designer studying Creative Media & Game Technologies in Rotterdam. Most of my projects start with a small question and somehow end up becoming complete platforms, tools or experiments.',
            second: 'I enjoy working where development, visual design and research overlap — figuring out how something should work, building it, and then polishing it until it feels intentional.',
            readMore: 'Read more about me',
            roles: ['Developer', 'Designer', 'Researcher', 'Professional project overcomplicator']
        },
        stats: { eyebrow: 'By the numbers', title: 'A little context behind the work.', labels: ['Years coding', 'Lines coded', 'Finished projects', 'Research projects', 'Group projects', 'Live projects', 'Projects being worked on'] },
        researchSection: { eyebrow: 'Research', title: 'I like knowing why something works.', lead: 'Some ideas start with code. Others start with a question. Research helps me understand what should be built, for whom and why.', read: 'Read research', all: 'View all research', meta: ['Trend research · 2026', 'Design research', 'UX research'], titles: ['Sustainability & outdoor purchasing', 'Visual design & first impressions', 'Usability & intuitive interfaces'], texts: ['How much does sustainability influence what consumers choose when buying outdoor products, clothing and brands?', 'How hierarchy, typography, colour and composition influence the first impression of a digital product.', 'What makes an interface feel intuitive, and how navigation and interaction can reduce friction for users.'] },
        playgroundSection: { eyebrow: 'Playground', title: 'Not everything needs to be a serious project.', lead: 'Sometimes I build something simply because an idea sounds interesting, weird or unnecessarily complicated.', categories: ['Experiments', 'Prototypes', 'Weird ideas'], titles: ['Try something new', 'Build it before overthinking it', 'Because why not?'], texts: ['Small experiments where I test technologies, interactions or ideas without needing them to become a complete product.', 'Quick concepts and prototypes used to find out whether an idea actually works before turning it into something bigger.', 'Ideas that probably did not need to exist, but were interesting enough that I wanted to see how far they could go.'], links: ['View experiments', 'View prototypes', 'Explore weird ideas'], enter: 'Enter the playground' },
        contactSection: { eyebrow: 'Let’s build something', title: 'Got an idea? Let’s see where it can go.', lead: 'Whether it starts as a rough concept, a weird experiment or an actual project, I’m always interested in seeing what can be made from it.', description: 'Need a website, application, prototype or someone to help figure out how an idea should work?', start: 'Start a conversation', linkedin: 'LinkedIn' }
    },
    nl: {
        approach: { eyebrow: 'Mijn kijk op digitaal ontwerp', title: 'Ontwerp is meer dan hoe iets eruitziet', lead: 'Ik ben pas tevreden als iets al goed voelt op het moment dat je het opent. Duidelijk, verzorgd en bewust — nog voordat je ergens op hebt geklikt.' },
        principles: [
            { title: 'Visuele helderheid', text: 'Een sterke hiërarchie, typografie, kleur en compositie bepalen hoe een digitale ervaring voelt voordat iemand ermee heeft geïnterageerd.', link: 'Onderzoek naar visueel ontwerp', href: '/research/visual-design' },
            { title: 'Gebruiksvriendelijkheid', text: 'Goede interfaces maken de volgende stap vanzelfsprekend. Navigatie, structuur en interactie helpen mensen te bereiken waarvoor ze kwamen.', link: 'Onderzoek naar gebruiksvriendelijkheid', href: '/research/usability' },
            { title: 'Performance', text: 'Een verzorgde website moet ook direct aanvoelen. Laadsnelheid, responsiviteit en vloeiende interactie zijn onderdeel van de ervaring.', link: 'Onderzoek naar web performance', href: '/research/web-performance' },
            { title: 'Toegankelijkheid', text: 'Goed webdesign blijft duidelijk en bruikbaar op verschillende apparaten, met verschillende invoermethoden en behoeften.', link: 'Onderzoek naar toegankelijkheid', href: '/research/accessibility' }
        ],
        featured: {
            eyebrow: 'Uitgelicht werk',
            title: 'Een paar dingen die ik heb gebouwd.',
            lead: 'Sommige projecten zijn nog in ontwikkeling, andere blijven veranderen — maar deze zijn al live of goed te tonen.',
            visit: 'Website bezoeken',
            story: 'Het verhaal achter de ontwikkeling',
            related: 'Gerelateerd onderzoek',
            screenshotOf: 'Screenshot van',
            dndCaption: 'De DND-Portal-interface met de belangrijkste campagne- en worldbuildingomgeving.',
            antarcticaCaption: 'De website van Antarctica SC met de publieke interface en visuele identiteit van het project.',
            dndDescription: 'Een platform voor campagnes, personages, lore en worldbuilding.',
            antarcticaDescription: 'Een publieke website voor Antarctica SC, gericht op het helder presenteren van informatie in een moderne en toegankelijke webervaring.',
            dndTags: ['SvelteKit', 'TypeScript', 'Persoonlijk project'],
            antarcticaTags: ['Webdevelopment', 'Responsive design', 'Klantproject'],
            date: '4 september 2026'
        },
        about: {
            eyebrow: 'Meer dan projecten',
            title: 'Ik bouw dingen omdat ik wil ontdekken hoe ver een idee kan komen.',
            first: 'Ik ben Toon van Berkel, een developer en designer die Creative Media & Game Technologies studeert in Rotterdam. De meeste projecten beginnen met een kleine vraag en eindigen op de een of andere manier als complete platforms, tools of experimenten.',
            second: 'Ik werk graag op het snijvlak van development, visueel ontwerp en onderzoek — uitzoeken hoe iets moet werken, het bouwen en daarna de details verfijnen totdat het bewust aanvoelt.',
            readMore: 'Meer over mij',
            roles: ['Developer', 'Designer', 'Onderzoeker', 'Professionele projectovercomplicator']
        },
        stats: { eyebrow: 'In cijfers', title: 'Een beetje context achter het werk.', labels: ['Jaar coderen', 'Regels code', 'Afgeronde projecten', 'Onderzoeksprojecten', 'Groepsprojecten', 'Live projecten', 'Projecten in ontwikkeling'] },
        researchSection: { eyebrow: 'Onderzoek', title: 'Ik wil graag weten waarom iets werkt.', lead: 'Sommige ideeën beginnen met code. Andere beginnen met een vraag. Onderzoek helpt mij begrijpen wat er gebouwd moet worden, voor wie en waarom.', read: 'Onderzoek lezen', all: 'Alle onderzoeken bekijken', meta: ['Trendonderzoek · 2026', 'Ontwerponderzoek', 'UX-onderzoek'], titles: ['Duurzaamheid en aankopen voor buiten', 'Visueel ontwerp en eerste indrukken', 'Gebruiksvriendelijkheid en intuïtieve interfaces'], texts: ['In hoeverre beïnvloedt duurzaamheid wat consumenten kiezen bij het kopen van outdoorproducten, kleding en merken?', 'Hoe beïnvloeden hiërarchie, typografie, kleur en compositie de eerste indruk van een digitaal product?', 'Wat maakt een interface intuïtief, en hoe kunnen navigatie en interactie wrijving voor gebruikers verminderen?'] },
        playgroundSection: { eyebrow: 'Speeltuin', title: 'Niet alles hoeft een serieus project te zijn.', lead: 'Soms bouw ik iets simpelweg omdat een idee interessant, vreemd of onnodig ingewikkeld klinkt.', categories: ['Experimenten', 'Prototypes', 'Vreemde ideeën'], titles: ['Iets nieuws proberen', 'Bouwen voordat ik te veel nadenk', 'Waarom ook niet?'], texts: ['Kleine experimenten waarin ik technologieën, interacties of ideeën test zonder dat het een compleet product hoeft te worden.', 'Snelle concepten en prototypes om te ontdekken of een idee echt werkt voordat het groter wordt.', 'Ideeën die waarschijnlijk niet hoefden te bestaan, maar interessant genoeg waren om te ontdekken hoe ver ze konden komen.'], links: ['Experimenten bekijken', 'Prototypes bekijken', 'Vreemde ideeën bekijken'], enter: 'De speeltuin betreden' },
        contactSection: { eyebrow: 'Laten we iets bouwen', title: 'Een idee? Laten we kijken waar het heen kan.', lead: 'Of het nu begint als een ruw concept, vreemd experiment of echt project: ik ben altijd benieuwd wat ervan gemaakt kan worden.', description: 'Een website, applicatie, prototype of iemand nodig om uit te zoeken hoe een idee moet werken?', start: 'Een gesprek beginnen', linkedin: 'LinkedIn' }
    }
};
