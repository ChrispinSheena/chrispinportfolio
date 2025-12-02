import { useState } from "react";
import Nav from "react-bootstrap/Nav";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("experience");

  const projects = [
    {
      title: "Personal Finance Management App",
      period: "Aug 2024 – Oct 2024",
      description: "React + Node.js + MongoDB with secure authentication and dashboards.",
    },
    {
      title: "Terrace Gardening App",
      period: "Feb 2024 – Apr 2024",
      description: "Flask backend with personalized guides and scalable architecture.",
    },
    {
      title: "Fraud Analysis Browser Extension",
      period: "Oct 2023",
      description: "JavaScript extension with Flask API for detecting fraudulent activity.",
    },
    {
      title: "Marine Debris Detection (YOLOv8)",
      period: "Feb 2025 – Apr 2025",
      description: "AI-powered detection system with Streamlit frontend.",
    },
    {
      title: "AI Chatbot for Banking",
      period: "Feb 2025 – Apr 2025",
      description: "RAG chatbot using Flowise, LangChain, Pinecone, and OpenAI API.",
    },
  ];

  const education = [
    {
      school: "Loyola-ICAM College of Engineering and Technology",
      degree: "B.Tech - Information Technology",
      year: "2021 – 2025",
      grade: "CGPA: 8.03"
    },
    {
      school: "Christuraja Matriculation Higher Secondary School",
      degree: "HSC",
      year: "2021",
      grade: "87.66%"
    },
    {
      school: "Christuraja Matriculation Higher Secondary School",
      degree: "SSLC",
      year: "2019",
      grade: "83%"
    }
  ];

  return (
    <section id="projects" className="container py-5">

      {/* Header */}
      <h2 className="fw-bold mb-4 text-center">Portfolio</h2>

      {/* Tabs */}
      <Nav
        fill
        variant="tabs"
        activeKey={activeTab}
        onSelect={(selectedKey) => setActiveTab(selectedKey)}
        className="mb-4"
      >
        <Nav.Item>
          <Nav.Link eventKey="experience">EXPERIENCE</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="education">EDUCATION</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* EXPERIENCE (PROJECTS LIST) */}
      {activeTab === "experience" && (
        <div className="row g-4 mt-2">
          {projects.map((project, index) => (
            <div className="col-md-6" key={index}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{project.title}</h5>
                  <h6 className="text-muted">{project.period}</h6>
                  <p className="card-text mt-2">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* EDUCATION TAB */}
      {activeTab === "education" && (
        <div className="mt-4">
          {education.map((edu, index) => (
            <div className="card shadow-sm mb-3" key={index}>
              <div className="card-body">
                <h5 className="fw-semibold">{edu.school}</h5>
                <p className="mb-1"><strong>Degree:</strong> {edu.degree}</p>
                <p className="mb-1"><strong>Year:</strong> {edu.year}</p>
                <p className="mb-1"><strong>Grade:</strong> {edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      )}

    </section>
  );
}
