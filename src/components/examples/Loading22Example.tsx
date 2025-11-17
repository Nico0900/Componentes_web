export default function Loading22Example() {
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

      {/* Larger Dots */}
      <div className="flex gap-3">
        <div className="dot" style={{ width: '16px', height: '16px' }}></div>
        <div className="dot" style={{ width: '16px', height: '16px' }}></div>
        <div className="dot" style={{ width: '16px', height: '16px' }}></div>
      </div>
    </div>
  );
}

export const loading22Code = `export default function Loading22Example() {
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

      {/* Larger Dots */}
      <div className="flex gap-3">
        <div className="dot" style={{ width: '16px', height: '16px' }}></div>
        <div className="dot" style={{ width: '16px', height: '16px' }}></div>
        <div className="dot" style={{ width: '16px', height: '16px' }}></div>
      </div>
    </div>
  );
}`;
