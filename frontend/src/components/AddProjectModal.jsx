import React, { useState } from "react";
import { X, Upload, Lock } from "lucide-react";
import { createProject } from "../services/api";

export const AddProjectModal = ({ isOpen, onClose, onProjectAdded }) => {
  const [adminKey, setAdminKey] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Full Stack");
  const [technologies, setTechnologies] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [coverFile, setCoverFile] = useState(null);
  const [screenshotFiles, setScreenshotFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const formData = new FormData();
      formData.append("admin_key", adminKey); // Uses state input value
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);

      const techArray = technologies
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      formData.append("technologies", JSON.stringify(techArray));

      if (githubUrl) formData.append("github_url", githubUrl);
      if (liveUrl) formData.append("live_url", liveUrl);
      if (coverFile) formData.append("image", coverFile);

      screenshotFiles.forEach((file) => {
        formData.append("screenshots", file);
      });

      await createProject(formData);
      onProjectAdded();
      onClose();
    } catch (err) {
      console.error("Upload Error:", err);
      if (err.response?.status === 401) {
        setErrorMsg("Galat Admin Passcode! Inaccessible for non-admins.");
      } else {
        setErrorMsg("Failed to upload. Please check backend connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-xl shadow-2xl my-8 relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-red-900 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-red-900 flex items-center gap-2">
          <Lock size={22} className="text-[#B95712]" /> Admin Upload
        </h2>

        {errorMsg && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-red-600 mb-1">
              Admin Security Passcode *
            </label>
            <input
              type="password"
              required
              placeholder="Default: admin123"
              className="w-full p-3 border border-red-200 rounded-xl text-sm outline-none focus:border-red-500 bg-red-50/30 text-red-600 font-medium placeholder-gray-400"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-red-700 mb-1">
              Project Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Portfolio Website"
              className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#B95712] text-red-600 font-medium placeholder-gray-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Category
              </label>
              <select
                className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#B95712] bg-white text-red-600 font-medium"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Full Stack">Full Stack</option>
                <option value="AI / ML">AI / ML</option>
                <option value="Automation">Automation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Tech Stack (comma separated)
              </label>
              <input
                type="text"
                placeholder="React, FastAPI, PostgreSQL"
                className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#B95712] text-red-600 font-medium placeholder-gray-400"
                value={technologies}
                onChange={(e) => setTechnologies(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              required
              rows={3}
              placeholder="Project explanation..."
              className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#B95712] text-red-600 font-medium placeholder-gray-400"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Cover Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-2 border border-gray-200 rounded-xl text-sm text-red-600"
              onChange={(e) => setCoverFile(e.target.files[0])}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Screenshots (Multiple)
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              className="w-full p-2 border border-gray-200 rounded-xl text-sm text-red-600"
              onChange={(e) => setScreenshotFiles(Array.from(e.target.files))}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="url"
              placeholder="GitHub Repo URL"
              className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#B95712] text-red-600 font-medium placeholder-gray-400"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
            />
            <input
              type="url"
              placeholder="Live Demo URL"
              className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#B95712] text-red-600 font-medium placeholder-gray-400"
              value={liveUrl}
              onChange={(e) => setLiveUrl(e.target.value)}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 bg-[#B95712] text-white rounded-xl text-sm font-medium hover:bg-[#a04a0e] transition-all disabled:opacity-50 flex items-center gap-2"
            >
              <Upload size={16} />
              {loading ? "Uploading..." : "Publish Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
