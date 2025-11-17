import { useState } from 'react';

export default function Modal13Example() {
  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = [
    { id: 1, title: 'React Components', category: 'Documentation' },
    { id: 2, title: 'Modal Patterns', category: 'Guides' },
    { id: 3, title: 'TypeScript Setup', category: 'Tutorial' },
    { id: 4, title: 'Tailwind CSS', category: 'Styling' }
  ].filter(item => 
    searchQuery === '' || 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center p-6 relative min-h-[400px]">
      {isOpen && (
        <div className="absolute inset-0 z-50 bg-slate-950/10 animate-fadeIn">
          <div className="flex items-start justify-center p-4 pt-20">
            <div className="w-full max-w-2xl bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 animate-slideUp">
              <div className="p-6 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for anything..."
                    className="flex-1 bg-transparent text-lg text-slate-100 placeholder-slate-400 outline-none"
                  />
                  <button
                    className="text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="max-h-96 overflow-auto">
                {searchResults.length > 0 ? (
                  <div className="p-2">
                    {searchResults.map((result) => (
                      <button
                        key={result.id}
                        onClick={() => {
                          alert(`Selected: ${result.title}`);
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 transition-colors text-left"
                      >
                        <div className="w-10 h-10 bg-fuchsia-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-fuchsia-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-slate-100">{result.title}</div>
                          <div className="text-xs text-slate-400">{result.category}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-12 text-center text-slate-400">
                    No results found
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-slate-700 flex items-center justify-between text-xs text-slate-500">
                <span>Press ESC to close</span>
                <span>{searchResults.length} results</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const modal13Code = `import { useState } from 'react';

export default function Modal13Example() {
  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = [
    { id: 1, title: 'React Components', category: 'Documentation' },
    { id: 2, title: 'Modal Patterns', category: 'Guides' }
  ].filter(item => searchQuery === '' || item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="flex justify-center items-center p-6 relative min-h-[400px]">
      {isOpen && (
        <div className="absolute inset-0 z-50 bg-slate-950/10">
          <div className="flex items-start justify-center p-4 pt-20">
            <div className="w-full max-w-2xl bg-slate-800 rounded-2xl shadow-2xl border border-slate-700">
              <div className="p-6 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input type="text" autoFocus value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search..." className="flex-1 bg-transparent text-lg text-slate-100 outline-none" />
                  <button  className="text-slate-400">✕</button>
                </div>
              </div>
              <div className="max-h-96 overflow-auto p-2">
                {searchResults.map((result) => (
                  <button key={result.id}  className="w-full p-3 rounded-lg hover:bg-slate-700 text-left">
                    <div className="text-sm text-slate-100">{result.title}</div>
                    <div className="text-xs text-slate-400">{result.category}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}`;
