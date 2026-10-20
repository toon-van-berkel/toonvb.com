import type { VisibleImpactResearchDefinition } from '$lib/types/research-visible-impact';

export const content = {
    hero: {
        eyebrow: '',
        title: '',
        lead: '',
        metadata: {}
    },
    question: {
        eyebrow: '',
        title: '',
        body: []
    },
    goal: {
        eyebrow: '',
        title: '',
        items: [
            { title: 'Happy', description: '' },
            { title: 'Excited', description: '' },
            { title: 'In control', description: '' }
        ]
    },
    prototype: {
        eyebrow: '',
        title: '',
        body: [],
        imageAlt: ''
    },
    method: {
        eyebrow: '',
        title: '',
        details: []
    },
    participants: {
        eyebrow: '',
        title: '',
        breakdown: []
    },
    findings: {
        eyebrow: '',
        title: '',
        items: [
            { title: '', profile: '', finding: '' },
            { title: '', profile: '', finding: '' },
            { title: '', profile: '', finding: '' },
            { title: '', profile: '', finding: '' },
            { title: '', profile: '', finding: '' },
            { title: '', profile: '', finding: '' }
        ]
    },
    results: {
        eyebrow: '',
        title: '',
        columns: [],
        moments: [],
        rows: []
    },
    insights: {
        eyebrow: '',
        title: '',
        items: [
            { title: '', description: '' },
            { title: '', description: '' },
            { title: '', description: '' },
            { title: '', description: '' },
            { title: '', description: '' }
        ]
    },
    implications: {
        eyebrow: '',
        title: '',
        items: [
            { title: '', description: '' },
            { title: '', description: '' },
            { title: '', description: '' },
            { title: '', description: '' },
            { title: '', description: '' }
        ]
    },
    conclusion: {
        eyebrow: '',
        title: '',
        body: []
    }
} satisfies VisibleImpactResearchDefinition;
