import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="vh-100 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="display-4 fw-bold">Chrispin Sheena C A</h1>
      <p className="text-muted w-75">
        Full-Stack Developer skilled in React, Node.js, MongoDB, and modern web technologies.
      </p>
      <p className="text-muted">I am passionate about creating impactful web applications using React,
        Node.js, Python, and MongoDB. I love solving problems and turning ideas
        into user-friendly software.</p>

      <div className="d-flex gap-3 mt-3">
        <a href="mailto:chrispinsheena@gmail.com"><Mail /></a>
        <a href="https://github.com/ChrispinSheena"><Github /></a>
        <a href="https://linkedin.com/in/chrispin-sheena"><Linkedin /></a>
      </div>
    </section>
  );
}
