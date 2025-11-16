export default function Loading2Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {`
          @keyframes bounce {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
          }
          .dot {
            width: 12px;
            height: 12px;
            background-color: #8b5cf6;
            border-radius: 50%;
            animation: bounce 1.4s infinite ease-in-out both;
          }
          .dot:nth-child(1) { animation-delay: -0.32s; }
          .dot:nth-child(2) { animation-delay: -0.16s; }
        `}
      </style>

      {/* Basic Dots */}
      <div className="flex gap-2">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      {/* With Label */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-2">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <span className="text-slate-400 text-sm">Loading data...</span>
      </div>

      {/* Larger Dots */}
      <div className="flex gap-3">
        <div className="dot" style={{ width: '16px', height: '16px' }}></div>
        <div className="dot" style={{ width: '16px', height: '16px' }}></div>
        <div className="dot" style={{ width: '16px', height: '16px' }}></div>
      </div>

      {/* Colored Variants */}
      <div className="flex gap-3">
        <div className="dot" style={{ backgroundColor: '#3b82f6' }}></div>
        <div className="dot" style={{ backgroundColor: '#10b981' }}></div>
        <div className="dot" style={{ backgroundColor: '#f59e0b' }}></div>
      </div>
    </div>
  );
}

export const loading2Code = `export default function Loading2Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\`
          @keyframes bounce {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
          }
          .dot {
            width: 12px;
            height: 12px;
            background-color: #8b5cf6;
            border-radius: 50%;
            animation: bounce 1.4s infinite ease-in-out both;
          }
          .dot:nth-child(1) { animation-delay: -0.32s; }
          .dot:nth-child(2) { animation-delay: -0.16s; }
        \`}
      </style>

      {/* Basic Dots */}
      <div className="flex gap-2">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      {/* With Label */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-2">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <span className="text-slate-400 text-sm">Loading data...</span>
      </div>

      {/* Larger Dots */}
      <div className="flex gap-3">
        <div className="dot" style={{ width: '16px', height: '16px' }}></div>
        <div className="dot" style={{ width: '16px', height: '16px' }}></div>
        <div className="dot" style={{ width: '16px', height: '16px' }}></div>
      </div>

      {/* Colored Variants */}
      <div className="flex gap-3">
        <div className="dot" style={{ backgroundColor: '#3b82f6' }}></div>
        <div className="dot" style={{ backgroundColor: '#10b981' }}></div>
        <div className="dot" style={{ backgroundColor: '#f59e0b' }}></div>
      </div>
    </div>
  );
}`;