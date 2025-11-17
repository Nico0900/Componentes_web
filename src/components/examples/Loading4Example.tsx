export default function Loading4Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8 w-full max-w-md">
      <style>
        {`
          @keyframes progress {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(400%); }
          }
          .progress-bar {
            position: relative;
            overflow: hidden;
            background-color: rgba(148, 163, 184, 0.2);
            border-radius: 9999px;
          }
          .progress-bar::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 25%;
            background: linear-gradient(90deg, transparent, #8b5cf6, transparent);
            animation: progress 1.5s infinite;
          }
        `}
      </style>

      {/* Basic Progress */}
      <div className="w-full">
        <div className="progress-bar h-2 w-full"></div>
      </div>

      {/* With Label */}
      <div className="w-full">
        <div className="flex justify-between mb-2">
          <span className="text-slate-400 text-sm">Loading...</span>
          <span className="text-slate-500 text-sm">Please wait</span>
        </div>
        <div className="progress-bar h-2 w-full"></div>
      </div>

      {/* Thicker Progress */}
      <div className="w-full">
        <div className="progress-bar h-3 w-full"></div>
      </div>

      {/* Colored Progress */}
      <div className="w-full">
        <div className="progress-bar h-2 w-full" style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)' }}>
          <style>
            {`
              .progress-bar::after {
                background: linear-gradient(90deg, transparent, #3b82f6, transparent);
              }
            `}
          </style>
        </div>
      </div>

      {/* Multiple Bars */}
      <div className="w-full space-y-2">
        <div className="progress-bar h-1.5 w-full"></div>
        <div className="progress-bar h-1.5 w-full" style={{ animationDelay: '0.3s' }}></div>
        <div className="progress-bar h-1.5 w-full" style={{ animationDelay: '0.6s' }}></div>
      </div>
    </div>
  );
}

export const loading4Code = `export default function Loading4Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8 w-full max-w-md">
      <style>
        {\\\`
          @keyframes progress {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(400%); }
          }
          .progress-bar {
            position: relative;
            overflow: hidden;
            background-color: rgba(148, 163, 184, 0.2);
            border-radius: 9999px;
          }
          .progress-bar::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 25%;
            background: linear-gradient(90deg, transparent, #8b5cf6, transparent);
            animation: progress 1.5s infinite;
          }
        \\\`}
      </style>

      {/* Basic Progress */}
      <div className="w-full">
        <div className="progress-bar h-2 w-full"></div>
      </div>

      {/* With Label */}
      <div className="w-full">
        <div className="flex justify-between mb-2">
          <span className="text-slate-400 text-sm">Loading...</span>
          <span className="text-slate-500 text-sm">Please wait</span>
        </div>
        <div className="progress-bar h-2 w-full"></div>
      </div>

      {/* Thicker Progress */}
      <div className="w-full">
        <div className="progress-bar h-3 w-full"></div>
      </div>

      {/* Colored Progress */}
      <div className="w-full">
        <div className="progress-bar h-2 w-full" style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)' }}>
          <style>
            {\\\`
              .progress-bar::after {
                background: linear-gradient(90deg, transparent, #3b82f6, transparent);
              }
            \\\`}
          </style>
        </div>
      </div>

      {/* Multiple Bars */}
      <div className="w-full space-y-2">
        <div className="progress-bar h-1.5 w-full"></div>
        <div className="progress-bar h-1.5 w-full" style={{ animationDelay: '0.3s' }}></div>
        <div className="progress-bar h-1.5 w-full" style={{ animationDelay: '0.6s' }}></div>
      </div>
    </div>
  );
}`;