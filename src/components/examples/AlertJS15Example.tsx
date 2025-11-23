import { useEffect, useRef } from 'react';

export default function AlertJS15Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const alert = document.createElement('div');
    alert.className = 'max-w-md bg-teal-500/10 border border-teal-500/30 rounded-lg p-4';
    alert.innerHTML = `
      <div class="flex gap-3">
        <div class="bg-teal-500 p-2 rounded-lg shrink-0">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <div class="flex-1">
          <h4 class="font-semibold text-teal-300 mb-1">Task Completed</h4>
          <p class="text-sm text-teal-200/80 mb-2">All items in your checklist have been completed.</p>
          <div class="flex items-center gap-2 text-xs text-teal-300/70">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>15/15 tasks done</span>
          </div>
        </div>
      </div>
    `;

    if (containerRef.current) {
      containerRef.current.appendChild(alert);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const alertjs15Code = `// Vanilla JavaScript + Tailwind
const alert = document.createElement('div');
alert.className = 'max-w-md bg-teal-500/10 border border-teal-500/30 rounded-lg p-4';
alert.innerHTML = \`
  <div class="flex gap-3">
    <div class="bg-teal-500 p-2 rounded-lg shrink-0">
      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <div class="flex-1">
      <h4 class="font-semibold text-teal-300 mb-1">Task Completed</h4>
      <p class="text-sm text-teal-200/80 mb-2">All items in your checklist have been completed.</p>
      <div class="flex items-center gap-2 text-xs text-teal-300/70">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>15/15 tasks done</span>
      </div>
    </div>
  </div>
\`;

document.body.appendChild(alert);`;
