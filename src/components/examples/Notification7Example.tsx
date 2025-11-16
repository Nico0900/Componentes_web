import { useState } from 'react';

export default function Notification7Example() {
  const [tags, setTags] = useState([
    { id: 1, text: 'New Feature', color: 'from-blue-500 to-cyan-500' },
    { id: 2, text: 'Update Available', color: 'from-green-500 to-emerald-500' },
    { id: 3, text: 'Action Required', color: 'from-red-500 to-rose-500' },
  ]);

  const removeTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  const addTag = () => {
    const newTags = [
      { text: '2 New Messages', color: 'from-purple-500 to-pink-500' },
      { text: 'Beta Access', color: 'from-yellow-500 to-orange-500' },
      { text: 'Verified', color: 'from-teal-500 to-cyan-500' },
    ];
    const randomTag = newTags[Math.floor(Math.random() * newTags.length)];
    setTags([...tags, { id: Date.now(), ...randomTag }]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-slate-100 mb-6">Pill Notifications</h3>

        {/* Pill Container */}
        <div className="flex flex-wrap gap-3 mb-6 min-h-[60px]">
          {tags.map((tag) => (
            <div
              key={tag.id}
              className="animate-scale-in"
            >
              <div className={`bg-gradient-to-r ${tag.color} rounded-full px-4 py-2 flex items-center gap-2 shadow-lg group hover:shadow-xl transition-all duration-300`}>
                <span className="text-white font-medium text-sm">{tag.text}</span>
                <button
                  onClick={() => removeTag(tag.id)}
                  className="text-white/80 hover:text-white transition-colors bg-white/20 hover:bg-white/30 rounded-full p-0.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          ))}

          {tags.length === 0 && (
            <div className="w-full text-center py-4">
              <p className="text-slate-400 text-sm">No notifications. Click "Add Pill" to create one!</p>
            </div>
          )}
        </div>

        {/* Static Pill Examples */}
        <div className="space-y-4 mb-6 p-4 bg-slate-700/20 rounded-lg border border-slate-700/30">
          <p className="text-slate-300 text-sm font-medium mb-3">Static Examples:</p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full px-4 py-1.5 text-white text-sm font-medium shadow-lg">
              Live
            </span>
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-full px-4 py-1.5 text-white text-sm font-medium shadow-lg">
              Hot
            </span>
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full px-4 py-1.5 text-white text-sm font-medium shadow-lg flex items-center gap-1">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Premium
            </span>
            <span className="bg-slate-600/50 backdrop-blur-sm border border-slate-500/30 rounded-full px-4 py-1.5 text-slate-300 text-sm font-medium">
              Draft
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-slate-700/50">
          <button
            onClick={addTag}
            className="flex-1 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300"
          >
            Add Pill
          </button>
          <button
            onClick={() => setTags([])}
            className="px-4 py-2.5 bg-slate-700/50 hover:bg-slate-700 text-slate-300 font-medium rounded-lg transition-all duration-300"
            disabled={tags.length === 0}
          >
            Clear All
          </button>
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export const notification7Code = `import { useState } from 'react';

export default function Notification7Example() {
  const [tags, setTags] = useState([
    { id: 1, text: 'New Feature', color: 'from-blue-500 to-cyan-500' },
    { id: 2, text: 'Update Available', color: 'from-green-500 to-emerald-500' },
    { id: 3, text: 'Action Required', color: 'from-red-500 to-rose-500' },
  ]);

  const removeTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  const addTag = () => {
    const newTags = [
      { text: '2 New Messages', color: 'from-purple-500 to-pink-500' },
      { text: 'Beta Access', color: 'from-yellow-500 to-orange-500' },
      { text: 'Verified', color: 'from-teal-500 to-cyan-500' },
    ];
    const randomTag = newTags[Math.floor(Math.random() * newTags.length)];
    setTags([...tags, { id: Date.now(), ...randomTag }]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-slate-100 mb-6">Pill Notifications</h3>

        {/* Pill Container */}
        <div className="flex flex-wrap gap-3 mb-6 min-h-[60px]">
          {tags.map((tag) => (
            <div
              key={tag.id}
              className="animate-scale-in"
            >
              <div className={\`bg-gradient-to-r \${tag.color} rounded-full px-4 py-2 flex items-center gap-2 shadow-lg group hover:shadow-xl transition-all duration-300\`}>
                <span className="text-white font-medium text-sm">{tag.text}</span>
                <button
                  onClick={() => removeTag(tag.id)}
                  className="text-white/80 hover:text-white transition-colors bg-white/20 hover:bg-white/30 rounded-full p-0.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          ))}

          {tags.length === 0 && (
            <div className="w-full text-center py-4">
              <p className="text-slate-400 text-sm">No notifications. Click "Add Pill" to create one!</p>
            </div>
          )}
        </div>

        {/* Static Pill Examples */}
        <div className="space-y-4 mb-6 p-4 bg-slate-700/20 rounded-lg border border-slate-700/30">
          <p className="text-slate-300 text-sm font-medium mb-3">Static Examples:</p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full px-4 py-1.5 text-white text-sm font-medium shadow-lg">
              Live
            </span>
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-full px-4 py-1.5 text-white text-sm font-medium shadow-lg">
              Hot
            </span>
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full px-4 py-1.5 text-white text-sm font-medium shadow-lg flex items-center gap-1">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Premium
            </span>
            <span className="bg-slate-600/50 backdrop-blur-sm border border-slate-500/30 rounded-full px-4 py-1.5 text-slate-300 text-sm font-medium">
              Draft
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-slate-700/50">
          <button
            onClick={addTag}
            className="flex-1 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300"
          >
            Add Pill
          </button>
          <button
            onClick={() => setTags([])}
            className="px-4 py-2.5 bg-slate-700/50 hover:bg-slate-700 text-slate-300 font-medium rounded-lg transition-all duration-300"
            disabled={tags.length === 0}
          >
            Clear All
          </button>
        </div>
      </div>

      <style>{\`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      \`}</style>
    </div>
  );
}`;