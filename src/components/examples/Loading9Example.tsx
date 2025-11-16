export default function Loading9Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {`
          @keyframes bounce-up {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
          }
          .bounce-ball {
            width: 20px;
            height: 20px;
            background-color: #8b5cf6;
            border-radius: 50%;
            animation: bounce-up 0.6s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
          }
        `}
      </style>

      {/* Single Bounce */}
      <div className="flex items-end h-16">
        <div className="bounce-ball"></div>
      </div>

      {/* Multiple Bouncing Balls */}
      <div className="flex gap-3 items-end h-16">
        <div className="bounce-ball" style={{ animationDelay: '0s' }}></div>
        <div className="bounce-ball" style={{ animationDelay: '0.1s' }}></div>
        <div className="bounce-ball" style={{ animationDelay: '0.2s' }}></div>
        <div className="bounce-ball" style={{ animationDelay: '0.3s' }}></div>
      </div>

      {/* Colored Bouncing Balls */}
      <div className="flex gap-3 items-end h-16">
        <div className="bounce-ball" style={{ backgroundColor: '#3b82f6', animationDelay: '0s' }}></div>
        <div className="bounce-ball" style={{ backgroundColor: '#10b981', animationDelay: '0.15s' }}></div>
        <div className="bounce-ball" style={{ backgroundColor: '#f59e0b', animationDelay: '0.3s' }}></div>
      </div>

      {/* Larger Balls */}
      <div className="flex gap-4 items-end h-20">
        <div className="bounce-ball" style={{ width: '24px', height: '24px', animationDelay: '0s' }}></div>
        <div className="bounce-ball" style={{ width: '24px', height: '24px', animationDelay: '0.1s' }}></div>
        <div className="bounce-ball" style={{ width: '24px', height: '24px', animationDelay: '0.2s' }}></div>
      </div>

      {/* With Shadow */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-3 items-end h-16">
          <div className="bounce-ball shadow-lg" style={{ animationDelay: '0s' }}></div>
          <div className="bounce-ball shadow-lg" style={{ animationDelay: '0.1s' }}></div>
          <div className="bounce-ball shadow-lg" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <span className="text-slate-400 text-sm">Bouncing...</span>
      </div>

      {/* Gradient Ball */}
      <div className="flex items-end h-16">
        <div
          className="bounce-ball"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
            width: '28px',
            height: '28px'
          }}
        ></div>
      </div>
    </div>
  );
}

export const loading9Code = `export default function Loading9Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\`
          @keyframes bounce-up {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
          }
          .bounce-ball {
            width: 20px;
            height: 20px;
            background-color: #8b5cf6;
            border-radius: 50%;
            animation: bounce-up 0.6s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
          }
        \`}
      </style>

      {/* Single Bounce */}
      <div className="flex items-end h-16">
        <div className="bounce-ball"></div>
      </div>

      {/* Multiple Bouncing Balls */}
      <div className="flex gap-3 items-end h-16">
        <div className="bounce-ball" style={{ animationDelay: '0s' }}></div>
        <div className="bounce-ball" style={{ animationDelay: '0.1s' }}></div>
        <div className="bounce-ball" style={{ animationDelay: '0.2s' }}></div>
        <div className="bounce-ball" style={{ animationDelay: '0.3s' }}></div>
      </div>

      {/* Colored Bouncing Balls */}
      <div className="flex gap-3 items-end h-16">
        <div className="bounce-ball" style={{ backgroundColor: '#3b82f6', animationDelay: '0s' }}></div>
        <div className="bounce-ball" style={{ backgroundColor: '#10b981', animationDelay: '0.15s' }}></div>
        <div className="bounce-ball" style={{ backgroundColor: '#f59e0b', animationDelay: '0.3s' }}></div>
      </div>

      {/* Larger Balls */}
      <div className="flex gap-4 items-end h-20">
        <div className="bounce-ball" style={{ width: '24px', height: '24px', animationDelay: '0s' }}></div>
        <div className="bounce-ball" style={{ width: '24px', height: '24px', animationDelay: '0.1s' }}></div>
        <div className="bounce-ball" style={{ width: '24px', height: '24px', animationDelay: '0.2s' }}></div>
      </div>

      {/* With Shadow */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-3 items-end h-16">
          <div className="bounce-ball shadow-lg" style={{ animationDelay: '0s' }}></div>
          <div className="bounce-ball shadow-lg" style={{ animationDelay: '0.1s' }}></div>
          <div className="bounce-ball shadow-lg" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <span className="text-slate-400 text-sm">Bouncing...</span>
      </div>

      {/* Gradient Ball */}
      <div className="flex items-end h-16">
        <div
          className="bounce-ball"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
            width: '28px',
            height: '28px'
          }}
        ></div>
      </div>
    </div>
  );
}`;