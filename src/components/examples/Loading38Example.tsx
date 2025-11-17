export default function Loading38Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(0.8); }
          }
          .pulse-loader {
            animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}
      </style>

      {/* With Text */}
      <div className="flex flex-col items-center gap-3">
        <div className="pulse-loader w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full"></div>
        <span className="text-slate-400 text-sm">Syncing...</span>
      </div>
    </div>
  );
}

export const loading38Code = `export default function Loading38Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\\\`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(0.8); }
          }
          .pulse-loader {
            animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        \\\`}
      </style>

      {/* With Text */}
      <div className="flex flex-col items-center gap-3">
        <div className="pulse-loader w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full"></div>
        <span className="text-slate-400 text-sm">Syncing...</span>
      </div>
    </div>
  );
}`;
