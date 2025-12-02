import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">

      {/* HEADER */}
      <header className="header">
        <h1 className="title">Aditya Sharma</h1>
        <p className="subtitle">
          Backend Developer • Cybersecurity • Java • Spring Boot • MongoDB
        </p>
      </header>

      {/* INTRO SECTION */}
      <section className="card">
        <h2 className="section-heading">Introduction</h2>
        <p className="text">
          Hello, I'm <strong>Aditya Sharma</strong>. I am a backend developer with strong
          fundamentals in Java, networking, and cybersecurity. I specialize in building
          secure and scalable applications using Spring Boot, REST APIs, JWT authentication,
          WebSockets, and MongoDB Atlas.
        </p>
      </section>

      {/* ABOUT */}
      <section className="card">
        <h2 className="section-heading">About Me</h2>
        <p className="text">
          I focus on backend engineering, cybersecurity, and real-time communication systems.
          I enjoy solving complex technical problems and building modern systems using
          clean, maintainable code.
        </p>
      </section>

      {/* SKILLS */}
      <section className="card">
        <h2 className="section-heading">Skills</h2>

        <div className="skills-grid">
          {[
            "Java", "Spring Boot", "REST APIs", "WebSocket", "JWT Authentication",
            "MongoDB Atlas", "SQL", "HTML/CSS",
            "Penetration Testing", "Cybersecurity Frameworks",
            "Postman", "Git", "IntelliJ IDEA", "JUnit",
            "Team Collaboration", "Adaptability", "Technical Communication"
          ].map((skill, index) => (
            <span key={index} className="skill-chip">{skill}</span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="card">
        <h2 className="section-heading">Projects</h2>

        <div className="project-card">
          <h3 className="project-title">Connexus – Secure VoIP Calling App</h3>
          <p className="text">
            Developed backend with Spring Boot, JWT authentication, REST APIs, WebSocket signaling,
            and MongoDB Atlas. Implemented secure real-time communication using STUN/TURN servers.
          </p>
        </div>

        <div className="project-card">
          <h3 className="project-title">JavaFX Web Scraper</h3>
          <p className="text">
            GUI-based JavaFX scraper to extract and replicate website data. Demonstrated strong
            networking and JavaFX UI development skills.
          </p>
        </div>

        <div className="project-card">
          <h3 className="project-title">Stock Market Analyzer</h3>
          <p className="text">
            Java application fetching live stock data using Yahoo Finance API with trend analysis
            and chart visualization.
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="card">
        <h2 className="section-heading">Education</h2>
        <ul className="list">
          <li><strong>Bachelor of Computer Science (Cybersecurity)</strong>, IILM University — Expected 2026</li>
          <li><strong>Diploma in Computer Science</strong>, Mangalayatan University — 2020–2023</li>
          <li>Senior Secondary — Union Public School (2019–2020)</li>
          <li>Higher Secondary — Seemax International School (2017–2018)</li>
        </ul>
      </section>

      {/* CERTIFICATIONS */}
      <section className="card">
        <h2 className="section-heading">Certifications</h2>
        <p className="text">
          <strong>Tata Cybersecurity Analyst Job Simulation (Forage, July 2025):</strong>
          Hands-on experience in IAM principles, cybersecurity best practices,
          enterprise IAM architecture, and technical documentation.
        </p>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="card">
        <h2 className="section-heading">Achievements</h2>
        <p className="text">🏆 Runner-Up – Hero League Football Tournament (Goalkeeper)</p>
      </section>

      {/* CONTACT */}
      <section className="card">
        <h2 className="section-heading">Contact</h2>
        <p className="text">Email: <strong><a href="mailto:adityasasni@gmail.com">adityasasni@gmail.com</a></strong></p>
        <p className="text">LinkedIn: <strong><a href="https://linkedin.com/in/aditya-sharma-sasni" target="_blank" rel="noopener noreferrer">linkedin.com/in/aditya-sharma</a></strong></p>
        <p className="text">Phone: <strong><a href="tel:+917417719077">+91 74177 19077</a></strong></p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Aditya Sharma — Portfolio</p>
      </footer>
    </div>
  );
};

export default App;
