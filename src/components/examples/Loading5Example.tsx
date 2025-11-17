export default function Loading5Example() {
  return (
    <div className="flex items-center justify-center p-8">
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -468px 0; }
            100% { background-position: 468px 0; }
          }
          .skeleton {
            background: linear-gradient(
              to right,
              rgba(148, 163, 184, 0.1) 0%,
              rgba(148, 163, 184, 0.2) 20%,
              rgba(148, 163, 184, 0.1) 40%,
              rgba(148, 163, 184, 0.1) 100%
            );
            background-size: 800px 104px;
            animation: shimmer 1.5s infinite linear;
          }
        `}
      </style>

      {/* Card Skeleton */}
      <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50 w-full max-w-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="skeleton w-12 h-12 rounded-full"></div>
          <div className="flex-1 space-y-2">
            <div className="skeleton h-4 w-3/4 rounded"></div>
            <div className="skeleton h-3 w-1/2 rounded"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="skeleton h-3 w-full rounded"></div>
          <div className="skeleton h-3 w-full rounded"></div>
          <div className="skeleton h-3 w-2/3 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export const loading5Code = `export default function Loading5Example() {
  return (
    <div className="flex items-center justify-center p-8">
      <style>
        {\\\`
          @keyframes shimmer {
            0% { background-position: -468px 0; }
            100% { background-position: 468px 0; }
          }
          .skeleton {
            background: linear-gradient(
              to right,
              rgba(148, 163, 184, 0.1) 0%,
              rgba(148, 163, 184, 0.2) 20%,
              rgba(148, 163, 184, 0.1) 40%,
              rgba(148, 163, 184, 0.1) 100%
            );
            background-size: 800px 104px;
            animation: shimmer 1.5s infinite linear;
          }
        \\\`}
      </style>

      <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50 w-full max-w-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="skeleton w-12 h-12 rounded-full"></div>
          <div className="flex-1 space-y-2">
            <div className="skeleton h-4 w-3/4 rounded"></div>
            <div className="skeleton h-3 w-1/2 rounded"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="skeleton h-3 w-full rounded"></div>
          <div className="skeleton h-3 w-full rounded"></div>
          <div className="skeleton h-3 w-2/3 rounded"></div>
        </div>
      </div>
    </div>
  );
}`;
