type ProjectMetaProps = {
    role?: string;
    technologies?: string[];
};

export default function ProjectMeta({
    role,
    technologies,
}: ProjectMetaProps) {
    return (
        <aside className="project-meta">
            {role && (
                <div>
                    <p>Role</p>
                    <p>{role}</p>
                </div>
            )}

            {technologies && technologies.length > 0 && (
                <div>
                    <p>Technology</p>
                    <ul>
                        {technologies.map((technology) => (
                            <li key={technology}>{technology}</li>
                        ))}
                    </ul>
                </div>
            )}
        </aside>
    );
}