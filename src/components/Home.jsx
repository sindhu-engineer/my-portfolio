
import { Github, Linkedin, Download, ArrowUpRight } from "lucide-react";
import "./Home.css";

function Home() {
  return (
    <section className="home-section" id="home">

      {/* Background Effects */}
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>
      <div className="grid-background"></div>

      <div className="home-container">

        {/* LEFT CONTENT */}
        <div className="home-content">

          <div className="available-badge">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          <p className="hello-text">HELLO, I'M</p>

          <h1>
            Sindhu
            <span> Sivaselvam.</span>
          </h1>

          <h2>
            Software Developer
            <span className="typing-cursor">|</span>
          </h2>

          <p className="home-description">
            I build modern, interactive and scalable web applications
            using React.js, Node.js and modern technologies.
            Passionate about creating beautiful digital experiences
            with clean and efficient code.
          </p>

          {/* BUTTONS */}
          <div className="home-buttons">

            <a href="#projects" className="primary-btn">
              Explore My Work
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>

          </div>

          {/* SOCIAL LINKS */}
          <div className="social-links">

            <a
              href="https://github.com/sindhu-engineer"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/sindhusivaselvam"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={20} />
            </a>

            <a href="/resume.pdf" download>
              <Download size={20} />
            </a>

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="home-visual">

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="profile-card">

            <div className="profile-card-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">

              <p className="code-purple">const developer = {"{"}</p>

              <p>
                &nbsp;&nbsp;name: <span>"Sindhu"</span>,
              </p>

              <p>
                &nbsp;&nbsp;role: <span>"Software Developer"</span>,
              </p>

              <p>
                &nbsp;&nbsp;frontend: <span>"React.js"</span>,
              </p>

              <p>
                &nbsp;&nbsp;backend: <span>"Node.js"</span>,
              </p>

              <p>
                &nbsp;&nbsp;database: <span>"MongoDB"</span>,
              </p>

              <p>
                &nbsp;&nbsp;passion: <span>"Building Ideas"</span>
              </p>

              <p className="code-purple">{"}"}</p>

              <div className="code-status">
                <span className="status-dot"></span>
                Building something awesome...
              </div>

            </div>

          </div>

          <div className="floating-tech tech-react">
            ⚛️ React
          </div>

          <div className="floating-tech tech-node">
            🟢 Node.js
          </div>

          <div className="floating-tech tech-js">
            🟨 JavaScript
          </div>

          <div className="floating-tech tech-db">
            🍃 MongoDB
          </div>

        </div>

      </div>

      <div className="scroll-indicator">
        <span></span>
        Scroll to explore
      </div>

    </section>
  );
}

export default Home;