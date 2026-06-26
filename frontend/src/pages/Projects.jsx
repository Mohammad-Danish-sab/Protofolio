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
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-[#070707] text-white pt-36 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[5px] text-sm">
            Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-5">My Projects</h1>
        </div>

        {loading ? (
          <h2 className="text-center text-2xl">Loading Projects...</h2>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                className="
                bg-white/5
                border border-white/10
                rounded-[35px]
                overflow-hidden
                backdrop-blur-xl
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  w-full
                  h-60
                  object-cover
                  "
                />

                <div className="p-6">
                  <h2 className="text-2xl font-black">{project.title}</h2>

                  <p className="text-zinc-400 mt-4">{project.description}</p>

                  <p className="text-cyan-400 mt-4 text-sm">
                    {project.tech_stack}
                  </p>

                  <div className="flex gap-4 mt-6">
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      px-5 py-3
                      rounded-xl
                      bg-white/10
                      "
                    >
                      GitHub
                    </a>

                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      px-5 py-3
                      rounded-xl
                      bg-gradient-to-r
                      from-cyan-500
                      to-teal-500
                      "
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
