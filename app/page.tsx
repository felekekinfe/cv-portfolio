import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Languages from "@/components/languages"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
        <Languages />
      </div>
      <BackToTop />
    </main>
  )
}
