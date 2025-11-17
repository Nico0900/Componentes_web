export default function Loading47Example() {
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

      {/* Colored Bouncing Balls */}
      <div className="flex gap-3 items-end h-16">
        <div className="bounce-ball" style={{ backgroundColor: '#3b82f6', animationDelay: '0s' }}></div>
        <div className="bounce-ball" style={{ backgroundColor: '#10b981', animationDelay: '0.15s' }}></div>
        <div className="bounce-ball" style={{ backgroundColor: '#f59e0b', animationDelay: '0.3s' }}></div>
      </div>
    </div>
  );
}

export const loading47Code = `export default function Loading47Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\\\`
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
        \\\`}
      </style>

      {/* Colored Bouncing Balls */}
      <div className="flex gap-3 items-end h-16">
        <div className="bounce-ball" style={{ backgroundColor: '#3b82f6', animationDelay: '0s' }}></div>
        <div className="bounce-ball" style={{ backgroundColor: '#10b981', animationDelay: '0.15s' }}></div>
        <div className="bounce-ball" style={{ backgroundColor: '#f59e0b', animationDelay: '0.3s' }}></div>
      </div>
    </div>
  );
}`;
