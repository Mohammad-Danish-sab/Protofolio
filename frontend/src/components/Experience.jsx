import React from "react";
import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    period: "2026 - Present",
    role: "AI & Full Stack Developer",
    company: "Nexus Tech Labs",
    description:
      "Architecting end-to-end computer vision platforms and FastAPI backends for real-time analytics.",
    technologies: ["React", "FastAPI", "PyTorch", "PostgreSQL", "Docker"],
  },
  {
    period: "2025 - 2026",
    role: "Software Engineer",
    company: "Quantum Automation",
    description:
      "Developed automated workflow systems and high-throughput REST APIs handling thousands of daily queries.",
    technologies: ["Python", "FastAPI", "React", "Redis"],
  },
  {
    period: "2024 - 2025",
    role: "Junior Full Stack Developer",
    company: "ByteCraft Solutions",
    description:
      "Built responsive web dashboards and implemented core database operations using SQLAlchemy.",
    technologies: ["JavaScript", "React", "Python", "MySQL"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#0b0f19]/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            Career History
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            Experience Timeline
          </h3>
        </div>

        <div className="max-w-3xl mx-auto relative border-l-2 border-gray-800 pl-6 md:pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glowing Timeline Marker */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#030712] border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

              <div className="glass-panel p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/40 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                    <Calendar size={14} /> {exp.period}
                  </span>
                </div>

                <div className="text-sm font-medium text-violet-400 mb-4 flex items-center gap-1.5">
                  <Building2 size={16} /> {exp.company}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#030712] text-gray-300 border border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
