import Navbar from "./components/navbar";
import Hero from "./components/header";
import Projects from "./components/projects";
import Contact from "./components/Contactform";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
