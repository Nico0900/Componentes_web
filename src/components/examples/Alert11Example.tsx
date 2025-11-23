import { useState } from 'react';

export default function Alert11Example() {
  const [progress, setProgress] = useState(0);

  const handleAction = () => {
    let current = 0;
    const interval = setInterval(() => {
      current += 10;
      setProgress(current);
      if (current >= 100) clearInterval(interval);
    }, 100);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 p-6 rounded-2xl backdrop-blur-sm">
      <div className="flex items-start gap-4">
        <div className="bg-indigo-500/30 p-3 rounded-xl">
          <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-indigo-200 mb-2">Upload in Progress</h4>
          <p className="text-sm text-indigo-300/70 mb-4">Uploading your files to the cloud...</p>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-indigo-300">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          {progress === 0 && (
            <button
              onClick={handleAction}
              className="mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Start Upload
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export const alert11Code = `import { useState } from 'react';

export default function Alert11Example() {
  const [progress, setProgress] = useState(0);

  const handleAction = () => {
    let current = 0;
    const interval = setInterval(() => {
      current += 10;
      setProgress(current);
      if (current >= 100) clearInterval(interval);
    }, 100);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 p-6 rounded-2xl backdrop-blur-sm">
      <div className="flex items-start gap-4">
        <div className="bg-indigo-500/30 p-3 rounded-xl">
          <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-indigo-200 mb-2">Upload in Progress</h4>
          <p className="text-sm text-indigo-300/70 mb-4">Uploading your files to the cloud...</p>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-indigo-300">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ease-out"
                style={{ width: \`\${progress}%\` }}
              ></div>
            </div>
          </div>
          {progress === 0 && (
            <button
              onClick={handleAction}
              className="mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Start Upload
            </button>
          )}
        </div>
      </div>
    </div>
  );
}`;
