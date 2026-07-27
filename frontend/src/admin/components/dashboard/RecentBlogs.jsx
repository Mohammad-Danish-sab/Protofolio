import { Newspaper } from "lucide-react";
import Card from "../common/Card";

export default function RecentBlogs({ blogs = [] }) {
  return (
    <Card>
      <div className="flex items-center gap-3 mb-6">
        <Newspaper className="text-violet-400" size={22} />
        <h2 className="text-xl font-semibold">Recent Blogs</h2>
      </div>

      {blogs.length === 0 ? (
        <p className="text-slate-400">No recent blogs.</p>
      ) : (
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border-b border-slate-800 pb-4 last:border-none"
            >
              <h3 className="font-semibold">{blog.title}</h3>

              <p className="text-sm text-slate-400">{blog.category}</p>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
