export default function Loading1Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          .spinner-border {
            border: 4px solid rgba(148, 163, 184, 0.3);
            border-top-color: #8b5cf6;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
        `}
      </style>

      {/* Small Spinner */}
      <div className="flex flex-col items-center gap-2">
        <div className="spinner-border w-8 h-8"></div>
        <span className="text-slate-400 text-sm">Small</span>
      </div>

      {/* Medium Spinner */}
      <div className="flex flex-col items-center gap-2">
        <div className="spinner-border w-12 h-12"></div>
        <span className="text-slate-400 text-sm">Medium</span>
      </div>

      {/* Large Spinner */}
      <div className="flex flex-col items-center gap-2">
        <div className="spinner-border w-16 h-16"></div>
        <span className="text-slate-400 text-sm">Large</span>
      </div>

      {/* With Text */}
      <div className="flex items-center gap-3">
        <div className="spinner-border w-10 h-10"></div>
        <span className="text-slate-300 font-medium">Loading...</span>
      </div>
    </div>
  );
}

export const loading1Code = `export default function Loading1Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          .spinner-border {
            border: 4px solid rgba(148, 163, 184, 0.3);
            border-top-color: #8b5cf6;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
        \`}
      </style>

      {/* Small Spinner */}
      <div className="flex flex-col items-center gap-2">
        <div className="spinner-border w-8 h-8"></div>
        <span className="text-slate-400 text-sm">Small</span>
      </div>

      {/* Medium Spinner */}
      <div className="flex flex-col items-center gap-2">
        <div className="spinner-border w-12 h-12"></div>
        <span className="text-slate-400 text-sm">Medium</span>
      </div>

      {/* Large Spinner */}
      <div className="flex flex-col items-center gap-2">
        <div className="spinner-border w-16 h-16"></div>
        <span className="text-slate-400 text-sm">Large</span>
      </div>

      {/* With Text */}
      <div className="flex items-center gap-3">
        <div className="spinner-border w-10 h-10"></div>
        <span className="text-slate-300 font-medium">Loading...</span>
      </div>
    </div>
  );
}`;