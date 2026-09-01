import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="home">
      <header className="site-header">
        <div className="site-identity">
          <p>Zac Crumpton</p>
          <p>Designer + Creative Developer</p>          
        </div>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="/">Index</a>
          <a href="/info">Info</a>
          <button type="button" aria-label="Open navigation menu">
            +
          </button>
        </nav>
      </header>

      <section className="project-index" aria-labelledby="selected-work-heading">
        <div className="section-hading">
          <div>
            <h1 id="selected-work-heading">Selected Work / 2026</h1>
            <p>06 entries</p>
          </div>
        </div>

        <ol className="project-list">
          {projects.map((project) => (
            <li key={project.id} className="project-item">
              <button type="button" className="project-button">
                <span className="project-number">
                  {String(project.id).padStart(2, "0")}
                </span>

                <span className="project-details">
                  <span className="project-title">{project.title}</span>
                  <span className="project-category">{project.category}</span>
                </span>
              </button>
            </li>
          ))}
        </ol>

        <p className="project-instruction">Select project to preview</p>          
      </section>

      <section className="project-preview" aria-label="Selected project preview">
          <div className="preview-header">
            <p>Project 01 / 06</p>
          </div>

          <div className="preview-canvas">
            <p>Active Project Preview</p>
          </div>

          <div className="preview-footer">
            <p>ZC / Project / 001</p>
            <a href="/work/cheatham-contracting">Open Project ↗</a>
          </div>
      </section>

      <footer className="site-footer">
        <p>Nashville, TN</p>
        <p>© ZC / 2026</p>
      </footer>

    </main>
  );
}