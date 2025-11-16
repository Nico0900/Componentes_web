import { useState, useEffect } from 'react';

const sampleProducts = [
  { id: 1, name: 'Laptop Pro', price: '$999', category: 'Electronics' },
  { id: 2, name: 'Wireless Mouse', price: '$29', category: 'Electronics' },
  { id: 3, name: 'Desk Chair', price: '$199', category: 'Furniture' },
  { id: 4, name: 'Monitor 27"', price: '$349', category: 'Electronics' },
  { id: 5, name: 'Keyboard', price: '$79', category: 'Electronics' },
];

export default function Search8Example() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<typeof sampleProducts>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = sampleProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
      setShowDropdown(true);
    } else {
      setResults([]);
      setShowDropdown(false);
    }
  }, [searchQuery]);

  const handleSelect = (product: typeof sampleProducts[0]) => {
    setSearchQuery(product.name);
    setShowDropdown(false);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-2xl">
        <div className="relative">
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
              onFocus={() => searchQuery && setShowDropdown(true)}
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Dropdown Results */}
          {showDropdown && results.length > 0 && (
            <div className="absolute z-10 w-full mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-xl overflow-hidden">
              <div className="p-2 bg-slate-700/50 border-b border-slate-700">
                <p className="text-xs text-slate-400">{results.length} results found</p>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {results.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleSelect(product)}
                    className="w-full px-4 py-3 text-left hover:bg-slate-700/50 transition-colors border-b border-slate-700/30 last:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-100 font-medium">{product.name}</p>
                        <p className="text-xs text-slate-400">{product.category}</p>
                      </div>
                      <span className="text-purple-400 font-semibold">{product.price}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {showDropdown && searchQuery && results.length === 0 && (
            <div className="absolute z-10 w-full mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-xl p-4">
              <p className="text-sm text-slate-400 text-center">No products found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const search8Code = `import { useState, useEffect } from 'react';

const sampleProducts = [
  { id: 1, name: 'Laptop Pro', price: '$999', category: 'Electronics' },
  { id: 2, name: 'Wireless Mouse', price: '$29', category: 'Electronics' },
  { id: 3, name: 'Desk Chair', price: '$199', category: 'Furniture' },
  { id: 4, name: 'Monitor 27"', price: '$349', category: 'Electronics' },
  { id: 5, name: 'Keyboard', price: '$79', category: 'Electronics' },
];

export default function Search8Example() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<typeof sampleProducts>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = sampleProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
      setShowDropdown(true);
    } else {
      setResults([]);
      setShowDropdown(false);
    }
  }, [searchQuery]);

  const handleSelect = (product: typeof sampleProducts[0]) => {
    setSearchQuery(product.name);
    setShowDropdown(false);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-2xl">
        <div className="relative">
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
              onFocus={() => searchQuery && setShowDropdown(true)}
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Dropdown Results */}
          {showDropdown && results.length > 0 && (
            <div className="absolute z-10 w-full mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-xl overflow-hidden">
              <div className="p-2 bg-slate-700/50 border-b border-slate-700">
                <p className="text-xs text-slate-400">{results.length} results found</p>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {results.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleSelect(product)}
                    className="w-full px-4 py-3 text-left hover:bg-slate-700/50 transition-colors border-b border-slate-700/30 last:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-100 font-medium">{product.name}</p>
                        <p className="text-xs text-slate-400">{product.category}</p>
                      </div>
                      <span className="text-purple-400 font-semibold">{product.price}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {showDropdown && searchQuery && results.length === 0 && (
            <div className="absolute z-10 w-full mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-xl p-4">
              <p className="text-sm text-slate-400 text-center">No products found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}`;
