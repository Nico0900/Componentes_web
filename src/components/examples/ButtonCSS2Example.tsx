export default function ButtonCSS2Example() {
  return (
    <>
      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .button-css-2 {
            padding: 14px 32px;
            background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
            color: white;
            border: none;
            border-radius: 12px;
            font-weight: 700;
            cursor: pointer;
            animation: bounce 1.5s ease-in-out infinite;
          }
        `}
      </style>
      <button className="button-css-2">Bounce</button>
    </>
  );
}

export const buttoncss2Code = `export default function ButtonCSS2Example() {
  return (
    <>
      <style>
        {\\\`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .button-css-2 {
            padding: 14px 32px;
            background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
            color: white;
            border: none;
            border-radius: 12px;
            font-weight: 700;
            cursor: pointer;
            animation: bounce 1.5s ease-in-out infinite;
          }
        \\\`}
      </style>
      <button className="button-css-2">Bounce</button>
    </>
  );
}`;
