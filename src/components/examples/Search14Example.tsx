import { useState, useEffect } from 'react';

const commands = [
  { id: 1, name: 'New File', icon: '📄', shortcut: 'Ctrl+N', category: 'File' },
  { id: 2, name: 'Open File', icon: '📂', shortcut: 'Ctrl+O', category: 'File' },
  { id: 3, name: 'Save', icon: '💾', shortcut: 'Ctrl+S', category: 'File' },
  { id: 4, name: 'Copy', icon: '📋', shortcut: 'Ctrl+C', category: 'Edit' },
  { id: 5, name: 'Paste', icon: '📌', shortcut: 'Ctrl+V', category: 'Edit' },
  { id: 6, name: 'Find', icon: '🔍', shortcut: 'Ctrl+F', category: 'Search' },
  { id: 7, name: 'Settings', icon: '⚙️', shortcut: 'Ctrl+,', category: 'View' },
];

export default function Search14Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCommands, setFilteredCommands] = useState(commands);

  useEffect(() => {
    if (searchQuery) {
      const filtered = commands.filter(cmd =>
        cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cmd.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCommands(filtered);
    } else {
      setFilteredCommands(commands);
    }
  }, [searchQuery]);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-2xl">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex items-center gap-3 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-400 hover:border-purple-500 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Command Palette</span>
          <kbd className="ml-auto px-2 py-1 text-xs bg-slate-700 rounded border border-slate-600">Ctrl P</kbd>
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">
            <div className="w-full max-w-2xl bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="relative border-b border-slate-700">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type a command or search..."
                  autoFocus
                  className="w-full pl-12 pr-12 py-4 bg-transparent text-slate-100 placeholder-slate-400 focus:outline-none"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Commands List */}
              <div className="max-h-96 overflow-y-auto">
                {filteredCommands.map((cmd) => (
                  <button
                    key={cmd.id}
                    className="w-full px-4 py-3 flex items-center gap-4 hover:bg-slate-700/50 transition-colors border-b border-slate-700/30 last:border-b-0"
                  >
                    <span className="text-2xl">{cmd.icon}</span>
                    <div className="flex-1 text-left">
                      <p className="text-slate-100 font-medium">{cmd.name}</p>
                      <p className="text-xs text-slate-400">{cmd.category}</p>
                    </div>
                    <kbd className="px-2 py-1 text-xs bg-slate-700/50 border border-slate-600 rounded text-slate-400">
                      {cmd.shortcut}
                    </kbd>
                  </button>
                ))}
                {filteredCommands.length === 0 && (
                  <div className="p-8 text-center text-slate-500">
                    No commands found
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export const search14Code = `import { useState, useEffect } from 'react';

const commands = [
  { id: 1, name: 'New File', icon: '📄', shortcut: 'Ctrl+N', category: 'File' },
  { id: 2, name: 'Open File', icon: '📂', shortcut: 'Ctrl+O', category: 'File' },
  { id: 3, name: 'Save', icon: '💾', shortcut: 'Ctrl+S', category: 'File' },
  { id: 4, name: 'Copy', icon: '📋', shortcut: 'Ctrl+C', category: 'Edit' },
  { id: 5, name: 'Paste', icon: '📌', shortcut: 'Ctrl+V', category: 'Edit' },
  { id: 6, name: 'Find', icon: '🔍', shortcut: 'Ctrl+F', category: 'Search' },
  { id: 7, name: 'Settings', icon: '⚙️', shortcut: 'Ctrl+,', category: 'View' },
];

export default function Search14Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCommands, setFilteredCommands] = useState(commands);

  useEffect(() => {
    if (searchQuery) {
      const filtered = commands.filter(cmd =>
        cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cmd.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCommands(filtered);
    } else {
      setFilteredCommands(commands);
    }
  }, [searchQuery]);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-2xl">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex items-center gap-3 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-400 hover:border-purple-500 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Command Palette</span>
          <kbd className="ml-auto px-2 py-1 text-xs bg-slate-700 rounded border border-slate-600">Ctrl P</kbd>
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">
            <div className="w-full max-w-2xl bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="relative border-b border-slate-700">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type a command or search..."
                  autoFocus
                  className="w-full pl-12 pr-12 py-4 bg-transparent text-slate-100 placeholder-slate-400 focus:outline-none"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Commands List */}
              <div className="max-h-96 overflow-y-auto">
                {filteredCommands.map((cmd) => (
                  <button
                    key={cmd.id}
                    className="w-full px-4 py-3 flex items-center gap-4 hover:bg-slate-700/50 transition-colors border-b border-slate-700/30 last:border-b-0"
                  >
                    <span className="text-2xl">{cmd.icon}</span>
                    <div className="flex-1 text-left">
                      <p className="text-slate-100 font-medium">{cmd.name}</p>
                      <p className="text-xs text-slate-400">{cmd.category}</p>
                    </div>
                    <kbd className="px-2 py-1 text-xs bg-slate-700/50 border border-slate-600 rounded text-slate-400">
                      {cmd.shortcut}
                    </kbd>
                  </button>
                ))}
                {filteredCommands.length === 0 && (
                  <div className="p-8 text-center text-slate-500">
                    No commands found
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}`;
