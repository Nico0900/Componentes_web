export default function Loading7Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {`
          @keyframes circular {
            0% { stroke-dashoffset: 280; }
            50% { stroke-dashoffset: 75; }
            100% { stroke-dashoffset: 280; }
          }
          @keyframes rotate {
            100% { transform: rotate(360deg); }
          }
          .circular-loader {
            animation: rotate 2s linear infinite;
          }
          .circular-path {
            stroke-dasharray: 280;
            stroke-dashoffset: 0;
            animation: circular 1.4s ease-in-out infinite;
            stroke-linecap: round;
          }
        `}
      </style>

      {/* Purple Circle */}
      <svg className="circular-loader" width="60" height="60" viewBox="0 0 100 100">
        <circle
          className="circular-path"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="8"
        />
      </svg>

      {/* Blue Circle */}
      <svg className="circular-loader" width="60" height="60" viewBox="0 0 100 100">
        <circle
          className="circular-path"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="8"
        />
      </svg>

      {/* With Background */}
      <svg className="circular-loader" width="60" height="60" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="rgba(148, 163, 184, 0.2)"
          strokeWidth="8"
        />
        <circle
          className="circular-path"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="8"
        />
      </svg>

      {/* Gradient Circle */}
      <svg className="circular-loader" width="60" height="60" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <circle
          className="circular-path"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="8"
        />
      </svg>

      {/* With Text */}
      <div className="flex flex-col items-center gap-3">
        <svg className="circular-loader" width="60" height="60" viewBox="0 0 100 100">
          <circle
            className="circular-path"
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="8"
          />
        </svg>
        <span className="text-slate-400 text-sm">Loading content...</span>
      </div>
    </div>
  );
}

export const loading7Code = `export default function Loading7Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\`
          @keyframes circular {
            0% { stroke-dashoffset: 280; }
            50% { stroke-dashoffset: 75; }
            100% { stroke-dashoffset: 280; }
          }
          @keyframes rotate {
            100% { transform: rotate(360deg); }
          }
          .circular-loader {
            animation: rotate 2s linear infinite;
          }
          .circular-path {
            stroke-dasharray: 280;
            stroke-dashoffset: 0;
            animation: circular 1.4s ease-in-out infinite;
            stroke-linecap: round;
          }
        \`}
      </style>

      {/* Purple Circle */}
      <svg className="circular-loader" width="60" height="60" viewBox="0 0 100 100">
        <circle
          className="circular-path"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="8"
        />
      </svg>

      {/* Blue Circle */}
      <svg className="circular-loader" width="60" height="60" viewBox="0 0 100 100">
        <circle
          className="circular-path"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="8"
        />
      </svg>

      {/* With Background */}
      <svg className="circular-loader" width="60" height="60" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="rgba(148, 163, 184, 0.2)"
          strokeWidth="8"
        />
        <circle
          className="circular-path"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="8"
        />
      </svg>

      {/* Gradient Circle */}
      <svg className="circular-loader" width="60" height="60" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <circle
          className="circular-path"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="8"
        />
      </svg>

      {/* With Text */}
      <div className="flex flex-col items-center gap-3">
        <svg className="circular-loader" width="60" height="60" viewBox="0 0 100 100">
          <circle
            className="circular-path"
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="8"
          />
        </svg>
        <span className="text-slate-400 text-sm">Loading content...</span>
      </div>
    </div>
  );
}`;