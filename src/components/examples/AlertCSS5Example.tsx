export default function AlertCSS5Example() {
  return (
    <>
      <style>{`
        @keyframes float-up {
          0% { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .alert-float {
          animation: float-up 0.8s ease-out;
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 10px rgba(168, 85, 247, 0.4), 0 0 20px rgba(168, 85, 247, 0.2); }
          50% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(168, 85, 247, 0.3); }
        }
        .alert-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }
      `}</style>
      <div className="w-full max-w-md mx-auto bg-purple-600/15 border border-purple-500/40 rounded-2xl p-5 alert-float alert-glow-pulse">
        <div className="flex items-start gap-4">
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-xl">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-purple-300 text-lg mb-1">Premium Unlocked!</h4>
            <p className="text-sm text-purple-200/80">Congratulations! You now have access to all premium features.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export const alertcss5Code = `export default function AlertCSS5Example() {
  return (
    <>
      <style>{\`
        @keyframes float-up {
          0% { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .alert-float {
          animation: float-up 0.8s ease-out;
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 10px rgba(168, 85, 247, 0.4), 0 0 20px rgba(168, 85, 247, 0.2); }
          50% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(168, 85, 247, 0.3); }
        }
        .alert-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }
      \`}</style>
      <div className="w-full max-w-md mx-auto bg-purple-600/15 border border-purple-500/40 rounded-2xl p-5 alert-float alert-glow-pulse">
        <div className="flex items-start gap-4">
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-xl">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-purple-300 text-lg mb-1">Premium Unlocked!</h4>
            <p className="text-sm text-purple-200/80">Congratulations! You now have access to all premium features.</p>
          </div>
        </div>
      </div>
    </>
  );
}`;
