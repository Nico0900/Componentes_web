export default function Loading19Example() {
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

      {/* List Skeleton */}
      <div className="space-y-3 w-full max-w-md">
        <div className="flex items-center gap-3">
          <div className="skeleton w-10 h-10 rounded-lg"></div>
          <div className="flex-1 space-y-2">
            <div className="skeleton h-3 w-full rounded"></div>
            <div className="skeleton h-2 w-2/3 rounded"></div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="skeleton w-10 h-10 rounded-lg"></div>
          <div className="flex-1 space-y-2">
            <div className="skeleton h-3 w-full rounded"></div>
            <div className="skeleton h-2 w-2/3 rounded"></div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="skeleton w-10 h-10 rounded-lg"></div>
          <div className="flex-1 space-y-2">
            <div className="skeleton h-3 w-full rounded"></div>
            <div className="skeleton h-2 w-2/3 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const loading19Code = `export default function Loading19Example() {
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

      <div className="space-y-3 w-full max-w-md">
        <div className="flex items-center gap-3">
          <div className="skeleton w-10 h-10 rounded-lg"></div>
          <div className="flex-1 space-y-2">
            <div className="skeleton h-3 w-full rounded"></div>
            <div className="skeleton h-2 w-2/3 rounded"></div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="skeleton w-10 h-10 rounded-lg"></div>
          <div className="flex-1 space-y-2">
            <div className="skeleton h-3 w-full rounded"></div>
            <div className="skeleton h-2 w-2/3 rounded"></div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="skeleton w-10 h-10 rounded-lg"></div>
          <div className="flex-1 space-y-2">
            <div className="skeleton h-3 w-full rounded"></div>
            <div className="skeleton h-2 w-2/3 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}`;
