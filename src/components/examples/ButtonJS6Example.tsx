import { useEffect, useRef } from 'react';

export default function ButtonJS6Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const button = document.createElement('button');
button.className = 'px-6 py-3 bg-slate-600 text-slate-400 font-medium rounded-lg cursor-not-allowed opacity-60';
button.textContent = 'Disabled';
button.disabled = true;
document.body.appendChild(button);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const buttonjs6Code = `// Vanilla JavaScript
const button = document.createElement('button');
button.className = 'px-6 py-3 bg-slate-600 text-slate-400 font-medium rounded-lg cursor-not-allowed opacity-60';
button.textContent = 'Disabled';
button.disabled = true;
document.body.appendChild(button);`;
