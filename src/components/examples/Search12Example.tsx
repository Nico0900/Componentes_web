import { useState } from 'react';

const availableTags = ['React', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'Python', 'API'];

export default function Search12Example() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const removeTag = (tag: string) => {
    setSelectedTags(prev => prev.filter(t => t !== tag));
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-3xl space-y-4">
        {/* Search Input */}
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
            placeholder="Search by tags..."
            className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Selected Tags */}
        {selectedTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-slate-400">Selected tags:</span>
            {selectedTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full flex items-center gap-2"
              >
                {tag}
                <button
                  onClick={() => removeTag(tag)}
                  className="hover:text-purple-200"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Available Tags */}
        <div>
          <p className="text-sm text-slate-400 mb-3">Available tags:</p>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedTags.includes(tag)
                    ? 'bg-purple-600/20 border-2 border-purple-500 text-purple-300'
                    : 'bg-slate-800/50 border border-slate-700 text-slate-300 hover:bg-slate-700'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Search Summary */}
        {(searchQuery || selectedTags.length > 0) && (
          <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
            <p className="text-sm text-slate-300">
              {searchQuery && <span>Searching: <span className="text-purple-400 font-semibold">{searchQuery}</span></span>}
              {searchQuery && selectedTags.length > 0 && <span className="mx-2 text-slate-500">|</span>}
              {selectedTags.length > 0 && (
                <span>With tags: <span className="text-purple-400 font-semibold">{selectedTags.join(', ')}</span></span>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export const search12Code = `import { useState } from 'react';

const availableTags = ['React', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'Python', 'API'];

export default function Search12Example() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const removeTag = (tag: string) => {
    setSelectedTags(prev => prev.filter(t => t !== tag));
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-3xl space-y-4">
        {/* Search Input */}
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
            placeholder="Search by tags..."
            className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Selected Tags */}
        {selectedTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-slate-400">Selected tags:</span>
            {selectedTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full flex items-center gap-2"
              >
                {tag}
                <button
                  onClick={() => removeTag(tag)}
                  className="hover:text-purple-200"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Available Tags */}
        <div>
          <p className="text-sm text-slate-400 mb-3">Available tags:</p>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={\`px-4 py-2 rounded-lg text-sm font-medium transition-all \${
                  selectedTags.includes(tag)
                    ? 'bg-purple-600/20 border-2 border-purple-500 text-purple-300'
                    : 'bg-slate-800/50 border border-slate-700 text-slate-300 hover:bg-slate-700'
                }\`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Search Summary */}
        {(searchQuery || selectedTags.length > 0) && (
          <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
            <p className="text-sm text-slate-300">
              {searchQuery && <span>Searching: <span className="text-purple-400 font-semibold">{searchQuery}</span></span>}
              {searchQuery && selectedTags.length > 0 && <span className="mx-2 text-slate-500">|</span>}
              {selectedTags.length > 0 && (
                <span>With tags: <span className="text-purple-400 font-semibold">{selectedTags.join(', ')}</span></span>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`;
