export default function Loading8Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8 w-full max-w-md">
      <style>
        {`
          @keyframes linear-progress {
            0% { width: 0%; }
            50% { width: 70%; }
            100% { width: 100%; }
          }
          .linear-bar {
            height: 100%;
            background: linear-gradient(90deg, #8b5cf6, #3b82f6);
            border-radius: 9999px;
            animation: linear-progress 2s ease-in-out infinite;
          }
        `}
      </style>

      {/* Basic Linear */}
      <div className="w-full">
        <div className="w-full h-2 bg-slate-700/30 rounded-full overflow-hidden">
          <div className="linear-bar"></div>
        </div>
      </div>

      {/* Thicker Linear */}
      <div className="w-full">
        <div className="w-full h-3 bg-slate-700/30 rounded-full overflow-hidden">
          <div className="linear-bar"></div>
        </div>
      </div>

      {/* With Label */}
      <div className="w-full">
        <div className="flex justify-between mb-2">
          <span className="text-slate-400 text-sm font-medium">Uploading...</span>
        </div>
        <div className="w-full h-2 bg-slate-700/30 rounded-full overflow-hidden">
          <div className="linear-bar"></div>
        </div>
      </div>

      {/* Different Color */}
      <div className="w-full">
        <div className="w-full h-2 bg-slate-700/30 rounded-full overflow-hidden">
          <div className="linear-bar" style={{ background: 'linear-gradient(90deg, #10b981, #3b82f6)' }}></div>
        </div>
      </div>

      {/* Striped Linear */}
      <div className="w-full">
        <div className="w-full h-3 bg-slate-700/30 rounded-full overflow-hidden">
          <div className="linear-bar" style={{
            background: 'repeating-linear-gradient(45deg, #8b5cf6, #8b5cf6 10px, #3b82f6 10px, #3b82f6 20px)'
          }}></div>
        </div>
      </div>

      {/* Multiple Progress */}
      <div className="w-full space-y-3">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-slate-400 text-xs">File 1</span>
          </div>
          <div className="w-full h-1.5 bg-slate-700/30 rounded-full overflow-hidden">
            <div className="linear-bar"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-slate-400 text-xs">File 2</span>
          </div>
          <div className="w-full h-1.5 bg-slate-700/30 rounded-full overflow-hidden">
            <div className="linear-bar" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-slate-400 text-xs">File 3</span>
          </div>
          <div className="w-full h-1.5 bg-slate-700/30 rounded-full overflow-hidden">
            <div className="linear-bar" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const loading8Code = `export default function Loading8Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8 w-full max-w-md">
      <style>
        {\`
          @keyframes linear-progress {
            0% { width: 0%; }
            50% { width: 70%; }
            100% { width: 100%; }
          }
          .linear-bar {
            height: 100%;
            background: linear-gradient(90deg, #8b5cf6, #3b82f6);
            border-radius: 9999px;
            animation: linear-progress 2s ease-in-out infinite;
          }
        \`}
      </style>

      {/* Basic Linear */}
      <div className="w-full">
        <div className="w-full h-2 bg-slate-700/30 rounded-full overflow-hidden">
          <div className="linear-bar"></div>
        </div>
      </div>

      {/* Thicker Linear */}
      <div className="w-full">
        <div className="w-full h-3 bg-slate-700/30 rounded-full overflow-hidden">
          <div className="linear-bar"></div>
        </div>
      </div>

      {/* With Label */}
      <div className="w-full">
        <div className="flex justify-between mb-2">
          <span className="text-slate-400 text-sm font-medium">Uploading...</span>
        </div>
        <div className="w-full h-2 bg-slate-700/30 rounded-full overflow-hidden">
          <div className="linear-bar"></div>
        </div>
      </div>

      {/* Different Color */}
      <div className="w-full">
        <div className="w-full h-2 bg-slate-700/30 rounded-full overflow-hidden">
          <div className="linear-bar" style={{ background: 'linear-gradient(90deg, #10b981, #3b82f6)' }}></div>
        </div>
      </div>

      {/* Striped Linear */}
      <div className="w-full">
        <div className="w-full h-3 bg-slate-700/30 rounded-full overflow-hidden">
          <div className="linear-bar" style={{
            background: 'repeating-linear-gradient(45deg, #8b5cf6, #8b5cf6 10px, #3b82f6 10px, #3b82f6 20px)'
          }}></div>
        </div>
      </div>

      {/* Multiple Progress */}
      <div className="w-full space-y-3">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-slate-400 text-xs">File 1</span>
          </div>
          <div className="w-full h-1.5 bg-slate-700/30 rounded-full overflow-hidden">
            <div className="linear-bar"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-slate-400 text-xs">File 2</span>
          </div>
          <div className="w-full h-1.5 bg-slate-700/30 rounded-full overflow-hidden">
            <div className="linear-bar" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-slate-400 text-xs">File 3</span>
          </div>
          <div className="w-full h-1.5 bg-slate-700/30 rounded-full overflow-hidden">
            <div className="linear-bar" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}`;