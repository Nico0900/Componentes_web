export default function Loading13Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {`
          @keyframes fade {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
          @keyframes fade-pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          .fade-loader {
            width: 50px;
            height: 50px;
            background-color: #8b5cf6;
            border-radius: 50%;
            animation: fade 1.5s ease-in-out infinite;
          }
        `}
      </style>

      {/* Fading Circle */}
      <div className="fade-loader"></div>

      {/* Fading Square */}
      <div className="fade-loader" style={{ borderRadius: '8px' }}></div>

      {/* Multiple Fading Circles */}
      <div className="flex gap-3">
        <div className="fade-loader" style={{ animationDelay: '0s', width: '40px', height: '40px' }}></div>
        <div className="fade-loader" style={{ animationDelay: '0.3s', width: '40px', height: '40px' }}></div>
        <div className="fade-loader" style={{ animationDelay: '0.6s', width: '40px', height: '40px' }}></div>
      </div>

      {/* Concentric Fading */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute fade-loader" style={{
          width: '80px',
          height: '80px',
          backgroundColor: '#8b5cf6',
          opacity: '0.2',
          animationDelay: '0s'
        }}></div>
        <div className="absolute fade-loader" style={{
          width: '60px',
          height: '60px',
          backgroundColor: '#8b5cf6',
          opacity: '0.4',
          animationDelay: '0.3s'
        }}></div>
        <div className="absolute fade-loader" style={{
          width: '40px',
          height: '40px',
          animationDelay: '0.6s'
        }}></div>
      </div>

      {/* Gradient Fading */}
      <div className="fade-loader" style={{
        background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)'
      }}></div>

      {/* Text Fading */}
      <div style={{ animation: 'fade 1.5s ease-in-out infinite' }}>
        <span className="text-slate-300 font-medium text-lg">Loading...</span>
      </div>

      {/* Ring Fading */}
      <div className="fade-loader" style={{
        backgroundColor: 'transparent',
        border: '4px solid #8b5cf6'
      }}></div>

      {/* With Label */}
      <div className="flex flex-col items-center gap-4">
        <div className="fade-loader"></div>
        <span className="text-slate-400 text-sm">Fading...</span>
      </div>

      {/* Multiple Colors Fading */}
      <div className="flex gap-3">
        <div className="fade-loader" style={{
          backgroundColor: '#3b82f6',
          animationDelay: '0s',
          width: '40px',
          height: '40px'
        }}></div>
        <div className="fade-loader" style={{
          backgroundColor: '#10b981',
          animationDelay: '0.25s',
          width: '40px',
          height: '40px'
        }}></div>
        <div className="fade-loader" style={{
          backgroundColor: '#f59e0b',
          animationDelay: '0.5s',
          width: '40px',
          height: '40px'
        }}></div>
        <div className="fade-loader" style={{
          backgroundColor: '#ef4444',
          animationDelay: '0.75s',
          width: '40px',
          height: '40px'
        }}></div>
      </div>
    </div>
  );
}

export const loading13Code = `export default function Loading13Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\`
          @keyframes fade {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
          @keyframes fade-pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          .fade-loader {
            width: 50px;
            height: 50px;
            background-color: #8b5cf6;
            border-radius: 50%;
            animation: fade 1.5s ease-in-out infinite;
          }
        \`}
      </style>

      {/* Fading Circle */}
      <div className="fade-loader"></div>

      {/* Fading Square */}
      <div className="fade-loader" style={{ borderRadius: '8px' }}></div>

      {/* Multiple Fading Circles */}
      <div className="flex gap-3">
        <div className="fade-loader" style={{ animationDelay: '0s', width: '40px', height: '40px' }}></div>
        <div className="fade-loader" style={{ animationDelay: '0.3s', width: '40px', height: '40px' }}></div>
        <div className="fade-loader" style={{ animationDelay: '0.6s', width: '40px', height: '40px' }}></div>
      </div>

      {/* Concentric Fading */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute fade-loader" style={{
          width: '80px',
          height: '80px',
          backgroundColor: '#8b5cf6',
          opacity: '0.2',
          animationDelay: '0s'
        }}></div>
        <div className="absolute fade-loader" style={{
          width: '60px',
          height: '60px',
          backgroundColor: '#8b5cf6',
          opacity: '0.4',
          animationDelay: '0.3s'
        }}></div>
        <div className="absolute fade-loader" style={{
          width: '40px',
          height: '40px',
          animationDelay: '0.6s'
        }}></div>
      </div>

      {/* Gradient Fading */}
      <div className="fade-loader" style={{
        background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)'
      }}></div>

      {/* Text Fading */}
      <div style={{ animation: 'fade 1.5s ease-in-out infinite' }}>
        <span className="text-slate-300 font-medium text-lg">Loading...</span>
      </div>

      {/* Ring Fading */}
      <div className="fade-loader" style={{
        backgroundColor: 'transparent',
        border: '4px solid #8b5cf6'
      }}></div>

      {/* With Label */}
      <div className="flex flex-col items-center gap-4">
        <div className="fade-loader"></div>
        <span className="text-slate-400 text-sm">Fading...</span>
      </div>

      {/* Multiple Colors Fading */}
      <div className="flex gap-3">
        <div className="fade-loader" style={{
          backgroundColor: '#3b82f6',
          animationDelay: '0s',
          width: '40px',
          height: '40px'
        }}></div>
        <div className="fade-loader" style={{
          backgroundColor: '#10b981',
          animationDelay: '0.25s',
          width: '40px',
          height: '40px'
        }}></div>
        <div className="fade-loader" style={{
          backgroundColor: '#f59e0b',
          animationDelay: '0.5s',
          width: '40px',
          height: '40px'
        }}></div>
        <div className="fade-loader" style={{
          backgroundColor: '#ef4444',
          animationDelay: '0.75s',
          width: '40px',
          height: '40px'
        }}></div>
      </div>
    </div>
  );
}`;