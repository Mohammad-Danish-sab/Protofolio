export default function ProjectSkeleton() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 animate-pulse">
      {/* Search Bar */}

      <div className="flex justify-between mb-8">
        <div className="h-11 w-72 bg-slate-800 rounded-xl"></div>

        <div className="h-11 w-36 bg-slate-800 rounded-xl"></div>
      </div>

      {/* Table Header */}

      <div className="grid grid-cols-6 gap-4 border-b border-slate-700 pb-4 mb-6">
        <div className="h-5 bg-slate-800 rounded"></div>
        <div className="h-5 bg-slate-800 rounded"></div>
        <div className="h-5 bg-slate-800 rounded"></div>
        <div className="h-5 bg-slate-800 rounded"></div>
        <div className="h-5 bg-slate-800 rounded"></div>
        <div className="h-5 bg-slate-800 rounded"></div>
      </div>

      {/* Table Rows */}

      {[1, 2, 3, 4, 5].map((item) => (
        <div
          key={item}
          className="grid grid-cols-6 gap-4 items-center py-5 border-b border-slate-800"
        >
          <div className="w-20 h-14 bg-slate-800 rounded-lg"></div>

          <div className="space-y-2">
            <div className="h-5 w-40 bg-slate-800 rounded"></div>
            <div className="h-4 w-56 bg-slate-800 rounded"></div>
          </div>

          <div className="h-8 w-24 bg-slate-800 rounded-full"></div>

          <div className="h-10 w-10 bg-slate-800 rounded-xl"></div>

          <div className="h-10 w-10 bg-slate-800 rounded-xl"></div>

          <div className="flex gap-3">
            <div className="h-10 w-10 bg-slate-800 rounded-xl"></div>
            <div className="h-10 w-10 bg-slate-800 rounded-xl"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
