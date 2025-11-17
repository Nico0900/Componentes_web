import { useEffect, useRef } from 'react';

export default function AlertJS2Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const alert = document.createElement('div');
alert.className = 'flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg max-w-md';
alert.innerHTML = '<svg class="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><p class="text-green-400">Operation completed successfully!</p>';
document.body.appendChild(alert);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const alertjs2Code = `// Vanilla JavaScript
const alert = document.createElement('div');
alert.className = 'flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg max-w-md';
alert.innerHTML = '<svg class="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><p class="text-green-400">Operation completed successfully!</p>';
document.body.appendChild(alert);`;
