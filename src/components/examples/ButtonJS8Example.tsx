import { useEffect, useRef } from 'react';

export default function ButtonJS8Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const button = document.createElement('button');
    button.textContent = 'Neon Glow';
    button.style.cssText = `
      padding: 12px 24px;
      background: transparent;
      color: #00ffff;
      border: 2px solid #00ffff;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 0 10px #00ffff;
    `;

    button.addEventListener('mouseenter', () => {
      button.style.boxShadow = '0 0 20px #00ffff, 0 0 40px #00ffff, inset 0 0 10px #00ffff';
      button.style.backgroundColor = 'rgba(0, 255, 255, 0.1)';
      button.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.boxShadow = '0 0 10px #00ffff';
      button.style.backgroundColor = 'transparent';
      button.style.transform = 'scale(1)';
    });

    containerRef.current.appendChild(button);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef}></div>;
}

export const buttonjs8Code = `import { useEffect, useRef } from 'react';

export default function ButtonJS8Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const button = document.createElement('button');
    button.textContent = 'Neon Glow';
    button.style.cssText = \\\`
      padding: 12px 24px;
      background: transparent;
      color: #00ffff;
      border: 2px solid #00ffff;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 0 10px #00ffff;
    \\\`;

    button.addEventListener('mouseenter', () => {
      button.style.boxShadow = '0 0 20px #00ffff, 0 0 40px #00ffff, inset 0 0 10px #00ffff';
      button.style.backgroundColor = 'rgba(0, 255, 255, 0.1)';
      button.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.boxShadow = '0 0 10px #00ffff';
      button.style.backgroundColor = 'transparent';
      button.style.transform = 'scale(1)';
    });

    containerRef.current.appendChild(button);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef}></div>;
}`;
