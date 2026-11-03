
import { Github, Linkedin, ArrowUp, Heart } from "lucide-react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <h2>SINDHU<span>.</span></h2>
            <p>
              Building creative digital experiences with
              modern technologies.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <h3>Connect With Me</h3>

            <div className="footer-social-icons">

              <a
                href="https://github.com/sindhu-engineer"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
              </a>

              <a
                href="https://www.linkedin.com/in/sindhusivaselvam"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
              </a>

            </div>
          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Sindhu Sivaselvam.
            All rights reserved.
          </p>

          <p className="footer-made">
            Made with <Heart size={15} /> using React.js
          </p>

          <a href="#home" className="back-to-top">
            <ArrowUp size={20} />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;