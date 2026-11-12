import Section from '../components/Section';
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiKotlin,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGit,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiApachekafka,
  SiRabbitmq,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
  SiTerraform,
  SiPostman,
  SiWireshark,
  SiBurpsuite,
  SiMetasploit,
  SiOwasp,
  SiSplunk,
} from 'react-icons/si';
import { LuCpu } from 'react-icons/lu';

const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'C', Icon: SiC },
      { name: 'C++', Icon: SiCplusplus },
      { name: 'Python', Icon: SiPython },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'Go', Icon: SiGo },
      { name: 'Kotlin', Icon: SiKotlin },
      { name: 'Assembly', Icon: LuCpu }
    ]
  },
  {
    title: 'Development',
    skills: [
      { name: 'HTML', Icon: SiHtml5 },
      { name: 'CSS', Icon: SiCss },
      { name: 'Tailwind', Icon: SiTailwindcss },
      { name: 'React', Icon: SiReact },
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'Express', Icon: SiExpress },
      { name: 'Django', Icon: SiDjango }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', Icon: SiMysql },
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'MongoDB', Icon: SiMongodb },
      { name: 'Redis', Icon: SiRedis }
    ]
  },
  {
    title: 'DevOps & Infrastructure',
    skills: [
      { name: 'Git', Icon: SiGit },
      { name: 'GitHub', Icon: SiGithub },
      { name: 'Docker', Icon: SiDocker },
      { name: 'Kubernetes', Icon: SiKubernetes },
      { name: 'Kafka', Icon: SiApachekafka },
      { name: 'RabbitMQ', Icon: SiRabbitmq },
      { name: 'GitHub Actions', Icon: SiGithubactions },
      { name: 'Prometheus', Icon: SiPrometheus },
      { name: 'Grafana', Icon: SiGrafana },
      { name: 'Terraform', Icon: SiTerraform }
    ]
  },
  {
    title: 'Cyber Security & Networking',
    skills: [
      { name: 'Postman', Icon: SiPostman },
      { name: 'Wireshark', Icon: SiWireshark },
      { name: 'Burp Suite', Icon: SiBurpsuite },
      { name: 'Metasploit', Icon: SiMetasploit },
      { name: 'OWASP', Icon: SiOwasp },
      { name: 'Splunk', Icon: SiSplunk },
    ]
  }
];

const MythicDivider = () => (
  <div className="mythic-divider-container">
    <svg width="300" height="30" viewBox="0 0 300 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mythic-divider-svg" aria-hidden="true">
      {/* Left side wing ornament */}
      <path d="M 30,15 Q 60,8 100,15 Q 120,20 135,15" stroke="var(--color-accent)" strokeWidth="1" fill="none" opacity="0.3" />
      <path d="M 10,15 L 135,15" stroke="var(--color-accent)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 120,15 C 125,15 130,10 128,7 C 125,4 120,6 122,10 C 123,13 128,15 133,13" stroke="var(--color-accent)" strokeWidth="1.2" fill="none" />

      {/* Center Motif (Celtic style key) */}
      <path d="M 150,5 L 155,15 L 150,25 L 145,15 Z" fill="var(--color-accent)" />
      <path d="M 150,2 L 150,28" stroke="var(--color-accent)" strokeWidth="1" />
      <circle cx="150" cy="15" r="3" fill="var(--color-bg)" stroke="var(--color-accent)" strokeWidth="1" />

      {/* Right side wing ornament */}
      <path d="M 270,15 Q 240,8 200,15 Q 180,20 165,15" stroke="var(--color-accent)" strokeWidth="1" fill="none" opacity="0.3" />
      <path d="M 290,15 L 165,15" stroke="var(--color-accent)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 180,15 C 175,15 170,10 172,7 C 175,4 180,6 178,10 C 177,13 172,15 167,13" stroke="var(--color-accent)" strokeWidth="1.2" fill="none" />
      
      {/* Accent dots */}
      <circle cx="70" cy="15" r="1.5" fill="var(--color-accent)" />
      <circle cx="230" cy="15" r="1.5" fill="var(--color-accent)" />
    </svg>
  </div>
);

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="skills-container">
        {skillGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="skills-group-section">
            <h3 className="skills-group-title">{group.title}</h3>
            <div className="skills-grid">
              {group.skills.map((skill, index) => {
                const IconComponent = skill.Icon;
                return (
                  <div key={index} className="skill-card">
                    <div className="skill-icon-wrapper">
                      {IconComponent ? (
                        <IconComponent className="skill-icon" size={32} aria-hidden="true" />
                      ) : (
                        <div className="skill-icon-placeholder" />
                      )}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                );
              })}
            </div>
            {groupIdx < skillGroups.length - 1 && <MythicDivider />}
          </div>
        ))}
      </div>

      <style>{`
        .skills-container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .skills-group-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .skills-group-title {
          font-size: 0.95rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--color-accent);
          opacity: 0.65;
          margin-bottom: 2rem;
          text-align: center;
          font-family: var(--font-family);
        }

        .skills-grid {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.25rem;
        }

        @media (min-width: 768px) {
          .skills-grid {
            gap: 1.75rem;
          }
        }

        /* Borderless and Backgroundless Skill Cards */
        .skill-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 110px;
          padding: 0.75rem;
          background: transparent;
          border: none;
          box-shadow: none;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: center;
        }

        .skill-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          margin-bottom: 0.5rem;
          color: var(--color-text);
          opacity: 0.75;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .skill-icon-placeholder {
          width: 32px;
          height: 32px;
          background: transparent;
        }

        .skill-icon {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .skill-name {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-text);
          opacity: 0.7;
          letter-spacing: 0.02em;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Hover States for Borderless Design */
        .skill-card:hover {
          transform: translateY(-4px);
        }

        .skill-card:hover .skill-icon-wrapper {
          color: var(--color-accent);
          opacity: 1;
          filter: drop-shadow(0 0 8px rgba(255, 239, 179, 0.5));
        }

        .skill-card:hover .skill-icon {
          transform: scale(1.15);
        }

        .skill-card:hover .skill-name {
          opacity: 0.95;
          color: var(--color-accent);
          text-shadow: 0 0 8px rgba(255, 239, 179, 0.3);
        }

        /* Mythic Divider */
        .mythic-divider-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 4rem 0 3rem 0;
          width: 100%;
          opacity: 0.6;
          transition: opacity 0.3s;
        }

        .mythic-divider-container:hover {
          opacity: 0.95;
        }

        .mythic-divider-svg {
          filter: drop-shadow(0 0 2px rgba(255, 239, 179, 0.2));
        }
      `}</style>
    </Section>
  );
};

export default Skills;
