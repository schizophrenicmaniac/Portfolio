import { useState, useEffect } from 'react';
import { m as motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experiences', href: '#experiences' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blogs', href: '#blogs' },
  { name: 'Skills', href: '#skills' },
  { name: 'Profiles', href: '#profiles' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1rem 2rem',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(1, 62, 55, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 239, 179, 0.05)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
        <a href="#" style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--color-text)', letterSpacing: '-0.02em', fontFamily: 'var(--font-title)' }}>
          Divyansh Yadav<span style={{ color: 'var(--color-accent)' }}>.</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', gap: '2rem' }} className="desktop-nav">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              style={{
                fontSize: '1.4rem',
                fontWeight: 500,
                color: 'var(--color-text)',
                opacity: 0.8,
                transition: 'opacity 0.2s',
                fontFamily: 'var(--font-title)',
              }}
              onMouseEnter={(e) => e.target.style.opacity = 1}
              onMouseLeave={(e) => e.target.style.opacity = 0.8}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="mobile-toggle"
          style={{ display: 'block', color: 'var(--color-text)', zIndex: 1001 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: '1rem',
              right: '1rem',
              background: 'rgba(1, 62, 55, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 239, 179, 0.1)',
              borderRadius: '16px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              alignItems: 'center'
            }}
          >
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: '1.4rem', fontWeight: 500, color: 'var(--color-text)', fontFamily: 'var(--font-title)' }}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
};

export default Navbar;
