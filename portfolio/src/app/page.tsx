
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section id="home" className="relative">
        <Hero />
      </section>
      <section id="about" className="relative">
        <About />
      </section>
      <section id="skills" className="relative">
        <Skills />
      </section>
      <section id="projects" className="relative">
        <Projects />
      </section>
      <section id="contact" className="relative">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}