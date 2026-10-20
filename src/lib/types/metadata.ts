import type { Locale } from './locale';

export interface PageMetadata {
    title: string;
    description: string;
    locale: Locale;
    image?: string;
}
