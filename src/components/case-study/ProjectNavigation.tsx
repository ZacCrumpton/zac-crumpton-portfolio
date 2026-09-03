type ProjectNavigationProps = {
    previousTitle?: string;
    nextTitle?: string;
};

export default function ProjectNavigation({
    previousTitle,
    nextTitle,
}: ProjectNavigationProps) {
    return (
        <nav
            className="project-navigation"
            aria-label="Project navigation"
        >
            <div>
                <p>Previous Project</p>
                <p>{previousTitle ?? "--"}</p>
            </div>

            <div>
                <p>Next Project</p>
                <p>{nextTitle ?? "--"}</p>
            </div>
        </nav>
    );
}