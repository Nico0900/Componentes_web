export default function Loading95Example() {
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

      {/* Multiple Fading Circles */}
      <div className="flex gap-3">
        <div className="fade-loader" style={{ animationDelay: '0s', width: '40px', height: '40px' }}></div>
        <div className="fade-loader" style={{ animationDelay: '0.3s', width: '40px', height: '40px' }}></div>
        <div className="fade-loader" style={{ animationDelay: '0.6s', width: '40px', height: '40px' }}></div>
      </div>
    </div>
  );
}

export const loading95Code = `export default function Loading95Example() {
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

      {/* Multiple Fading Circles */}
      <div className="flex gap-3">
        <div className="fade-loader" style={{ animationDelay: '0s', width: '40px', height: '40px' }}></div>
        <div className="fade-loader" style={{ animationDelay: '0.3s', width: '40px', height: '40px' }}></div>
        <div className="fade-loader" style={{ animationDelay: '0.6s', width: '40px', height: '40px' }}></div>
      </div>
    </div>
  );
}`;
