import Section from '../components/Section';
import { RevealText, RevealHeading } from '../components/RevealText';
import Dock from '../components/Dock';
import { FiPhone, FiMail, FiLinkedin } from 'react-icons/fi';
import { useState } from 'react';

const Contact = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const socialItems = [
    {
      icon: <FiPhone aria-hidden="true" />,
      label: copiedPhone ? 'Copied!' : 'Phone',
      href: 'tel:+919210992006',
      onClick: () => {
        navigator.clipboard.writeText('+91 9210992006').then(() => {
          setCopiedPhone(true);
          setTimeout(() => setCopiedPhone(false), 2000);
        }).catch(() => {});
      }
    },
    {
      icon: <FiMail aria-hidden="true" />,
      label: copiedEmail ? 'Copied!' : 'Email',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=divyanshyadav1027@gmail.com',
      target: '_blank',
      onClick: () => {
        navigator.clipboard.writeText('divyanshyadav1027@gmail.com').then(() => {
          setCopiedEmail(true);
          setTimeout(() => setCopiedEmail(false), 2000);
        }).catch(() => {});
      }
    },
    {
      icon: <FiLinkedin aria-hidden="true" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/divyanshyadav1027/',
      target: '_blank'
    }
  ];

  return (
    <Section id="contact">
      <div className="contact-container">
        <RevealHeading 
          text="Let's work together." 
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
          text="Feel free to reach out if you have a question, or just want to connect." 
          style={{ 
            fontSize: '1.15rem', 
            opacity: 0.8, 
            marginBottom: '4rem', 
            textAlign: 'center',
            maxWidth: '500px'
          }}
          delay={0.4}
        />
        
        <div className="dock-wrapper">
          <Dock items={socialItems} />
        </div>
      </div>

      <style>{`
        .contact-container {
          text-align: center;
          max-width: 600px;
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

export default Contact;

