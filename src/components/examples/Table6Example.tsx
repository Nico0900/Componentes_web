import { useState } from 'react';

export default function Table6Example() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', year: 1925, price: 12.99 },
    { id: 2, title: '1984', author: 'George Orwell', category: 'Fiction', year: 1949, price: 14.99 },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction', year: 1960, price: 11.99 },
    { id: 4, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Non-Fiction', year: 2011, price: 18.99 },
    { id: 5, title: 'Educated', author: 'Tara Westover', category: 'Non-Fiction', year: 2018, price: 16.99 },
    { id: 6, title: 'The Hobbit', author: 'J.R.R. Tolkien', category: 'Fantasy', year: 1937, price: 13.99 },
  ];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || book.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="p-6 border-b border-slate-700/50">
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Search by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 bg-slate-900/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500/50 transition-colors cursor-pointer"
            >
              <option value="All">All Categories</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Fantasy">Fantasy</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Title</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Author</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Year</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                  <tr key={book.id} className="border-t border-slate-700/30">
                    <td className="px-6 py-4 text-sm text-slate-200 font-medium">{book.title}</td>
                    <td className="px-6 py-4 text-sm text-slate-300">{book.author}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        book.category === 'Fiction'
                          ? 'bg-blue-500/20 text-blue-400'
                          : book.category === 'Non-Fiction'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-purple-500/20 text-purple-400'
                      }`}>
                        {book.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400">{book.year}</td>
                    <td className="px-6 py-4 text-sm text-emerald-400 font-semibold">${book.price}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-400">
                    No books found matching your criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export const table6Code = `import { useState } from 'react';

export default function Table6Example() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', year: 1925, price: 12.99 },
    { id: 2, title: '1984', author: 'George Orwell', category: 'Fiction', year: 1949, price: 14.99 },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction', year: 1960, price: 11.99 },
    { id: 4, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Non-Fiction', year: 2011, price: 18.99 },
    { id: 5, title: 'Educated', author: 'Tara Westover', category: 'Non-Fiction', year: 2018, price: 16.99 },
    { id: 6, title: 'The Hobbit', author: 'J.R.R. Tolkien', category: 'Fantasy', year: 1937, price: 13.99 },
  ];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || book.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
        <div className="p-6 border-b border-slate-700/50">
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Search by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 bg-slate-900/50 border border-slate-700/50 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500/50 transition-colors cursor-pointer"
            >
              <option value="All">All Categories</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Fantasy">Fantasy</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900/50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Title</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Author</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Year</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                  <tr key={book.id} className="border-t border-slate-700/30">
                    <td className="px-6 py-4 text-sm text-slate-200 font-medium">{book.title}</td>
                    <td className="px-6 py-4 text-sm text-slate-300">{book.author}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={\`px-2.5 py-1 rounded-full text-xs font-medium \${
                        book.category === 'Fiction'
                          ? 'bg-blue-500/20 text-blue-400'
                          : book.category === 'Non-Fiction'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-purple-500/20 text-purple-400'
                      }\`}>
                        {book.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400">{book.year}</td>
                    <td className="px-6 py-4 text-sm text-emerald-400 font-semibold">\${book.price}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-400">
                    No books found matching your criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}`;
