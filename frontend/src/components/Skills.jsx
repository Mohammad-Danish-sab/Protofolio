import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Layout, Server, Cpu, Database, Plus, Trash2, X } from "lucide-react";
import { fetchSkills, createSkill, deleteSkill } from "../services/api";

const defaultCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML5/CSS3",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "SQLAlchemy",
      "Pydantic",
    ],
  },
  {
    title: "AI / Gen AI",
    icon: Cpu,
    skills: ["NumPy", "Pandas", "RAG", "LLM", "Lang Chain", "Lang Graph"],
  },
  {
    title: "Database & Tools",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Docker",
      "Git & GitHub",
      "VS Code",
      "Canva",
    ],
  },
];

const categoryIcons = {
  Frontend: Layout,
  Backend: Server,
  "AI / Gen AI": Cpu,
  "Database & Tools": Database,
};

export const Skills = () => {
  const [skillCategories, setSkillCategories] = useState(defaultCategories);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Frontend");
  const [adminKey, setAdminKey] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadDynamicSkills();
  }, []);

  const loadDynamicSkills = async () => {
    try {
      const response = await fetchSkills();
      const rawSkills = response.data;

      if (rawSkills && rawSkills.length > 0) {
        const groupedMap = rawSkills.reduce((acc, curr) => {
          const cat = curr.category || "Database & Tools";
          if (!acc[cat]) acc[cat] = [];
          acc[cat].push({ id: curr.id, name: curr.name });
          return acc;
        }, {});

        const formattedCategories = Object.keys(groupedMap).map((catName) => ({
          title: catName,
          icon: categoryIcons[catName] || Database,
          skills: groupedMap[catName],
        }));

        setSkillCategories(formattedCategories);
      }
    } catch (err) {
      console.warn("Using default static skills due to API fetch state:", err);
    }
  };

  const handleAddSkill = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createSkill({ name, category }, adminKey);
      setName("");
      setAdminKey(""); 
      setIsModalOpen(false);
      loadDynamicSkills();
    } catch (err) {
      alert("Failed to add skill. Please verify your admin key.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSkill = async (id) => {
    if (!id) return;
    const key = prompt("Enter Admin Key to delete this skill:");
    if (!key) return;

    try {
      await deleteSkill(id, key);
      loadDynamicSkills();
    } catch (err) {
      alert("Failed to delete skill. Invalid admin key.");
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 relative">
          <h3 className="text-3xl md:text-5xl font-bold text-[#B65950]">
            Technical Skills
          </h3>
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2.5 bg-[#B95712] text-[#white] hover:text-white rounded-xl transition-all shadow-sm"
            title="Add Skill"
          >
            <Plus size={15} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const CategoryIcon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#e4e5e6] p-8 rounded-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-[#DEDBD4] text-[#B65950]">
                    <CategoryIcon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-[#B85C38]">
                    {cat.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skillItem) => {
                    const skillName =
                      typeof skillItem === "string"
                        ? skillItem
                        : skillItem.name;
                    const skillId =
                      typeof skillItem === "object" ? skillItem.id : null;

                    return (
                      <span
                        key={skillName}
                        className="group relative px-3.5 py-1.5 rounded-lg bg-[#FAF7F8] text-black text-sm font-medium transition-all cursor-default flex items-center gap-2"
                      >
                        {skillName}
                        {skillId && (
                          <button
                            onClick={() => handleDeleteSkill(skillId)}
                            className="hidden group-hover:inline-block text-red-500 hover:text-red-700 transition-colors"
                            title="Delete skill"
                          >
                            <Trash2 size={13} />
                          </button>
                        )}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#FAF7F8] border border-[#F5EEDC] p-6 md:p-8 rounded-2xl w-full max-w-md shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X size={20} />
            </button>
            <h4 className="text-2xl font-bold text-[#B85C38] mb-6">
              Add New Skill
            </h4>
            <form onSubmit={handleAddSkill} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                  Skill Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Next.js"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 bg-white border border-gray-200 rounded-xl text-black focus:outline-none focus:border-[#B85C38]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-3 bg-white border border-gray-200 rounded-xl text-black focus:outline-none focus:border-[#B85C38]"
                >
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="AI / Gen AI">AI / Gen AI</option>
                  <option value="Database & Tools">Database & Tools</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                  Admin Key
                </label>
                <input
                  type="password"
                  placeholder="Enter secret admin key"
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  className="w-full p-3 bg-white border border-gray-200 rounded-xl text-black focus:outline-none focus:border-[#B85C38]"
                  required
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-300 transition-colors text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2 bg-[#B85C38] text-white font-medium rounded-xl hover:bg-[#a04e2e] transition-colors text-sm shadow-md disabled:opacity-50"
                >
                  {loading ? "Saving..." : "Save Skill"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
