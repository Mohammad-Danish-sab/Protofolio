import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import API from "../api/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#23212C] text-[#DDD2F6] overflow-hidden py-24"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:65px_65px]" />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/20 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-black m-15">My Projects</h1>

        </div>

        {loading ? (
          <h2 className="text-center text-2xl">Loading Projects...</h2>
        ) : projects.length === 0 ? (
          <h2 className="text-center text-2xl text-zinc-400">
            No Projects Found
          </h2>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl"
              >
                <img
                  src={project.image || "/placeholder.png"}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-bold">{project.title}</h2>

                  <p className="text-zinc-400 mt-4 line-clamp-3">
                    {project.description}
                  </p>

                  <p className="text-cyan-400 mt-4 text-sm">
                    {project.tech_stack}
                  </p>

                  <div className="flex gap-4 mt-6">
                    {project.github_link && (
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
                      >
                        GitHub
                      </a>
                    )}

                    {project.live_link && (
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
