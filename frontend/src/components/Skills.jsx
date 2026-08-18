import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, Cpu, Database, Wrench } from "lucide-react";

const skillCategories = [
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
    skills: [
      "NumPy",
      "Pandas",
      "RAG",
      "LLM",
      "Lang Chain",
      "Lang Graph",
    ],
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

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* <h2 className="text-xs font-semibold text-[#97A26A] uppercase tracking-widest mb-3">
            Expertise
          </h2> */}
          <h3 className="text-3xl md:text-5xl font-bold text-[#B65950]">
            Technical Skills
          </h3>
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
                className="glass-panel p-8 rounded-2xl border border-gray-800 hover:border-cyan-500/40 transition-all duration-300 bg-"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-red-400 border border-cyan-500/20">
                    <CategoryIcon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white">{cat.title}</h4>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-lg bg-[#030712] text-gray-300 border border-gray-800 text-sm font-medium hover:border-violet-500/50 hover:text-cyan-300 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
