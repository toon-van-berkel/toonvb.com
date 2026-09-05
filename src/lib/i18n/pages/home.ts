import type { HomeCopy } from '../types';

export const home: Record<'en' | 'nl', HomeCopy> = {
    en: {
        approach: { eyebrow: 'How I approach digital design', title: 'Design is more than how it looks', lead: "I’m only happy with something when it already feels right the moment you open it. Clear, polished and intentional — before you’ve even clicked anything." },
        principles: [
            { title: 'Visual clarity', text: 'Strong hierarchy, typography, colour and composition shape how a digital experience feels before a user has even interacted with it.', link: 'Explore visual design research', href: '/research/visual-design' },
            { title: 'Usability', text: 'Good interfaces should make the next step feel natural. Navigation, structure and interaction should help users achieve what they came for.', link: 'Explore usability research', href: '/research/usability' },
            { title: 'Performance', text: 'A polished website should also feel immediate. Loading speed, responsiveness and smooth interaction are part of the user experience.', link: 'Explore web performance research', href: '/research/web-performance' },
            { title: 'Accessibility', text: 'Good web design should remain clear and usable across different devices, input methods and user needs.', link: 'Explore web accessibility research', href: '/research/accessibility' }
        ]
    },
    nl: {
        approach: { eyebrow: 'Mijn kijk op digitaal ontwerp', title: 'Ontwerp is meer dan hoe iets eruitziet', lead: 'Ik ben pas tevreden als iets al goed voelt op het moment dat je het opent. Duidelijk, verzorgd en bewust — nog voordat je ergens op hebt geklikt.' },
        principles: [
            { title: 'Visuele helderheid', text: 'Een sterke hiërarchie, typografie, kleur en compositie bepalen hoe een digitale ervaring voelt voordat iemand ermee heeft geïnterageerd.', link: 'Onderzoek naar visueel ontwerp', href: '/research/visual-design' },
            { title: 'Gebruiksvriendelijkheid', text: 'Goede interfaces maken de volgende stap vanzelfsprekend. Navigatie, structuur en interactie helpen mensen te bereiken waarvoor ze kwamen.', link: 'Onderzoek naar gebruiksvriendelijkheid', href: '/research/usability' },
            { title: 'Performance', text: 'Een verzorgde website moet ook direct aanvoelen. Laadsnelheid, responsiviteit en vloeiende interactie zijn onderdeel van de ervaring.', link: 'Onderzoek naar web performance', href: '/research/web-performance' },
            { title: 'Toegankelijkheid', text: 'Goed webdesign blijft duidelijk en bruikbaar op verschillende apparaten, met verschillende invoermethoden en behoeften.', link: 'Onderzoek naar toegankelijkheid', href: '/research/accessibility' }
        ]
    }
};
