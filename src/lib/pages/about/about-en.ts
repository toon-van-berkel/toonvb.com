import type { AboutPageDefinition } from '$lib/types/page';

export const page = {
    header: {
        eyebrow: 'Beyond the projects',
        title: 'Small ideas have a habit of becoming big projects.',
        description: 'I’m Toon van Berkel, a creative software developer and Creative Media & Game Technologies student in Rotterdam.',
        image: '/images/about/ToonvanBerkel.jpg'
    },
    portrait: '/images/about/ToonvanBerkel.jpg',
    intro: [
        'I’m Toon van Berkel, a creative software developer and Creative Media & Game Technologies student in Rotterdam. I design and build websites, tools and platforms, usually because something makes me think: what if I made that myself?',
        'I enjoy figuring out how things work, giving them a clear visual identity and improving the details. Sometimes that leads to a finished website. Sometimes it becomes a project I keep adding to.'
    ],
    origin: {
        title: 'It started with a Minecraft server.',
        paragraphs: [
            'Around 2023, I started programming through setting up a Minecraft server. It gave me a reason to experiment, solve problems and discover what I could make myself.',
            'That curiosity has stayed with me. These days, I work across development, design and research, but I still enjoy the same thing: having an idea, figuring it out and seeing it become something people can use.'
        ]
    },
    dndPortal: {
        title: 'A game with friends. A project that keeps growing.',
        paragraphs: [
            'D&D Portal Wiki is the project I’m most proud of.',
            'It grew out of playing Dungeons & Dragons with friends, sitting around a table together. What started as a small idea became a wiki with 574 spells, a growing collection of classes and original content.',
            'According to Google Analytics, it now receives around 2,000 visitors a week. Seeing something that started with our own games reach other players is something I’m proud of.',
            'The project keeps growing, and so do my ideas for it. If you want to see how far I can take a small idea, this is the place to look.'
        ],
        cta: 'Explore D&D Portal Wiki ↗',
        externalUrl: 'https://dnd-portal.com',
        stats: [
            { value: '574', label: 'spells' },
            { value: '~2,000', label: 'weekly visitors' }
        ]
    },
    outsideProgramming: {
        title: 'Away from the keyboard.',
        paragraphs: [
            'My trip to South Korea for the Jamboree is the travel experience that has stayed with me most. Being away from home for that long was an incredible experience.',
            'Music is another constant, although what I listen to depends on my mood. Imagine Dragons, Slipknot, Pink Floyd, My Chemical Romance and Dire Straits all have a place in the mix.',
            'I don’t game as much as I used to, but when I do, it’s often Satisfactory. I also play D&D in person with friends—the reason D&D Portal exists in the first place. More recently, I’ve become a volunteer leader with the air scouts.'
        ]
    },
    collaboration: {
        eyebrow: 'LET’S WORK TOGETHER',
        title: 'Have something in mind?',
        website: {
            title: 'Let’s make your website.',
            paragraphs: ['Looking for someone to design or build your website? I’d love to hear what you have in mind. I enjoy turning ideas into websites that work well, look considered and are easy to use.'],
            cta: 'Tell me about your website →'
        },
        funder: {
            title: 'Help D&D Portal grow.',
            paragraphs: ['I’m also looking for people and organisations interested in supporting D&D Portal financially, with a funder credit on dnd-portal.com.', 'If you’d like to support the project and have your name associated with its continued growth, get in touch.'],
            cta: 'Become a funder →'
        }
    }
} satisfies AboutPageDefinition;
