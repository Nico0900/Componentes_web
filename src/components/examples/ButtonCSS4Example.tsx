export default function ButtonCSS4Example() {
  return (
    <>
      <style>
        {`
          @keyframes rotateBorder {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .button-css-4-wrapper {
            position: relative;
            display: inline-block;
          }

          .button-css-4-wrapper::before {
            content: '';
            position: absolute;
            inset: -3px;
            background: linear-gradient(45deg, #f59e0b, #ef4444, #8b5cf6, #3b82f6, #f59e0b);
            border-radius: 12px;
            animation: rotateBorder 3s linear infinite;
            z-index: -1;
          }

          .button-css-4 {
            padding: 14px 32px;
            background: #1e293b;
            color: white;
            border: none;
            border-radius: 10px;
            font-weight: 700;
            cursor: pointer;
            position: relative;
            z-index: 1;
          }
        `}
      </style>
      <div className="button-css-4-wrapper">
        <button className="button-css-4">Rotating Border</button>
      </div>
    </>
  );
}

export const buttoncss4Code = `export default function ButtonCSS4Example() {
  return (
    <>
      <style>
        {\\\`
          @keyframes rotateBorder {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .button-css-4-wrapper {
            position: relative;
            display: inline-block;
          }

          .button-css-4-wrapper::before {
            content: '';
            position: absolute;
            inset: -3px;
            background: linear-gradient(45deg, #f59e0b, #ef4444, #8b5cf6, #3b82f6, #f59e0b);
            border-radius: 12px;
            animation: rotateBorder 3s linear infinite;
            z-index: -1;
          }

          .button-css-4 {
            padding: 14px 32px;
            background: #1e293b;
            color: white;
            border: none;
            border-radius: 10px;
            font-weight: 700;
            cursor: pointer;
            position: relative;
            z-index: 1;
          }
        \\\`}
      </style>
      <div className="button-css-4-wrapper">
        <button className="button-css-4">Rotating Border</button>
      </div>
    </>
  );
}`;
