import { useMemo, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

import Card from "../common/Card";
import SearchBar from "../common/SearchBar";
import ConfirmDelete from "../common/ConfirmDelete";

import { deleteExperience } from "../../services/experienceService";

export default function ExperienceTable({
  experiences = [],
  refreshExperiences,
  onEdit,
}) {
  const [search, setSearch] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const filteredExperiences = useMemo(() => {
    const query = search.toLowerCase();

    return experiences.filter((exp) => {
      return (
        exp.company?.toLowerCase().includes(query) ||
        exp.position?.toLowerCase().includes(query) ||
        exp.location?.toLowerCase().includes(query)
      );
    });
  }, [experiences, search]);

  const handleDelete = async () => {
    if (!selectedExperience) return;

    try {
      await deleteExperience(selectedExperience.id);

      toast.success("Experience deleted successfully");

      await refreshExperiences();

      setDeleteOpen(false);
      setSelectedExperience(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete experience");
    }
  };

  return (
    <>
      <Card>
        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
          <div className="w-full md:w-96">
            <SearchBar
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search experience..."
            />
          </div>

          <div className="text-sm text-slate-400">
            Total Experience :
            <span className="ml-2 font-bold text-cyan-400">
              {filteredExperiences.length}
            </span>
          </div>
        </div>

        {/* Table */}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="py-4 text-left">Logo</th>

                <th className="text-left">Company</th>

                <th className="text-left">Position</th>

                <th className="text-left">Location</th>

                <th className="text-center">Duration</th>

                <th className="text-center">Status</th>

                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredExperiences.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400">
                    No Experience Found
                  </td>
                </tr>
              ) : (
                filteredExperiences.map((exp) => (
                  <tr
                    key={exp.id}
                    className="border-b border-slate-800 hover:bg-slate-900 transition"
                  >
                    {/* Logo */}

                    <td className="py-5">
                      <img
                        src={
                          exp.company_logo ||
                          "https://placehold.co/60x60?text=Logo"
                        }
                        alt={exp.company}
                        className="w-14 h-14 rounded-xl object-cover border border-slate-700"
                      />
                    </td>

                    {/* Company */}

                    <td>
                      <h3 className="font-semibold text-white">
                        {exp.company}
                      </h3>

                      <p className="text-xs text-slate-400 mt-1">
                        {exp.employment_type}
                      </p>
                    </td>

                    {/* Position */}

                    <td>
                      <span className="font-medium">{exp.position}</span>
                    </td>

                    {/* Location */}

                    <td>{exp.location}</td>

                    {/* Duration */}

                    <td className="text-center">
                      <div className="text-sm">{exp.start_date}</div>

                      <div className="text-xs text-slate-500">
                        {exp.current ? "Present" : exp.end_date}
                      </div>
                    </td>

                    {/* Status */}

                    <td className="text-center">
                      {exp.current ? (
                        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                          Current
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-slate-700 text-slate-300 text-xs">
                          Completed
                        </span>
                      )}
                    </td>

                    {/* Actions */}

                    <td>
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => onEdit(exp)}
                          className="w-10 h-10 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 transition flex items-center justify-center"
                        >
                          <Pencil size={18} />
                        </button>

                        <button
                          onClick={() => {
                            setSelectedExperience(exp);
                            setDeleteOpen(true);
                          }}
                          className="w-10 h-10 rounded-xl bg-red-500/10 hover:bg-red-500 transition flex items-center justify-center"
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
        title="Delete Experience"
        description="Are you sure you want to delete this experience? This action cannot be undone."
      />
    </>
  );
}
