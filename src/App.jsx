import { useEffect, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { LazyMotion, domAnimation } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';

const About = lazy(() => import('./sections/About'));
const Education = lazy(() => import('./sections/Education'));
const Experiences = lazy(() => import('./sections/Experiences'));
const Projects = lazy(() => import('./sections/Projects'));
const Blogs = lazy(() => import('./sections/Blogs'));
const Skills = lazy(() => import('./sections/Skills'));
const Profiles = lazy(() => import('./sections/Profiles'));
const Contact = lazy(() => import('./sections/Contact'));

export default function App() {
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
    <HelmetProvider>
      <Helmet>
        <title>Divyansh Yadav</title>
        <meta name="description" content="The personal portfolio of Divyansh Yadav, a software engineer and Computer Science undergraduate at IIT Jodhpur." />
        <meta property="og:title" content="Divyansh Yadav" />
        <meta property="og:description" content="The personal portfolio of Divyansh Yadav, a software engineer and Computer Science undergraduate at IIT Jodhpur." />
        <meta property="og:type" content="website" />
      </Helmet>

      <LazyMotion features={domAnimation}>
        <div className="app-container">
          <Navbar />
          <main>
            <Hero />
            <Suspense fallback={<div style={{ minHeight: '100vh' }}></div>}>
              <About />
              <Education />
              <Experiences />
              <Projects />
              <Blogs />
              <Skills />
              <Profiles />
              <Contact />
            </Suspense>
          </main>

          <footer style={{ padding: '2rem', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem', borderTop: '1px solid rgba(255, 239, 179, 0.1)' }}>
            <p>&copy; {new Date().getFullYear()} | Divyansh Yadav | All rights reserved.</p>
          </footer>
        </div>
      </LazyMotion>
    </HelmetProvider>
  );
}

