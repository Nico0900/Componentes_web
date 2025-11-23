import { useEffect, useRef } from 'react';

export default function ButtonJS10Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const button = document.createElement('button');
    button.textContent = 'Sound Wave';
    button.style.cssText = `
      padding: 12px 32px;
      background: #1e293b;
      color: #10b981;
      border: 2px solid #10b981;
      border-radius: 8px;
      font-weight: 700;
      cursor: pointer;
      position: relative;
      display: inline-flex;
      gap: 8px;
      align-items: center;
    `;

    const waveContainer = document.createElement('div');
    waveContainer.style.cssText = 'display: flex; gap: 2px; align-items: center;';

    for (let i = 0; i < 5; i++) {
      const bar = document.createElement('div');
      bar.style.cssText = `
        width: 3px;
        height: 12px;
        background: #10b981;
        border-radius: 2px;
        animation: wave 1s ease-in-out infinite;
        animation-delay: ${i * 0.1}s;
      `;
      waveContainer.appendChild(bar);
    }

    const style = document.createElement('style');
    style.textContent = `
      @keyframes wave {
        0%, 100% { height: 12px; }
        50% { height: 24px; }
      }
    `;
    if (!document.head.querySelector('style[data-wave]')) {
      style.setAttribute('data-wave', 'true');
      document.head.appendChild(style);
    }

    button.appendChild(waveContainer);
    containerRef.current.appendChild(button);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef}></div>;
}

export const buttonjs10Code = `import { useEffect, useRef } from 'react';

export default function ButtonJS10Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const button = document.createElement('button');
    button.textContent = 'Sound Wave';
    button.style.cssText = \\\`
      padding: 12px 32px;
      background: #1e293b;
      color: #10b981;
      border: 2px solid #10b981;
      border-radius: 8px;
      font-weight: 700;
      cursor: pointer;
      position: relative;
      display: inline-flex;
      gap: 8px;
      align-items: center;
    \\\`;

    const waveContainer = document.createElement('div');
    waveContainer.style.cssText = 'display: flex; gap: 2px; align-items: center;';

    for (let i = 0; i < 5; i++) {
      const bar = document.createElement('div');
      bar.style.cssText = \\\`
        width: 3px;
        height: 12px;
        background: #10b981;
        border-radius: 2px;
        animation: wave 1s ease-in-out infinite;
        animation-delay: \\\${i * 0.1}s;
      \\\`;
      waveContainer.appendChild(bar);
    }

    const style = document.createElement('style');
    style.textContent = \\\`
      @keyframes wave {
        0%, 100% { height: 12px; }
        50% { height: 24px; }
      }
    \\\`;
    if (!document.head.querySelector('style[data-wave]')) {
      style.setAttribute('data-wave', 'true');
      document.head.appendChild(style);
    }

    button.appendChild(waveContainer);
    containerRef.current.appendChild(button);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef}></div>;
}`;
