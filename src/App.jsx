import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { LazyMotion, domAnimation } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Experiences from './sections/Experiences';
import Projects from './sections/Projects';
import Blogs from './sections/Blogs';
import Skills from './sections/Skills';
import Profiles from './sections/Profiles';
import Contact from './sections/Contact';

export default function App({ helmetContext = {} }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,
      wheelMultiplier: 0.8, 
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Divyansh Yadav | Software Engineer & CSE Undergrad at IIT Jodhpur</title>
        <meta name="description" content="The personal portfolio of Divyansh Yadav, a software engineer and Computer Science undergraduate at IIT Jodhpur. Showcasing distributed systems, software engineering, and cybersecurity projects." />
        <meta property="og:title" content="Divyansh Yadav | Software Engineer & CSE Undergrad at IIT Jodhpur" />
        <meta property="og:description" content="The personal portfolio of Divyansh Yadav, a software engineer and Computer Science undergraduate at IIT Jodhpur. Showcasing distributed systems, software engineering, and cybersecurity projects." />
        <meta property="og:type" content="website" />
      </Helmet>

      <LazyMotion features={domAnimation}>
        <div className="app-container">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Education />
            <Experiences />
            <Projects />
            <Blogs />
            <Skills />
            <Profiles />
            <Contact />
          </main>

          <footer style={{ padding: '2rem', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem', borderTop: '1px solid rgba(255, 239, 179, 0.1)' }}>
            <p>&copy; {new Date().getFullYear()} | Divyansh Yadav | All rights reserved.</p>
          </footer>
        </div>
      </LazyMotion>
    </HelmetProvider>
  );
}

