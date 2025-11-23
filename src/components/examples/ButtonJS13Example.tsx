import { useEffect, useRef } from 'react';

export default function ButtonJS13Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const button = document.createElement('button');
    button.textContent = 'Glitch Effect';
    button.style.cssText = `
      padding: 14px 28px;
      background: #000;
      color: #0f0;
      border: 2px solid #0f0;
      border-radius: 4px;
      font-weight: 700;
      font-family: monospace;
      cursor: pointer;
      position: relative;
    `;

    let glitchInterval: NodeJS.Timeout;

    const glitch = () => {
      const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
      const originalText = 'Glitch Effect';
      let iteration = 0;

      glitchInterval = setInterval(() => {
        button.textContent = originalText
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join('');

        if (iteration >= originalText.length) {
          clearInterval(glitchInterval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    button.addEventListener('mouseenter', () => {
      glitch();
      button.style.textShadow = '2px 2px #f00, -2px -2px #00f';
    });

    button.addEventListener('mouseleave', () => {
      clearInterval(glitchInterval);
      button.textContent = 'Glitch Effect';
      button.style.textShadow = 'none';
    });

    containerRef.current.appendChild(button);

    return () => {
      clearInterval(glitchInterval);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef}></div>;
}

export const buttonjs13Code = `import { useEffect, useRef } from 'react';

export default function ButtonJS13Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const button = document.createElement('button');
    button.textContent = 'Glitch Effect';
    button.style.cssText = \\\`
      padding: 14px 28px;
      background: #000;
      color: #0f0;
      border: 2px solid #0f0;
      border-radius: 4px;
      font-weight: 700;
      font-family: monospace;
      cursor: pointer;
      position: relative;
    \\\`;

    let glitchInterval: NodeJS.Timeout;

    const glitch = () => {
      const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
      const originalText = 'Glitch Effect';
      let iteration = 0;

      glitchInterval = setInterval(() => {
        button.textContent = originalText
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join('');

        if (iteration >= originalText.length) {
          clearInterval(glitchInterval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    button.addEventListener('mouseenter', () => {
      glitch();
      button.style.textShadow = '2px 2px #f00, -2px -2px #00f';
    });

    button.addEventListener('mouseleave', () => {
      clearInterval(glitchInterval);
      button.textContent = 'Glitch Effect';
      button.style.textShadow = 'none';
    });

    containerRef.current.appendChild(button);

    return () => {
      clearInterval(glitchInterval);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef}></div>;
}`;
