import Section from '../components/Section';
import { RevealText } from '../components/RevealText';
import { m as motion } from 'framer-motion';

const educationList = [
  {
    role: 'BTech in Computer Science',
    company: 'Indian Institute of Technology, Jodhpur',
    period: '2024 - Present',
    bulletPoints: [
      'Mentored 12 freshers throughout their first year as a Student Guide for the Wellbeing Committee.',
      'Managed digital infrastructure as Tech Coordinator for Society of Alumni Affairs.',
      'Directed flagship technical competitions like RC Racing and CTF as Assistant Head for Prometeo 2026.',
      'Represented the institute at Inter IIT Tech 14.0.',
      'Leading the technical events team as Head of Technical Events for Prometeo 2027.'
    ]
  },
  {
    role: 'Class XII (CBSE)',
    company: 'Paramount International School',
    period: '2022 - 2024',
    bulletPoints: [
      'Graduated with 95% in the CBSE Class XII Board Exams.',
      'Secured overall Rank 3 in the school.'
    ]
  },
  {
    role: 'Class X (CBSE)',
    company: 'Modern Convent School',
    period: '2010 - 2022',
    bulletPoints: [
      'Achieved 96.2% in the CBSE Class X Board Exams.',
      'Honored with the highly coveted Student All-Rounder Award.',
      'Led athletic teams and sporting events as the Vice Captain for Sports.'
    ]
  }
];

const Education = () => {
  return (
    <Section id="education" title="Education">
      <div className="timeline-container">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="timeline-line"></div>
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <span className="timeline-date">{edu.period}</span>
              <h3 className="timeline-role">{edu.role}</h3>
              <h4 className="timeline-company">{edu.company}</h4>
              <ul className="timeline-bullets">
                {edu.bulletPoints.map((point, ptIdx) => (
                  <li key={ptIdx} className="timeline-bullet-item">
                    <RevealText text={point} className="timeline-description" />
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .timeline-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding-left: 2.5rem;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-line {
          position: absolute;
          left: -1.25rem;
          transform: translateX(-50%);
          width: 2px;
          background: linear-gradient(
            to bottom,
            rgba(255, 239, 179, 0.05) 0%,
            var(--color-accent) 50%,
            rgba(255, 239, 179, 0.05) 100%
          );
          opacity: 0.25;
          top: 0;
          bottom: -3rem; /* Spans the gap to the next item */
          z-index: 1;
        }

        .timeline-item:first-of-type .timeline-line {
          top: 50%;
        }

        .timeline-item:last-of-type .timeline-line {
          bottom: 50%; /* Ends exactly at the last dot */
        }

        .timeline-dot {
          position: absolute;
          left: -1.25rem;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--color-bg);
          border: 3px solid var(--color-accent);
          box-shadow: 0 0 10px rgba(255, 239, 179, 0.3);
          z-index: 2;
          transition: all 0.3s ease;
        }

        .timeline-content {
          padding: 2rem;
          border: 1px solid rgba(255, 239, 179, 0.05);
          background: rgba(255, 239, 179, 0.02);
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .timeline-date {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-accent);
          opacity: 0.7;
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .timeline-role {
          font-size: clamp(1.2rem, 2.5vw, 1.4rem);
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 0.25rem;
        }

        .timeline-company {
          font-size: 1rem;
          font-weight: 500;
          color: var(--color-accent);
          margin-bottom: 0.5rem;
          opacity: 0.9;
        }

        .timeline-bullets {
          list-style-type: none;
          margin: 1rem 0 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .timeline-bullet-item {
          position: relative;
          padding-left: 1.25rem;
        }

        .timeline-bullet-item::before {
          content: "—";
          position: absolute;
          left: 0;
          top: 0;
          color: var(--color-accent);
          opacity: 0.7;
        }

        .timeline-description {
          font-size: 0.95rem;
          color: var(--color-text);
          opacity: 0.85;
          line-height: 1.6;
        }

        /* Hover states */
        .timeline-item:hover .timeline-dot {
          background: var(--color-accent);
          box-shadow: 0 0 15px var(--color-accent);
          transform: translate(-50%, -50%) scale(1.25);
        }

        .timeline-content:hover {
          background: rgba(255, 239, 179, 0.05);
          border-color: rgba(255, 239, 179, 0.25);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(255, 239, 179, 0.05);
        }
      `}</style>
    </Section>
  );
};

export default Education;
