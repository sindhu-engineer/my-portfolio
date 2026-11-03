
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-logo">
        <span className="logo-icon">S</span>
        <span>SINDHU<span className="logo-dot"></span></span>
      </div>

      <div className="nav-links">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="nav-button">
        Let's Talk ↗
      </a>

    </nav>
  );
}

export default Navbar;