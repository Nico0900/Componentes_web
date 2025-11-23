import { useEffect, useRef } from 'react';

export default function ButtonJS9Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'position: relative; display: inline-block;';

    const button = document.createElement('button');
    button.textContent = 'Particle Burst';
    button.style.cssText = `
      padding: 14px 28px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 12px;
      font-weight: 700;
      cursor: pointer;
      position: relative;
      overflow: visible;
    `;

    button.addEventListener('click', (e) => {
      const rect = button.getBoundingClientRect();
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        const angle = (Math.PI * 2 * i) / 15;
        const velocity = 50 + Math.random() * 50;

        particle.style.cssText = `
          position: absolute;
          width: 6px;
          height: 6px;
          background: ${i % 2 === 0 ? '#667eea' : '#764ba2'};
          border-radius: 50%;
          left: ${rect.width / 2}px;
          top: ${rect.height / 2}px;
          pointer-events: none;
        `;

        wrapper.appendChild(particle);

        let x = 0, y = 0, opacity = 1;
        const animate = () => {
          x += Math.cos(angle) * 2;
          y += Math.sin(angle) * 2;
          opacity -= 0.02;

          particle.style.transform = `translate(${x}px, ${y}px)`;
          particle.style.opacity = opacity.toString();

          if (opacity > 0) {
            requestAnimationFrame(animate);
          } else {
            particle.remove();
          }
        };
        animate();
      }
    });

    wrapper.appendChild(button);
    containerRef.current.appendChild(wrapper);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef}></div>;
}

export const buttonjs9Code = `import { useEffect, useRef } from 'react';

export default function ButtonJS9Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'position: relative; display: inline-block;';

    const button = document.createElement('button');
    button.textContent = 'Particle Burst';
    button.style.cssText = \\\`
      padding: 14px 28px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 12px;
      font-weight: 700;
      cursor: pointer;
      position: relative;
      overflow: visible;
    \\\`;

    button.addEventListener('click', (e) => {
      const rect = button.getBoundingClientRect();
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        const angle = (Math.PI * 2 * i) / 15;
        const velocity = 50 + Math.random() * 50;

        particle.style.cssText = \\\`
          position: absolute;
          width: 6px;
          height: 6px;
          background: \\\${i % 2 === 0 ? '#667eea' : '#764ba2'};
          border-radius: 50%;
          left: \\\${rect.width / 2}px;
          top: \\\${rect.height / 2}px;
          pointer-events: none;
        \\\`;

        wrapper.appendChild(particle);

        let x = 0, y = 0, opacity = 1;
        const animate = () => {
          x += Math.cos(angle) * 2;
          y += Math.sin(angle) * 2;
          opacity -= 0.02;

          particle.style.transform = \\\`translate(\\\${x}px, \\\${y}px)\\\`;
          particle.style.opacity = opacity.toString();

          if (opacity > 0) {
            requestAnimationFrame(animate);
          } else {
            particle.remove();
          }
        };
        animate();
      }
    });

    wrapper.appendChild(button);
    containerRef.current.appendChild(wrapper);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef}></div>;
}`;
