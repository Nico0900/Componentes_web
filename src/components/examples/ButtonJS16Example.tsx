import { useEffect, useRef } from 'react';

export default function ButtonJS16Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const button = document.createElement('button');
    button.textContent = 'Holographic';
    button.style.cssText = `
      padding: 14px 32px;
      background: linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0, #ff0080);
      background-size: 300% 300%;
      color: white;
      border: none;
      border-radius: 12px;
      font-weight: 700;
      cursor: pointer;
      position: relative;
      animation: gradient 3s ease infinite;
      box-shadow: 0 4px 15px rgba(255, 0, 128, 0.4);
      transition: transform 0.2s, box-shadow 0.2s;
    `;

    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    if (!document.head.querySelector('style[data-gradient]')) {
      style.setAttribute('data-gradient', 'true');
      document.head.appendChild(style);
    }

    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px) scale(1.05)';
      button.style.boxShadow = '0 6px 25px rgba(255, 0, 128, 0.6)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0) scale(1)';
      button.style.boxShadow = '0 4px 15px rgba(255, 0, 128, 0.4)';
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

export const buttonjs16Code = `import { useEffect, useRef } from 'react';

export default function ButtonJS16Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const button = document.createElement('button');
    button.textContent = 'Holographic';
    button.style.cssText = \\\`
      padding: 14px 32px;
      background: linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0, #ff0080);
      background-size: 300% 300%;
      color: white;
      border: none;
      border-radius: 12px;
      font-weight: 700;
      cursor: pointer;
      position: relative;
      animation: gradient 3s ease infinite;
      box-shadow: 0 4px 15px rgba(255, 0, 128, 0.4);
      transition: transform 0.2s, box-shadow 0.2s;
    \\\`;

    const style = document.createElement('style');
    style.textContent = \\\`
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    \\\`;
    if (!document.head.querySelector('style[data-gradient]')) {
      style.setAttribute('data-gradient', 'true');
      document.head.appendChild(style);
    }

    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px) scale(1.05)';
      button.style.boxShadow = '0 6px 25px rgba(255, 0, 128, 0.6)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0) scale(1)';
      button.style.boxShadow = '0 4px 15px rgba(255, 0, 128, 0.4)';
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
