import { useState, useEffect } from 'react';

export default function Search13Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-2xl">
        {/* Trigger */}
        <div className="p-6 bg-slate-800/30 border border-slate-700 rounded-xl text-center space-y-4">
          <p className="text-slate-300">Press keyboard shortcut to open search</p>
          <div className="flex items-center justify-center gap-2">
            <kbd className="px-3 py-2 bg-slate-700 border border-slate-600 rounded text-slate-300 font-mono text-sm">
              {navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}
            </kbd>
            <span className="text-slate-400">+</span>
            <kbd className="px-3 py-2 bg-slate-700 border border-slate-600 rounded text-slate-300 font-mono text-sm">
              K
            </kbd>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Or click here
          </button>
        </div>

        {/* Keyboard-activated Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">
            <div className="w-full max-w-2xl bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
              <div className="relative border-b border-slate-700">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type to search..."
                  autoFocus
                  className="w-full pl-12 pr-12 py-4 bg-transparent text-slate-100 placeholder-slate-400 focus:outline-none"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center gap-2">
                  <kbd className="px-2 py-1 text-xs bg-slate-700 rounded border border-slate-600 text-slate-400">
                    ESC
                  </kbd>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-slate-400 hover:text-slate-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-4">
                {searchQuery ? (
                  <div className="space-y-1">
                    {['Search Result 1', 'Search Result 2', 'Search Result 3'].map((item, idx) => (
                      <button
                        key={idx}
                        className="w-full text-left px-3 py-2 text-slate-200 hover:bg-slate-700/50 rounded-lg transition-colors"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-sm text-slate-500">Start typing to search...</p>
                    <p className="text-xs text-slate-600 mt-2">Use keyboard shortcuts for quick access</p>
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

export const search13Code = `import { useState, useEffect } from 'react';

export default function Search13Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-2xl">
        {/* Trigger */}
        <div className="p-6 bg-slate-800/30 border border-slate-700 rounded-xl text-center space-y-4">
          <p className="text-slate-300">Press keyboard shortcut to open search</p>
          <div className="flex items-center justify-center gap-2">
            <kbd className="px-3 py-2 bg-slate-700 border border-slate-600 rounded text-slate-300 font-mono text-sm">
              {navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}
            </kbd>
            <span className="text-slate-400">+</span>
            <kbd className="px-3 py-2 bg-slate-700 border border-slate-600 rounded text-slate-300 font-mono text-sm">
              K
            </kbd>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Or click here
          </button>
        </div>

        {/* Keyboard-activated Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">
            <div className="w-full max-w-2xl bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
              <div className="relative border-b border-slate-700">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type to search..."
                  autoFocus
                  className="w-full pl-12 pr-12 py-4 bg-transparent text-slate-100 placeholder-slate-400 focus:outline-none"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center gap-2">
                  <kbd className="px-2 py-1 text-xs bg-slate-700 rounded border border-slate-600 text-slate-400">
                    ESC
                  </kbd>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-slate-400 hover:text-slate-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-4">
                {searchQuery ? (
                  <div className="space-y-1">
                    {['Search Result 1', 'Search Result 2', 'Search Result 3'].map((item, idx) => (
                      <button
                        key={idx}
                        className="w-full text-left px-3 py-2 text-slate-200 hover:bg-slate-700/50 rounded-lg transition-colors"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-sm text-slate-500">Start typing to search...</p>
                    <p className="text-xs text-slate-600 mt-2">Use keyboard shortcuts for quick access</p>
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
