import { useState } from 'react';

export default function Pagination10Example() {
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
          className={`w-8 h-8 rounded transition-all duration-200 ${
            currentPage === i
              ? 'text-blue-400 underline underline-offset-4'
              : 'text-slate-400 hover:text-slate-300'
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-3 py-1 text-slate-400 hover:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        &larr;
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-3 py-1 text-slate-400 hover:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        &rarr;
      </button>
    </div>
  );
}

export const pagination10Code = `import { useState } from 'react';

export default function Pagination10Example() {
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
          className={\`w-8 h-8 rounded transition-all duration-200 \${
            currentPage === i
              ? 'text-blue-400 underline underline-offset-4'
              : 'text-slate-400 hover:text-slate-300'
          }\`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-3 py-1 text-slate-400 hover:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        &larr;
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-3 py-1 text-slate-400 hover:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        &rarr;
      </button>
    </div>
  );
}`;