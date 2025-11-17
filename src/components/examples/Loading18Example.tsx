export default function Loading18Example() {
  return (
    <div className="flex items-center justify-center p-8">
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

      {/* With Text */}
      <div className="flex items-center gap-3">
        <div className="spinner-border w-10 h-10"></div>
        <span className="text-slate-300 font-medium">Loading...</span>
      </div>
    </div>
  );
}

export const loading18Code = `export default function Loading18Example() {
  return (
    <div className="flex items-center justify-center p-8">
      <style>
        {\\\`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          .spinner-border {
            border: 4px solid rgba(148, 163, 184, 0.3);
            border-top-color: #8b5cf6;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
        \\\`}
      </style>

      <div className="flex items-center gap-3">
        <div className="spinner-border w-10 h-10"></div>
        <span className="text-slate-300 font-medium">Loading...</span>
      </div>
    </div>
  );
}`;
