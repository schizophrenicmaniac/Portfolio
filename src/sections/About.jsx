import Section from '../components/Section';
import { RevealText } from '../components/RevealText';
import { m as motion } from 'framer-motion';
import profileImg from '../assets/divyansh_yadav.webp';

const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="about-container">
        
        {/* Photo Column */}
        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-image-frame">
            <span className="frame-corner corner-tl"></span>
            <span className="frame-corner corner-tr"></span>
            <span className="frame-corner corner-bl"></span>
            <span className="frame-corner corner-br"></span>
            <img 
              src={profileImg} 
              alt="Divyansh Yadav" 
              className="about-image"
              loading="lazy"
              width="350"
              height="438"
            />
          </div>
        </motion.div>

        {/* Text Column */}
        <motion.div 
          className="about-text-wrapper glass-panel"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <RevealText 
            text="Hey! I am a Tech Enthusiast with a keen interest in Software Development, Cybersecurity and System Design. I like to design and build secure and scalable software systems that do not break under pressure. I have recently grown very fond of the ideas of Distributed Systems and Operating Systems, and I am currently adding them to my knowledge arsenal." 
            style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'rgba(255, 239, 179, 0.9)' }}
          />
          <RevealText 
            text="Outside the realm of computer sorcery, I enjoy doing ice-skating and playing basketball. I enjoy watching movies, web series and animes in the time when I think I should probably be sleeping. I also love to participate in debates and improvs which help me bring the necessary drama and chaos in my life."  
            delay={0.4}
            style={{ fontSize: '1.1rem', color: 'rgba(255, 239, 179, 0.9)' }}
          />
        </motion.div>
      </div>

      <style>{`
        .about-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .about-image-wrapper {
          width: 100%;
          max-width: 320px;
          display: flex;
          justify-content: center;
        }

        .about-image-frame {
          position: relative;
          padding: 12px;
          border: 1px dashed rgba(255, 239, 179, 0.15);
          border-radius: 12px;
          width: 100%;
          transition: border-color 0.3s ease;
        }

        .about-image {
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          border-radius: 8px;
          filter: grayscale(20%) contrast(105%);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          display: block;
        }

        .frame-corner {
          position: absolute;
          width: 16px;
          height: 16px;
          border-color: rgba(255, 239, 179, 0.4);
          border-style: solid;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .corner-tl { top: 0; left: 0; border-width: 2px 0 0 2px; border-top-left-radius: 6px; }
        .corner-tr { top: 0; right: 0; border-width: 2px 2px 0 0; border-top-right-radius: 6px; }
        .corner-bl { bottom: 0; left: 0; border-width: 0 0 2px 2px; border-bottom-left-radius: 6px; }
        .corner-br { bottom: 0; right: 0; border-width: 0 2px 2px 0; border-bottom-right-radius: 6px; }

        .about-text-wrapper {
          padding: 2.5rem;
          width: 100%;
          flex: 1;
        }

        /* Hover states */
        .about-image-frame:hover {
          border-color: rgba(255, 239, 179, 0.4);
        }

        .about-image-frame:hover .about-image {
          transform: scale(1.03);
          filter: grayscale(0%) contrast(100%);
          box-shadow: 0 20px 40px rgba(255, 239, 179, 0.05);
        }

        .about-image-frame:hover .corner-tl { top: -4px; left: -4px; border-color: var(--color-accent); }
        .about-image-frame:hover .corner-tr { top: -4px; right: -4px; border-color: var(--color-accent); }
        .about-image-frame:hover .corner-bl { bottom: -4px; left: -4px; border-color: var(--color-accent); }
        .about-image-frame:hover .corner-br { bottom: -4px; right: -4px; border-color: var(--color-accent); }

        @media (min-width: 768px) {
          .about-container {
            flex-direction: row;
            align-items: stretch;
            gap: 4rem;
          }

          .about-image-wrapper {
            max-width: 350px;
            align-items: center;
          }

          .about-text-wrapper {
            padding: 3.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
      `}</style>
    </Section>
  );
};

export default About;
