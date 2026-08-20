import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Code2, Images } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { fetchProjectById } from "../services/api";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const getImageUrl = (path) => {
  if (!path) return "";
  return path.startsWith("http") ? path : `${API_BASE_URL}${path}`;
};

export const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProject = async () => {
      try {
        const res = await fetchProjectById(id);
        const data = res.data;
        setProject(data);

        // Pick cover image or first screenshot as active display image
        const initialImg = data.image_url || data.screenshots?.[0] || null;
        setSelectedImage(initialImg);
      } catch (err) {
        console.error("Error fetching project details:", err);
      } finally {
        setLoading(false);
      }
    };
    getProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center text-gray-600">
        Loading project details...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#faf9f7] flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Project Not Found</h2>
        <Link
          to="/"
          className="text-[#B95712] underline flex items-center gap-2 font-medium"
        >
          <ArrowLeft size={18} /> Back to Projects
        </Link>
      </div>
    );
  }

  const tags = project.technologies || project.tags || [];
  const allImages = [
    ...(project.image_url ? [project.image_url] : []),
    ...(project.screenshots || []),
  ];

  return (
    <div className="min-h-screen bg-[#faf9f7] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#B95712] font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl border border-gray-200 shadow-md p-8 md:p-10"
        >
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="text-sm font-mono text-[#B95712] px-3.5 py-1 rounded-full bg-[#B95712]/10 border border-[#B95712]/20 font-semibold">
              {project.category}
            </span>

            <div className="flex items-center gap-3">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all text-sm"
                >
                  <FaGithub size={16} /> Repository
                </a>
              )}
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#B95712] text-white rounded-xl font-medium hover:bg-[#a04a0e] transition-all text-sm shadow-sm"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {project.title}
          </h1>

          {/* Active Image Viewer */}
          {selectedImage && (
            <div className="w-full h-[350px] md:h-[480px] rounded-2xl overflow-hidden mb-4 border border-gray-200 bg-gray-100">
              <img
                src={getImageUrl(selectedImage)}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Screenshot Thumbnails List */}
          {allImages.length > 1 && (
            <div className="mb-8">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Images size={14} /> Gallery ({allImages.length})
              </h4>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {allImages.map((imgUrl, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      selectedImage === imgUrl
                        ? "border-[#B95712] scale-105 shadow-md"
                        : "border-gray-200 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={getImageUrl(imgUrl)}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="prose max-w-none text-gray-700 leading-relaxed mb-8 space-y-4">
            <h3 className="text-xl font-bold text-gray-900">
              About the Project
            </h3>
            <p className="whitespace-pre-line text-base">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Tags */}
          {tags.length > 0 && (
            <div className="pt-6 border-t border-gray-100">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Code2 size={16} className="text-[#B95712]" /> Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-gray-700 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
