export default function ButtonCSS10Example() {
  return (
    <>
      <style>
        {`
          @keyframes wave {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          .button-css-10 {
            padding: 14px 32px;
            background: #0ea5e9;
            color: white;
            border: none;
            border-radius: 10px;
            font-weight: 700;
            cursor: pointer;
            position: relative;
            overflow: hidden;
          }

          .button-css-10::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            animation: wave 2s linear infinite;
          }
        `}
      </style>
      <button className="button-css-10">Wave Effect</button>
    </>
  );
}

export const buttoncss10Code = `export default function ButtonCSS10Example() {
  return (
    <>
      <style>
        {\\\`
          @keyframes wave {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          .button-css-10 {
            padding: 14px 32px;
            background: #0ea5e9;
            color: white;
            border: none;
            border-radius: 10px;
            font-weight: 700;
            cursor: pointer;
            position: relative;
            overflow: hidden;
          }

          .button-css-10::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            animation: wave 2s linear infinite;
          }
        \\\`}
      </style>
      <button className="button-css-10">Wave Effect</button>
    </>
  );
}`;
