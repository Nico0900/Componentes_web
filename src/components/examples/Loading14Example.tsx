export default function Loading14Example() {
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

      {/* Orbit Loader */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="w-3 h-3 bg-purple-500/30 rounded-full"></div>
        <div className="orbit-dot" style={{ animationDelay: '0s' }}></div>
        <div className="orbit-dot" style={{ animationDelay: '0.5s' }}></div>
        <div className="orbit-dot" style={{ animationDelay: '1s' }}></div>
        <div className="orbit-dot" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Color Shifting Loader */}
      <div className="flex gap-2">
        <div style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          animation: 'color-shift 3s ease-in-out infinite',
          animationDelay: '0s'
        }}></div>
        <div style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          animation: 'color-shift 3s ease-in-out infinite',
          animationDelay: '0.5s'
        }}></div>
        <div style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          animation: 'color-shift 3s ease-in-out infinite',
          animationDelay: '1s'
        }}></div>
        <div style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          animation: 'color-shift 3s ease-in-out infinite',
          animationDelay: '1.5s'
        }}></div>
      </div>

      {/* Infinity Loader */}
      <div className="infinity-loader"></div>

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

      {/* Atom Loader */}
      <div className="relative w-24 h-24">
        <style>
          {`
            @keyframes atom-orbit1 {
              0% { transform: rotateZ(0deg) rotateY(60deg) rotateZ(0deg); }
              100% { transform: rotateZ(360deg) rotateY(60deg) rotateZ(-360deg); }
            }
            @keyframes atom-orbit2 {
              0% { transform: rotateZ(0deg) rotateY(-60deg) rotateZ(0deg); }
              100% { transform: rotateZ(360deg) rotateY(-60deg) rotateZ(-360deg); }
            }
          `}
        </style>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
        </div>
        <div className="absolute inset-0 border-2 border-blue-500 rounded-full" style={{ animation: 'atom-orbit1 2s linear infinite' }}></div>
        <div className="absolute inset-0 border-2 border-purple-500 rounded-full" style={{ animation: 'atom-orbit2 2s linear infinite' }}></div>
      </div>

      {/* Flip Loader */}
      <div>
        <style>
          {`
            @keyframes flip {
              0%, 100% { transform: perspective(400px) rotateY(0); }
              50% { transform: perspective(400px) rotateY(180deg); }
            }
          `}
        </style>
        <div style={{
          width: '50px',
          height: '50px',
          background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
          borderRadius: '8px',
          animation: 'flip 1.5s ease-in-out infinite'
        }}></div>
      </div>
    </div>
  );
}

export const loading14Code = `export default function Loading14Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\`
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
        \`}
      </style>

      {/* Orbit Loader */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="w-3 h-3 bg-purple-500/30 rounded-full"></div>
        <div className="orbit-dot" style={{ animationDelay: '0s' }}></div>
        <div className="orbit-dot" style={{ animationDelay: '0.5s' }}></div>
        <div className="orbit-dot" style={{ animationDelay: '1s' }}></div>
        <div className="orbit-dot" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Color Shifting Loader */}
      <div className="flex gap-2">
        <div style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          animation: 'color-shift 3s ease-in-out infinite',
          animationDelay: '0s'
        }}></div>
        <div style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          animation: 'color-shift 3s ease-in-out infinite',
          animationDelay: '0.5s'
        }}></div>
        <div style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          animation: 'color-shift 3s ease-in-out infinite',
          animationDelay: '1s'
        }}></div>
        <div style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          animation: 'color-shift 3s ease-in-out infinite',
          animationDelay: '1.5s'
        }}></div>
      </div>

      {/* Infinity Loader */}
      <div className="infinity-loader"></div>

      {/* DNA Helix Style */}
      <div className="relative w-20 h-20">
        <style>
          {\`
            @keyframes helix1 {
              0%, 100% { transform: translateY(-10px) scale(1); }
              50% { transform: translateY(10px) scale(0.8); }
            }
            @keyframes helix2 {
              0%, 100% { transform: translateY(10px) scale(0.8); }
              50% { transform: translateY(-10px) scale(1); }
            }
          \`}
        </style>
        <div className="absolute left-0 w-2 h-2 bg-purple-500 rounded-full" style={{ animation: 'helix1 1s ease-in-out infinite' }}></div>
        <div className="absolute right-0 w-2 h-2 bg-blue-500 rounded-full" style={{ animation: 'helix2 1s ease-in-out infinite' }}></div>
        <div className="absolute left-1/4 w-2 h-2 bg-purple-500 rounded-full" style={{ animation: 'helix1 1s ease-in-out infinite', animationDelay: '0.25s' }}></div>
        <div className="absolute right-1/4 w-2 h-2 bg-blue-500 rounded-full" style={{ animation: 'helix2 1s ease-in-out infinite', animationDelay: '0.25s' }}></div>
      </div>

      {/* Atom Loader */}
      <div className="relative w-24 h-24">
        <style>
          {\`
            @keyframes atom-orbit1 {
              0% { transform: rotateZ(0deg) rotateY(60deg) rotateZ(0deg); }
              100% { transform: rotateZ(360deg) rotateY(60deg) rotateZ(-360deg); }
            }
            @keyframes atom-orbit2 {
              0% { transform: rotateZ(0deg) rotateY(-60deg) rotateZ(0deg); }
              100% { transform: rotateZ(360deg) rotateY(-60deg) rotateZ(-360deg); }
            }
          \`}
        </style>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
        </div>
        <div className="absolute inset-0 border-2 border-blue-500 rounded-full" style={{ animation: 'atom-orbit1 2s linear infinite' }}></div>
        <div className="absolute inset-0 border-2 border-purple-500 rounded-full" style={{ animation: 'atom-orbit2 2s linear infinite' }}></div>
      </div>

      {/* Flip Loader */}
      <div>
        <style>
          {\`
            @keyframes flip {
              0%, 100% { transform: perspective(400px) rotateY(0); }
              50% { transform: perspective(400px) rotateY(180deg); }
            }
          \`}
        </style>
        <div style={{
          width: '50px',
          height: '50px',
          background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
          borderRadius: '8px',
          animation: 'flip 1.5s ease-in-out infinite'
        }}></div>
      </div>
    </div>
  );
}`;