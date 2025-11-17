export default function Loading33Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {`
          @keyframes bar-stretch {
            0%, 40%, 100% { transform: scaleY(0.4); }
            20% { transform: scaleY(1); }
          }
          .bar {
            width: 6px;
            height: 40px;
            background-color: #8b5cf6;
            border-radius: 3px;
            animation: bar-stretch 1.2s infinite ease-in-out;
          }
          .bar:nth-child(1) { animation-delay: -1.2s; }
          .bar:nth-child(2) { animation-delay: -1.1s; }
          .bar:nth-child(3) { animation-delay: -1.0s; }
          .bar:nth-child(4) { animation-delay: -0.9s; }
          .bar:nth-child(5) { animation-delay: -0.8s; }
        `}
      </style>

      {/* Wider Bars */}
      <div className="flex gap-2 items-center h-12">
        <div className="bar" style={{ width: '10px' }}></div>
        <div className="bar" style={{ width: '10px' }}></div>
        <div className="bar" style={{ width: '10px' }}></div>
        <div className="bar" style={{ width: '10px' }}></div>
        <div className="bar" style={{ width: '10px' }}></div>
      </div>
    </div>
  );
}

export const loading33Code = `export default function Loading33Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\\\`
          @keyframes bar-stretch {
            0%, 40%, 100% { transform: scaleY(0.4); }
            20% { transform: scaleY(1); }
          }
          .bar {
            width: 6px;
            height: 40px;
            background-color: #8b5cf6;
            border-radius: 3px;
            animation: bar-stretch 1.2s infinite ease-in-out;
          }
          .bar:nth-child(1) { animation-delay: -1.2s; }
          .bar:nth-child(2) { animation-delay: -1.1s; }
          .bar:nth-child(3) { animation-delay: -1.0s; }
          .bar:nth-child(4) { animation-delay: -0.9s; }
          .bar:nth-child(5) { animation-delay: -0.8s; }
        \\\`}
      </style>

      {/* Wider Bars */}
      <div className="flex gap-2 items-center h-12">
        <div className="bar" style={{ width: '10px' }}></div>
        <div className="bar" style={{ width: '10px' }}></div>
        <div className="bar" style={{ width: '10px' }}></div>
        <div className="bar" style={{ width: '10px' }}></div>
        <div className="bar" style={{ width: '10px' }}></div>
      </div>
    </div>
  );
}`;
