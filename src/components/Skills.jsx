
import {
  Code2,
  Globe,
  Server,
  Database,
  
  Terminal
} from "lucide-react";

import "./Skills.css";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Globe />,
    skills: [
      { name: "React.js", level: "Advanced", percentage: 90 },
      { name: "JavaScript", level: "Advanced", percentage: 85 },
      { name: "HTML5 & CSS3", level: "Advanced", percentage: 90 },
      { name: "Responsive Design", level: "Advanced", percentage: 85 }
    ]
  },
  {
    title: "Backend Development",
    icon: <Server />,
    skills: [
      { name: "Node.js", level: "Advanced", percentage: 85 },
      { name: "Express.js", level: "Intermediate", percentage: 80 },
      { name: "REST APIs", level: "Intermediate", percentage: 85 }
    ]
  },
  {
    title: "Database",
    icon: <Database />,
    skills: [
      { name: "MongoDB", level: "Intermediate", percentage: 80 },
      { name: "Mongoose", level: "Intermediate", percentage: 75 }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: <Terminal />,
    skills: [
      { name: "Git & GitHub", level: "Intermediate", percentage: 80 },
      { name: "Vite", level: "Intermediate", percentage: 80 },
      { name: "Postman", level: "Intermediate", percentage: 75 }
    ]
  }
];

function Skills() {
  return (
    <section className="skills-section" id="skills">

      <div className="skills-container">

        <div className="section-heading">
          <span>MY EXPERTISE</span>
          <h2>Technical <span>Skills</span></h2>
          <p>Technologies I use to build digital experiences.</p>
        </div>

        <div className="skills-grid">

          {skillCategories.map((category, index) => (

            <div
              className="skill-card"
              key={category.title}
              style={{ animationDelay: `${index * 0.15}s` }}
            >

              <div className="skill-card-heading">

                <div className="skill-icon">
                  {category.icon}
                </div>

                <h3>{category.title}</h3>

              </div>

              <div className="skill-list">

                {category.skills.map((skill) => (

                  <div className="skill-item" key={skill.name}>

                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span className="skill-level">
                        {skill.level}
                      </span>
                    </div>

                    <div className="skill-progress">
                      <div
                        className="skill-progress-fill"
                        style={{ "--skill-width": `${skill.percentage}%` }}
                      ></div>
                    </div>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

        <div className="skills-bottom">

          <Code2 size={22} />

          <p>
            Always learning, always building, always improving.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Skills;