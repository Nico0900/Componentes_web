import { useEffect, useRef } from 'react';

export default function ButtonJS14Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const button = document.createElement('button');
    button.style.cssText = `
      padding: 14px 32px;
      background: linear-gradient(135deg, #ffa500 0%, #ff1493 100%);
      color: white;
      border: none;
      border-radius: 25px;
      font-weight: 700;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    `;

    const text1 = document.createElement('span');
    text1.textContent = 'Hover Me';
    text1.style.cssText = `
      display: block;
      transition: transform 0.3s ease;
    `;

    const text2 = document.createElement('span');
    text2.textContent = 'Click Now!';
    text2.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 100%);
      transition: transform 0.3s ease;
    `;

    button.appendChild(text1);
    button.appendChild(text2);

    button.addEventListener('mouseenter', () => {
      text1.style.transform = 'translateY(-100%)';
      text2.style.transform = 'translate(-50%, -50%)';
    });

    button.addEventListener('mouseleave', () => {
      text1.style.transform = 'translateY(0)';
      text2.style.transform = 'translate(-50%, 100%)';
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

export const buttonjs14Code = `import { useEffect, useRef } from 'react';

export default function ButtonJS14Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const button = document.createElement('button');
    button.style.cssText = \\\`
      padding: 14px 32px;
      background: linear-gradient(135deg, #ffa500 0%, #ff1493 100%);
      color: white;
      border: none;
      border-radius: 25px;
      font-weight: 700;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    \\\`;

    const text1 = document.createElement('span');
    text1.textContent = 'Hover Me';
    text1.style.cssText = \\\`
      display: block;
      transition: transform 0.3s ease;
    \\\`;

    const text2 = document.createElement('span');
    text2.textContent = 'Click Now!';
    text2.style.cssText = \\\`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 100%);
      transition: transform 0.3s ease;
    \\\`;

    button.appendChild(text1);
    button.appendChild(text2);

    button.addEventListener('mouseenter', () => {
      text1.style.transform = 'translateY(-100%)';
      text2.style.transform = 'translate(-50%, -50%)';
    });

    button.addEventListener('mouseleave', () => {
      text1.style.transform = 'translateY(0)';
      text2.style.transform = 'translate(-50%, 100%)';
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
