export default function ButtonCSS6Example() {
  return (
    <>
      <style>
        {`
          @keyframes rainbow {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .button-css-6 {
            padding: 14px 32px;
            background: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
            background-size: 400% 400%;
            color: white;
            border: none;
            border-radius: 25px;
            font-weight: 700;
            cursor: pointer;
            animation: rainbow 3s ease infinite;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          }
        `}
      </style>
      <button className="button-css-6">Rainbow</button>
    </>
  );
}

export const buttoncss6Code = `export default function ButtonCSS6Example() {
  return (
    <>
      <style>
        {\\\`
          @keyframes rainbow {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .button-css-6 {
            padding: 14px 32px;
            background: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
            background-size: 400% 400%;
            color: white;
            border: none;
            border-radius: 25px;
            font-weight: 700;
            cursor: pointer;
            animation: rainbow 3s ease infinite;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          }
        \\\`}
      </style>
      <button className="button-css-6">Rainbow</button>
    </>
  );
}`;
