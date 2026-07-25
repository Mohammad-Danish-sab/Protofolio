import { useMemo, useState } from "react";
import { Pencil, Trash2, Search, Star } from "lucide-react";
import toast from "react-hot-toast";

import Card from "../common/Card";
import ConfirmDelete from "../common/ConfirmDelete";

import { deleteBlog } from "../../services/blogService";

export default function BlogTable({ blogs = [], refreshBlogs, onEdit }) {
  const [search, setSearch] = useState("");

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [selectedBlog, setSelectedBlog] = useState(null);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const query = search.toLowerCase();

      return (
        blog.title?.toLowerCase().includes(query) ||
        blog.category?.toLowerCase().includes(query)
      );
    });
  }, [blogs, search]);

  const handleDelete = async () => {
    if (!selectedBlog) return;

    try {
      await deleteBlog(selectedBlog.id);

      toast.success("Blog deleted");

      refreshBlogs();

      setDeleteOpen(false);

      setSelectedBlog(null);
    } catch (error) {
      toast.error("Failed to delete blog");
    }
  };

  return (
    <>
      <Card>
        {/* Header */}

        <div className="flex justify-between items-center mb-8">
          <div className="relative w-80">
            <Search
              className="absolute left-4 top-3.5 text-slate-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
              w-full
              pl-11
              pr-4
              py-3
              rounded-xl
              bg-slate-900
              border
              border-slate-700
              outline-none
              "
            />
          </div>

          <p className="text-slate-400">
            Total Blogs :
            <span className="ml-2 font-bold text-cyan-400">
              {filteredBlogs.length}
            </span>
          </p>
        </div>

        {/* Table */}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="py-4 text-left">Cover</th>

                <th className="text-left">Title</th>

                <th className="text-left">Category</th>

                <th className="text-center">Status</th>

                <th className="text-center">Featured</th>

                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredBlogs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-10 text-slate-400">
                    No Blogs Found
                  </td>
                </tr>
              ) : (
                filteredBlogs.map((blog) => (
                  <tr
                    key={blog.id}
                    className="border-b border-slate-800 hover:bg-slate-900 transition"
                  >
                    {/* Image */}

                    <td className="py-4">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-24 h-16 rounded-xl object-cover"
                      />
                    </td>

                    {/* Title */}

                    <td>
                      <h3 className="font-semibold">{blog.title}</h3>

                      <p className="text-sm text-slate-400">{blog.slug}</p>
                    </td>

                    {/* Category */}

                    <td>
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
                        {blog.category}
                      </span>
                    </td>

                    {/* Status */}

                    <td className="text-center">
                      {blog.published ? (
                        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                          Published
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400">
                          Draft
                        </span>
                      )}
                    </td>

                    {/* Featured */}

                    <td className="text-center">
                      {blog.featured ? (
                        <Star
                          className="mx-auto text-yellow-400 fill-yellow-400"
                          size={20}
                        />
                      ) : (
                        "-"
                      )}
                    </td>

                    {/* Actions */}

                    <td>
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => onEdit(blog)}
                          className="
                          w-10
                          h-10
                          rounded-xl
                          bg-cyan-500/10
                          hover:bg-cyan-500
                          transition
                          flex
                          items-center
                          justify-center
                          "
                        >
                          <Pencil size={18} />
                        </button>

                        <button
                          onClick={() => {
                            setSelectedBlog(blog);
                            setDeleteOpen(true);
                          }}
                          className="
                          w-10
                          h-10
                          rounded-xl
                          bg-red-500/10
                          hover:bg-red-500
                          transition
                          flex
                          items-center
                          justify-center
                          "
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>

      <ConfirmDelete
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDelete}
        title="Delete Blog"
        description="This action cannot be undone."
      />
    </>
  );
}
