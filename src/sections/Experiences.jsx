import Section from '../components/Section';
import { RevealText } from '../components/RevealText';
import { m as motion } from 'framer-motion';

const experiences = [
  {
    role: 'Software Development Intern',
    company: 'Tech Swarm',
    period: 'September 2025 - November 2025',
    bulletPoints: [
      'Engineered a reliable drone-to-ground telemetry communication system utilizing MQTT and Protocol Buffers to ensure seamless data transmission.',
      'Architected a high-throughput asynchronous Kafka ingestion pipeline, integrating InfluxDB for downsampled storage to optimize and process geospatial queries.'
    ]
  },
  {
    role: 'Cybersecurity Domain',
    company: 'Inter IIT Tech 14.0, Patna (Qtrino Labs)',
    period: 'November 2025 - December 2025',
    bulletPoints: [
      'Implemented a secure DTLS 1.3 communication protocol tailored for bare-metal RISC-V IoT devices, achieving zero dynamic memory allocation to prevent memory fragmentation and ensure deterministic performance in a constrained environment.',
      'Designed an asynchronous cryptographic data pipeline integrating state-of-the-art Post-Quantum Cryptography (CRYSTAL-Kyber and CRYSTAL-Dilithium) and pre-shared key (PSK) authentication, utilizing lock-free ring buffers to optimize high-speed packet ingestion, compress the memory footprint, and sustain low-latency secure transmissions.'
    ]
  },
  {
    role: 'Software Development Intern',
    company: 'MyGyan',
    period: 'September 2025 - January 2026',
    bulletPoints: [
      'Engineered an intelligent, LLM-driven multimodal pipeline capable of dynamically generating personalized video lectures and quizzes matched to custom learning goals, implementing advanced semantic caching to efficiently store and reuse assets.',
      'Developed a custom LLM routing strategy leveraging RouteLLM to intelligently direct prompts based on domain proficiency, cost constraints, and request urgency to achieve optimal accuracy and latency.',
      'Architected and orchestrated scalable, containerized microservices using Amazon EKS, and designed event-driven serverless routines on AWS Lambda to ensure highly cost-effective, high-availability infrastructure.',
      'Automated secure CI/CD pipelines using GitHub Actions and built centralized observability dashboards with AWS CloudWatch to streamline deployments and accelerate incident response times.'
    ]
  }
];

const Experiences = () => {
  return (
    <Section id="experiences" title="Experiences">
      <div className="timeline-container">
        {experiences.map((exp, index) => (
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
              <span className="timeline-date">{exp.period}</span>
              <h3 className="timeline-role">{exp.role}</h3>
              <h4 className="timeline-company">{exp.company}</h4>
              <ul className="timeline-bullets">
                {exp.bulletPoints.map((point, ptIdx) => (
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

export default Experiences;
