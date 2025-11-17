import { useEffect, useRef } from 'react';

export default function ModalJS1Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const button = document.createElement('button');
button.className = 'px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700';
button.textContent = 'Open Modal';
button.onclick = function() {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-slate-950/10 flex items-center justify-center z-50';
  modal.innerHTML = '<div class="bg-slate-800 rounded-lg p-6 max-w-md w-full mx-4"><h2 class="text-2xl font-bold text-white mb-4">Modal Title</h2><p class="text-slate-400 mb-6">This is a simple modal dialog with some content.</p><button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg" onclick="this.closest(\'.fixed\').remove()">Close</button></div>';
  document.body.appendChild(modal);
};
document.body.appendChild(button);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const modaljs1Code = `// Vanilla JavaScript
const button = document.createElement('button');
button.className = 'px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700';
button.textContent = 'Open Modal';
button.onclick = function() {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-slate-950/10 flex items-center justify-center z-50';
  modal.innerHTML = '<div class="bg-slate-800 rounded-lg p-6 max-w-md w-full mx-4"><h2 class="text-2xl font-bold text-white mb-4">Modal Title</h2><p class="text-slate-400 mb-6">This is a simple modal dialog with some content.</p><button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg" onclick="this.closest(\'.fixed\').remove()">Close</button></div>';
  document.body.appendChild(modal);
};
document.body.appendChild(button);`;
