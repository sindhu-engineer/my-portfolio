import { ArrowUpRight } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Vision Ignite",
    category: "Web Application",
    description:
      "A performance and cognitive training platform featuring user dashboards, assessments, progress tracking and online payment integration.",
    technologies: ["React.js", "Node.js", "MongoDB", "Razorpay"],
    color: "purple",
    letter: "V"
  },
  {
    id: 2,
    number: "02",
    title: "Eyeris",
    category: "Desktop Application",
    description:
      "An interactive vision assessment application featuring visual acuity, color vision, contrast sensitivity and reaction-time testing.",
    technologies: ["Python", "PyQt6", "OpenCV", "Matplotlib"],
    color: "blue",
    letter: "E"
  },
  {
    id: 3,
    number: "03",
    title: "Short-Term Memory Training",
    category: "Interactive Training Platform",
    description:
      "A memory training application with difficulty selection, interactive cards, training history and performance tracking.",
    technologies: ["React.js", "Node.js", "MongoDB", "CSS"],
    color: "pink",
    letter: "S"
  },
  {
    id: 4,
    number: "04",
    title: "Vision Blueprint",
    category: "Web Application",
    description:
      "A webinar registration and payment platform with Razorpay integration, registration management and automated email reminders.",
    technologies: ["React.js", "Express.js", "MongoDB", "Razorpay"],
    color: "orange",
    letter: "V"
  }
];

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <div className="projects-container">

        <div className="section-heading">
          <span>COMPANY PROJECTS</span>

          <h2>
            My <span>Projects</span>
          </h2>

          <p>
            A collection of real-world applications
            I developed as part of my professional experience.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (

            <div
              className={`project-card ${project.color}`}
              key={project.id}
            >

              <div className="project-preview">

                <span className="project-number">
                  {project.number}
                </span>

                <div className="project-visual">

                  <div className="visual-circle">
                    <span>{project.letter}</span>
                  </div>

                </div>

                <span className="project-category">
                  {project.category}
                </span>

                <ArrowUpRight
                  className="project-arrow"
                  size={24}
                />

              </div>

              <div className="project-details">

                <div className="company-project-badge">
                  COMPANY PROJECT
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">

                  {project.technologies.map((tech) => (

                    <span key={tech}>
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;