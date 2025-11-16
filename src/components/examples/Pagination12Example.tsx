import { useState } from 'react';

export default function Pagination12Example() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const itemsPerPage = 20;
  const totalItems = 200;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-10 h-10 rounded transition-all duration-200 ${
            currentPage === i
              ? 'bg-blue-500 text-white'
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
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-slate-800/50 text-slate-300 rounded hover:bg-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          Prev
        </button>
        {renderPageNumbers()}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 py-2 bg-slate-800/50 text-slate-300 rounded hover:bg-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          Next
        </button>
      </div>
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <span>Page {currentPage} of {totalPages}</span>
        <span>|</span>
        <span>Showing {startItem}-{endItem} of {totalItems} items</span>
      </div>
    </div>
  );
}

export const pagination12Code = `import { useState } from 'react';

export default function Pagination12Example() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const itemsPerPage = 20;
  const totalItems = 200;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={\`w-10 h-10 rounded transition-all duration-200 \${
            currentPage === i
              ? 'bg-blue-500 text-white'
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
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-slate-800/50 text-slate-300 rounded hover:bg-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          Prev
        </button>
        {renderPageNumbers()}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 py-2 bg-slate-800/50 text-slate-300 rounded hover:bg-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          Next
        </button>
      </div>
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <span>Page {currentPage} of {totalPages}</span>
        <span>|</span>
        <span>Showing {startItem}-{endItem} of {totalItems} items</span>
      </div>
    </div>
  );
}`;