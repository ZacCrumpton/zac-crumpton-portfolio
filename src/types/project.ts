export type Project = {
    id: number;
    slug: string;
    title: string;
    category: string;
    year: number;
    previewType: "web" | "photography" | "film" | "creative";
};