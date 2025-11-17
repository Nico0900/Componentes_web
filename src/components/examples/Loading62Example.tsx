export default function Loading62Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {`
          @keyframes wave {
            0%, 60%, 100% { transform: translateY(0); }
            30% { transform: translateY(-15px); }
          }
          .wave-bar {
            width: 4px;
            height: 30px;
            background-color: #8b5cf6;
            border-radius: 2px;
            animation: wave 1.2s ease-in-out infinite;
          }
          .wave-bar:nth-child(1) { animation-delay: 0s; }
          .wave-bar:nth-child(2) { animation-delay: 0.1s; }
          .wave-bar:nth-child(3) { animation-delay: 0.2s; }
          .wave-bar:nth-child(4) { animation-delay: 0.3s; }
          .wave-bar:nth-child(5) { animation-delay: 0.4s; }
        `}
      </style>

      {/* Classic Wave */}
      <div className="flex gap-1.5 items-center h-12">
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
      </div>
    </div>
  );
}

export const loading62Code = `export default function Loading62Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\\\`
          @keyframes wave {
            0%, 60%, 100% { transform: translateY(0); }
            30% { transform: translateY(-15px); }
          }
          .wave-bar {
            width: 4px;
            height: 30px;
            background-color: #8b5cf6;
            border-radius: 2px;
            animation: wave 1.2s ease-in-out infinite;
          }
          .wave-bar:nth-child(1) { animation-delay: 0s; }
          .wave-bar:nth-child(2) { animation-delay: 0.1s; }
          .wave-bar:nth-child(3) { animation-delay: 0.2s; }
          .wave-bar:nth-child(4) { animation-delay: 0.3s; }
          .wave-bar:nth-child(5) { animation-delay: 0.4s; }
        \\\`}
      </style>

      {/* Classic Wave */}
      <div className="flex gap-1.5 items-center h-12">
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
      </div>
    </div>
  );
}`;
