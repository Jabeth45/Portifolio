import { useRef } from "react";
import { projects, upcoming } from "../data/projects.js";
import SkillIcon from "./SkillIcon.jsx";

function ProjectCard({ project, index }) {
  const { image } = project;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="project-card">
      <header className="project-head">
        <div className="project-icon">
          <img src={image.src} width={image.width} height={image.height} alt="" loading="lazy" decoding="async" />
        </div>
        <div>
          <p className="project-number">{number} / {project.type}</p>
          <h3>{project.title}</h3>
        </div>
      </header>
      <p className="project-desc">{project.desc}</p>
      <div className="project-foot">
        <ul className="tags" aria-label="Topics">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {project.isPublic ? (
          <a
            className="project-link"
            href={project.repo}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`View ${project.title} on GitHub (opens in a new tab)`}
          >
            View on GitHub <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <p className="project-soon">Repository going public soon</p>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const dialogRef = useRef(null);

  const openSoon = () => dialogRef.current?.showModal();
  const closeSoon = () => dialogRef.current?.close();
  // A click on the dimmed backdrop lands on the <dialog> itself, so close then.
  const onDialogClick = (event) => {
    if (event.target === dialogRef.current) closeSoon();
  };

  return (
    <section className="section container" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow">02 / SELECTED WORK</p>
        <h2 id="projects-title">Projects</h2>
      </div>

      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* More projects that are not published yet: icon only, opens an empty "Soon" panel. */}
      <ul className="soon-row" aria-label="More projects, coming soon">
        {upcoming.map((item) => (
          <li key={item.icon}>
            <button type="button" className="soon-tile" onClick={openSoon}>
              <SkillIcon name={item.icon} className="soon-icon" />
              <span className="sr-only">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog ref={dialogRef} className="soon-dialog" onClick={onDialogClick} aria-label="Coming soon">
        <button type="button" className="soon-close" onClick={closeSoon} aria-label="Close">
          <span aria-hidden="true">✕</span>
        </button>
        <p className="soon-word">
          Soon<span>.</span>
        </p>
      </dialog>
    </section>
  );
}
