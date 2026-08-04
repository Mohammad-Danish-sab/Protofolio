import { useMemo, useState } from "react";
import { Pencil, Trash2, Search } from "lucide-react";
import toast from "react-hot-toast";

import Card from "../common/Card";
import ConfirmDelete from "../common/ConfirmDelete";

import { deleteEducation } from "../../services/educationService";

export default function EducationTable({
  educations = [],
  refreshEducations,
  onEdit,
}) {
  const [search, setSearch] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);

  const filteredEducations = useMemo(() => {
    const query = search.toLowerCase();

    return educations.filter(
      (item) =>
        item.institution?.toLowerCase().includes(query) ||
        item.degree?.toLowerCase().includes(query) ||
        item.field_of_study?.toLowerCase().includes(query),
    );
  }, [educations, search]);

  const handleDelete = async () => {
    if (!selectedEducation) return;

    try {
      await deleteEducation(selectedEducation.id);

      toast.success("Education deleted successfully");

      await refreshEducations();

      setDeleteOpen(false);
      setSelectedEducation(null);
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.detail || "Failed to delete education",
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
              placeholder="Search Education..."
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
            Total Education :
            <span className="ml-2 font-bold text-cyan-400">
              {filteredEducations.length}
            </span>
          </p>
        </div>

        {/* Table */}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-4">Institution</th>
                <th className="text-left">Degree</th>
                <th className="text-left">Field</th>
                <th className="text-center">Duration</th>
                <th className="text-center">Grade</th>
                <th className="text-center">Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredEducations.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-10 text-center text-slate-400">
                    No Education Found
                  </td>
                </tr>
              ) : (
                filteredEducations.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-slate-800 hover:bg-slate-900 transition"
                  >
                    {/* Institution */}

                    <td className="py-5">
                      <div className="flex items-center gap-3">
                        <img
                          src={
                            item.institution_logo ||
                            "https://placehold.co/50x50"
                          }
                          alt={item.institution}
                          className="w-12 h-12 rounded-xl object-cover border border-slate-700"
                        />

                        <div>
                          <h3 className="font-semibold text-white">
                            {item.institution}
                          </h3>

                          <p className="text-xs text-slate-500">
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Degree */}

                    <td>{item.degree}</td>

                    {/* Field */}

                    <td>{item.field_of_study}</td>

                    {/* Duration */}

                    <td className="text-center">
                      {item.start_year} -{" "}
                      {item.current ? "Present" : item.end_year}
                    </td>

                    {/* Grade */}

                    <td className="text-center">{item.grade || "-"}</td>

                    {/* Status */}

                    <td className="text-center">
                      {item.current ? (
                        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                          Current
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-slate-700 text-slate-300 text-sm">
                          Completed
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
                            setSelectedEducation(item);
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
        title="Delete Education"
        description="This action cannot be undone."
      />
    </>
  );
}
