import type { AboutPageDefinition } from '$lib/types/page';

export const page = {
    header: {
        eyebrow: 'Meer dan de projecten',
        title: 'Kleine ideeën groeien bij mij vaak uit tot grote projecten.',
        description: 'Ik ben Toon van Berkel, creatief softwareontwikkelaar en student Creative Media & Game Technologies in Rotterdam.',
        image: '/images/about/ToonvanBerkel.jpg'
    },
    portrait: '/images/about/ToonvanBerkel.jpg',
    intro: [
        'Ik ben Toon van Berkel, creatief softwareontwikkelaar en student Creative Media & Game Technologies in Rotterdam. Ik ontwerp en bouw websites, tools en platforms. Meestal begint dat met de gedachte: wat als ik dat zelf zou maken?',
        'Ik vind het leuk om uit te zoeken hoe iets werkt, het een eigen uitstraling te geven en de details steeds verder te verbeteren. Soms levert dat een afgeronde website op. Soms wordt het een project waar ik aan blijf bouwen.'
    ],
    origin: {
        title: 'Het begon met een Minecraft-server.',
        paragraphs: [
            'Rond 2023 begon ik met programmeren door een Minecraft-server op te zetten. Het gaf me een aanleiding om te experimenteren, problemen op te lossen en te ontdekken wat ik zelf kon maken.',
            'Die nieuwsgierigheid is gebleven. Tegenwoordig combineer ik development, design en onderzoek, maar het plezier zit nog steeds in hetzelfde: een idee hebben, uitzoeken hoe het kan en er iets van maken dat mensen kunnen gebruiken.'
        ]
    },
    dndPortal: {
        title: 'Een spel met vrienden. Een project dat blijft groeien.',
        paragraphs: [
            'D&D Portal Wiki is het project waar ik het meest trots op ben.',
            'Het ontstond vanuit Dungeons & Dragons spelen met vrienden, samen aan tafel. Wat begon als een klein idee groeide uit tot een wiki met 574 spells, een groeiende verzameling classes en zelfgemaakte content.',
            'Volgens Google Analytics trekt de website inmiddels ongeveer 2.000 bezoekers per week. Dat iets wat begon bij onze eigen speelsessies nu ook andere spelers bereikt, maakt me trots.',
            'Het project blijft groeien, net als mijn ideeën ervoor. Wil je zien hoe groot een klein idee bij mij kan worden? Dan is dit de plek om te kijken.'
        ],
        cta: 'Bekijk D&D Portal Wiki ↗',
        externalUrl: 'https://dnd-portal.com',
        stats: [
            { value: '574', label: 'spells' },
            { value: '~2.000', label: 'bezoekers per week' }
        ]
    },
    outsideProgramming: {
        title: 'Buiten het programmeren.',
        paragraphs: [
            'Mijn reis naar Zuid-Korea voor de Jamboree is de reis die de meeste indruk op me heeft gemaakt. Zo lang van huis zijn en dat allemaal meemaken was een ongelooflijke ervaring.',
            'Muziek hoort er ook altijd bij, al hangt het van mijn stemming af wat ik luister. Imagine Dragons, Slipknot, Pink Floyd, My Chemical Romance en Dire Straits komen allemaal voorbij.',
            'Ik game minder dan vroeger, maar als ik speel, is dat vaak Satisfactory. Daarnaast speel ik graag D&D met vrienden, fysiek aan tafel—uiteindelijk de reden waarom D&D Portal bestaat. Sinds kort ben ik ook leiding bij de luchtscouts.'
        ]
    },
    collaboration: {
        eyebrow: 'LATEN WE SAMENWERKEN',
        title: 'Heb je een idee?',
        website: {
            title: 'Laten we jouw website maken.',
            paragraphs: ['Zoek je iemand om je website te ontwerpen of te bouwen? Ik hoor graag wat je in gedachten hebt. Ik maak graag websites die goed werken, een doordachte uitstraling hebben en prettig zijn om te gebruiken.'],
            cta: 'Vertel me over je website →'
        },
        funder: {
            title: 'Help D&D Portal verder groeien.',
            paragraphs: ['Ik zoek ook mensen en organisaties die D&D Portal financieel willen ondersteunen, met een vermelding als funder op dnd-portal.com.', 'Wil je bijdragen aan het project en met je naam verbonden zijn aan de verdere groei? Neem dan contact op.'],
            cta: 'Word funder →'
        }
    }
} satisfies AboutPageDefinition;
