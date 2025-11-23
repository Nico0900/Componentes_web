export default function ButtonCSS5Example() {
  return (
    <>
      <style>
        {`
          @keyframes slideIn {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .button-css-5 {
            padding: 14px 32px;
            background: #10b981;
            color: white;
            border: none;
            border-radius: 8px;
            font-weight: 700;
            cursor: pointer;
            animation: slideIn 0.8s ease-out;
          }

          .button-css-5:hover {
            background: #059669;
          }
        `}
      </style>
      <button className="button-css-5">Slide In</button>
    </>
  );
}

export const buttoncss5Code = `export default function ButtonCSS5Example() {
  return (
    <>
      <style>
        {\\\`
          @keyframes slideIn {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .button-css-5 {
            padding: 14px 32px;
            background: #10b981;
            color: white;
            border: none;
            border-radius: 8px;
            font-weight: 700;
            cursor: pointer;
            animation: slideIn 0.8s ease-out;
          }

          .button-css-5:hover {
            background: #059669;
          }
        \\\`}
      </style>
      <button className="button-css-5">Slide In</button>
    </>
  );
}`;
