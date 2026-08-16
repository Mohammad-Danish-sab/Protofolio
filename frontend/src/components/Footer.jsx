import React from "react";
import { Code2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-12 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-black font-extrabold">
            <Code2 size={18} />
          </div>
          <span className="font-bold text-white tracking-wider">
            DEV<span className="text-cyan-400">.AI</span>
          </span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Alex Vance. Built with React & FastAPI.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg glass-panel text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg glass-panel text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg glass-panel text-gray-400 hover:text-white transition-colors"
          >
            <FaXTwitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
