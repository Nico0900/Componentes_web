export default function Loading12Example() {
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

      {/* Growing Circle */}
      <div className="grow-circle"></div>

      {/* Growing Square */}
      <div className="grow-square"></div>

      {/* Growing Ring */}
      <div className="grow-circle" style={{
        backgroundColor: 'transparent',
        border: '4px solid #8b5cf6'
      }}></div>

      {/* Multiple Growing Circles */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute grow-circle" style={{ animationDelay: '0s' }}></div>
        <div className="absolute grow-circle" style={{
          animationDelay: '0.5s',
          backgroundColor: '#3b82f6'
        }}></div>
      </div>

      {/* Concentric Growing Rings */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute grow-circle" style={{
          backgroundColor: 'transparent',
          border: '3px solid #8b5cf6',
          width: '80px',
          height: '80px',
          animationDelay: '0s'
        }}></div>
        <div className="absolute grow-circle" style={{
          backgroundColor: 'transparent',
          border: '3px solid #3b82f6',
          width: '60px',
          height: '60px',
          animationDelay: '0.3s'
        }}></div>
        <div className="absolute grow-circle" style={{
          backgroundColor: 'transparent',
          border: '3px solid #10b981',
          width: '40px',
          height: '40px',
          animationDelay: '0.6s'
        }}></div>
      </div>

      {/* Gradient Growing */}
      <div className="grow-circle" style={{
        background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)'
      }}></div>

      {/* With Label */}
      <div className="flex flex-col items-center gap-4">
        <div className="grow-circle"></div>
        <span className="text-slate-400 text-sm">Growing...</span>
      </div>
    </div>
  );
}

export const loading12Code = `export default function Loading12Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\`
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
        \`}
      </style>

      {/* Growing Circle */}
      <div className="grow-circle"></div>

      {/* Growing Square */}
      <div className="grow-square"></div>

      {/* Growing Ring */}
      <div className="grow-circle" style={{
        backgroundColor: 'transparent',
        border: '4px solid #8b5cf6'
      }}></div>

      {/* Multiple Growing Circles */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute grow-circle" style={{ animationDelay: '0s' }}></div>
        <div className="absolute grow-circle" style={{
          animationDelay: '0.5s',
          backgroundColor: '#3b82f6'
        }}></div>
      </div>

      {/* Concentric Growing Rings */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute grow-circle" style={{
          backgroundColor: 'transparent',
          border: '3px solid #8b5cf6',
          width: '80px',
          height: '80px',
          animationDelay: '0s'
        }}></div>
        <div className="absolute grow-circle" style={{
          backgroundColor: 'transparent',
          border: '3px solid #3b82f6',
          width: '60px',
          height: '60px',
          animationDelay: '0.3s'
        }}></div>
        <div className="absolute grow-circle" style={{
          backgroundColor: 'transparent',
          border: '3px solid #10b981',
          width: '40px',
          height: '40px',
          animationDelay: '0.6s'
        }}></div>
      </div>

      {/* Gradient Growing */}
      <div className="grow-circle" style={{
        background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)'
      }}></div>

      {/* With Label */}
      <div className="flex flex-col items-center gap-4">
        <div className="grow-circle"></div>
        <span className="text-slate-400 text-sm">Growing...</span>
      </div>
    </div>
  );
}`;