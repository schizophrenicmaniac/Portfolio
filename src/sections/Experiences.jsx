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
    </Section>
  );
};

export default Experiences;
