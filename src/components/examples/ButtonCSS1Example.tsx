export default function ButtonCSS1Example() {
  return (
    <>
      <style>
        {`
          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
            }
            50% {
              box-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.6);
            }
          }

          .button-css-1 {
            padding: 14px 32px;
            background: #3b82f6;
            color: white;
            border: none;
            border-radius: 10px;
            font-weight: 700;
            cursor: pointer;
            animation: pulseGlow 2s ease-in-out infinite;
          }
        `}
      </style>
      <button className="button-css-1">Pulse Glow</button>
    </>
  );
}

export const buttoncss1Code = `export default function ButtonCSS1Example() {
  return (
    <>
      <style>
        {\\\`
          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
            }
            50% {
              box-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.6);
            }
          }

          .button-css-1 {
            padding: 14px 32px;
            background: #3b82f6;
            color: white;
            border: none;
            border-radius: 10px;
            font-weight: 700;
            cursor: pointer;
            animation: pulseGlow 2s ease-in-out infinite;
          }
        \\\`}
      </style>
      <button className="button-css-1">Pulse Glow</button>
    </>
  );
}`;
