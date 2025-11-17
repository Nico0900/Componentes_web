export default function Loading113Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {`
          @keyframes orbit {
            0% { transform: rotate(0deg) translateX(30px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
          }
          @keyframes color-shift {
            0%, 100% { background-color: #8b5cf6; }
            33% { background-color: #3b82f6; }
            66% { background-color: #10b981; }
          }
          @keyframes infinity {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .orbit-dot {
            position: absolute;
            width: 12px;
            height: 12px;
            background-color: #8b5cf6;
            border-radius: 50%;
            animation: orbit 2s linear infinite;
          }
          .infinity-loader {
            width: 80px;
            height: 40px;
            position: relative;
          }
          .infinity-loader::before,
          .infinity-loader::after {
            content: '';
            position: absolute;
            width: 40px;
            height: 40px;
            border: 3px solid #8b5cf6;
            border-radius: 50%;
            animation: infinity 1.5s linear infinite;
          }
          .infinity-loader::before {
            left: 0;
            border-right-color: transparent;
          }
          .infinity-loader::after {
            right: 0;
            border-left-color: transparent;
            animation-direction: reverse;
          }
        `}
      </style>

      {/* DNA Helix Style */}
      <div className="relative w-20 h-20">
        <style>
          {`
            @keyframes helix1 {
              0%, 100% { transform: translateY(-10px) scale(1); }
              50% { transform: translateY(10px) scale(0.8); }
            }
            @keyframes helix2 {
              0%, 100% { transform: translateY(10px) scale(0.8); }
              50% { transform: translateY(-10px) scale(1); }
            }
          `}
        </style>
        <div className="absolute left-0 w-2 h-2 bg-purple-500 rounded-full" style={{ animation: 'helix1 1s ease-in-out infinite' }}></div>
        <div className="absolute right-0 w-2 h-2 bg-blue-500 rounded-full" style={{ animation: 'helix2 1s ease-in-out infinite' }}></div>
        <div className="absolute left-1/4 w-2 h-2 bg-purple-500 rounded-full" style={{ animation: 'helix1 1s ease-in-out infinite', animationDelay: '0.25s' }}></div>
        <div className="absolute right-1/4 w-2 h-2 bg-blue-500 rounded-full" style={{ animation: 'helix2 1s ease-in-out infinite', animationDelay: '0.25s' }}></div>
      </div>
    </div>
  );
}

export const loading113Code = `export default function Loading113Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\\\`
          @keyframes orbit {
            0% { transform: rotate(0deg) translateX(30px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
          }
          @keyframes color-shift {
            0%, 100% { background-color: #8b5cf6; }
            33% { background-color: #3b82f6; }
            66% { background-color: #10b981; }
          }
          @keyframes infinity {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .orbit-dot {
            position: absolute;
            width: 12px;
            height: 12px;
            background-color: #8b5cf6;
            border-radius: 50%;
            animation: orbit 2s linear infinite;
          }
          .infinity-loader {
            width: 80px;
            height: 40px;
            position: relative;
          }
          .infinity-loader::before,
          .infinity-loader::after {
            content: '';
            position: absolute;
            width: 40px;
            height: 40px;
            border: 3px solid #8b5cf6;
            border-radius: 50%;
            animation: infinity 1.5s linear infinite;
          }
          .infinity-loader::before {
            left: 0;
            border-right-color: transparent;
          }
          .infinity-loader::after {
            right: 0;
            border-left-color: transparent;
            animation-direction: reverse;
          }
        \\\`}
      </style>

      {/* DNA Helix Style */}
      <div className="relative w-20 h-20">
        <style>
          {\\\`
            @keyframes helix1 {
              0%, 100% { transform: translateY(-10px) scale(1); }
              50% { transform: translateY(10px) scale(0.8); }
            }
            @keyframes helix2 {
              0%, 100% { transform: translateY(10px) scale(0.8); }
              50% { transform: translateY(-10px) scale(1); }
            }
          \\\`}
        </style>
        <div className="absolute left-0 w-2 h-2 bg-purple-500 rounded-full" style={{ animation: 'helix1 1s ease-in-out infinite' }}></div>
        <div className="absolute right-0 w-2 h-2 bg-blue-500 rounded-full" style={{ animation: 'helix2 1s ease-in-out infinite' }}></div>
        <div className="absolute left-1/4 w-2 h-2 bg-purple-500 rounded-full" style={{ animation: 'helix1 1s ease-in-out infinite', animationDelay: '0.25s' }}></div>
        <div className="absolute right-1/4 w-2 h-2 bg-blue-500 rounded-full" style={{ animation: 'helix2 1s ease-in-out infinite', animationDelay: '0.25s' }}></div>
      </div>
    </div>
  );
}`;
