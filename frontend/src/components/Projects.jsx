import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { fetchProjects } from "../services/api";

const categories = ["All", "Full Stack", "AI / ML", "Automation", "Web Apps"];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      try {
        const response = await fetchProjects(
          activeCategory === "All" ? null : activeCategory,
        );
        setProjects(response.data);
      } catch (err) {
        // Fallback mock data if API is unmounted during development preview
        setProjects([
          {
            id: 1,
            title: "AI Smart City Incident Reasoner",
            description:
              "Real-time AI surveillance processing camera streams to detect incidents and provide operational insights using computer vision.",
            category: "AI / ML",
            image_url:
              "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
            technologies: ["React", "FastAPI", "YOLO", "PyTorch", "PostgreSQL"],
            github_url: "#",
            live_url: "#",
          },
          {
            id: 2,
            title: "Autonomous Workflow Engine",
            description:
              "Scalable backend service automating multi-step enterprise tasks using custom NLP and FastAPI workers.",
            category: "Automation",
            image_url:
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
            technologies: ["Python", "FastAPI", "Docker", "Redis"],
            github_url: "#",
            live_url: "#",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            Portfolio
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            Featured Projects
          </h3>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-glow-cyan"
                  : "glass-panel text-gray-400 hover:text-white border-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="glass-panel rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 hover:shadow-glow-cyan transition-all duration-500 group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-semibold text-violet-400 mb-2 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-navy-800 text-cyan-300 border border-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-800/80">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        className="text-gray-400 hover:text-white flex items-center gap-1.5 text-sm font-medium"
                      >
                        <Github size={16} /> Code
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 text-sm font-medium ml-auto"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
