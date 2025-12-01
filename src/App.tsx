import { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("System Stable | Portfolio Loaded");

  const runScan = () => {
    setStatus("Running system diagnostics...");
    setTimeout(() => {
      setStatus("Diagnostics Complete: No issues detected.");
    }, 2000);
  };

  return (
    <div className="monitor-container">

      {/* HEADER */}
      <header className="monitor-header">
        <h1 className="main-title">{`{ Aditya Sharma | Portfolio }`}</h1>
        <p className="subtitle">Backend Developer • Cybersecurity • Java • Spring Boot • MongoDB</p>
      </header>

      {/* HERO / INTRO */}
      <div className="card terminal-card">
        <p className="log green">[BOOT] Initializing Profile...</p>
        <p className="log blue">[INFO] Loading resume data...</p>
        <p className="log yellow">[STATUS] {status}</p>

        <div className="intro">
          <h2>Hello, I'm <span className="highlight">Aditya Sharma</span> 👋</h2>
          <p className="intro-text">
            Motivated backend developer with strong fundamentals in 
            <strong> Java, networking, and cybersecurity</strong>. Experienced in building
            <strong> Spring Boot REST APIs, WebSocket communication, JWT authentication,</strong> and
            cloud-backed databases using <strong>MongoDB Atlas</strong>.
          </p>
        </div>
      </div>

      {/* ABOUT ME */}
      <div className="card">
        <h2 className="section-title">{`> About_Me`}</h2>
        <p className="section-text">
          I specialize in backend development and secure system design. I enjoy building 
          real-time, scalable applications using modern technologies such as Java, Spring Boot,
          WebSocket signaling, STUN/TURN servers, and MongoDB Atlas. I have hands-on experience 
          in cybersecurity tools and frameworks, and I am passionate about solving 
          real-world engineering problems.
        </p>
      </div>

      {/* SKILLS */}
      <div className="card">
        <h2 className="section-title">{`> Skills`}</h2>
        <div className="skills-grid">
          {[
            "Java", "Spring Boot", "RESTful APIs", "WebSocket", "JWT Authentication",
            "MongoDB Atlas", "SQL", "HTML/CSS",
            "Penetration Testing", "Cybersecurity Frameworks",
            "Postman", "Git", "IntelliJ IDEA", "JUnit",
            "Team Collaboration", "Adaptability", "Technical Communication"
          ].map((skill, index) => (
            <span key={index} className="skill-chip">{skill}</span>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <div className="card">
        <h2 className="section-title">{`> Projects`}</h2>

        <div className="project-card">
          <h3>Connexus – Secure VoIP Calling App (Backend Developer)</h3>
          <p>
            Built backend for peer-to-peer calling using Spring Boot.
            Implemented JWT authentication, REST APIs, and WebSocket signaling.
            Integrated MongoDB Atlas and enabled real-time audio calls with STUN/TURN servers.
          </p>
        </div>

        <div className="project-card">
          <h3>JavaFX Web Scraper</h3>
          <p>
            Developed a GUI-based JavaFX application to scrape and replicate website data.
            Demonstrated strong problem-solving and understanding of networking.
          </p>
        </div>

        <div className="project-card">
          <h3>Stock Market Analyzer</h3>
          <p>
            Java tool that fetched and visualized stock market trends using Yahoo Finance API.
            Included basic analytics and plotting features.
          </p>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="card">
        <h2 className="section-title">{`> Education`}</h2>

        <ul className="edu-list">
          <li><strong>Bachelor of Computer Science (Cybersecurity)</strong>, IILM University — *Expected 2026*</li>
          <li><strong>Diploma in Computer Science</strong>, Mangalayatan University — 2020–2023</li>
          <li>Senior Secondary — Union Public School (2019–2020)</li>
          <li>Higher Secondary — Seemax International School (2017–2018)</li>
        </ul>
      </div>

      {/* CERTIFICATION */}
      <div className="card">
        <h2 className="section-title">{`> Certifications`}</h2>
        <p>
          <strong>Tata Cybersecurity Analyst Job Simulation (Forage, July 2025)</strong><br />
          Completed IAM-based cybersecurity simulation including best practices, enterprise IAM architecture,
          documentation, and report writing.
        </p>
      </div>

      {/* ACHIEVEMENTS */}
      <div className="card">
        <h2 className="section-title">{`> Extra_Curricular`}</h2>
        <p>🏆 Runner-Up • Hero League Football Tournament — Goalkeeper</p>
      </div>

      {/* RUN SYSTEM DIAGNOSTIC */}
      <div className="card action-card">
        <button onClick={runScan} className="action-btn">
          Run System Diagnostic
        </button>
        <p className="hint">Simulating real-time portfolio status...</p>
      </div>

      {/* CONTACT */}
      <div className="card">
        <h2 className="section-title">{`> Contact`}</h2>
        <p>📧 Email: <span className="highlight">adityasasni@gmail.com</span></p>
        <p>🔗 LinkedIn: <span className="highlight">linkedin.com/in/aditya-sharma</span></p>
        <p>📞 Phone: <span className="highlight">+91 74177 19077</span></p>
      </div>

      {/* FOOTER */}
      <footer className="monitor-footer">
        <p>© 2025 Aditya Sharma • Portfolio v1.0</p>
      </footer>
    </div>
  );
}

export default App;
