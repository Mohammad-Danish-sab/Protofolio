export default function DashboardSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Cards */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="rounded-2xl bg-slate-900 border border-slate-800 p-6"
          >
            <div className="h-5 w-28 bg-slate-800 rounded mb-5" />

            <div className="h-10 w-20 bg-slate-800 rounded mb-6" />

            <div className="h-12 w-12 rounded-xl bg-slate-800" />
          </div>
        ))}
      </div>

      {/* Chart */}

      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
        <div className="h-6 w-48 bg-slate-800 rounded mb-8" />

        <div className="h-[320px] bg-slate-800 rounded-xl" />
      </div>

      {/* Bottom */}

      <div className="grid xl:grid-cols-3 gap-6">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="rounded-2xl bg-slate-900 border border-slate-800 p-6"
          >
            <div className="h-6 w-40 bg-slate-800 rounded mb-6" />

            {[...Array(5)].map((__, i) => (
              <div key={i} className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-slate-800" />

                <div className="flex-1 space-y-2">
                  <div className="h-4 w-40 bg-slate-800 rounded" />
                  <div className="h-3 w-28 bg-slate-800 rounded" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
