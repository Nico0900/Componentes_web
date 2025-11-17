export default function Loading97Example() {
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

      {/* Gradient Fading */}
      <div className="fade-loader" style={{
        background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)'
      }}></div>
    </div>
  );
}

export const loading97Code = `export default function Loading97Example() {
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

      {/* Gradient Fading */}
      <div className="fade-loader" style={{
        background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)'
      }}></div>
    </div>
  );
}`;
