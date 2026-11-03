
import { Briefcase, Calendar, MapPin } from "lucide-react";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section" id="experience">

      <div className="experience-container">

        <div className="section-heading">
          <span>MY PROFESSIONAL JOURNEY</span>
          <h2>Work <span>Experience</span></h2>
          <p>My journey as a software developer.</p>
        </div>

        <div className="experience-timeline">

          <div className="timeline-line"></div>

          <div className="experience-card">

            <div className="timeline-dot">
              <Briefcase size={20} />
            </div>

            <div className="experience-content">

              <div className="experience-top">

                <div>
                  <span className="experience-tag">
                    CURRENT POSITION
                  </span>

                  <h3>Software Developer</h3>

                  <h4>Startup Company</h4>
                </div>

                <span className="current-badge">
                  ● Currently Working
                </span>

              </div>

              <div className="experience-meta">

                <span>
                  <Calendar size={15} />
                  2025 – Present
                </span>

                <span>
                  <MapPin size={15} />
                  Chennai, India
                </span>

              </div>

              <p className="experience-description">
                Working on developing modern and scalable web
                applications using React.js and Node.js.
                Building responsive user interfaces, integrating
                REST APIs and managing backend services.
              </p>

              <h5>Key Responsibilities</h5>

              <ul>
                <li>Developing responsive web applications using React.js.</li>
                <li>Building backend APIs using Node.js and Express.js.</li>
                <li>Managing MongoDB databases using Mongoose.</li>
                <li>Integrating third-party services and payment gateways.</li>
                <li>Improving application performance and user experience.</li>
              </ul>

              <div className="experience-tech">

                <span>React.js</span>
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;