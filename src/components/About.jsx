import {
  Code2,
  Briefcase,
  GraduationCap,
  Rocket
  
} from "lucide-react";

import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* SECTION HEADING */}

        <div className="section-heading">

          <span>GET TO KNOW ME</span>

          <h2>
            About <span>Me</span>
          </h2>

          <p>
            A little introduction about my journey.
          </p>

        </div>

        <div className="about-content">

          {/* LEFT SIDE - DEVELOPER VISUAL */}

          <div className="about-left">

            <div className="developer-card">

              <div className="developer-glow"></div>

              {/* CODE WINDOW */}

              <div className="developer-code-window">

                <div className="code-window-header">

                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <p>developer.jsx</p>

                </div>

                <div className="developer-code">

                  <p>
                    <span className="code-keyword">const</span>{" "}
                    developer = {"{"}
                  </p>

                  <p className="code-indent">
                    name: <b>"Sindhu"</b>,
                  </p>

                  <p className="code-indent">
                    role: <b>"Software Developer"</b>,
                  </p>

                  <p className="code-indent">
                    frontend: <b>"React.js"</b>,
                  </p>

                  <p className="code-indent">
                    backend: <b>"Node.js"</b>,
                  </p>

                  <p className="code-indent">
                    database: <b>"MongoDB"</b>,
                  </p>

                  <p className="code-indent">
                    passion: <b>"Building Ideas"</b>
                  </p>

                  <p>{"}"}</p>

                </div>

                <div className="developer-status">

                  <span></span>

                  Ready to build something amazing...

                </div>

              </div>

              {/* EXPERIENCE BADGE */}

              <div className="experience-badge">

                <strong>1+</strong>

                <span>Year Experience</span>

              </div>

              {/* FLOATING TECHNOLOGIES */}

              <div className="floating-code react-code">
                ⚛ React.js
              </div>

              <div className="floating-code node-code">
                🟢 Node.js
              </div>

              <div className="floating-code js-code">
                🟨 JavaScript
              </div>

              <div className="floating-code mongo-code">
                🍃 MongoDB
              </div>

            </div>

          </div>

          {/* RIGHT SIDE - ABOUT CONTENT */}

          <div className="about-right">

            <div className="about-intro-label">
              <span></span>
              WHO I AM
            </div>

            <h3>

              I'm a Software Developer

              <span>
                {" "}passionate about technology.
              </span>

            </h3>

            <p>

              I am a passionate Software Developer working with
              modern web technologies. I specialize in building
              responsive and interactive web applications using
              React.js, JavaScript and Node.js.

            </p>

            <p>

              I enjoy solving real-world problems, developing
              user-friendly interfaces and creating scalable
              backend applications. I continuously explore
              new technologies to improve my development skills.

            </p>

            {/* INFORMATION CARDS */}

            <div className="about-info-grid">

              <div className="about-info">

                <div className="about-info-icon">
                  <Briefcase />
                </div>

                <div>

                  <h4>Experience</h4>

                  <p>Software Developer</p>

                </div>

              </div>

              <div className="about-info">

                <div className="about-info-icon">
                  <Code2 />
                </div>

                <div>

                  <h4>Frontend</h4>

                  <p>React.js</p>

                </div>

              </div>

              <div className="about-info">

                <div className="about-info-icon">
                  <Rocket />
                </div>

                <div>

                  <h4>Backend</h4>

                  <p>Node.js & Express.js</p>

                </div>

              </div>

              <div className="about-info">

                <div className="about-info-icon">
                  <GraduationCap />
                </div>

                <div>

                  <h4>Education</h4>

                  <p>B.E Electronics and Communication</p>

                </div>

              </div>

            </div>

            {/* CONNECT BUTTON */}

            <a href="#contact" className="about-btn">

              Let's Connect

              <span>↗</span>

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;