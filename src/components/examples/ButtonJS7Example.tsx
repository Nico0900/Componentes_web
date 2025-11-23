import { useEffect, useRef } from 'react';

export default function ButtonJS7Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const button = document.createElement('button');
    button.className = 'relative overflow-hidden px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg transition-all hover:bg-purple-700';
    button.textContent = 'Ripple Effect';
    button.style.cssText = 'position: relative; overflow: hidden;';

    button.addEventListener('click', (e) => {
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        left: ${x}px;
        top: ${y}px;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `;

      const style = document.createElement('style');
      style.textContent = `
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `;
      if (!document.head.querySelector('style[data-ripple]')) {
        style.setAttribute('data-ripple', 'true');
        document.head.appendChild(style);
      }

      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
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

export const buttonjs7Code = `import { useEffect, useRef } from 'react';

export default function ButtonJS7Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const button = document.createElement('button');
    button.className = 'relative overflow-hidden px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg transition-all hover:bg-purple-700';
    button.textContent = 'Ripple Effect';
    button.style.cssText = 'position: relative; overflow: hidden;';

    button.addEventListener('click', (e) => {
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = \\\`
        position: absolute;
        width: \\\${size}px;
        height: \\\${size}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        left: \\\${x}px;
        top: \\\${y}px;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      \\\`;

      const style = document.createElement('style');
      style.textContent = \\\`
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      \\\`;
      if (!document.head.querySelector('style[data-ripple]')) {
        style.setAttribute('data-ripple', 'true');
        document.head.appendChild(style);
      }

      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
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
