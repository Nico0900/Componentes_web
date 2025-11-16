export default function LinearProgressExample() {
  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <div>
        <div className="flex justify-between text-xs text-slate-400 mb-2">
          <span>Descarga</span>
          <span>85%</span>
        </div>
        <div className="w-full h-2 bg-slate-800/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-500"
            style={{ width: '85%' }}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between text-xs text-slate-400 mb-2">
          <span>Instalación</span>
          <span>60%</span>
        </div>
        <div className="w-full h-2 bg-slate-800/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-indigo-500 to-indigo-400 rounded-full transition-all duration-500"
            style={{ width: '60%' }}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between text-xs text-slate-400 mb-2">
          <span>Completado</span>
          <span>100%</span>
        </div>
        <div className="w-full h-2 bg-slate-800/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-green-500 to-green-400 rounded-full transition-all duration-500"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}

export const linearProgressCode = `export default function LinearProgressExample() {
  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <div>
        <div className="flex justify-between text-xs text-slate-400 mb-2">
          <span>Descarga</span>
          <span>85%</span>
        </div>
        <div className="w-full h-2 bg-slate-800/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-500"
            style={{ width: '85%' }}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between text-xs text-slate-400 mb-2">
          <span>Instalación</span>
          <span>60%</span>
        </div>
        <div className="w-full h-2 bg-slate-800/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-indigo-500 to-indigo-400 rounded-full transition-all duration-500"
            style={{ width: '60%' }}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between text-xs text-slate-400 mb-2">
          <span>Completado</span>
          <span>100%</span>
        </div>
        <div className="w-full h-2 bg-slate-800/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-green-500 to-green-400 rounded-full transition-all duration-500"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}`;
