export default function Loading112Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {`
          @keyframes orbit {
            0% { transform: rotate(0deg) translateX(30px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
          }
          @keyframes color-shift {
            0%, 100% { background-color: #8b5cf6; }
            33% { background-color: #3b82f6; }
            66% { background-color: #10b981; }
          }
          @keyframes infinity {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .orbit-dot {
            position: absolute;
            width: 12px;
            height: 12px;
            background-color: #8b5cf6;
            border-radius: 50%;
            animation: orbit 2s linear infinite;
          }
          .infinity-loader {
            width: 80px;
            height: 40px;
            position: relative;
          }
          .infinity-loader::before,
          .infinity-loader::after {
            content: '';
            position: absolute;
            width: 40px;
            height: 40px;
            border: 3px solid #8b5cf6;
            border-radius: 50%;
            animation: infinity 1.5s linear infinite;
          }
          .infinity-loader::before {
            left: 0;
            border-right-color: transparent;
          }
          .infinity-loader::after {
            right: 0;
            border-left-color: transparent;
            animation-direction: reverse;
          }
        `}
      </style>

      {/* Infinity Loader */}
      <div className="infinity-loader"></div>
    </div>
  );
}

export const loading112Code = `export default function Loading112Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\\\`
          @keyframes orbit {
            0% { transform: rotate(0deg) translateX(30px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
          }
          @keyframes color-shift {
            0%, 100% { background-color: #8b5cf6; }
            33% { background-color: #3b82f6; }
            66% { background-color: #10b981; }
          }
          @keyframes infinity {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .orbit-dot {
            position: absolute;
            width: 12px;
            height: 12px;
            background-color: #8b5cf6;
            border-radius: 50%;
            animation: orbit 2s linear infinite;
          }
          .infinity-loader {
            width: 80px;
            height: 40px;
            position: relative;
          }
          .infinity-loader::before,
          .infinity-loader::after {
            content: '';
            position: absolute;
            width: 40px;
            height: 40px;
            border: 3px solid #8b5cf6;
            border-radius: 50%;
            animation: infinity 1.5s linear infinite;
          }
          .infinity-loader::before {
            left: 0;
            border-right-color: transparent;
          }
          .infinity-loader::after {
            right: 0;
            border-left-color: transparent;
            animation-direction: reverse;
          }
        \\\`}
      </style>

      {/* Infinity Loader */}
      <div className="infinity-loader"></div>
    </div>
  );
}`;
