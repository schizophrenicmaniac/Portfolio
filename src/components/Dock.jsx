import { m as motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function DockItem({ children, className = '', onClick, scale, baseItemSize, onMouseEnter, spring, label, href, target }) {
  const Component = href ? motion.a : motion.div;
  return (
    <Component
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onKeyDown={(e) => {
        if (!href && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick?.();
        }
      }}
      className={`dock-item ${className}`}
      style={{
        width: baseItemSize,
        height: baseItemSize,
      }}
      animate={{
        scale: scale,
      }}
      transition={{
        type: 'spring',
        ...spring
      }}
      tabIndex={0}
      role={href ? "link" : "button"}
      aria-label={label}
    >
      {children}
    </Component>
  );
}

function DockLabel({ label, isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10, x: '-50%' }}
          animate={{ opacity: 1, y: -10, x: '-50%' }}
          exit={{ opacity: 0, y: 10, x: '-50%' }}
          transition={{ duration: 0.15 }}
          className="dock-label"
          role="tooltip"
        >
          {label}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = '' }) {
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

export default function Dock({
  items,
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  baseItemSize = 50
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const maxScale = magnification / baseItemSize;
  const scaleStep1 = 1 + (maxScale - 1) * 0.45;
  const scaleStep2 = 1 + (maxScale - 1) * 0.12;

  return (
    <div className="dock-outer">
      <div
        className={`dock-panel ${className}`}
        onMouseLeave={() => setHoveredIndex(null)}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => {
          let scale = 1.0;
          if (hoveredIndex !== null) {
            const distance = Math.abs(hoveredIndex - index);
            if (distance === 0) {
              scale = maxScale;
            } else if (distance === 1) {
              scale = scaleStep1;
            } else if (distance === 2) {
              scale = scaleStep2;
            }
          }

          return (
            <DockItem
              key={index}
              onClick={item.onClick}
              className={item.className ?? ''}
              scale={scale}
              baseItemSize={baseItemSize}
              onMouseEnter={() => setHoveredIndex(index)}
              spring={spring}
              label={item.label}
              href={item.href}
              target={item.target}
            >
              <DockIcon>{item.icon}</DockIcon>
              <DockLabel label={item.label} isVisible={hoveredIndex === index} />
            </DockItem>
          );
        })}
      </div>

      <style>{`
        .dock-outer {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          pointer-events: none;
          z-index: 10;
          width: 100%;
        }

        .dock-panel {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 12px;
          padding: 10px 16px;
          background: rgba(255, 239, 179, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 239, 179, 0.08);
          border-radius: 24px;
          pointer-events: auto;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          box-sizing: border-box;
        }

        .dock-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: rgba(255, 239, 179, 0.03);
          border: 1px solid rgba(255, 239, 179, 0.06);
          cursor: pointer;
          color: var(--color-text);
          transition: background 0.2s ease, border-color 0.2s ease;
          box-sizing: border-box;
          text-decoration: none;
        }

        .dock-item:hover,
        .dock-item:focus-visible {
          background: rgba(255, 239, 179, 0.12);
          border-color: rgba(255, 239, 179, 0.25);
        }

        .dock-item:focus-visible {
          outline: 2px solid var(--color-accent);
          outline-offset: 3px;
        }

        .dock-icon {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dock-icon svg {
          width: 50%;
          height: 50%;
          color: var(--color-text);
          opacity: 0.9;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .dock-item:hover .dock-icon svg {
          opacity: 1;
          transform: scale(1.1);
        }

        .dock-label {
          position: absolute;
          top: -42px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(1, 62, 55, 0.95);
          color: var(--color-text);
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 500;
          white-space: nowrap;
          border: 1px solid rgba(255, 239, 179, 0.2);
          pointer-events: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}
