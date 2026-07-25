import { useMemo, useState } from "react";
import { Pencil, Trash2, Search } from "lucide-react";
import toast from "react-hot-toast";

import Card from "../common/Card";
import ConfirmDelete from "../common/ConfirmDelete";

import { deleteSkill } from "../../services/skillService";

export default function SkillTable({ skills = [], refreshSkills, onEdit }) {
  const [search, setSearch] = useState("");

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [selectedSkill, setSelectedSkill] = useState(null);

  const filteredSkills = useMemo(() => {
    const query = search.toLowerCase();

    return skills.filter(
      (skill) =>
        skill.name?.toLowerCase().includes(query) ||
        skill.category?.toLowerCase().includes(query),
    );
  }, [skills, search]);

  const handleDelete = async () => {
    if (!selectedSkill) return;

    try {
      await deleteSkill(selectedSkill.id);

      toast.success("Skill deleted successfully");

      await refreshSkills();

      setDeleteOpen(false);
      setSelectedSkill(null);
    } catch (error) {
      toast.error(error?.response?.data?.detail || "Failed to delete skill");
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
              placeholder="Search Skills..."
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
            Total Skills :
            <span className="ml-2 font-bold text-cyan-400">
              {filteredSkills.length}
            </span>
          </p>
        </div>

        {/* Table */}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-4">Skill</th>

                <th className="text-left">Category</th>

                <th className="text-center">Level</th>

                <th className="text-center">Color</th>

                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredSkills.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-10 text-slate-400">
                    No Skills Found
                  </td>
                </tr>
              ) : (
                filteredSkills.map((skill) => (
                  <tr
                    key={skill.id}
                    className="border-b border-slate-800 hover:bg-slate-900 transition"
                  >
                    {/* Name */}

                    <td className="py-5">
                      <div>
                        <h3 className="font-semibold">{skill.name}</h3>

                        <p className="text-sm text-slate-500">{skill.icon}</p>
                      </div>
                    </td>

                    {/* Category */}

                    <td>
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
                        {skill.category}
                      </span>
                    </td>

                    {/* Level */}

                    <td className="text-center w-56">
                      <div className="flex items-center gap-3">
                        <div className="w-full bg-slate-800 rounded-full h-2">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width: `${skill.level}%`,
                              backgroundColor: skill.color,
                            }}
                          />
                        </div>

                        <span className="text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                    </td>

                    {/* Color */}

                    <td className="text-center">
                      <div
                        className="w-8 h-8 rounded-full mx-auto border border-slate-700"
                        style={{
                          backgroundColor: skill.color,
                        }}
                      />
                    </td>

                    {/* Actions */}

                    <td>
                      <div className="flex justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => onEdit(skill)}
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
                          type="button"
                          onClick={() => {
                            setSelectedSkill(skill);
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
        title="Delete Skill"
        description="This action cannot be undone."
      />
    </>
  );
}
