export interface PageHeader {
    eyebrow?: string;
    title: string;
    description?: string;
    image?: string | null;
}

export interface PageDefinition {
    header?: PageHeader;
}
