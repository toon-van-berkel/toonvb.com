import type { CvPageDefinition } from '$lib/types/cv';

export const page = {
    metadata: { title: 'CV: Developer en designer Toon van Berkel - toonvb.com portfolio', description: 'Bekijk het CV van Toon van Berkel met softwareprojecten, opleidingen, werkervaring, technische vaardigheden, EHBO-certificering en vrijwilligerswerk.' },
    hero: { name: 'Toon van Berkel', role: 'Creative Developer', disciplines: 'Code · Design · Interactie', location: 'Spijkenisse, Nederland', website: 'toonvb.com', github: 'GitHub', linkedin: 'LinkedIn', download: 'CV afdrukken', downloadHint: 'Opent de printdialoog van je browser, waar je het CV als PDF kunt opslaan.', contact: 'Neem contact op' },
    profile: { title: 'Profiel', body: 'Ik ben developer en designer en vind het leuk om nieuwsgierige ideeën om te zetten in digitale producten die echt werken. Ik ontwikkel websites, applicaties en interactieve tools, van het eerste concept tot een werkend resultaat. Met mijn achtergrond in softwareontwikkeling en mijn opleiding Creative Media & Game Technologies bekijk ik projecten zowel vanuit de techniek als vanuit de gebruiker.' },
    projects: { title: 'Uitgelichte projecten', items: [
        { title: 'D&D Portal Wiki', eyebrow: 'Persoonlijk project · SvelteKit · TypeScript', description: 'Ik ontwerp, ontwikkel en onderhoud een Dungeons & Dragons-website met informatie voor spelers en Dungeon Masters. Het project combineert gestructureerde spelinformatie met overzichtelijke navigatie en gebruiksgemak.', technologies: ['SvelteKit', 'TypeScript'], href: '/projects/dnd-portal/', linkLabel: 'Bekijk project' },
        { title: 'Antarctica SC', eyebrow: 'Scoutingwebsite · Webdesign · Responsive development', description: 'Ik ontwierp en ontwikkelde een responsive website voor Antarctica Stam, onderdeel van Scouting Hartelgroep. De site brengt informatie over de groep overzichtelijk samen in een vormgeving die bij de groep past.', technologies: ['Webdesign', 'Responsive development'], href: '/projects/antarctica-sc/', linkLabel: 'Bekijk project' },
        { title: 'D&D Encounter Library', eyebrow: 'Schoolproject · Laravel · PHP · Blade · Livewire · SQLite', description: 'Ik bouwde een Laravel-applicatie waarmee gebruikers Dungeons & Dragons-encounters kunnen ontdekken, bewaren en delen. De applicatie bevat accounts, favorieten, encounterbeheer, autorisatie en geautomatiseerde controles.', technologies: ['Laravel', 'PHP', 'Blade', 'Livewire', 'SQLite'], href: '/projects/dnd-encounter-library/', linkLabel: 'Bekijk project' }
    ] },
    experience: { title: 'Werkervaring', items: [
        { title: 'HTR BV — Stagiair softwareontwikkeling', body: 'Tijdens mijn stage deed ik praktijkervaring op met Svelte en webapplicaties binnen een professionele ontwikkelomgeving. Zo kon ik mijn kennis van softwareontwikkeling buiten school toepassen.' },
        { title: 'Labolutions — IT & communicatie', body: 'Ik ondersteunde werkzaamheden op het gebied van IT en communicatie, waaronder het vertegenwoordigen van de organisatie op een vakbeurs. Daarbij combineerde ik technische werkzaamheden met communicatie.' }
    ] },
    education: { title: 'Opleiding', items: [
        { title: 'Creative Media & Game Technologies (CMGT)', subtitle: 'Hogeschool Rotterdam', period: '2025–heden', body: 'Een combinatie van programmeren, interactieontwerp en onderzoek binnen praktische creatieve technologieprojecten.', icon: 'hogeschool-rotterdam' },
        { title: 'Software Developer — MBO niveau 4', subtitle: 'Techniek College Rotterdam', period: '2023–2025', body: 'Versneld afgeronde opleiding softwareontwikkeling.', icon: 'developer' }
    ] },
    skills: { title: 'Vaardigheden', groups: [
        { title: 'Development', items: [{ label: 'SvelteKit', icon: 'sv' }, { label: 'Svelte', icon: 'sv' }, { label: 'TypeScript', icon: 'ts' }, { label: 'JavaScript', icon: 'javascript' }, { label: 'PHP', icon: 'php' }, { label: 'Laravel', icon: 'laravel' }, { label: 'HTML', icon: 'html' }, { label: 'CSS', icon: 'css' }, { label: 'SCSS', icon: 'scss' }] },
        { title: 'Tools & data', items: [{ label: 'Git', icon: 'git' }, { label: 'GitHub', icon: 'github' }, { label: 'SQLite', icon: 'sqlite' }] },
        { title: 'Design', items: ['UI/UX-design', 'Responsive webdevelopment', 'Interactieontwerp'] }
    ] },
    certificates: { title: 'Certificaten & erkenning', items: [
        { title: 'Eerste Hulp (EHBO)', subtitle: 'Diploma Eerste Hulp · Het Oranje Kruis', period: 'Geldig tot en met april 2027', icon: 'first-aid', href: '/about/certificates/ehbo/', featured: true },
        { title: 'Ondernemers Challenge 2024', subtitle: 'Derde plaats', icon: 'personal' }
    ] },
    languages: { title: 'Talen', items: ['Nederlands', 'Engels'] },
    community: { title: 'Community & organisatie', items: [
        { title: 'Scoutingvrijwilliger', body: 'Ik help bij het organiseren van activiteiten en het begeleiden van jongere leden. Bij Scouting werk ik samen met anderen, neem ik verantwoordelijkheid en zet ik plannen om in activiteiten.', icon: 'scouting-nederland' },
        { title: 'Dungeon Master & D&D-organisator', body: 'Ik bereid sessies en verhalen voor, stem af met spelers en begeleid gezamenlijke avonturen. Een creatieve manier om te oefenen met plannen, communiceren en improviseren.', icon: 'hat-wizard' }
    ] }
} satisfies CvPageDefinition;
