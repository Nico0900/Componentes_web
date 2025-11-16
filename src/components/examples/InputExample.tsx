export default function InputExample() {
  return (
    <div className="space-y-4 w-full max-w-md mx-auto">
      {/* Basic Input */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Email
        </label>
        <input
          type="email"
          placeholder="tu@email.com"
          className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
        />
      </div>

      {/* Input with Icon */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Buscar
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar componentes..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Disabled Input */}
      <div>
        <label className="block text-sm font-medium text-slate-500 mb-2">
          Deshabilitado
        </label>
        <input
          type="text"
          placeholder="Campo deshabilitado"
          disabled
          className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-800/50 rounded-lg text-slate-600 placeholder-slate-700 cursor-not-allowed"
        />
      </div>
    </div>
  );
}

export const inputCode = `export default function InputExample() {
  return (
    <div className="space-y-4 w-full max-w-md mx-auto">
      {/* Basic Input */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Email
        </label>
        <input
          type="email"
          placeholder="tu@email.com"
          className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
        />
      </div>

      {/* Input with Icon */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Buscar
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar componentes..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Disabled Input */}
      <div>
        <label className="block text-sm font-medium text-slate-500 mb-2">
          Deshabilitado
        </label>
        <input
          type="text"
          placeholder="Campo deshabilitado"
          disabled
          className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-800/50 rounded-lg text-slate-600 placeholder-slate-700 cursor-not-allowed"
        />
      </div>
    </div>
  );
}`;
