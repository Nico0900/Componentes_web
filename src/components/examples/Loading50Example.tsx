export default function Loading50Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {`
          @keyframes bounce-up {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
          }
          .bounce-ball {
            width: 20px;
            height: 20px;
            background-color: #8b5cf6;
            border-radius: 50%;
            animation: bounce-up 0.6s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
          }
        `}
      </style>

      {/* Gradient Ball */}
      <div className="flex items-end h-16">
        <div
          className="bounce-ball"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
            width: '28px',
            height: '28px'
          }}
        ></div>
      </div>
    </div>
  );
}

export const loading50Code = `export default function Loading50Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\\\`
          @keyframes bounce-up {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
          }
          .bounce-ball {
            width: 20px;
            height: 20px;
            background-color: #8b5cf6;
            border-radius: 50%;
            animation: bounce-up 0.6s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
          }
        \\\`}
      </style>

      {/* Gradient Ball */}
      <div className="flex items-end h-16">
        <div
          className="bounce-ball"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
            width: '28px',
            height: '28px'
          }}
        ></div>
      </div>
    </div>
  );
}`;
