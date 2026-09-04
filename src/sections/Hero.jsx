import { useSyncExternalStore, lazy, Suspense } from 'react';
import { m as motion } from 'framer-motion';
import { RevealText } from '../components/RevealText';

const FaceCanvas = lazy(() => import('../components/FaceCanvas'));

const subscribeMedia = (callback) => {
  if (typeof window === 'undefined') return () => {};
  const media = window.matchMedia('(min-width: 1024px)');
  media.addEventListener('change', callback);
  return () => media.removeEventListener('change', callback);
};

const getDesktopSnapshot = () => {
  return typeof window !== 'undefined' ? window.matchMedia('(min-width: 1024px)').matches : false;
};

const getServerSnapshot = () => false;

const Hero = () => {
  const isDesktop = useSyncExternalStore(subscribeMedia, getDesktopSnapshot, getServerSnapshot);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 2rem',
        position: 'relative'
      }}
    >
      <div className="container hero-container">
        <div className="hero-visual-wrapper">
          {isDesktop && (
            <Suspense fallback={<div style={{ width: '100%', height: '400px' }} />}>
              <FaceCanvas />
            </Suspense>
          )}
        </div>

        <div className="hero-text-wrapper">
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', y: 50 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="hero-heading" style={{ marginBottom: '1.5rem' }}>
              A Software Developer pursuing his <span style={{ color: 'var(--color-accent)' }}>B.Tech in Computer Science and Engineering at IIT Jodhpur.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
            className="hero-subcontent"
          >
            <RevealText
              text="I like to try new and different things in my life, no matter how random or bizarre they may seem to the general eye."
              className="hero-reveal-text"
              style={{ fontSize: '1.25rem', color: 'rgba(255, 239, 179, 0.8)', marginBottom: '3rem' }}
              delay={0.3}
            />

            <div className="btn-wrapper" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-primary">
                Let's Talk
              </a>
              <a href="#projects" className="btn btn-outline">
                View Work
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          translateX: '-50%',
          opacity: 0.5
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div style={{ width: '1px', height: '60px', background: 'var(--color-text)', opacity: 0.3 }}></div>
      </motion.div>

      <style>{`
        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          width: 100%;
          max-width: 800px;
        }
        .hero-visual-wrapper {
          display: none;
          width: 100%;
        }
        .hero-text-wrapper {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .hero-subcontent {
          align-items: center;
        }
        .hero-reveal-text {
          justify-content: center;
          text-align: center;
        }
        .btn-wrapper {
          justify-content: center;
        }
        .hero-heading {
          font-size: clamp(1.76rem, 4vw, 3.2rem);
        }
        
        @media (min-width: 1024px) {
          .hero-container {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            gap: 4rem;
          }
          .hero-visual-wrapper {
            display: flex;
            flex: 1.2;
            justify-content: center;
            align-items: center;
          }
          .hero-text-wrapper {
            flex: 1.5;
            text-align: left;
            align-items: flex-start;
          }
          .hero-subcontent {
            align-items: flex-start;
          }
          .hero-reveal-text {
            justify-content: flex-start;
            text-align: left;
          }
          .btn-wrapper {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
