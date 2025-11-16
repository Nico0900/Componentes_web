import { useState, useEffect } from 'react';

const sampleArticles = [
  { id: 1, title: 'Getting Started with React', content: 'Learn the basics of React...' },
  { id: 2, title: 'TypeScript Best Practices', content: 'Improve your TypeScript code...' },
  { id: 3, title: 'CSS Grid Layout Guide', content: 'Master CSS Grid in minutes...' },
];

export default function Search7Example() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(sampleArticles);

  useEffect(() => {
    if (searchQuery) {
      const filtered = sampleArticles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(sampleArticles);
    }
  }, [searchQuery]);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-3xl space-y-4">
        {/* Inline Search */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles inline..."
            className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Articles List with Inline Results */}
        <div className="space-y-3">
          <p className="text-sm text-slate-400">
            {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
          </p>
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg hover:border-purple-500/50 transition-all"
            >
              <h3 className="text-lg font-semibold text-slate-100 mb-2">{article.title}</h3>
              <p className="text-sm text-slate-400">{article.content}</p>
            </div>
          ))}
          {filteredArticles.length === 0 && (
            <div className="p-8 text-center text-slate-500">
              No articles found matching "{searchQuery}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const search7Code = `import { useState, useEffect } from 'react';

const sampleArticles = [
  { id: 1, title: 'Getting Started with React', content: 'Learn the basics of React...' },
  { id: 2, title: 'TypeScript Best Practices', content: 'Improve your TypeScript code...' },
  { id: 3, title: 'CSS Grid Layout Guide', content: 'Master CSS Grid in minutes...' },
];

export default function Search7Example() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(sampleArticles);

  useEffect(() => {
    if (searchQuery) {
      const filtered = sampleArticles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(sampleArticles);
    }
  }, [searchQuery]);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-3xl space-y-4">
        {/* Inline Search */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles inline..."
            className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Articles List with Inline Results */}
        <div className="space-y-3">
          <p className="text-sm text-slate-400">
            {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
          </p>
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg hover:border-purple-500/50 transition-all"
            >
              <h3 className="text-lg font-semibold text-slate-100 mb-2">{article.title}</h3>
              <p className="text-sm text-slate-400">{article.content}</p>
            </div>
          ))}
          {filteredArticles.length === 0 && (
            <div className="p-8 text-center text-slate-500">
              No articles found matching "{searchQuery}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}`;
