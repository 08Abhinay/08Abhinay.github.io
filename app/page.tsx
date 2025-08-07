import Navbar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"
import Skills from "./components/skills"
import Research from "./components/research"
import Publications from "./components/publications"
import Projects from "./components/projects"
import Experience from "./components/experience"
import Education from "./components/education"
import Certifications from "./components/certifications"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Research />
      <Publications />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
