export default function Loading98Example() {
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

      {/* Text Fading */}
      <div style={{ animation: 'fade 1.5s ease-in-out infinite' }}>
        <span className="text-slate-300 font-medium text-lg">Loading...</span>
      </div>
    </div>
  );
}

export const loading98Code = `export default function Loading98Example() {
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

      {/* Text Fading */}
      <div style={{ animation: 'fade 1.5s ease-in-out infinite' }}>
        <span className="text-slate-300 font-medium text-lg">Loading...</span>
      </div>
    </div>
  );
}`;
