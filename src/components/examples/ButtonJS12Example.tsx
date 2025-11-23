import { useEffect, useRef } from 'react';

export default function ButtonJS12Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const button = document.createElement('button');
    button.textContent = 'Liquid Fill';
    button.style.cssText = `
      padding: 14px 32px;
      background: transparent;
      color: #3b82f6;
      border: 2px solid #3b82f6;
      border-radius: 50px;
      font-weight: 700;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      z-index: 1;
      transition: color 0.4s ease;
    `;

    const liquid = document.createElement('div');
    liquid.style.cssText = `
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0%;
      background: #3b82f6;
      z-index: -1;
      transition: height 0.4s ease;
      border-radius: 50%;
    `;

    button.appendChild(liquid);

    button.addEventListener('mouseenter', () => {
      liquid.style.height = '200%';
      liquid.style.borderRadius = '0';
      button.style.color = 'white';
    });

    button.addEventListener('mouseleave', () => {
      liquid.style.height = '0%';
      liquid.style.borderRadius = '50%';
      button.style.color = '#3b82f6';
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

export const buttonjs12Code = `import { useEffect, useRef } from 'react';

export default function ButtonJS12Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const button = document.createElement('button');
    button.textContent = 'Liquid Fill';
    button.style.cssText = \\\`
      padding: 14px 32px;
      background: transparent;
      color: #3b82f6;
      border: 2px solid #3b82f6;
      border-radius: 50px;
      font-weight: 700;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      z-index: 1;
      transition: color 0.4s ease;
    \\\`;

    const liquid = document.createElement('div');
    liquid.style.cssText = \\\`
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0%;
      background: #3b82f6;
      z-index: -1;
      transition: height 0.4s ease;
      border-radius: 50%;
    \\\`;

    button.appendChild(liquid);

    button.addEventListener('mouseenter', () => {
      liquid.style.height = '200%';
      liquid.style.borderRadius = '0';
      button.style.color = 'white';
    });

    button.addEventListener('mouseleave', () => {
      liquid.style.height = '0%';
      liquid.style.borderRadius = '50%';
      button.style.color = '#3b82f6';
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
