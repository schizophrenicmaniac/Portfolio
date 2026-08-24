import Section from '../components/Section';
import { RevealText, RevealHeading } from '../components/RevealText';
import Dock from '../components/Dock';
import { SiGithub, SiLeetcode, SiCodeforces, SiMedium } from 'react-icons/si';

const Profiles = () => {
  const profileItems = [
    {
      icon: <SiGithub aria-hidden="true" />,
      label: 'GitHub',
      href: 'https://github.com/schizophrenicmaniac',
      target: '_blank'
    },
    {
      icon: <SiLeetcode aria-hidden="true" />,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/divyansh288/',
      target: '_blank'
    },
    {
      icon: <SiCodeforces aria-hidden="true" />,
      label: 'Codeforces',
      href: 'https://codeforces.com/profile/divyansh288',
      target: '_blank'
    },
    {
      icon: <SiMedium aria-hidden="true" />,
      label: 'Medium',
      href: 'https://medium.com/@divyanshyadav1027',
      target: '_blank'
    }
  ];

  return (
    <Section id="profiles">
      <div className="profiles-container">
        <RevealHeading 
          text="Around the Web" 
          style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            marginBottom: '1rem', 
            color: 'var(--color-text)', 
            display: 'inline-flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center' 
          }} 
        />
        <RevealText 
          text="Check out my presence on other platforms and please do not hesitate to follow me xD :)" 
          style={{ 
            fontSize: '1.15rem', 
            opacity: 0.8, 
            marginBottom: '4rem', 
            textAlign: 'center',
            maxWidth: '560px'
          }}
          delay={0.4}
        />
        
        <div className="dock-wrapper">
          <Dock items={profileItems} />
        </div>
      </div>

      <style>{`
        .profiles-container {
          text-align: center;
          max-width: 650px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-bottom: 2rem;
        }

        .dock-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 1rem;
        }
      `}</style>
    </Section>
  );
};

export default Profiles;
