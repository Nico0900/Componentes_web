export default function Badge4Example() {
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center">
      <span className="px-4 py-1.5 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold rounded-md">
        New
      </span>
      <span className="px-4 py-1.5 bg-green-600/20 border border-green-500/30 text-green-300 text-xs font-semibold rounded-md">
        Active
      </span>
      <span className="px-4 py-1.5 bg-yellow-600/20 border border-yellow-500/30 text-yellow-300 text-xs font-semibold rounded-md">
        Pending
      </span>
      <span className="px-4 py-1.5 bg-red-600/20 border border-red-500/30 text-red-300 text-xs font-semibold rounded-md">
        Closed
      </span>
      <span className="px-4 py-1.5 bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xs font-semibold rounded-md">
        Draft
      </span>
    </div>
  );
}

export const badge4Code = `export default function Badge4Example() {
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center">
      <span className="px-4 py-1.5 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold rounded-md">
        New
      </span>
      <span className="px-4 py-1.5 bg-green-600/20 border border-green-500/30 text-green-300 text-xs font-semibold rounded-md">
        Active
      </span>
      <span className="px-4 py-1.5 bg-yellow-600/20 border border-yellow-500/30 text-yellow-300 text-xs font-semibold rounded-md">
        Pending
      </span>
      <span className="px-4 py-1.5 bg-red-600/20 border border-red-500/30 text-red-300 text-xs font-semibold rounded-md">
        Closed
      </span>
      <span className="px-4 py-1.5 bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xs font-semibold rounded-md">
        Draft
      </span>
    </div>
  );
}`;
