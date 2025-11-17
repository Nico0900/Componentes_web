export default function Loading45Example() {
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

      {/* Concentric Pulses */}
      <div className="relative flex items-center justify-center">
        <div className="absolute pulse-loader w-20 h-20 bg-purple-500/30 rounded-full" style={{ animationDelay: '0s' }}></div>
        <div className="absolute pulse-loader w-16 h-16 bg-purple-500/50 rounded-full" style={{ animationDelay: '0.2s' }}></div>
        <div className="pulse-loader w-12 h-12 bg-purple-500 rounded-full" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
}

export const loading45Code = `export default function Loading45Example() {
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

      {/* Concentric Pulses */}
      <div className="relative flex items-center justify-center">
        <div className="absolute pulse-loader w-20 h-20 bg-purple-500/30 rounded-full" style={{ animationDelay: '0s' }}></div>
        <div className="absolute pulse-loader w-16 h-16 bg-purple-500/50 rounded-full" style={{ animationDelay: '0.2s' }}></div>
        <div className="pulse-loader w-12 h-12 bg-purple-500 rounded-full" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
}`;
