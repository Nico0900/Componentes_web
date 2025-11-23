import { useEffect, useRef } from 'react';

export default function AlertJS7Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const alert = document.createElement('div');
    alert.className = 'max-w-md p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg';

    const content = document.createElement('div');
    content.className = 'flex items-center gap-3';

    const iconDiv = document.createElement('div');
    iconDiv.className = 'bg-emerald-500 p-2 rounded-full';
    iconDiv.innerHTML = '<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>';

    const textDiv = document.createElement('div');
    const title = document.createElement('h4');
    title.className = 'font-semibold text-emerald-300';
    title.textContent = 'Success!';

    const message = document.createElement('p');
    message.className = 'text-sm text-emerald-200/80';
    message.textContent = 'Your action was completed successfully.';

    textDiv.appendChild(title);
    textDiv.appendChild(message);
    content.appendChild(iconDiv);
    content.appendChild(textDiv);
    alert.appendChild(content);

    if (containerRef.current) {
      containerRef.current.appendChild(alert);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const alertjs7Code = `// Vanilla JavaScript + Tailwind
const alert = document.createElement('div');
alert.className = 'max-w-md p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg';

const content = document.createElement('div');
content.className = 'flex items-center gap-3';

const iconDiv = document.createElement('div');
iconDiv.className = 'bg-emerald-500 p-2 rounded-full';
iconDiv.innerHTML = '<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>';

const textDiv = document.createElement('div');
const title = document.createElement('h4');
title.className = 'font-semibold text-emerald-300';
title.textContent = 'Success!';

const message = document.createElement('p');
message.className = 'text-sm text-emerald-200/80';
message.textContent = 'Your action was completed successfully.';

textDiv.appendChild(title);
textDiv.appendChild(message);
content.appendChild(iconDiv);
content.appendChild(textDiv);
alert.appendChild(content);

document.body.appendChild(alert);`;
