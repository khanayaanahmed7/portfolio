import { motion } from "framer-motion";
import "./index.css";
import { useState } from "react";
import { li, line, link } from "framer-motion/client";

const section = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const certificates = [
    {
      img: "/cert1.png",
      title: "IBM SkillsBuild – Communicating with Impact (2023)",
      link: "https://tinyurl.com/CommunicatingWithImpactC"
    },
    {
      img: "/cert2.png",
      title: "IBM SkillsBuild – Edunet Orientation (2023)",
      link: "https://tinyurl.com/EdunetSBO"
    },
    {
      img: "/cert3.png",
      title: "IBM SkillsBuild – Build Your First Web Pages with HTML & CSS (2024)",
      link: "https://tinyurl.com/WebPageHTMLCSS"
    },
    {
      img: "/cert4.png",
      title: "IBM SkillsBuild – Create a Creadly Account (2024)",
      link: "https://tinyurl.com/CredlyAccount"
    },
    {
      img: "/cert5.png",
      title: "IBM SkillsBuild – Big Data Analytics - openHPI (2024)",
      link: "https://tinyurl.com/BIgDataAnalytics-openHPI"
    },
    {
      img: "/cert6.png",
      title: "Crion Versity – Data Skills 3 Day Challenge (2024)",
      link: "https://tinyurl.com/CV3DayChallange"
    },
    {
      img: "/cert7.png",
      title: "AWS – Solutions Architecture Job Simulation (2025)",
      link: "https://tinyurl.com/SolArchJobSim"
    },
    {
      img: "/cert8.png",
      title: "Deloitte – Cyber Job Simulation (2025)",
      link: "https://tinyurl.com/CyberJobSim"
    },
  ];

  return (
    <>
    {/* NAVBAR */}
    <nav className="navbar">
      <div className="nav-left">
        Ayaan Ahmed Anwar Khan
      </div>

      {/* Desktop Links */}
      <div className="nav-right desktop">
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#languages">Languages</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="/Resume.pdf" target="_blank">View Resume</a>
        <a href="/Resume.pdf" download className="download-btn">Download CV</a>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#languages" onClick={() => setMenuOpen(false)}>Languages</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a>
        <a href="/Resume.pdf" target="_blank">View Resume</a>
        <a href="/Resume.pdf" download className="download-btn">Download CV</a>
      </div>
    </nav>

    <div className="app-container">

      {/* HERO */}
      <motion.section
        id="about"
        variants={section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="hero-section"
      >
        <motion.img
          src="/profile.png"
          alt="Ayaan Ahmed Anwar Khan"
          className="profile-img"
        />

        <div className="hero-text">
          <h1>Ayaan Ahmed Anwar Khan</h1>
          <h3>Full Stack Web Developer | B.Sc Computer Science</h3>
          <p>
            Passionate Computer Science student pursuing B.Sc (2023–2026) from
            Universal MSG-SGKM College. Focused on building scalable full-stack
            applications, AI-assisted platforms and modern web solutions with
            clean UI/UX.
          </p>
        </div>
      </motion.section>

      {/* EDUCATION */}
      <motion.section id="education" variants={section} initial="hidden" whileInView="visible" className="section dark">
        <h2>Education</h2>
        <div className="timeline">
          <div>
            <h4>B.Sc Computer Science</h4>
            <p>Universal MSG-SGKM College of Arts, Science & Commerce</p>
            <span>2023 – 2026 (Pursuing)</span>
          </div>
          <div>
            <h4>HSC – Maharashtra Board</h4>
            <p>Shoeb Junior College</p>
            <span>2023 | 58.67%</span>
          </div>
          <div>
            <h4>SSC – Maharashtra Board</h4>
            <p>Al Nadi Ul Falah English High School</p>
            <span>2021 | 77.60%</span>
          </div>
        </div>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section id="experience" variants={section} initial="hidden" whileInView="visible" className="section">
        <h2>Experience</h2>
        <p className="section-text">
          Fresher with hands-on experience through academic and self-driven
          projects. Worked on frontend interfaces, backend logic, authentication,
          databases and AI-based matching systems.
        </p>
      </motion.section>

      {/* SKILLS */}
      <motion.section id="skills" variants={section} initial="hidden" whileInView="visible" className="section dark">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h4>Technical Skills</h4>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React.js, Node.js</li>
              <li>Python</li>
              <li>MongoDB, Firebase</li>
            </ul>
          </div>
          <div className="skill-card">
            <h4>Computer Skills</h4>
            <ul>
              <li>MS Word, Excel, PowerPoint</li>
              <li>Typing & Data Entry</li>
            </ul>
          </div>
          <div className="skill-card">
            <h4>Soft Skills</h4>
            <ul>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* LANGUAGES */}
      <motion.section id="languages" variants={section} initial="hidden" whileInView="visible" className="section">
        <h2>Languages Known</h2>
        <p className="section-text">English • Hindi • Urdu</p>
      </motion.section>

      {/* PROJECTS */}
      <motion.section id="projects" variants={section} initial="hidden" whileInView="visible" className="section dark">
        <h2>Projects</h2>

        {[
          {
            img: "/attireyard.png",
            title: "E-Commerce Website",
            desc: "A modern e-commerce platform with authentication, email handling and scalable frontend architecture.",
          },
          {
            img: "/skillwork.png",
            title: "Skill-Based Freelancing Platform",
            desc: "AI-powered freelancing platform that intelligently matches freelancers with client requirements.",
          },
          {
            img: "/sla.png",
            title: "IT Vendor SLA Monitoring System         (In Development)",
            desc: "System to track vendor performance, SLA compliance, dashboards and alerts.",
          },
        ].map((p, i) => (
          <div className="project-card" key={i}>
            <img src={p.img} alt={p.title} />
            <div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <a href="#">Under Maintainence / Ongoing</a>
            </div>
          </div>
        ))}
      </motion.section>

      {/* CERTIFICATIONS */}
      <motion.section id="certifications" variants={section} initial="hidden" whileInView="visible" className="section">
        <h2>Certifications</h2>

        {certificates.map((c, i) => (
          <div className="project-card" key={i}>
            <img src={c.img} alt={c.title} />
            <div>
              <h4>{c.title}</h4>
              <a href={c.link} target="_blank" rel="noreferrer">View Certificate</a>
            </div>
          </div>
        ))}
      </motion.section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Ayaan Ahmed Anwar Khan · Built with React & Framer Motion
      </footer>
    </div>
    </>
    
  );
}
