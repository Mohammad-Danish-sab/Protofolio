import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { fetchProjects } from "../services/api";

const categories = ["All", "Full Stack", "AI / ML", "Automation"];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      try {
        const cat = activeCategory === "All" ? "" : activeCategory;
        const res = await fetchProjects(cat);
        // Ensure response data is an array
        const data = Array.isArray(res.data) ? res.data : res.data?.data || [];
        setProjects(data);
      } catch (err) {
        console.error("Failed to load projects:", err);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 relative bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-3xl md:text-5xl font-bold text-[#B95712]">
            Featured Projects
          </h3>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#B95712] text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center text-gray-600 py-12">
            Loading projects...
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            No projects found in the database.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => {
              const tags = project.technologies || project.tags || [];
              return (
                <motion.div
                  key={project.id || idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  {project.image_url && (
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-[#B95712] px-2.5 py-1 rounded-md bg-[#B95712]/10 border border-[#B95712]/20">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-3 text-gray-600">
                          {project.github_url && (
                            <a
                              href={project.github_url}
                              target="_blank"
                              rel="noreferrer"
                              className="hover:text-[#B95712] transition-colors"
                            >
                              <FaGithub size={18} />
                            </a>
                          )}
                          {project.live_url && (
                            <a
                              href={project.live_url}
                              target="_blank"
                              rel="noreferrer"
                              className="hover:text-[#B95712] transition-colors"
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono text-gray-600 bg-gray-100 px-2.5 py-1 rounded border border-gray-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
