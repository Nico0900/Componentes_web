export default function Loading10Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {`
          @keyframes wave {
            0%, 60%, 100% { transform: translateY(0); }
            30% { transform: translateY(-15px); }
          }
          .wave-bar {
            width: 4px;
            height: 30px;
            background-color: #8b5cf6;
            border-radius: 2px;
            animation: wave 1.2s ease-in-out infinite;
          }
          .wave-bar:nth-child(1) { animation-delay: 0s; }
          .wave-bar:nth-child(2) { animation-delay: 0.1s; }
          .wave-bar:nth-child(3) { animation-delay: 0.2s; }
          .wave-bar:nth-child(4) { animation-delay: 0.3s; }
          .wave-bar:nth-child(5) { animation-delay: 0.4s; }
        `}
      </style>

      {/* Classic Wave */}
      <div className="flex gap-1.5 items-center h-12">
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
      </div>

      {/* Thicker Wave */}
      <div className="flex gap-2 items-center h-12">
        <div className="wave-bar" style={{ width: '6px' }}></div>
        <div className="wave-bar" style={{ width: '6px' }}></div>
        <div className="wave-bar" style={{ width: '6px' }}></div>
        <div className="wave-bar" style={{ width: '6px' }}></div>
        <div className="wave-bar" style={{ width: '6px' }}></div>
      </div>

      {/* Taller Wave */}
      <div className="flex gap-1.5 items-center h-16">
        <div className="wave-bar" style={{ height: '40px' }}></div>
        <div className="wave-bar" style={{ height: '40px' }}></div>
        <div className="wave-bar" style={{ height: '40px' }}></div>
        <div className="wave-bar" style={{ height: '40px' }}></div>
        <div className="wave-bar" style={{ height: '40px' }}></div>
      </div>

      {/* Gradient Wave */}
      <div className="flex gap-1.5 items-center h-12">
        <div className="wave-bar" style={{ background: 'linear-gradient(to top, #8b5cf6, #3b82f6)' }}></div>
        <div className="wave-bar" style={{ background: 'linear-gradient(to top, #8b5cf6, #3b82f6)' }}></div>
        <div className="wave-bar" style={{ background: 'linear-gradient(to top, #8b5cf6, #3b82f6)' }}></div>
        <div className="wave-bar" style={{ background: 'linear-gradient(to top, #8b5cf6, #3b82f6)' }}></div>
        <div className="wave-bar" style={{ background: 'linear-gradient(to top, #8b5cf6, #3b82f6)' }}></div>
      </div>

      {/* With Label */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-1.5 items-center h-12">
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
        </div>
        <span className="text-slate-400 text-sm">Loading audio...</span>
      </div>

      {/* Colorful Wave */}
      <div className="flex gap-1.5 items-center h-12">
        <div className="wave-bar" style={{ backgroundColor: '#3b82f6' }}></div>
        <div className="wave-bar" style={{ backgroundColor: '#8b5cf6' }}></div>
        <div className="wave-bar" style={{ backgroundColor: '#10b981' }}></div>
        <div className="wave-bar" style={{ backgroundColor: '#f59e0b' }}></div>
        <div className="wave-bar" style={{ backgroundColor: '#ef4444' }}></div>
      </div>
    </div>
  );
}

export const loading10Code = `export default function Loading10Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\`
          @keyframes wave {
            0%, 60%, 100% { transform: translateY(0); }
            30% { transform: translateY(-15px); }
          }
          .wave-bar {
            width: 4px;
            height: 30px;
            background-color: #8b5cf6;
            border-radius: 2px;
            animation: wave 1.2s ease-in-out infinite;
          }
          .wave-bar:nth-child(1) { animation-delay: 0s; }
          .wave-bar:nth-child(2) { animation-delay: 0.1s; }
          .wave-bar:nth-child(3) { animation-delay: 0.2s; }
          .wave-bar:nth-child(4) { animation-delay: 0.3s; }
          .wave-bar:nth-child(5) { animation-delay: 0.4s; }
        \`}
      </style>

      {/* Classic Wave */}
      <div className="flex gap-1.5 items-center h-12">
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
      </div>

      {/* Thicker Wave */}
      <div className="flex gap-2 items-center h-12">
        <div className="wave-bar" style={{ width: '6px' }}></div>
        <div className="wave-bar" style={{ width: '6px' }}></div>
        <div className="wave-bar" style={{ width: '6px' }}></div>
        <div className="wave-bar" style={{ width: '6px' }}></div>
        <div className="wave-bar" style={{ width: '6px' }}></div>
      </div>

      {/* Taller Wave */}
      <div className="flex gap-1.5 items-center h-16">
        <div className="wave-bar" style={{ height: '40px' }}></div>
        <div className="wave-bar" style={{ height: '40px' }}></div>
        <div className="wave-bar" style={{ height: '40px' }}></div>
        <div className="wave-bar" style={{ height: '40px' }}></div>
        <div className="wave-bar" style={{ height: '40px' }}></div>
      </div>

      {/* Gradient Wave */}
      <div className="flex gap-1.5 items-center h-12">
        <div className="wave-bar" style={{ background: 'linear-gradient(to top, #8b5cf6, #3b82f6)' }}></div>
        <div className="wave-bar" style={{ background: 'linear-gradient(to top, #8b5cf6, #3b82f6)' }}></div>
        <div className="wave-bar" style={{ background: 'linear-gradient(to top, #8b5cf6, #3b82f6)' }}></div>
        <div className="wave-bar" style={{ background: 'linear-gradient(to top, #8b5cf6, #3b82f6)' }}></div>
        <div className="wave-bar" style={{ background: 'linear-gradient(to top, #8b5cf6, #3b82f6)' }}></div>
      </div>

      {/* With Label */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-1.5 items-center h-12">
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
        </div>
        <span className="text-slate-400 text-sm">Loading audio...</span>
      </div>

      {/* Colorful Wave */}
      <div className="flex gap-1.5 items-center h-12">
        <div className="wave-bar" style={{ backgroundColor: '#3b82f6' }}></div>
        <div className="wave-bar" style={{ backgroundColor: '#8b5cf6' }}></div>
        <div className="wave-bar" style={{ backgroundColor: '#10b981' }}></div>
        <div className="wave-bar" style={{ backgroundColor: '#f59e0b' }}></div>
        <div className="wave-bar" style={{ backgroundColor: '#ef4444' }}></div>
      </div>
    </div>
  );
}`;