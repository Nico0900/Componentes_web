import { useEffect, useRef } from 'react';

export default function ButtonJS3Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const button = document.createElement('button');
button.className = 'px-6 py-3 bg-transparent border-2 border-green-500 text-green-500 font-medium rounded-lg hover:bg-green-500 hover:text-white transition-all';
button.textContent = 'Outline';
document.body.appendChild(button);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const buttonjs3Code = `// Vanilla JavaScript
const button = document.createElement('button');
button.className = 'px-6 py-3 bg-transparent border-2 border-green-500 text-green-500 font-medium rounded-lg hover:bg-green-500 hover:text-white transition-all';
button.textContent = 'Outline';
document.body.appendChild(button);`;
