import { useState } from 'react';

export default function Pagination15Example() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const renderPageButton = (page: number) => (
    <button
      key={page}
      onClick={() => setCurrentPage(page)}
      className={`w-10 h-10 rounded transition-all duration-200 ${
        currentPage === page
          ? 'bg-blue-500 text-white'
          : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
      }`}
    >
      {page}
    </button>
  );

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    const start = Math.max(1, Math.min(currentPage - 2, totalPages - maxVisible + 1));
    const end = Math.min(totalPages, start + maxVisible - 1);

    for (let i = start; i <= end; i++) {
      pages.push(renderPageButton(i));
    }
    return pages;
  };

  return (
    <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-slate-800/30 to-slate-900/30 rounded-2xl backdrop-blur-sm border border-slate-700/50">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-800 text-slate-300 rounded-xl hover:from-slate-600 hover:to-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Prev
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-800 text-slate-300 rounded-xl hover:from-slate-600 hover:to-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2"
      >
        Next
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export const pagination15Code = `import { useState } from 'react';

export default function Pagination15Example() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const renderPageButton = (page: number) => (
    <button
      key={page}
      onClick={() => setCurrentPage(page)}
      className={\`w-10 h-10 rounded transition-all duration-200 \${
        currentPage === page
          ? 'bg-blue-500 text-white'
          : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
      }\`}
    >
      {page}
    </button>
  );

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    const start = Math.max(1, Math.min(currentPage - 2, totalPages - maxVisible + 1));
    const end = Math.min(totalPages, start + maxVisible - 1);

    for (let i = start; i <= end; i++) {
      pages.push(renderPageButton(i));
    }
    return pages;
  };

  return (
    <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-slate-800/30 to-slate-900/30 rounded-2xl backdrop-blur-sm border border-slate-700/50">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-800 text-slate-300 rounded-xl hover:from-slate-600 hover:to-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Prev
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-800 text-slate-300 rounded-xl hover:from-slate-600 hover:to-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2"
      >
        Next
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}`;