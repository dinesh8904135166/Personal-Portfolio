import { useState } from "react";
import "./App.css";

const skills = [
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "SQL",
  "Git & GitHub"
];

const projects = [
  {
    title: "Smart Irrigation System",
    description:
      "A smart agriculture project that displays soil moisture information and helps farmers understand irrigation requirements.",
    technologies: "Python, HTML, CSS, JavaScript, IoT"
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website created to showcase my skills, projects, education and professional profile.",
    technologies: "React.js, JavaScript, HTML, CSS"
  },
  {
    title: "Student Management System",
    description:
      "A database-based application for storing and managing student information.",
    technologies: "Python, SQL, HTML, CSS"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies
            .toLowerCase()
            .includes(filter.toLowerCase())
        );

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* NAVBAR */}

      <nav className="navbar">

        <a href="#home" className="logo">
          Dinesh Kumar S
        </a>

        <div className={menuOpen ? "nav-links show" : "nav-links"}>

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

        </div>

        <div className="nav-buttons">

          <button
            className="theme-button"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </nav>


      {/* HOME */}

      <section id="home" className="home">

        <div className="home-content">

          <p className="small-title">
            Hello, I'm
          </p>

          <h1>
            Dinesh Kumar S
          </h1>

          <h2>
            Python Full Stack Developer
          </h2>

          <p className="home-description">
            Engineering graduate with hands-on experience
            in Python, SQL, HTML, CSS, JavaScript and React.js.
          </p>

          <div className="home-buttons">

            <a href="#projects" className="primary-button">
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="secondary-button"
            >
              Download Resume
            </a>

          </div>

        </div>


        {/* PROFILE PHOTO */}

        <div className="profile-container">

          <div className="profile-border">

            <img
              src="/profile.jpg"
              alt="Dinesh Kumar"
              className="profile-image"
            />

          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section id="about" className="section">

        <p className="section-small-title">
          ABOUT ME
        </p>

        <h2 className="section-title">
          About Me
        </h2>

        <div className="about-box">

          <p>
            I am a driven and detail-oriented Engineering
            graduate with a strong foundation in software
            development and practical training in Python
            Full Stack technologies.
          </p>

          <p>
            I have hands-on experience with Python, SQL,
            HTML, CSS, JavaScript and React.js. I enjoy
            developing responsive web applications and
            solving programming problems.
          </p>

          <p>
            I am looking for a Software Engineer or Python
            Full Stack Developer opportunity where I can
            apply my technical skills and grow as a
            professional.
          </p>

        </div>

      </section>


      {/* SKILLS */}

      <section id="skills" className="section skills-section">

        <p className="section-small-title">
          MY SKILLS
        </p>

        <h2 className="section-title">
          Technical Skills
        </h2>

        <div className="skills-container">

          {skills.map((skill) => (

            <div className="skill-card" key={skill}>

              {skill}

            </div>

          ))}

        </div>

      </section>


      {/* PROJECTS */}

      <section id="projects" className="section">

        <p className="section-small-title">
          MY WORK
        </p>

        <h2 className="section-title">
          Projects
        </h2>


        {/* FILTER */}

        <div className="filter-buttons">

          <button
            className={filter === "All" ? "active" : ""}
            onClick={() => setFilter("All")}
          >
            All
          </button>

          <button
            className={filter === "Python" ? "active" : ""}
            onClick={() => setFilter("Python")}
          >
            Python
          </button>

          <button
            className={filter === "React" ? "active" : ""}
            onClick={() => setFilter("React")}
          >
            React
          </button>

          <button
            className={filter === "SQL" ? "active" : ""}
            onClick={() => setFilter("SQL")}
          >
            SQL
          </button>

        </div>


        <div className="projects-container">

          {filteredProjects.map((project) => (

            <div
              className="project-card"
              key={project.title}
            >

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="project-technologies">

                <strong>
                  Technologies
                </strong>

                <br />

                {project.technologies}

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* EDUCATION */}

      <section
        id="education"
        className="section education-section"
      >

        <p className="section-small-title">
          EDUCATION
        </p>

        <h2 className="section-title">
          Education & Internship
        </h2>

        <div className="education-container">

          <div className="education-card">

            <span>
              EDUCATION
            </span>

            <h3>
              Bachelor of Engineering
            </h3>

            <h4>
              AMC ENGINEERING COLLEGE
            </h4>

            <p>
              Computer Science Engineering -
              Data Science
            </p>

          </div>


          <div className="education-card">

            <span>
              INTERNSHIP
            </span>

            <h3>
              Python Full Stack Development
            </h3>

            <h4>
              Dhee Coding Lab (DCL)
            </h4>

            <p>
              4 Months Internship / Training
            </p>

          </div>

        </div>

      </section>


      {/* CONTACT */}

      <section id="contact" className="section">

        <p className="section-small-title">
          CONTACT
        </p>

        <h2 className="section-title">
          Let's Connect
        </h2>

        <div className="contact-container">

          <div className="contact-info">

            <h3>
              Get in Touch
            </h3>

            <p>
              I am interested in Software Engineer
              and Python Full Stack Developer
              opportunities.
            </p>

            <p>
              <strong>Email:</strong>
              dinesh8904135166@gmail.com
            </p>

            <p>
              <strong>Location:</strong>
              Bengaluru, Karnataka
            </p>


            <div className="social-links">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

            </div>

          </div>


          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>


      {/* FOOTER */}

      <footer>

        <p>
          © 2026 Dinesh Kumar S
        </p>

        <p>
          Python Full Stack Developer
        </p>

      </footer>

    </div>
  );
}

export default App;