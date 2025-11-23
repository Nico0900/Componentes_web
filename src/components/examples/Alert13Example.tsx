export default function Alert13Example() {
  return (
    <div className="w-full max-w-md mx-auto bg-slate-900/80 border border-slate-700 rounded-xl p-5 shadow-xl">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/30 rounded-full animate-ping"></div>
          <div className="relative bg-blue-500 p-2.5 rounded-full">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-slate-200 mb-0.5">New Message</h4>
          <p className="text-xs text-slate-400">You have 3 unread messages</p>
        </div>
        <span className="bg-blue-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">3</span>
      </div>
      <div className="space-y-2 pl-14">
        <div className="text-sm text-slate-300">
          <p className="font-medium">Sarah Johnson</p>
          <p className="text-slate-400 text-xs">Let's discuss the new project...</p>
        </div>
      </div>
    </div>
  );
}

export const alert13Code = `export default function Alert13Example() {
  return (
    <div className="w-full max-w-md mx-auto bg-slate-900/80 border border-slate-700 rounded-xl p-5 shadow-xl">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/30 rounded-full animate-ping"></div>
          <div className="relative bg-blue-500 p-2.5 rounded-full">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-slate-200 mb-0.5">New Message</h4>
          <p className="text-xs text-slate-400">You have 3 unread messages</p>
        </div>
        <span className="bg-blue-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">3</span>
      </div>
      <div className="space-y-2 pl-14">
        <div className="text-sm text-slate-300">
          <p className="font-medium">Sarah Johnson</p>
          <p className="text-slate-400 text-xs">Let's discuss the new project...</p>
        </div>
      </div>
    </div>
  );
}`;
