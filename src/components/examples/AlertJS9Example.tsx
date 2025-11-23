import { useEffect, useRef } from 'react';

export default function AlertJS9Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const alert = document.createElement('div');
    alert.className = 'max-w-md bg-slate-800/70 border border-slate-600 rounded-2xl p-5 shadow-xl';
    alert.innerHTML = `
      <div class="flex items-center gap-4 mb-3">
        <div class="bg-purple-500/20 p-3 rounded-xl">
          <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
        </div>
        <div class="flex-1">
          <h4 class="font-bold text-purple-200 mb-1">New Notification</h4>
          <p class="text-sm text-purple-300/70">You have a new message waiting for you.</p>
        </div>
        <button class="text-purple-400 hover:text-purple-300 transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    `;

    if (containerRef.current) {
      containerRef.current.appendChild(alert);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const alertjs9Code = `// Vanilla JavaScript + Tailwind
const alert = document.createElement('div');
alert.className = 'max-w-md bg-slate-800/70 border border-slate-600 rounded-2xl p-5 shadow-xl';
alert.innerHTML = \`
  <div class="flex items-center gap-4 mb-3">
    <div class="bg-purple-500/20 p-3 rounded-xl">
      <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
      </svg>
    </div>
    <div class="flex-1">
      <h4 class="font-bold text-purple-200 mb-1">New Notification</h4>
      <p class="text-sm text-purple-300/70">You have a new message waiting for you.</p>
    </div>
    <button class="text-purple-400 hover:text-purple-300 transition-colors">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
\`;

document.body.appendChild(alert);`;
