export default function Loading84Example() {
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
    </div>
  );
}

export const loading84Code = `export default function Loading84Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\\\`
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
        \\\`}
      </style>

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
    </div>
  );
}`;
