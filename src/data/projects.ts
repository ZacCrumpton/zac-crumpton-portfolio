import type { Project } from "@/types/project";

export const projects: Project[] = [

{
    id: 1,
    slug: "cheatham-contracting",
    title: "Cheatham Contracting",
    category: "Web Design + Development",
    year: 2025,
    previewType: "web",
},

{
    id: 2,
    slug: "altalune",
    title: "Altalune",
    category: "Web Design + Development + CMS",
    year: 2025,
    previewType: "web",
},
{
    id: 3,
    slug: "cheatham-arboriculture",
    title: "Cheatham Arboriculture",
    category: "Web Design + Development",
    year: 2025,
    previewType: "web",
},
{
    id: 4,
    slug: "a-familiar-place-to-get-lost",
    title: "A Familiar Place To Get Lost",
    category: "Creative Direction + Design",
    year: 2026,
    previewType: "creative",
},
{
    id: 5,
    slug: "live-music",
    title: "Live Music",
    category: "Photography",
    year: 2026,
    previewType: "photography",
},
{
    id: 6,
    slug: "mrs-jones-shedonist",
    title: "Mrs. Jones - Shedonist",
    category: "Video + Editing",
    year: 2026,
    previewType: "film",
},
];

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}