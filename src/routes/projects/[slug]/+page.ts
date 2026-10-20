import { error } from '@sveltejs/kit';
import { getProject } from '$lib/pages/projects/lookup';

export function entries() {
    return [{ slug: 'dnd-portal' }, { slug: 'antarctica-sc' }];
}

export function load({ params }) {
    const project = getProject(params.slug, 'en');
    if (!project) error(404, 'Project not found');
    return { slug: project.slug };
}
