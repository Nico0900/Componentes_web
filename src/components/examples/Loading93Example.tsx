export default function Loading93Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {`
          @keyframes grow {
            0%, 100% { transform: scale(0); opacity: 0; }
            50% { transform: scale(1); opacity: 1; }
          }
          .grow-circle {
            width: 60px;
            height: 60px;
            background-color: #8b5cf6;
            border-radius: 50%;
            animation: grow 1.5s ease-in-out infinite;
          }
          .grow-square {
            width: 60px;
            height: 60px;
            background-color: #8b5cf6;
            border-radius: 8px;
            animation: grow 1.5s ease-in-out infinite;
          }
        `}
      </style>

      {/* With Label */}
      <div className="flex flex-col items-center gap-4">
        <div className="grow-circle"></div>
        <span className="text-slate-400 text-sm">Growing...</span>
      </div>
    </div>
  );
}

export const loading93Code = `export default function Loading93Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\\\`
          @keyframes grow {
            0%, 100% { transform: scale(0); opacity: 0; }
            50% { transform: scale(1); opacity: 1; }
          }
          .grow-circle {
            width: 60px;
            height: 60px;
            background-color: #8b5cf6;
            border-radius: 50%;
            animation: grow 1.5s ease-in-out infinite;
          }
          .grow-square {
            width: 60px;
            height: 60px;
            background-color: #8b5cf6;
            border-radius: 8px;
            animation: grow 1.5s ease-in-out infinite;
          }
        \\\`}
      </style>

      {/* With Label */}
      <div className="flex flex-col items-center gap-4">
        <div className="grow-circle"></div>
        <span className="text-slate-400 text-sm">Growing...</span>
      </div>
    </div>
  );
}`;
