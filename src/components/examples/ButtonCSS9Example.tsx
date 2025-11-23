export default function ButtonCSS9Example() {
  return (
    <>
      <style>
        {`
          @keyframes borderPulse {
            0%, 100% {
              border-color: #ef4444;
              border-width: 2px;
            }
            50% {
              border-color: #f97316;
              border-width: 4px;
            }
          }

          .button-css-9 {
            padding: 14px 32px;
            background: transparent;
            color: #ef4444;
            border: 2px solid #ef4444;
            border-radius: 8px;
            font-weight: 700;
            cursor: pointer;
            animation: borderPulse 1.5s ease-in-out infinite;
          }
        `}
      </style>
      <button className="button-css-9">Border Pulse</button>
    </>
  );
}

export const buttoncss9Code = `export default function ButtonCSS9Example() {
  return (
    <>
      <style>
        {\\\`
          @keyframes borderPulse {
            0%, 100% {
              border-color: #ef4444;
              border-width: 2px;
            }
            50% {
              border-color: #f97316;
              border-width: 4px;
            }
          }

          .button-css-9 {
            padding: 14px 32px;
            background: transparent;
            color: #ef4444;
            border: 2px solid #ef4444;
            border-radius: 8px;
            font-weight: 700;
            cursor: pointer;
            animation: borderPulse 1.5s ease-in-out infinite;
          }
        \\\`}
      </style>
      <button className="button-css-9">Border Pulse</button>
    </>
  );
}`;
