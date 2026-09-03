type ProjectCaseStudyProps = {
    number: string;
    title: string;
    category: string;
    year: number;
    children?: React.ReactNode;
};

export default function ProjectCaseStudyProps({
    number,
    title,
    category,
    year,
    children,
}: ProjectCaseStudyProps) {
    return (
        <main className="case-study">
            <header className="case-study-header">
                <p>{number}</p>

                <div>
                    <h1>{title}</h1>
                    <p>{category}</p>
                    <p>{year}</p>
                </div>
            </header>

            <div className="case-study-content">{children}</div>
        </main>
    );
}