import React, {useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";

export default function StartupProject() {
  const [filter, setFilter] = useState("All");

  if (!bigProjects.display) {
    return null;
  }

  const categories = [
    "All",
    "Web",
    "Mobile",
    "DevSecOps",
    "AI",
    "Networking",
    "Hardware"
  ];

  const filteredProjects = bigProjects.projects.filter(
    project =>
      filter === "All" ||
      (project.category && project.category.includes(filter))
  );

  return (
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>

        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`project-filter${filter === cat ? " is-active" : ""}`}
              aria-pressed={filter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-container bento-grid">
          {filteredProjects.map((project, i) => {
            return (
              <div
                key={i}
                className="project-card glassmorphism"
                style={{
                  margin: "0",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {project.image ? (
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.projectName}
                      className="card-image"
                      loading="lazy"
                      decoding="async"
                    ></img>
                  </div>
                ) : null}
                <div
                  className="project-detail"
                  style={{flex: 1, display: "flex", flexDirection: "column"}}
                >
                  <h5 className="card-title">{project.projectName}</h5>
                  <p className="card-subtitle" style={{flex: 1}}>
                    {project.projectDesc}
                  </p>
                  {project.footerLink ? (
                    <div className="project-card-footer">
                      {project.footerLink.map((link, i) => {
                        return (
                          <a
                            key={i}
                            className="project-tag"
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.name}
                          </a>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
