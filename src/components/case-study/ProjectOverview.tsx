type ProjectOverviewProps = {
    children: React.ReactNode;
};

export default function ProjectOverview({
    children,
}: ProjectOverviewProps) {
    return (
        <section className="project-overview">
            <h2>Project Overview</h2>
            <div>{children}</div>
        </section>
    );
}