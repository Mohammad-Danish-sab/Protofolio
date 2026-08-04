import { useMemo, useState } from "react";
import { Pencil, Trash2, Search, Star } from "lucide-react";
import toast from "react-hot-toast";

import Card from "../common/Card";
import ConfirmDelete from "../common/ConfirmDelete";

import { deleteTestimonial } from "../../services/testimonialService";

export default function TestimonialTable({
  testimonials = [],
  refreshTestimonials,
  onEdit,
}) {
  const [search, setSearch] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const filteredTestimonials = useMemo(() => {
    const query = search.toLowerCase();

    return testimonials.filter(
      (item) =>
        item.name?.toLowerCase().includes(query) ||
        item.company?.toLowerCase().includes(query) ||
        item.designation?.toLowerCase().includes(query),
    );
  }, [testimonials, search]);

  const handleDelete = async () => {
    if (!selectedTestimonial) return;

    try {
      await deleteTestimonial(selectedTestimonial.id);

      toast.success("Testimonial deleted successfully");

      await refreshTestimonials();

      setDeleteOpen(false);
      setSelectedTestimonial(null);
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.detail || "Failed to delete testimonial",
      );
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
              placeholder="Search Testimonials..."
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
                focus:border-cyan-500
              "
            />
          </div>

          <p className="text-slate-400">
            Total Testimonials :
            <span className="ml-2 font-bold text-cyan-400">
              {filteredTestimonials.length}
            </span>
          </p>
        </div>

        {/* Table */}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-4">Client</th>
                <th className="text-left">Company</th>
                <th className="text-center">Rating</th>
                <th className="text-center">Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredTestimonials.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-10 text-slate-400">
                    No Testimonials Found
                  </td>
                </tr>
              ) : (
                filteredTestimonials.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-slate-800 hover:bg-slate-900 transition"
                  >
                    {/* Client */}

                    <td className="py-5">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image || "https://placehold.co/60x60"}
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover border border-slate-700"
                        />

                        <div>
                          <h3 className="font-semibold text-white">
                            {item.name}
                          </h3>

                          <p className="text-xs text-slate-500">
                            {item.designation}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Company */}

                    <td>{item.company}</td>

                    {/* Rating */}

                    <td className="text-center">
                      <div className="flex justify-center gap-1">
                        {[...Array(Number(item.rating || 5))].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </td>

                    {/* Status */}

                    <td className="text-center">
                      {item.active ? (
                        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                          Active
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm">
                          Inactive
                        </span>
                      )}
                    </td>

                    {/* Actions */}

                    <td>
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => onEdit(item)}
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
                            setSelectedTestimonial(item);
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
        title="Delete Testimonial"
        description="This action cannot be undone."
      />
    </>
  );
}
