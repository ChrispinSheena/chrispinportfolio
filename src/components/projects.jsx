import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Typography } from "@mui/material";
import { motion} from "framer-motion";

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
      degree: "B.Tech - IT",
      year: "2021 – 2025",
      grade: "CGPA: 8.05",
    },
    {
      school: "Christuraja Matric Hr Sec School",
      degree: "HSC",
      year: "2021",
      grade: "87.66%",
    },
    {
      school: "Christuraja Matric Hr Sec School",
      degree: "SSLC",
      year: "2019",
      grade: "83%",
    },
  ];

  return (
    <section id="projects" className="container py-5">

      <h2 className="fw-bold mb-4 text-center">Portfolio</h2>

      <Nav
        fill
        variant="tabs"
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-4"
      >
        <Nav.Item>
          <Nav.Link eventKey="experience">EXPERIENCE</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="education">EDUCATION</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* EXPERIENCE TIMELINE */}
      {activeTab === "experience" && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <Timeline position="alternate">
            {projects.map((proj, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent color="text.secondary">
                  {proj.period}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  {index !== projects.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6">{proj.title}</Typography>
                  <Typography>{proj.description}</Typography>
                </TimelineContent>

              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      )}

      {/* EDUCATION TIMELINE */}
      {activeTab === "education" && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <Timeline position="alternate">
            {education.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent color="text.secondary">
                  {edu.year}
                  <br />
                  {edu.grade}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  {index !== education.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6">{edu.school}</Typography>
                  <Typography>{edu.degree}</Typography>
                </TimelineContent>

              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      )}

    </section>
  );
}
