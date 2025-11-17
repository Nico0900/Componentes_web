export default function Loading23Example() {
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

      {/* Colored Variants */}
      <div className="flex gap-3">
        <div className="dot" style={{ backgroundColor: '#3b82f6' }}></div>
        <div className="dot" style={{ backgroundColor: '#10b981' }}></div>
        <div className="dot" style={{ backgroundColor: '#f59e0b' }}></div>
      </div>
    </div>
  );
}

export const loading23Code = `export default function Loading23Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\\\`
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
        \\\`}
      </style>

      {/* Colored Variants */}
      <div className="flex gap-3">
        <div className="dot" style={{ backgroundColor: '#3b82f6' }}></div>
        <div className="dot" style={{ backgroundColor: '#10b981' }}></div>
        <div className="dot" style={{ backgroundColor: '#f59e0b' }}></div>
      </div>
    </div>
  );
}`;
