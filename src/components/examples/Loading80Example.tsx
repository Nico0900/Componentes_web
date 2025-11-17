export default function Loading80Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {`
          @keyframes rotate-360 {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes rotate-3d {
            0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg); }
            50% { transform: perspective(120px) rotateX(-180deg) rotateY(0deg); }
            100% { transform: perspective(120px) rotateX(-180deg) rotateY(-180deg); }
          }
          .rotate-square {
            width: 50px;
            height: 50px;
            background-color: #8b5cf6;
            animation: rotate-360 1s linear infinite;
          }
          .rotate-3d {
            width: 50px;
            height: 50px;
            background-color: #8b5cf6;
            animation: rotate-3d 2s infinite linear;
          }
        `}
      </style>

      {/* Multiple Rotating Elements */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div
          className="absolute rotate-square rounded-lg opacity-30"
          style={{ width: '70px', height: '70px', animationDuration: '2s' }}
        ></div>
        <div
          className="absolute rotate-square rounded-lg opacity-60"
          style={{ width: '50px', height: '50px', animationDuration: '1.5s', animationDirection: 'reverse' }}
        ></div>
        <div
          className="absolute rotate-square rounded-lg"
          style={{ width: '30px', height: '30px', animationDuration: '1s' }}
        ></div>
      </div>
    </div>
  );
}

export const loading80Code = `export default function Loading80Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\\\`
          @keyframes rotate-360 {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes rotate-3d {
            0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg); }
            50% { transform: perspective(120px) rotateX(-180deg) rotateY(0deg); }
            100% { transform: perspective(120px) rotateX(-180deg) rotateY(-180deg); }
          }
          .rotate-square {
            width: 50px;
            height: 50px;
            background-color: #8b5cf6;
            animation: rotate-360 1s linear infinite;
          }
          .rotate-3d {
            width: 50px;
            height: 50px;
            background-color: #8b5cf6;
            animation: rotate-3d 2s infinite linear;
          }
        \\\`}
      </style>

      {/* Multiple Rotating Elements */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div
          className="absolute rotate-square rounded-lg opacity-30"
          style={{ width: '70px', height: '70px', animationDuration: '2s' }}
        ></div>
        <div
          className="absolute rotate-square rounded-lg opacity-60"
          style={{ width: '50px', height: '50px', animationDuration: '1.5s', animationDirection: 'reverse' }}
        ></div>
        <div
          className="absolute rotate-square rounded-lg"
          style={{ width: '30px', height: '30px', animationDuration: '1s' }}
        ></div>
      </div>
    </div>
  );
}`;
