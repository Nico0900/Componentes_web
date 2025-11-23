export default function ButtonCSS7Example() {
  return (
    <>
      <style>
        {`
          @keyframes flip3D {
            0% {
              transform: rotateY(0deg);
            }
            100% {
              transform: rotateY(360deg);
            }
          }

          .button-css-7 {
            padding: 14px 32px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 10px;
            font-weight: 700;
            cursor: pointer;
            animation: flip3D 3s linear infinite;
            transform-style: preserve-3d;
          }
        `}
      </style>
      <button className="button-css-7">3D Flip</button>
    </>
  );
}

export const buttoncss7Code = `export default function ButtonCSS7Example() {
  return (
    <>
      <style>
        {\\\`
          @keyframes flip3D {
            0% {
              transform: rotateY(0deg);
            }
            100% {
              transform: rotateY(360deg);
            }
          }

          .button-css-7 {
            padding: 14px 32px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 10px;
            font-weight: 700;
            cursor: pointer;
            animation: flip3D 3s linear infinite;
            transform-style: preserve-3d;
          }
        \\\`}
      </style>
      <button className="button-css-7">3D Flip</button>
    </>
  );
}`;
