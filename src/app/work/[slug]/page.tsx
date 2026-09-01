import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <main>
            <p>{String(project.id).padStart(2, "0")}</p>
            <h1>{project.title}</h1>
            <p>{project.category}</p>
            <p>{project.year}</p>
            <p>{project.previewType}</p>
        </main>
    );
}