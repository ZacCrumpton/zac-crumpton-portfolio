import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";

import ProjectCaseStudy from "@/components/case-study/ProjectCaseStudy";
import ProjectOverview from "@/components/case-study/ProjectOverview";
import ProjectMeta from "@/components/case-study/ProjectMeta";
import ProjectNavigation from "@/components/case-study/ProjectNavigation";

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ProjectPage({ 
    params,
}: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <ProjectCaseStudy
            number={String(project.id).padStart(2, "0")}
            title={project.title}
            category={project.category}
            year={project.year}
        >
            <ProjectOverview>
                <p>Project content will be added during Phase 07</p>
            </ProjectOverview>
            
            <ProjectMeta />

            <ProjectNavigation />

        </ProjectCaseStudy>
    );
}