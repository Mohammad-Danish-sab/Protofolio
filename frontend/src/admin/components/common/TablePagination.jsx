export default function TablePagination({
  page,
  totalPages,
  onPrevious,
  onNext,
}) {
  return (
    <div className="flex justify-between items-center mt-6">
      <button
        onClick={onPrevious}
        disabled={page === 1}
        className="px-4 py-2 rounded-xl bg-slate-800 disabled:opacity-40"
      >
        Previous
      </button>

      <span>
        Page {page} of {totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={page === totalPages}
        className="px-4 py-2 rounded-xl bg-slate-800 disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}
