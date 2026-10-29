import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Leadership from './components/sections/Leadership';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="portfolio-app">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Leadership />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
