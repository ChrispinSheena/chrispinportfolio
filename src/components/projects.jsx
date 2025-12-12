import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { Typography } from '@mui/material'

export default function Projects() {
  const [activeTab, setActiveTab] = useState("experience");

  const projects = [
    {
      title: "AI Chatbot for Banking",
      period: "Feb 2025 – Apr 2025",
      description: "RAG chatbot using Flowise, LangChain, Pinecone, and OpenAI API.",
    },
    {
      title: "Marine Debris Detection (YOLOv8)",
      period: "Jan 2025 – Apr 2025",
      description: "AI-powered detection system with Streamlit frontend.",
    },
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

  ];

  const education = [
    {
      school: "Loyola-ICAM College of Engineering and Technology",
      degree: "B.Tech - Information Technology",
      year: "2021 – 2025",
      grade: "CGPA: 8.05"
    },
    {
      school: "Christuraja Matriculation Higher Secondary School",
      degree: "HSC",
      year: "2021",
      grade: "Percentage: 87.66%"
    },
    {
      school: "Christuraja Matriculation Higher Secondary School",
      degree: "SSLC",
      year: "2019",
      grade: "Percentage: 83%"
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
            <div key={index}>

              <Timeline>
                <TimelineItem>
                  <TimelineOppositeContent sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2">
                    {project.period}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                      {project.title}
                    </Typography>
                    <Typography>{project.description}</Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>

            </div>
          ))}
        </div>
      )}

      {/* EDUCATION TAB */}
      {activeTab === "education" && (
        <div className="mt-4">
          {education.map((edu, index) => (
            <div  key={index}>
              <Timeline>
                <TimelineItem>
                  <TimelineOppositeContent sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2">
                    <Typography>{edu.year}</Typography>
                    <Typography>{edu.grade}</Typography>
                  </TimelineOppositeContent>
                  
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                      {edu.school}
                    </Typography>
                    <Typography>{edu.degree}</Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
              
            </div>
          ))}
        </div>
      )}
      

    </section>
  );
}

