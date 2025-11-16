import { useState, useEffect } from 'react';

const categories = ['All', 'Technology', 'Business', 'Science', 'Arts', 'Sports'];

const sampleItems = [
  { id: 1, title: 'AI Technology Advances', category: 'Technology' },
  { id: 2, title: 'Stock Market Analysis', category: 'Business' },
  { id: 3, title: 'Space Exploration Updates', category: 'Science' },
  { id: 4, title: 'Modern Art Exhibition', category: 'Arts' },
  { id: 5, title: 'Championship Finals', category: 'Sports' },
  { id: 6, title: 'Startup Funding News', category: 'Business' },
];

export default function Search11Example() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredResults, setFilteredResults] = useState(sampleItems);

  useEffect(() => {
    let results = sampleItems;

    // Filter by category
    if (selectedCategory !== 'All') {
      results = results.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      results = results.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredResults(results);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-3xl space-y-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

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
            placeholder={`Search in ${selectedCategory}...`}
            className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Results */}
        <div className="space-y-2">
          <p className="text-sm text-slate-400 px-2">
            {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
          </p>
          {filteredResults.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-slate-100 font-medium">{item.title}</h3>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
          {filteredResults.length === 0 && (
            <div className="p-8 text-center text-slate-500">
              No results found in {selectedCategory}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const search11Code = `import { useState, useEffect } from 'react';

const categories = ['All', 'Technology', 'Business', 'Science', 'Arts', 'Sports'];

const sampleItems = [
  { id: 1, title: 'AI Technology Advances', category: 'Technology' },
  { id: 2, title: 'Stock Market Analysis', category: 'Business' },
  { id: 3, title: 'Space Exploration Updates', category: 'Science' },
  { id: 4, title: 'Modern Art Exhibition', category: 'Arts' },
  { id: 5, title: 'Championship Finals', category: 'Sports' },
  { id: 6, title: 'Startup Funding News', category: 'Business' },
];

export default function Search11Example() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredResults, setFilteredResults] = useState(sampleItems);

  useEffect(() => {
    let results = sampleItems;

    // Filter by category
    if (selectedCategory !== 'All') {
      results = results.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      results = results.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredResults(results);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-3xl space-y-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={\`px-4 py-2 rounded-lg text-sm font-medium transition-all \${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700'
              }\`}
            >
              {category}
            </button>
          ))}
        </div>

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
            placeholder={\`Search in \${selectedCategory}...\`}
            className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Results */}
        <div className="space-y-2">
          <p className="text-sm text-slate-400 px-2">
            {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
          </p>
          {filteredResults.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-slate-100 font-medium">{item.title}</h3>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
          {filteredResults.length === 0 && (
            <div className="p-8 text-center text-slate-500">
              No results found in {selectedCategory}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}`;
