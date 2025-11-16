import { useState, useEffect } from 'react';

const searchCategories = ['All', 'Pages', 'Blog', 'Docs', 'Products', 'Users'];

const sampleResults = [
  { id: 1, title: 'Getting Started Guide', type: 'Docs', url: '/docs/getting-started' },
  { id: 2, title: 'Product Catalog', type: 'Products', url: '/products' },
  { id: 3, title: 'User Management', type: 'Pages', url: '/admin/users' },
  { id: 4, title: 'Latest Blog Post', type: 'Blog', url: '/blog/latest' },
  { id: 5, title: 'API Documentation', type: 'Docs', url: '/docs/api' },
  { id: 6, title: 'User Profile Settings', type: 'Users', url: '/users/settings' },
];

export default function Search15Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredResults, setFilteredResults] = useState(sampleResults);

  useEffect(() => {
    let results = sampleResults;

    if (selectedCategory !== 'All') {
      results = results.filter(item => item.type === selectedCategory);
    }

    if (searchQuery) {
      results = results.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredResults(results);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-2xl">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex items-center gap-3 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-400 hover:border-purple-500 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span>Global Search...</span>
          <kbd className="ml-auto px-2 py-1 text-xs bg-slate-700 rounded border border-slate-600">Ctrl K</kbd>
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">
            <div className="w-full max-w-3xl bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
              {/* Search Header */}
              <div className="p-4 border-b border-slate-700">
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
                    placeholder="Search across your site..."
                    autoFocus
                    className="w-full pl-12 pr-12 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
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

                {/* Category Filters */}
                <div className="flex gap-2 mt-3 overflow-x-auto">
                  {searchCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                        selectedCategory === category
                          ? 'bg-purple-600 text-white'
                          : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto">
                <div className="p-2">
                  {filteredResults.map((result) => (
                    <button
                      key={result.id}
                      className="w-full px-4 py-3 flex items-center gap-4 hover:bg-slate-700/50 rounded-lg transition-colors mb-1"
                    >
                      <div className="w-8 h-8 rounded bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-400 text-xs font-bold">
                          {result.type.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-slate-100 font-medium">{result.title}</p>
                        <p className="text-xs text-slate-400">{result.url}</p>
                      </div>
                      <span className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded">
                        {result.type}
                      </span>
                    </button>
                  ))}
                  {filteredResults.length === 0 && (
                    <div className="p-8 text-center text-slate-500">
                      No results found in {selectedCategory}
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="p-3 bg-slate-700/30 border-t border-slate-700 flex items-center justify-between text-xs text-slate-400">
                <div className="flex gap-4">
                  <span>{filteredResults.length} results</span>
                  <span>Category: {selectedCategory}</span>
                </div>
                <div className="flex gap-2">
                  <kbd className="px-2 py-1 bg-slate-700 rounded border border-slate-600">↑↓</kbd>
                  <span>Navigate</span>
                  <kbd className="px-2 py-1 bg-slate-700 rounded border border-slate-600">Enter</kbd>
                  <span>Select</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export const search15Code = `import { useState, useEffect } from 'react';

const searchCategories = ['All', 'Pages', 'Blog', 'Docs', 'Products', 'Users'];

const sampleResults = [
  { id: 1, title: 'Getting Started Guide', type: 'Docs', url: '/docs/getting-started' },
  { id: 2, title: 'Product Catalog', type: 'Products', url: '/products' },
  { id: 3, title: 'User Management', type: 'Pages', url: '/admin/users' },
  { id: 4, title: 'Latest Blog Post', type: 'Blog', url: '/blog/latest' },
  { id: 5, title: 'API Documentation', type: 'Docs', url: '/docs/api' },
  { id: 6, title: 'User Profile Settings', type: 'Users', url: '/users/settings' },
];

export default function Search15Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredResults, setFilteredResults] = useState(sampleResults);

  useEffect(() => {
    let results = sampleResults;

    if (selectedCategory !== 'All') {
      results = results.filter(item => item.type === selectedCategory);
    }

    if (searchQuery) {
      results = results.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredResults(results);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-2xl">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex items-center gap-3 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-400 hover:border-purple-500 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span>Global Search...</span>
          <kbd className="ml-auto px-2 py-1 text-xs bg-slate-700 rounded border border-slate-600">Ctrl K</kbd>
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">
            <div className="w-full max-w-3xl bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
              {/* Search Header */}
              <div className="p-4 border-b border-slate-700">
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
                    placeholder="Search across your site..."
                    autoFocus
                    className="w-full pl-12 pr-12 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
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

                {/* Category Filters */}
                <div className="flex gap-2 mt-3 overflow-x-auto">
                  {searchCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={\`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all \${
                        selectedCategory === category
                          ? 'bg-purple-600 text-white'
                          : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                      }\`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto">
                <div className="p-2">
                  {filteredResults.map((result) => (
                    <button
                      key={result.id}
                      className="w-full px-4 py-3 flex items-center gap-4 hover:bg-slate-700/50 rounded-lg transition-colors mb-1"
                    >
                      <div className="w-8 h-8 rounded bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-400 text-xs font-bold">
                          {result.type.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-slate-100 font-medium">{result.title}</p>
                        <p className="text-xs text-slate-400">{result.url}</p>
                      </div>
                      <span className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded">
                        {result.type}
                      </span>
                    </button>
                  ))}
                  {filteredResults.length === 0 && (
                    <div className="p-8 text-center text-slate-500">
                      No results found in {selectedCategory}
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="p-3 bg-slate-700/30 border-t border-slate-700 flex items-center justify-between text-xs text-slate-400">
                <div className="flex gap-4">
                  <span>{filteredResults.length} results</span>
                  <span>Category: {selectedCategory}</span>
                </div>
                <div className="flex gap-2">
                  <kbd className="px-2 py-1 bg-slate-700 rounded border border-slate-600">↑↓</kbd>
                  <span>Navigate</span>
                  <kbd className="px-2 py-1 bg-slate-700 rounded border border-slate-600">Enter</kbd>
                  <span>Select</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}`;
