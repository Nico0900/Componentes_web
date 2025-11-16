import { useState } from 'react';

export default function Pagination8Example() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

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
          className={`w-10 h-10 border-2 rounded transition-all duration-200 ${
            currentPage === i
              ? 'border-blue-500 bg-blue-500/10 text-blue-400'
              : 'border-slate-700 text-slate-300 hover:border-slate-600 hover:bg-slate-800/30'
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-4 py-2 border-2 border-slate-700 text-slate-300 rounded hover:border-slate-600 hover:bg-slate-800/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        Prev
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border-2 border-slate-700 text-slate-300 rounded hover:border-slate-600 hover:bg-slate-800/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        Next
      </button>
    </div>
  );
}

export const pagination8Code = `import { useState } from 'react';

export default function Pagination8Example() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

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
          className={\`w-10 h-10 border-2 rounded transition-all duration-200 \${
            currentPage === i
              ? 'border-blue-500 bg-blue-500/10 text-blue-400'
              : 'border-slate-700 text-slate-300 hover:border-slate-600 hover:bg-slate-800/30'
          }\`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-4 py-2 border-2 border-slate-700 text-slate-300 rounded hover:border-slate-600 hover:bg-slate-800/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        Prev
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border-2 border-slate-700 text-slate-300 rounded hover:border-slate-600 hover:bg-slate-800/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        Next
      </button>
    </div>
  );
}`;