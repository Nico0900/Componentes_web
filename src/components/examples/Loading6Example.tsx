export default function Loading6Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(0.8); }
          }
          .pulse-loader {
            animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}
      </style>

      {/* Circle Pulse */}
      <div className="pulse-loader w-16 h-16 bg-purple-500 rounded-full"></div>
    </div>
  );
}

export const loading6Code = `export default function Loading6Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\\\`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(0.8); }
          }
          .pulse-loader {
            animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        \\\`}
      </style>

      {/* Circle Pulse */}
      <div className="pulse-loader w-16 h-16 bg-purple-500 rounded-full"></div>
    </div>
  );
}`;
