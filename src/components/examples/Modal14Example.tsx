import { useState } from 'react';

export default function Modal14Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setIsOpen(true);
  };

  const menuItems = [
    { label: 'Edit', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
    { label: 'Duplicate', icon: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z' },
    { label: 'Share', icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z' },
    { label: 'Delete', icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16', color: 'text-red-500 hover:bg-red-500/10' }
  ];

  return (
    <div className="flex justify-center items-center p-6">
      <div
        onContextMenu={handleContextMenu}
        className="w-64 h-64 bg-slate-800 border-2 border-dashed border-slate-600 rounded-lg flex items-center justify-center cursor-pointer hover:border-orange-500 transition-colors"
      >
        <div className="text-center">
          <svg className="w-12 h-12 mx-auto mb-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
          <p className="text-slate-400 text-sm">Right-click me!</p>
        </div>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="fixed z-50 bg-slate-800 border border-slate-700 rounded-lg shadow-2xl py-2 min-w-[200px] animate-scaleIn"
            style={{ left: \`\${position.x}px\`, top: \`\${position.y}px\` }}
          >
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  alert(\`\${item.label} clicked!\`);
                  setIsOpen(false);
                }}
                className={\`w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-700 transition-colors \${item.color || 'text-slate-200'}\`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export const modal14Code = \`import { useState } from 'react';

export default function Modal14Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setIsOpen(true);
  };

  const menuItems = [
    { label: 'Edit', icon: 'M11 5H6a2...' },
    { label: 'Duplicate', icon: 'M8 16H6a2...' },
    { label: 'Share', icon: 'M8.684 13.342...' },
    { label: 'Delete', icon: 'M19 7l-.867...', color: 'text-red-500' }
  ];

  return (
    <div className="flex justify-center items-center p-6">
      <div onContextMenu={handleContextMenu} className="w-64 h-64 bg-slate-800 border-2 border-dashed border-slate-600 rounded-lg flex items-center justify-center cursor-pointer">
        <p className="text-slate-400">Right-click me!</p>
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="fixed z-50 bg-slate-800 border border-slate-700 rounded-lg shadow-2xl py-2 min-w-[200px]" style={{ left: \\\`\\\${position.x}px\\\`, top: \\\`\\\${position.y}px\\\` }}>
            {menuItems.map((item, i) => (
              <button key={i} onClick={() => setIsOpen(false)} className={\\\`w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-700 \\\${item.color || 'text-slate-200'}\\\`}>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}\`;
