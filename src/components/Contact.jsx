
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight
} from "lucide-react";

import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        <div className="section-heading">
          <span>GET IN TOUCH</span>
          <h2>Let's Work <span>Together</span></h2>
          <p>Have an idea? Let's build something amazing.</p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <h3>Let's start a conversation</h3>

            <p>
              I'm always interested in discussing new projects,
              creative ideas and exciting career opportunities.
            </p>

            <a
              href="mailto:ssindhusivaselvam@gmail.com"
              className="contact-info-item"
            >
              <div className="contact-info-icon">
                <Mail />
              </div>

              <div>
                <h4>Email</h4>
                <p>ssindhusivaselvam@gmail.com</p>
              </div>

              <ArrowUpRight className="contact-arrow" />
            </a>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <MapPin />
              </div>

              <div>
                <h4>Location</h4>
                <p>Chennai, India</p>
              </div>
            </div>

            <div className="contact-socials">

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

          <div className="contact-message-card">

            <div className="contact-message-icon">
              <Mail size={40} />
            </div>

            <h3>Let's connect!</h3>

            <p>
              Have a project in mind or want to discuss an
              opportunity? Feel free to send me an email.
            </p>

            <a
              href="mailto:ssindhusivaselvam@gmail.com"
              className="contact-email-btn"
            >
              Send Me an Email
              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;

