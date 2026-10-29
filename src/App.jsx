import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Stack from './components/sections/Stack';
import Background from './components/sections/Background';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <Projects />
        <Stack />
        <Background />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
