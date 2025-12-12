import { Github, Linkedin, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import './header.css'

export default function Hero() {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 300], [0, 50]);
  const paraY = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section
      id="hero"
      className="vh-75 d-flex flex-column justify-content-center align-items-center text-center pt-2"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <motion.h1 style={{ y: titleY }} className="display-4 fw-bold">
        Chrispin Sheena C A
      </motion.h1>

      <motion.p style={{ y: paraY }} className="w-75 mt-2">
        Full-Stack Developer skilled in React, Node.js, MongoDB, and modern web technologies.
      </motion.p>

      <motion.p style={{ y: paraY }} className="w-75 mt-2">
        I am passionate about creating impactful web applications using React,
        Node.js, Python, and MongoDB. I love solving problems and turning ideas
        into user-friendly software.
      </motion.p>

      <motion.div style={{ y: paraY }} className="d-flex gap-3 mt-3">
        <a href="mailto:chrispinsheena@gmail.com"><Mail /></a>
        <a href="https://github.com/ChrispinSheena"><Github /></a>
        <a href="https://linkedin.com/in/chrispin-sheena"><Linkedin /></a>
      </motion.div>
    </section>
  );
}
