export default function ButtonCSS3Example() {
  return (
    <>
      <style>
        {`
          @keyframes shimmer {
            0% {
              background-position: -200% center;
            }
            100% {
              background-position: 200% center;
            }
          }

          .button-css-3 {
            padding: 14px 32px;
            background: linear-gradient(90deg, #1e293b 25%, #475569 50%, #1e293b 75%);
            background-size: 200% 100%;
            color: white;
            border: none;
            border-radius: 8px;
            font-weight: 700;
            cursor: pointer;
            animation: shimmer 2s linear infinite;
          }
        `}
      </style>
      <button className="button-css-3">Shimmer</button>
    </>
  );
}

export const buttoncss3Code = `export default function ButtonCSS3Example() {
  return (
    <>
      <style>
        {\\\`
          @keyframes shimmer {
            0% {
              background-position: -200% center;
            }
            100% {
              background-position: 200% center;
            }
          }

          .button-css-3 {
            padding: 14px 32px;
            background: linear-gradient(90deg, #1e293b 25%, #475569 50%, #1e293b 75%);
            background-size: 200% 100%;
            color: white;
            border: none;
            border-radius: 8px;
            font-weight: 700;
            cursor: pointer;
            animation: shimmer 2s linear infinite;
          }
        \\\`}
      </style>
      <button className="button-css-3">Shimmer</button>
    </>
  );
}`;
