export default function Loading49Example() {
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

      {/* With Shadow */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-3 items-end h-16">
          <div className="bounce-ball shadow-lg" style={{ animationDelay: '0s' }}></div>
          <div className="bounce-ball shadow-lg" style={{ animationDelay: '0.1s' }}></div>
          <div className="bounce-ball shadow-lg" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <span className="text-slate-400 text-sm">Bouncing...</span>
      </div>
    </div>
  );
}

export const loading49Code = `export default function Loading49Example() {
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

      {/* With Shadow */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-3 items-end h-16">
          <div className="bounce-ball shadow-lg" style={{ animationDelay: '0s' }}></div>
          <div className="bounce-ball shadow-lg" style={{ animationDelay: '0.1s' }}></div>
          <div className="bounce-ball shadow-lg" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <span className="text-slate-400 text-sm">Bouncing...</span>
      </div>
    </div>
  );
}`;
