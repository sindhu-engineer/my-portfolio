import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import "./Education.css";

const educationData = [
  {
    degree: "Bachelor of Engineering",
    specialization: "Electronics and Communication Engineering",
    institution: "University College of Engineering, Ramanathapuram",
    year: "2021 – 2025",
    status: "Completed",
  },
];

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <div className="section-heading">
          <span>MY ACADEMIC BACKGROUND</span>
          <h2>
            My <span>Education</span>
          </h2>
          <p>My academic journey and qualifications.</p>
        </div>

        <div className="education-grid">
          {educationData.map((item, index) => (
            <div className="education-card" key={index}>
              <div className="education-icon">
                <GraduationCap size={32} />
              </div>

              <span className="education-status">{item.status}</span>

              <h3>{item.degree}</h3>

              <h4>{item.specialization}</h4>

              <div className="education-institution">
                <BookOpen size={17} />
                <span>{item.institution}</span>
              </div>

              <div className="education-year">
                <Calendar size={17} />
                {item.year}
              </div>

              <div className="education-decoration"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;