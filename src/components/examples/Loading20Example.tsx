export default function Loading20Example() {
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

      {/* Text Skeleton */}
      <div className="space-y-3 w-full max-w-md">
        <div className="skeleton h-6 w-1/3 rounded"></div>
        <div className="space-y-2">
          <div className="skeleton h-3 w-full rounded"></div>
          <div className="skeleton h-3 w-full rounded"></div>
          <div className="skeleton h-3 w-4/5 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export const loading20Code = `export default function Loading20Example() {
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
        <div className="skeleton h-6 w-1/3 rounded"></div>
        <div className="space-y-2">
          <div className="skeleton h-3 w-full rounded"></div>
          <div className="skeleton h-3 w-full rounded"></div>
          <div className="skeleton h-3 w-4/5 rounded"></div>
        </div>
      </div>
    </div>
  );
}`;
