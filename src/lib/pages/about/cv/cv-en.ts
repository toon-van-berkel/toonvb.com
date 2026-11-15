import type { CvPageDefinition } from '$lib/types/cv';

export const page = {
    metadata: { title: 'CV: Creative Developer Toon van Berkel - toonvb.com portfolio', description: "Explore Toon van Berkel's CV, including software development projects, education, work experience, technical skills, First Aid certification and community work." },
    hero: { name: 'Toon van Berkel', role: 'Creative Developer', disciplines: 'Code · Design · Interaction', location: 'Spijkenisse, Netherlands', website: 'toonvb.com', github: 'GitHub', linkedin: 'LinkedIn', download: 'Print CV', downloadHint: "Opens your browser's print dialog, where you can save the CV as a PDF.", contact: 'Get in touch' },
    profile: { title: 'Profile', body: "I'm a developer and designer who enjoys turning curious ideas into practical digital experiences. I build websites, applications and interactive tools, from early concepts to working products. With a background in software development and ongoing studies in Creative Media & Game Technologies, I approach projects from both a technical and a user-focused perspective." },
    projects: { title: 'Selected projects', items: [
        { title: 'D&D Portal Wiki', eyebrow: 'Personal project · SvelteKit · TypeScript', description: 'I design, develop and maintain a Dungeons & Dragons reference website. The project brings together structured game information with a focus on clear navigation and a useful browsing experience.', technologies: ['SvelteKit', 'TypeScript'], href: '/projects/dnd-portal/', linkLabel: 'View project' },
        { title: 'Antarctica SC', eyebrow: 'Scouting website · Web design · Responsive development', description: "I designed and developed a responsive website for Antarctica Stam, part of Scouting Hartelgroep. It brings the group's information together in a clear, easy-to-navigate experience that reflects its identity.", technologies: ['Web design', 'Responsive development'], href: '/projects/antarctica-sc/', linkLabel: 'View project' },
        { title: 'D&D Encounter Library', eyebrow: 'School project · Laravel · PHP · Blade · Livewire · SQLite', description: 'I built a Laravel application where people can discover, save and share Dungeons & Dragons encounters. It includes accounts, favourites, encounter management, authorisation and automated checks.', technologies: ['Laravel', 'PHP', 'Blade', 'Livewire', 'SQLite'], href: '/projects/dnd-encounter-library/', linkLabel: 'View project' }
    ] },
    experience: { title: 'Work experience', items: [
        { title: 'HTR BV — Software Development Intern', body: 'During my internship, I gained hands-on experience working with Svelte and web applications in a professional development environment. I applied my software development skills to practical work beyond the classroom.' },
        { title: 'Labolutions — IT & Communication', body: 'I contributed to IT and communication-related activities, including representing the organisation at an industry exhibition. The role gave me experience combining technical work with communication.' }
    ] },
    education: { title: 'Education', items: [
        { title: 'Creative Media & Game Technologies (CMGT)', subtitle: 'Hogeschool Rotterdam', period: '2025–present', body: 'Combining programming, interaction design and research in practical creative technology projects.', icon: 'prototype' },
        { title: 'Software Developer — MBO Level 4', subtitle: 'Techniek College Rotterdam', period: '2023–2025', body: 'Completed an accelerated software development programme.', icon: 'developer' }
    ] },
    skills: { title: 'Skills', groups: [
        { title: 'Development', items: ['SvelteKit', 'Svelte', 'TypeScript', 'JavaScript', 'PHP', 'Laravel', 'HTML', 'CSS', 'SCSS'] },
        { title: 'Tools & data', items: ['Git', 'GitHub', 'SQLite'] },
        { title: 'Design', items: ['UI/UX design', 'Responsive web development', 'Interaction design'] }
    ] },
    certificates: { title: 'Certificates & recognition', items: [
        { title: 'First Aid (EHBO)', subtitle: 'Diploma Eerste Hulp · Het Oranje Kruis', period: 'Valid through April 2027', icon: 'accessibility' },
        { title: 'Ondernemers Challenge 2024', subtitle: 'Third place', icon: 'personal' }
    ] },
    languages: { title: 'Languages', items: ['Dutch', 'English'] },
    community: { title: 'Community & organisation', items: [
        { title: 'Scouting volunteer', body: 'I help organise activities and support younger members. Scouting gives me opportunities to collaborate, take responsibility and turn plans into real experiences.' },
        { title: 'Dungeon Master & D&D organiser', body: "I prepare sessions and stories, coordinate players and guide collaborative adventures. It's a creative way to practise planning, communication and improvisation." }
    ] }
} satisfies CvPageDefinition;
