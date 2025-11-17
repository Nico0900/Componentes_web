export default function Loading15Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .overlay-spinner {
            border: 4px solid rgba(148, 163, 184, 0.3);
            border-top-color: #8b5cf6;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
        `}
      </style>

      {/* Full Page Overlay Example 1 - Basic */}
      <div className="relative w-full max-w-md h-64 bg-slate-800/40 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center" style={{ animation: 'fade-in 0.3s ease-out' }}>
          <div className="overlay-spinner w-16 h-16"></div>
        </div>
      </div>
    </div>
  );
}

export const loading15Code = `export default function Loading15Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\\\`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .overlay-spinner {
            border: 4px solid rgba(148, 163, 184, 0.3);
            border-top-color: #8b5cf6;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
        \\\`}
      </style>

      {/* Full Page Overlay Example 1 - Basic */}
      <div className="relative w-full max-w-md h-64 bg-slate-800/40 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center" style={{ animation: 'fade-in 0.3s ease-out' }}>
          <div className="overlay-spinner w-16 h-16"></div>
        </div>
      </div>
    </div>
  );
}`;
