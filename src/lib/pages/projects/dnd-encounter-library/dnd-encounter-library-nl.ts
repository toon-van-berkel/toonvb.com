import type { ProjectContent } from '$lib/types/project';

export const content = {
    title: 'D&D Encounter Library',
    type: 'Schoolproject',
    status: 'Gepubliceerd',
    summary: 'Een Laravel-website waar mensen encounters voor Dungeons & Dragons kunnen vinden, opslaan en delen.',
    caseStudy: {
        overview: { title: 'De volgende encounter vinden.', paragraphs: ['Het kiezen van een encounter is onderdeel van de voorbereiding van een Dungeons & Dragons-sessie. Voor dit schoolproject bouwde ik een bibliotheek waarin mensen encounters kunnen bekijken, details kunnen lezen en ideeën kunnen bewaren voor later.', 'Het project combineert dat herkenbare onderwerp met het praktische werk van een complete webapplicatie: accounts, formulieren, opgeslagen favorieten, rechten en deployment.'] },
        features: {
            title: 'Van bekijken naar een idee bewaren.',
            lead: 'Bezoekers kunnen de bibliotheek zonder account verkennen. Inloggen voegt persoonlijke favorieten toe en geeft toegang tot functies voor het bijdragen van encounters.',
            items: [
                { title: 'Een encounter vinden', body: 'Zoek op titel of omschrijving en filter daarna op type en moeilijkheid om de actieve encounters te verfijnen.' },
                { title: 'De details verkennen', body: 'Open een encounter om meer te lezen. Populaire encounters en optionele afbeeldingen bieden extra startpunten om de bibliotheek te verkennen.' },
                { title: 'Ideeën bewaren voor later', body: 'Sla favorieten op in je account zodat je tijdens de voorbereiding op een sessie naar encounters kunt terugkeren.' }
            ]
        },
        details: {
            title: 'Meedoen aan de bibliotheek.',
            paragraphs: ['Gebruikers kunnen zich registreren, hun accountinstellingen beheren en de encounters onderhouden die ze zelf hebben gemaakt. Een encounter aanmaken wordt beschikbaar na het opslaan van vijf favorieten; die vereiste is onderdeel van de bijdragemogelijkheid.', 'Autorisatie scheidt acties van gebruikers en beheerders en controleert welke encounters een gebruiker mag beheren.'],
            columns: [
                { title: 'Account en bijdragen', body: 'Gebruikers kunnen hun account beheren en de encounters onderhouden die ze zelf hebben gemaakt.' },
                { title: 'Toegang en eigenaarschap', body: 'Autorisatie scheidt acties van gebruikers en beheerders en controleert welke encounters een gebruiker mag beheren.' }
            ]
        },
        highlight: {
            title: 'Meer dan een verzameling pagina’s.',
            paragraphs: ['Ik bouwde de applicatie met Laravel, PHP, Blade en Livewire, en gebruikte Eloquent om met een SQLite-database te werken.', 'Naast de interface bevat het project geautomatiseerde tests, statische analyse en een handmatig gedeployde productieomgeving. Het gaf me ervaring met het verbinden van de zichtbare delen van een applicatie aan data, toegangsregels en het releaseproces.']
        }
    },
    closing: {
        title: 'Verken de encounterbibliotheek.',
        paragraphs: ['Bekijk het gepubliceerde project om de encounters te verkennen en te zien hoe de bibliotheek werkt.'],
        cta: 'Bekijk D&D Encounter Library'
    }
} satisfies ProjectContent;
