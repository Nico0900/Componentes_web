export default function Loading11Example() {
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

      {/* Rotating Square */}
      <div className="rotate-square rounded-lg"></div>
    </div>
  );
}

export const loading11Code = `export default function Loading11Example() {
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

      {/* Rotating Square */}
      <div className="rotate-square rounded-lg"></div>
    </div>
  );
}`;
