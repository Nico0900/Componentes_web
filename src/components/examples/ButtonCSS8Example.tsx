export default function ButtonCSS8Example() {
  return (
    <>
      <style>
        {`
          @keyframes wiggle {
            0%, 100% {
              transform: rotate(0deg);
            }
            25% {
              transform: rotate(-5deg);
            }
            75% {
              transform: rotate(5deg);
            }
          }

          .button-css-8 {
            padding: 14px 32px;
            background: #f59e0b;
            color: white;
            border: none;
            border-radius: 12px;
            font-weight: 700;
            cursor: pointer;
            animation: wiggle 1s ease-in-out infinite;
          }
        `}
      </style>
      <button className="button-css-8">Wiggle</button>
    </>
  );
}

export const buttoncss8Code = `export default function ButtonCSS8Example() {
  return (
    <>
      <style>
        {\\\`
          @keyframes wiggle {
            0%, 100% {
              transform: rotate(0deg);
            }
            25% {
              transform: rotate(-5deg);
            }
            75% {
              transform: rotate(5deg);
            }
          }

          .button-css-8 {
            padding: 14px 32px;
            background: #f59e0b;
            color: white;
            border: none;
            border-radius: 12px;
            font-weight: 700;
            cursor: pointer;
            animation: wiggle 1s ease-in-out infinite;
          }
        \\\`}
      </style>
      <button className="button-css-8">Wiggle</button>
    </>
  );
}`;
