import { useEffect, useRef } from 'react';

export default function ButtonJS1Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const button = document.createElement('button');
button.className = 'px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors';
button.textContent = 'Click Me';
document.body.appendChild(button);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const buttonjs1Code = `// Vanilla JavaScript
const button = document.createElement('button');
button.className = 'px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors';
button.textContent = 'Click Me';
document.body.appendChild(button);`;
