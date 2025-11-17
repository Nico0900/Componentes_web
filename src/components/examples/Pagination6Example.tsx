import { useState } from 'react';

export default function Pagination6Example() {
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
    <div className="flex items-center gap-1">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-2 py-1 text-xs bg-slate-800/50 text-slate-300 rounded hover:bg-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        &lt;
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-2 py-1 text-xs bg-slate-800/50 text-slate-300 rounded hover:bg-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        &gt;
      </button>
    </div>
  );
}

export const pagination6Code = `import { useState } from 'react';

export default function Pagination6Example() {
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
    <div className="flex items-center gap-1">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-2 py-1 text-xs bg-slate-800/50 text-slate-300 rounded hover:bg-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        &lt;
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-2 py-1 text-xs bg-slate-800/50 text-slate-300 rounded hover:bg-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        &gt;
      </button>
    </div>
  );
}`;