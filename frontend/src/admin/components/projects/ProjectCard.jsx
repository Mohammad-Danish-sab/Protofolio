import { Github, ExternalLink, Star } from "lucide-react";

export default function ProjectCard({ project, onEdit }) {
  return (
    <div
      className="
        group
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        overflow-hidden
        hover:border-cyan-500/40
        transition
        duration-300
      "
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.png"}
          alt={project.title}
          className="
            w-full
            h-56
            object-cover
            group-hover:scale-105
            transition
            duration-500
          "
        />

        {project.featured && (
          <div className="absolute top-4 right-4 bg-yellow-500 text-black rounded-full p-2">
            <Star size={18} fill="currentColor" />
          </div>
        )}
      </div>

      {/* Body */}

      <div className="p-6">
        <h2 className="text-2xl font-bold text-white">{project.title}</h2>

        <p className="text-slate-400 mt-3 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-5">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">
            {project.tech_stack}
          </span>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex gap-3">
            {project.github_link && (
              <a
                href={project.github_link}
                target="_blank"
                rel="noreferrer"
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-slate-800
                  hover:bg-cyan-500
                  flex
                  items-center
                  justify-center
                  transition
                "
              >
                <Github size={18} />
              </a>
            )}

            {project.live_link && (
              <a
                href={project.live_link}
                target="_blank"
                rel="noreferrer"
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-slate-800
                  hover:bg-green-500
                  flex
                  items-center
                  justify-center
                  transition
                "
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>

          <button
            onClick={() => onEdit(project)}
            className="
              px-5
              py-2
              rounded-xl
              bg-cyan-500
              hover:bg-cyan-600
              transition
              font-medium
            "
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
