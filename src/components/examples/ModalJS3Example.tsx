import { useEffect, useRef } from 'react';

export default function ModalJS3Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = '';

    // JavaScript component code
    const button = document.createElement('button');
button.className = 'px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700';
button.textContent = 'Add User';
button.onclick = function() {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-slate-950/10 flex items-center justify-center z-50';
  modal.innerHTML = '<div class="bg-slate-800 rounded-lg p-6 max-w-md w-full mx-4"><h2 class="text-2xl font-bold text-white mb-6">Add New User</h2><form><div class="mb-4"><label class="block text-sm font-medium text-slate-300 mb-2">Name</label><input type="text" class="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div><div class="mb-6"><label class="block text-sm font-medium text-slate-300 mb-2">Email</label><input type="email" class="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div><div class="flex gap-3"><button type="button" class="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg" onclick="this.closest(\'.fixed\').remove()">Cancel</button><button type="submit" class="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Save</button></div></form></div>';
  document.body.appendChild(modal);
};
document.body.appendChild(button);

    if (containerRef.current && document.body.lastChild) {
      containerRef.current.appendChild(document.body.lastChild as Node);
    }
  }, []);

  return <div ref={containerRef}></div>;
}

export const modaljs3Code = `// Vanilla JavaScript
const button = document.createElement('button');
button.className = 'px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700';
button.textContent = 'Add User';
button.onclick = function() {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-slate-950/10 flex items-center justify-center z-50';
  modal.innerHTML = '<div class="bg-slate-800 rounded-lg p-6 max-w-md w-full mx-4"><h2 class="text-2xl font-bold text-white mb-6">Add New User</h2><form><div class="mb-4"><label class="block text-sm font-medium text-slate-300 mb-2">Name</label><input type="text" class="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div><div class="mb-6"><label class="block text-sm font-medium text-slate-300 mb-2">Email</label><input type="email" class="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white" /></div><div class="flex gap-3"><button type="button" class="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg" onclick="this.closest(\'.fixed\').remove()">Cancel</button><button type="submit" class="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Save</button></div></form></div>';
  document.body.appendChild(modal);
};
document.body.appendChild(button);`;
