import React from "react";
import "./Projects.css"; // Ensure this file is updated

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    tags: ["React", "Firebase", "CSS"],
    link: "https://google.com",
  },
  {
    id: 2,
    title: "Snippet Manager",
    tags: ["MERN", "Authentication", "Syntax Highlighting"],
    link: "https://google.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
