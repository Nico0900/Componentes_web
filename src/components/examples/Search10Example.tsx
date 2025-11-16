import { useState } from 'react';

export default function Search10Example() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleVoiceSearch = () => {
    setIsListening(true);
    // Placeholder for voice search - in real implementation would use Web Speech API
    setTimeout(() => {
      setSearchQuery('voice search example');
      setIsListening(false);
    }, 2000);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-2xl space-y-4">
        {/* Voice Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Try voice search..."
            className="w-full pl-12 pr-20 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
          <button
            onClick={handleVoiceSearch}
            disabled={isListening}
            className={`absolute inset-y-0 right-0 mr-2 my-2 px-4 rounded-lg transition-all flex items-center gap-2 ${
              isListening
                ? 'bg-red-600 text-white'
                : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
            }`}
          >
            {isListening ? (
              <>
                <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                </svg>
                <span className="text-xs">Listening...</span>
              </>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Voice Search Status */}
        {isListening && (
          <div className="p-4 bg-red-600/10 border border-red-600/30 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-red-500 rounded animate-pulse" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1 h-6 bg-red-500 rounded animate-pulse" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1 h-4 bg-red-500 rounded animate-pulse" style={{ animationDelay: '300ms' }}></div>
              </div>
              <p className="text-sm text-red-300">Listening for voice input...</p>
            </div>
          </div>
        )}

        {/* Search Result */}
        {searchQuery && !isListening && (
          <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
            <p className="text-sm text-slate-300">
              Search query: <span className="text-purple-400 font-semibold">{searchQuery}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export const search10Code = `import { useState } from 'react';

export default function Search10Example() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleVoiceSearch = () => {
    setIsListening(true);
    // Placeholder for voice search - in real implementation would use Web Speech API
    setTimeout(() => {
      setSearchQuery('voice search example');
      setIsListening(false);
    }, 2000);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-2xl space-y-4">
        {/* Voice Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Try voice search..."
            className="w-full pl-12 pr-20 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
          <button
            onClick={handleVoiceSearch}
            disabled={isListening}
            className={\`absolute inset-y-0 right-0 mr-2 my-2 px-4 rounded-lg transition-all flex items-center gap-2 \${
              isListening
                ? 'bg-red-600 text-white'
                : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
            }\`}
          >
            {isListening ? (
              <>
                <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                </svg>
                <span className="text-xs">Listening...</span>
              </>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Voice Search Status */}
        {isListening && (
          <div className="p-4 bg-red-600/10 border border-red-600/30 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-red-500 rounded animate-pulse" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1 h-6 bg-red-500 rounded animate-pulse" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1 h-4 bg-red-500 rounded animate-pulse" style={{ animationDelay: '300ms' }}></div>
              </div>
              <p className="text-sm text-red-300">Listening for voice input...</p>
            </div>
          </div>
        )}

        {/* Search Result */}
        {searchQuery && !isListening && (
          <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
            <p className="text-sm text-slate-300">
              Search query: <span className="text-purple-400 font-semibold">{searchQuery}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`;
