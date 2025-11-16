import { useState } from 'react';

export default function Form5Example() {
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      console.log('Inline form:', { email, category, query });
      setEmail('');
      setCategory('');
      setQuery('');
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center p-6">
      <div className="w-full max-w-4xl p-8 bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-100 mb-2">Quick Search</h2>
          <p className="text-slate-400 text-sm">All fields in one convenient row</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label htmlFor="query" className="block text-sm font-medium text-slate-300 mb-2">
                Search Query
              </label>
              <input
                id="query"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                placeholder="What are you looking for?"
              />
            </div>

            <div className="w-full md:w-48">
              <label htmlFor="category" className="block text-sm font-medium text-slate-300 mb-2">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
              >
                <option value="">Select...</option>
                <option value="products">Products</option>
                <option value="services">Services</option>
                <option value="support">Support</option>
                <option value="docs">Documentation</option>
              </select>
            </div>

            <div className="w-full md:w-64">
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                placeholder="you@example.com"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-emerald-500/20 disabled:opacity-50"
            >
              {isSubmitting ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>

        <div className="mt-6 p-4 bg-slate-700/20 rounded-lg border border-slate-700/30">
          <p className="text-sm text-slate-400">
            <strong className="text-slate-300">Tip:</strong> Use the inline form for quick, single-row data entry. Perfect for search bars and filters!
          </p>
        </div>
      </div>
    </div>
  );
}

export const form5Code = `import { useState } from 'react';

export default function Form5Example() {
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');

  // Horizontal inline form layout
}`;
