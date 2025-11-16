import { useState } from 'react';

export default function Pagination5Example() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-14 h-14 rounded-lg font-semibold text-lg transition-all duration-200 ${
            currentPage === i
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
              : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-6 py-3 text-lg bg-slate-800/50 text-slate-300 rounded-lg hover:bg-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-6 py-3 text-lg bg-slate-800/50 text-slate-300 rounded-lg hover:bg-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        Next
      </button>
    </div>
  );
}

export const pagination5Code = `import { useState } from 'react';

export default function Pagination5Example() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={\`w-14 h-14 rounded-lg font-semibold text-lg transition-all duration-200 \${
            currentPage === i
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
              : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
          }\`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-6 py-3 text-lg bg-slate-800/50 text-slate-300 rounded-lg hover:bg-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-6 py-3 text-lg bg-slate-800/50 text-slate-300 rounded-lg hover:bg-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        Next
      </button>
    </div>
  );
}`;