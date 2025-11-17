export default function PaginationJS2Example() {
  return (
    <div className="p-8 flex justify-center">
      <nav className="flex items-center gap-1">
        <button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold shadow-lg">
          1
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-purple-50 rounded-lg font-medium transition-colors">
          2
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-purple-50 rounded-lg font-medium transition-colors">
          3
        </button>
        <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
        <button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-purple-50 rounded-lg font-medium transition-colors">
          10
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </nav>
    </div>
  );
}

export const paginationjs2Code = `export default function PaginationJS2Example() {
  return (
    <div className="p-8 flex justify-center">
      <nav className="flex items-center gap-1">
        <button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold shadow-lg">
          1
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-purple-50 rounded-lg font-medium transition-colors">
          2
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-purple-50 rounded-lg font-medium transition-colors">
          3
        </button>
        <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
        <button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-purple-50 rounded-lg font-medium transition-colors">
          10
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </nav>
    </div>
  );
}`;
