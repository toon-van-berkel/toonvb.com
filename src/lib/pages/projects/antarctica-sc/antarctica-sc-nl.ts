import type { ProjectContent } from '$lib/types/project';

// Dutch translations are not approved yet; the English project copy is retained temporarily.
export const content = {
    title: 'Antarctica SC',
    type: 'Client project',
    status: 'Published',
    summary: 'A website for Antarctica Stam, bringing the character of our Scouting group online and helping new people find their way in.',
    intro: [
        'Antarctica Stam is part of Scouting Hartelgroep in Spijkenisse. It’s also part of my own life: a place where we make plans, organise activities and spend time together.',
        'Building its website gave me an opportunity to connect that experience with my work as a developer and designer. The challenge was to introduce the group to people who haven’t met us yet, while keeping it recognisable to those who have.'
    ],
    caseStudy: {
        overview: { title: 'Showing what the group is like.', paragraphs: ['Antarctica Stam is part of Scouting Hartelgroep in Spijkenisse, and a group I’m part of myself. The website needed to explain what we do while giving visitors a sense of the people and place behind it.', 'I put photography of our own space at the centre of the introduction. Together with the Antarctica identity and colours, it gives the site a familiar character for members and a first impression for people who haven’t visited yet.'] },
        features: { title: 'Making the first visit easier.', lead: 'Someone discovering the group needs a few straightforward answers before deciding to come along. The site brings those questions into a clear navigation structure, with a direct invitation to visit.', items: [{ title: 'Meet the group', body: 'Introduce Antarctica and its place within Scouting, so visitors can understand who the website is for.' }, { title: 'Find practical information', body: 'Give visitors clear routes to information about taking part, activities, fundraising and the location.' }, { title: 'Choose how to browse', body: 'Offer language and light or dark appearance options, alongside layouts that adapt to different screen sizes.' }] },
        highlight: { title: 'Designing with an inside perspective.', paragraphs: ['Being part of Antarctica gives me a close connection to the project. I know the setting, the people and the small details that make the group familiar.', 'The challenge is to explain that world to someone who doesn’t share that background. What feels obvious to us may still need an introduction. That perspective shaped how I approached the content, navigation and visual identity.'] }
    },
    closing: {
        title: 'An online introduction to meeting in person.',
        paragraphs: ['The website gives Antarctica a place to introduce itself beyond the club building.', 'For me, it’s a practical way to contribute to a community I’m part of: using design and development to help people discover the group and feel more comfortable coming along.'],
        cta: 'Explore Antarctica SC'
    }
} satisfies ProjectContent;
