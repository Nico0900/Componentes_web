export default function Alert14Example() {
  return (
    <div className="w-full max-w-md mx-auto relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl opacity-20 blur-lg"></div>
      <div className="relative bg-slate-900 border border-purple-500/30 rounded-2xl p-5">
        <div className="flex gap-4">
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-3 rounded-xl">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-1">
              Premium Feature
            </h4>
            <p className="text-sm text-slate-300 mb-3">Upgrade to unlock advanced analytics and insights.</p>
            <button className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white text-sm font-medium rounded-lg transition-all">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const alert14Code = `export default function Alert14Example() {
  return (
    <div className="w-full max-w-md mx-auto relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl opacity-20 blur-lg"></div>
      <div className="relative bg-slate-900 border border-purple-500/30 rounded-2xl p-5">
        <div className="flex gap-4">
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-3 rounded-xl">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-1">
              Premium Feature
            </h4>
            <p className="text-sm text-slate-300 mb-3">Upgrade to unlock advanced analytics and insights.</p>
            <button className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white text-sm font-medium rounded-lg transition-all">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`;
