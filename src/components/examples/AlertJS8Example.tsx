import { useEffect, useRef } from 'react';

export default function AlertJS8Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const alert = document.createElement('div');
    alert.className = 'max-w-md p-5 bg-gradient-to-r from-red-900/30 to-orange-900/30 border-l-4 border-red-500 rounded-r-xl backdrop-blur-sm';

    const flexContainer = document.createElement('div');
    flexContainer.className = 'flex items-start gap-3';

    const icon = document.createElement('div');
    icon.className = 'text-red-400 mt-1';
    icon.innerHTML = '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>';

    const textContainer = document.createElement('div');
    textContainer.innerHTML = `
      <h4 class="font-bold text-red-300 mb-1">Operation Failed</h4>
      <p class="text-sm text-red-200/80">Unable to process your request. Please try again.</p>
    `;

    flexContainer.appendChild(icon);
    flexContainer.appendChild(textContainer);
    alert.appendChild(flexContainer);

    if (containerRef.current) {
      containerRef.current.appendChild(alert);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const alertjs8Code = `// Vanilla JavaScript + Tailwind
const alert = document.createElement('div');
alert.className = 'max-w-md p-5 bg-gradient-to-r from-red-900/30 to-orange-900/30 border-l-4 border-red-500 rounded-r-xl backdrop-blur-sm';

const flexContainer = document.createElement('div');
flexContainer.className = 'flex items-start gap-3';

const icon = document.createElement('div');
icon.className = 'text-red-400 mt-1';
icon.innerHTML = '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>';

const textContainer = document.createElement('div');
textContainer.innerHTML = \`
  <h4 class="font-bold text-red-300 mb-1">Operation Failed</h4>
  <p class="text-sm text-red-200/80">Unable to process your request. Please try again.</p>
\`;

flexContainer.appendChild(icon);
flexContainer.appendChild(textContainer);
alert.appendChild(flexContainer);

document.body.appendChild(alert);`;
