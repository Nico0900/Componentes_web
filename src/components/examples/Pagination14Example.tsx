import { useState } from 'react';

export default function Pagination14Example() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="inline-flex items-center gap-1 bg-slate-800/50 rounded-lg p-1">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="w-7 h-7 flex items-center justify-center text-slate-300 hover:bg-slate-700/50 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="px-2 text-sm text-slate-300">
        {currentPage} / {totalPages}
      </div>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="w-7 h-7 flex items-center justify-center text-slate-300 hover:bg-slate-700/50 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export const pagination14Code = `import { useState } from 'react';

export default function Pagination14Example() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="inline-flex items-center gap-1 bg-slate-800/50 rounded-lg p-1">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="w-7 h-7 flex items-center justify-center text-slate-300 hover:bg-slate-700/50 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="px-2 text-sm text-slate-300">
        {currentPage} / {totalPages}
      </div>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="w-7 h-7 flex items-center justify-center text-slate-300 hover:bg-slate-700/50 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}`;