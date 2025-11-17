import { useEffect, useRef } from 'react';

export default function AlertJS1Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const alert = document.createElement('div');
alert.className = 'flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg max-w-md';
alert.innerHTML = '<svg class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg><p class="text-blue-400">This is an informational message.</p>';
document.body.appendChild(alert);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const alertjs1Code = `// Vanilla JavaScript
const alert = document.createElement('div');
alert.className = 'flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg max-w-md';
alert.innerHTML = '<svg class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg><p class="text-blue-400">This is an informational message.</p>';
document.body.appendChild(alert);`;
