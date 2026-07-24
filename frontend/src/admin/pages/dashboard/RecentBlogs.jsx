export default function RecentBlogs() {
  return (
    <div className="bg-slate-900/70 rounded-3xl border border-white/10 p-6">
      <h2 className="text-xl font-bold mb-6">Recent Blogs</h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">JWT Authentication</h3>

          <p className="text-slate-400 text-sm">Published Yesterday</p>
        </div>
      </div>
    </div>
  );
}
