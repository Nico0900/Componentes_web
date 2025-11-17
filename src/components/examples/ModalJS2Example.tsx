import { useEffect, useRef } from 'react';

export default function ModalJS2Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const button = document.createElement('button');
button.className = 'px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700';
button.textContent = 'Delete Item';
button.onclick = function() {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-slate-950/10 flex items-center justify-center z-50';
  modal.innerHTML = '<div class="bg-slate-800 rounded-lg p-6 max-w-md w-full mx-4"><div class="flex items-center gap-4 mb-4"><div class="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center"><svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></div><div><h2 class="text-xl font-bold text-white">Confirm Delete</h2><p class="text-slate-400 text-sm">This action cannot be undone.</p></div></div><div class="flex gap-3"><button class="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg" onclick="this.closest(\'.fixed\').remove()">Cancel</button><button class="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg" onclick="this.closest(\'.fixed\').remove()">Delete</button></div></div>';
  document.body.appendChild(modal);
};
document.body.appendChild(button);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const modaljs2Code = `// Vanilla JavaScript
const button = document.createElement('button');
button.className = 'px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700';
button.textContent = 'Delete Item';
button.onclick = function() {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-slate-950/10 flex items-center justify-center z-50';
  modal.innerHTML = '<div class="bg-slate-800 rounded-lg p-6 max-w-md w-full mx-4"><div class="flex items-center gap-4 mb-4"><div class="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center"><svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></div><div><h2 class="text-xl font-bold text-white">Confirm Delete</h2><p class="text-slate-400 text-sm">This action cannot be undone.</p></div></div><div class="flex gap-3"><button class="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg" onclick="this.closest(\'.fixed\').remove()">Cancel</button><button class="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg" onclick="this.closest(\'.fixed\').remove()">Delete</button></div></div>';
  document.body.appendChild(modal);
};
document.body.appendChild(button);`;
