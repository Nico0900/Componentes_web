import { useState } from 'react';

export default function Form10Example() {
  const [filters, setFilters] = useState({
    keyword: '',
    category: '',
    priceMin: '',
    priceMax: '',
    location: '',
    dateFrom: '',
    dateTo: '',
    condition: [] as string[],
    inStock: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCondition = (value: string) => {
    setFilters(prev => ({
      ...prev,
      condition: prev.condition.includes(value)
        ? prev.condition.filter(c => c !== value)
        : [...prev.condition, value]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search filters:', filters);
  };

  const handleReset = () => {
    setFilters({
      keyword: '',
      category: '',
      priceMin: '',
      priceMax: '',
      location: '',
      dateFrom: '',
      dateTo: '',
      condition: [],
      inStock: false,
    });
  };

  return (
    <div className="flex justify-center items-center p-6">
      <div className="w-full max-w-4xl p-8 bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-100 mb-2">Advanced Search</h2>
          <p className="text-slate-400 text-sm">Find exactly what you're looking for</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="keyword" className="block text-sm font-medium text-slate-300 mb-2">
              Keyword
            </label>
            <div className="relative">
              <input
                id="keyword"
                name="keyword"
                type="text"
                value={filters.keyword}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
                placeholder="Search for products, services..."
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-slate-300 mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={filters.category}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
              >
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
                <option value="home">Home & Garden</option>
                <option value="sports">Sports</option>
              </select>
            </div>

            <div>
              <label htmlFor="location-form10" className="block text-sm font-medium text-slate-300 mb-2">
                Location
              </label>
              <input
                id="location-form10"
                name="location"
                type="text"
                value={filters.location}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
                placeholder="City, State, or ZIP"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Price Range
            </label>
            <div className="grid grid-cols-2 gap-3">
              <input
                name="priceMin"
                type="number"
                value={filters.priceMin}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
                placeholder="Min $"
              />
              <input
                name="priceMax"
                type="number"
                value={filters.priceMax}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
                placeholder="Max $"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Date Range
            </label>
            <div className="grid grid-cols-2 gap-3">
              <input
                name="dateFrom"
                type="date"
                value={filters.dateFrom}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
              />
              <input
                name="dateTo"
                type="date"
                value={filters.dateTo}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Condition
            </label>
            <div className="flex flex-wrap gap-2">
              {['New', 'Like New', 'Used', 'Refurbished'].map(cond => (
                <button
                  key={cond}
                  type="button"
                  onClick={() => handleCondition(cond)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    filters.condition.includes(cond)
                      ? 'border-sky-500 bg-sky-500/20 text-sky-300'
                      : 'border-slate-700/50 bg-slate-800/50 text-slate-400 hover:border-sky-500/50'
                  }`}
                >
                  {cond}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="inStock"
                checked={filters.inStock}
                onChange={handleChange}
                className="w-4 h-4 rounded border-slate-700 bg-slate-800/50 text-sky-600 focus:ring-2 focus:ring-sky-500/20"
              />
              <span className="ml-2 text-sm text-slate-300">In Stock Only</span>
            </label>
          </div>

          <div className="flex gap-3 pt-4 border-t border-slate-700/50">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg shadow-sky-500/20"
            >
              Search
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-3 border border-slate-700/50 text-slate-300 rounded-lg transition-all duration-300 hover:border-sky-500/50"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export const form10Code = `import { useState } from 'react';

export default function Form10Example() {
  // Advanced search form with multiple filters
}`;
