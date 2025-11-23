import { useEffect, useRef } from 'react';

export default function AlertJS13Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const alert = document.createElement('div');
    alert.className = 'max-w-md bg-rose-500/10 border-t-4 border-rose-500 rounded-b-xl p-5';
    alert.innerHTML = `
      <div class="flex items-start justify-between gap-3">
        <div class="flex gap-3">
          <div class="bg-rose-500/20 p-2 rounded-lg">
            <svg class="w-5 h-5 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div>
            <h4 class="font-bold text-rose-300 mb-1">Access Denied</h4>
            <p class="text-sm text-rose-200/80">You don't have permission to access this resource.</p>
          </div>
        </div>
        <button class="text-rose-400 hover:text-rose-300">
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

export const alertjs13Code = `// Vanilla JavaScript + Tailwind
const alert = document.createElement('div');
alert.className = 'max-w-md bg-rose-500/10 border-t-4 border-rose-500 rounded-b-xl p-5';
alert.innerHTML = \`
  <div class="flex items-start justify-between gap-3">
    <div class="flex gap-3">
      <div class="bg-rose-500/20 p-2 rounded-lg">
        <svg class="w-5 h-5 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"></path>
        </svg>
      </div>
      <div>
        <h4 class="font-bold text-rose-300 mb-1">Access Denied</h4>
        <p class="text-sm text-rose-200/80">You don't have permission to access this resource.</p>
      </div>
    </div>
    <button class="text-rose-400 hover:text-rose-300">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
\`;

document.body.appendChild(alert);`;
