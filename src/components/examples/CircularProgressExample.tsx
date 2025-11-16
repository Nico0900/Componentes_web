import { useState, useEffect } from 'react';

export default function CircularProgressExample() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 segundos para llegar a 100%
    const incrementTime = 20; // Actualizar cada 20ms
    const totalSteps = duration / incrementTime;
    const increment = 100 / totalSteps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newPercentage = Math.min(Math.round(currentStep * increment), 100);
      setPercentage(newPercentage);

      if (newPercentage >= 100) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  const CircularProgress = ({ percentage, size = 150, strokeWidth = 10 }: { percentage: number; size?: number; strokeWidth?: number }) => {
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
            className="text-blue-500 transition-all duration-100 ease-linear"
          />
        </svg>
        <div className="absolute text-3xl font-bold text-slate-200">
          {percentage}%
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center gap-3">
          <CircularProgress percentage={percentage} />
          <span className="text-sm text-slate-400">
            {percentage === 100 ? 'Completado!' : 'Cargando...'}
          </span>
        </div>
      </div>
    </div>
  );
}

export const circularProgressCode = `import { useState, useEffect } from 'react';

export default function CircularProgressExample() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 segundos para llegar a 100%
    const incrementTime = 20; // Actualizar cada 20ms
    const totalSteps = duration / incrementTime;
    const increment = 100 / totalSteps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newPercentage = Math.min(Math.round(currentStep * increment), 100);
      setPercentage(newPercentage);

      if (newPercentage >= 100) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  const CircularProgress = ({ percentage, size = 150, strokeWidth = 10 }: { percentage: number; size?: number; strokeWidth?: number }) => {
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
            className="text-blue-500 transition-all duration-100 ease-linear"
          />
        </svg>
        <div className="absolute text-3xl font-bold text-slate-200">
          {percentage}%
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center gap-3">
          <CircularProgress percentage={percentage} />
          <span className="text-sm text-slate-400">
            {percentage === 100 ? 'Completado!' : 'Cargando...'}
          </span>
        </div>
      </div>
    </div>
  );
}`;
