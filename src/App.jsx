import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Learning from "./components/Learning.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

// The page is just the sections stacked in order. Content lives in src/data/.
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Skills />
        <Projects />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
