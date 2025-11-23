import { useEffect, useRef } from 'react';

export default function ButtonJS11Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const button = document.createElement('button');
    button.textContent = 'Magnetic';
    button.style.cssText = `
      padding: 14px 30px;
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      color: white;
      border: none;
      border-radius: 10px;
      font-weight: 700;
      cursor: pointer;
      transition: transform 0.1s ease;
    `;

    let centerX = 0;
    let centerY = 0;

    const updateCenter = () => {
      const rect = button.getBoundingClientRect();
      centerX = rect.left + rect.width / 2;
      centerY = rect.top + rect.height / 2;
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateCenter();
      const deltaX = (e.clientX - centerX) * 0.15;
      const deltaY = (e.clientY - centerY) * 0.15;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < 100) {
        button.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.05)`;
      } else {
        button.style.transform = 'translate(0, 0) scale(1)';
      }
    };

    const handleMouseLeave = () => {
      button.style.transform = 'translate(0, 0) scale(1)';
    };

    updateCenter();
    window.addEventListener('resize', updateCenter);
    document.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    containerRef.current.appendChild(button);

    return () => {
      window.removeEventListener('resize', updateCenter);
      document.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef}></div>;
}

export const buttonjs11Code = `import { useEffect, useRef } from 'react';

export default function ButtonJS11Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const button = document.createElement('button');
    button.textContent = 'Magnetic';
    button.style.cssText = \\\`
      padding: 14px 30px;
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      color: white;
      border: none;
      border-radius: 10px;
      font-weight: 700;
      cursor: pointer;
      transition: transform 0.1s ease;
    \\\`;

    let centerX = 0;
    let centerY = 0;

    const updateCenter = () => {
      const rect = button.getBoundingClientRect();
      centerX = rect.left + rect.width / 2;
      centerY = rect.top + rect.height / 2;
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateCenter();
      const deltaX = (e.clientX - centerX) * 0.15;
      const deltaY = (e.clientY - centerY) * 0.15;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < 100) {
        button.style.transform = \\\`translate(\\\${deltaX}px, \\\${deltaY}px) scale(1.05)\\\`;
      } else {
        button.style.transform = 'translate(0, 0) scale(1)';
      }
    };

    const handleMouseLeave = () => {
      button.style.transform = 'translate(0, 0) scale(1)';
    };

    updateCenter();
    window.addEventListener('resize', updateCenter);
    document.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    containerRef.current.appendChild(button);

    return () => {
      window.removeEventListener('resize', updateCenter);
      document.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef}></div>;
}`;
