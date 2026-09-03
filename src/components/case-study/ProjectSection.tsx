type ProjectSectionProps = {
    title: string;
    children: React.ReactNode;
};

export default function ProjectSection({
    title,
    children,
}: ProjectSectionProps) {
    return (
        <section className="project-section">
            <h2>{title}</h2>

            <div className="project-section-content">
                {children}
            </div>
        </section>
    );
}