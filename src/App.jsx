import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';

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

export default function App() {
  useEffect(() => {
    // Keep native scrolling for users who prefer reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      lerp: 0.07,
      wheelMultiplier: 0.8,
      smoothWheel: true,
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
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

          <footer style={{ padding: '2rem', textAlign: 'center', opacity: 0.85, fontSize: '0.9rem', borderTop: '1px solid rgba(255, 239, 179, 0.1)' }}>
            <p>&copy; {new Date().getFullYear()} | Divyansh Yadav | All rights reserved.</p>
          </footer>
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}

