export type ResearchTopic = { slug: string; title: string; type: string; status: 'topic'; description: string };

export const research: ResearchTopic[] = [
    { slug: 'visual-design', title: 'Visual design', type: 'Topic', status: 'topic', description: 'A subject I use to think about hierarchy, typography, colour, composition and the feeling of an interface.' },
    { slug: 'usability', title: 'Usability', type: 'Topic', status: 'topic', description: 'A subject I use to examine whether structure, navigation and interaction help people reach their goal.' },
    { slug: 'web-performance', title: 'Web performance', type: 'Topic', status: 'topic', description: 'A subject I use to think about loading speed, responsiveness and the relationship between technical quality and experience.' },
    { slug: 'accessibility', title: 'Accessibility', type: 'Topic', status: 'topic', description: 'A subject I use to keep digital experiences clear and usable across different devices, input methods and needs.' }
];
