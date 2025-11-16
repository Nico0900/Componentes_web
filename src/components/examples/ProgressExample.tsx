export default function ProgressExample() {
  const CircularProgress = ({ percentage, size = 120, strokeWidth = 8 }: { percentage: number; size?: number; strokeWidth?: number }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className="text-slate-800/50"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="text-blue-500 transition-all duration-500"
          />
        </svg>
        <div className="absolute text-xl font-semibold text-slate-200">
          {percentage}%
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-around items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <CircularProgress percentage={75} />
          <span className="text-xs text-slate-400">Completado</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <CircularProgress percentage={45} size={100} strokeWidth={6} />
          <span className="text-xs text-slate-400">En progreso</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <CircularProgress percentage={100} size={80} strokeWidth={5} />
          <span className="text-xs text-slate-400">Finalizado</span>
        </div>
      </div>

      {/* Linear Progress */}
      <div className="mt-8 space-y-4">
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
      </div>
    </div>
  );
}

export const progressCode = `export default function ProgressExample() {
  const CircularProgress = ({ percentage, size = 120, strokeWidth = 8 }: { percentage: number; size?: number; strokeWidth?: number }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className="text-slate-800/50"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="text-blue-500 transition-all duration-500"
          />
        </svg>
        <div className="absolute text-xl font-semibold text-slate-200">
          {percentage}%
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-around items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <CircularProgress percentage={75} />
          <span className="text-xs text-slate-400">Completado</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <CircularProgress percentage={45} size={100} strokeWidth={6} />
          <span className="text-xs text-slate-400">En progreso</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <CircularProgress percentage={100} size={80} strokeWidth={5} />
          <span className="text-xs text-slate-400">Finalizado</span>
        </div>
      </div>

      {/* Linear Progress */}
      <div className="mt-8 space-y-4">
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
      </div>
    </div>
  );
}`;
