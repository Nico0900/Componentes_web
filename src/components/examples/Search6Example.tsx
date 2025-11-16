import { useState } from 'react';

export default function Search6Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-2xl">
        {/* Trigger Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex items-center gap-3 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-400 hover:border-purple-500 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span>Search...</span>
          <kbd className="ml-auto px-2 py-1 text-xs bg-slate-700 rounded border border-slate-600">Ctrl K</kbd>
        </button>

        {/* Modal Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">
            <div className="w-full max-w-2xl bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
              {/* Search Input */}
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
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Results Area */}
              <div className="p-4">
                {searchQuery ? (
                  <div className="space-y-2">
                    <p className="text-sm text-slate-400 px-2">Results for "{searchQuery}"</p>
                    <div className="space-y-1">
                      {['Result 1', 'Result 2', 'Result 3'].map((item, idx) => (
                        <button
                          key={idx}
                          className="w-full text-left px-3 py-2 text-slate-200 hover:bg-slate-700/50 rounded-lg transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-slate-500 text-center py-8">Start typing to search...</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export const search6Code = `import { useState } from 'react';

export default function Search6Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-2xl">
        {/* Trigger Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex items-center gap-3 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-400 hover:border-purple-500 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span>Search...</span>
          <kbd className="ml-auto px-2 py-1 text-xs bg-slate-700 rounded border border-slate-600">Ctrl K</kbd>
        </button>

        {/* Modal Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">
            <div className="w-full max-w-2xl bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
              {/* Search Input */}
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
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Results Area */}
              <div className="p-4">
                {searchQuery ? (
                  <div className="space-y-2">
                    <p className="text-sm text-slate-400 px-2">Results for "{searchQuery}"</p>
                    <div className="space-y-1">
                      {['Result 1', 'Result 2', 'Result 3'].map((item, idx) => (
                        <button
                          key={idx}
                          className="w-full text-left px-3 py-2 text-slate-200 hover:bg-slate-700/50 rounded-lg transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-slate-500 text-center py-8">Start typing to search...</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}`;
