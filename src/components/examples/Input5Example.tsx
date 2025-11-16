export default function Input5Example() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <label className="block text-sm font-medium text-slate-300 mb-2">
        Message
      </label>
      <textarea
        rows={4}
        placeholder="Write your message here..."
        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
      />
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-slate-500">Maximum 500 characters</span>
        <span className="text-xs text-slate-400">0 / 500</span>
      </div>
    </div>
  );
}

export const input5Code = `export default function Input5Example() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <label className="block text-sm font-medium text-slate-300 mb-2">
        Message
      </label>
      <textarea
        rows={4}
        placeholder="Write your message here..."
        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
      />
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-slate-500">Maximum 500 characters</span>
        <span className="text-xs text-slate-400">0 / 500</span>
      </div>
    </div>
  );
}`;
