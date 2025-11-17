export default function Loading101Example() {
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

export const loading101Code = `export default function Loading101Example() {
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
