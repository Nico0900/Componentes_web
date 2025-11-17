export default function Loading105Example() {
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
    </div>
  );
}

export const loading105Code = `export default function Loading105Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\\\`
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
        \\\`}
      </style>

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
    </div>
  );
}`;
