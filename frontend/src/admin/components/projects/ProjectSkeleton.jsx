export default function ProjectSkeleton() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 animate-pulse">
      {/* Search Bar */}

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <div className="h-11 w-full md:w-72 bg-slate-800 rounded-xl"></div>

        <div className="h-11 w-full md:w-36 bg-slate-800 rounded-xl"></div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        {/* Header */}

        <div className="grid grid-cols-6 gap-4 border-b border-slate-700 pb-4 min-w-[900px]">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-5 bg-slate-800 rounded" />
          ))}
        </div>

        {/* Rows */}

        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-6 gap-4 items-center py-5 border-b border-slate-800 min-w-[900px]"
          >
            {/* Image */}

            <div className="w-20 h-14 bg-slate-800 rounded-lg"></div>

            {/* Title */}

            <div className="space-y-2">
              <div className="h-5 w-40 bg-slate-800 rounded"></div>

              <div className="h-4 w-56 bg-slate-800 rounded"></div>
            </div>

            {/* Badge */}

            <div className="h-8 w-24 bg-slate-800 rounded-full"></div>

            {/* Github */}

            <div className="h-10 w-10 bg-slate-800 rounded-xl"></div>

            {/* Live */}

            <div className="h-10 w-10 bg-slate-800 rounded-xl"></div>

            {/* Actions */}

            <div className="flex gap-3">
              <div className="h-10 w-10 bg-slate-800 rounded-xl"></div>

              <div className="h-10 w-10 bg-slate-800 rounded-xl"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
