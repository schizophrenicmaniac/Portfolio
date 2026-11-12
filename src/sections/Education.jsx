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
    </Section>
  );
};

export default Education;
