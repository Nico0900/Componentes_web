export default function Loading82Example() {
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

      {/* Growing Ring */}
      <div className="grow-circle" style={{
        backgroundColor: 'transparent',
        border: '4px solid #8b5cf6'
      }}></div>
    </div>
  );
}

export const loading82Code = `export default function Loading82Example() {
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

      {/* Growing Ring */}
      <div className="grow-circle" style={{
        backgroundColor: 'transparent',
        border: '4px solid #8b5cf6'
      }}></div>
    </div>
  );
}`;
