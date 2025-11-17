export default function PaginationJS3Example() {
  return (
    <div className="p-8">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-600">
            Mostrando <span className="font-semibold text-gray-900">1-10</span> de <span className="font-semibold text-gray-900">97</span> resultados
          </p>
          <nav className="flex items-center gap-1">
            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-l-lg hover:bg-gray-200 transition-colors border border-gray-300">
              Primera
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors border border-gray-300 border-l-0">
              ‹ Anterior
            </button>
            <button className="px-4 py-2 text-sm font-bold text-white bg-blue-600 border border-blue-600">
              1
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors border border-gray-300 border-l-0">
              2
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors border border-gray-300 border-l-0">
              3
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors border border-gray-300 border-l-0">
              4
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors border border-gray-300 border-l-0">
              Siguiente ›
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-r-lg hover:bg-gray-200 transition-colors border border-gray-300 border-l-0">
              Última
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">Ir a página:</label>
          <input
            type="number"
            min="1"
            max="10"
            defaultValue="1"
            className="w-16 px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Ir
          </button>
        </div>
      </div>
    </div>
  );
}

export const paginationjs3Code = `export default function PaginationJS3Example() {
  return (
    <div className="p-8">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-600">
            Mostrando <span className="font-semibold text-gray-900">1-10</span> de <span className="font-semibold text-gray-900">97</span> resultados
          </p>
          <nav className="flex items-center gap-1">
            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-l-lg hover:bg-gray-200 transition-colors border border-gray-300">
              Primera
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors border border-gray-300 border-l-0">
              ‹ Anterior
            </button>
            <button className="px-4 py-2 text-sm font-bold text-white bg-blue-600 border border-blue-600">
              1
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors border border-gray-300 border-l-0">
              2
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors border border-gray-300 border-l-0">
              3
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors border border-gray-300 border-l-0">
              4
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors border border-gray-300 border-l-0">
              Siguiente ›
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-r-lg hover:bg-gray-200 transition-colors border border-gray-300 border-l-0">
              Última
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">Ir a página:</label>
          <input
            type="number"
            min="1"
            max="10"
            defaultValue="1"
            className="w-16 px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Ir
          </button>
        </div>
      </div>
    </div>
  );
}`;
