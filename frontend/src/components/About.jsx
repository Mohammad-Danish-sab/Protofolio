import React from "react";
import { motion } from "framer-motion";
import { Download, Briefcase, Award, Cpu } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "10+", icon: Award },
  { label: "Years Experience", value: "3+", icon: Briefcase },
  { label: "Core Tech Stack", value: "8+", icon: Cpu },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Gradient Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-600 blur opacity-40 group-hover:opacity-75 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden glass-panel border border-gray-800 p-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Developer Profile"
                  className="w-full max-w-sm rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
              About Me
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Engineering Intelligent Web Platforms & AI Automations
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              I am a Full Stack Developer and AI Systems Engineer passionate
              about bridging high-performance web applications with modern
              machine learning workflows.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              My core focus is delivering production-grade architectures using
              React, FastAPI, Python, and PostgreSQL—creating responsive
              frontend experiences backed by robust, scalable microservices.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="glass-panel p-4 rounded-xl border border-gray-800 text-center"
                  >
                    <Icon size={20} className="text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Hire Me
              </a>
              <a
                href="#"
                className="px-6 py-3 rounded-xl glass-panel text-gray-300 font-semibold border border-gray-800 hover:text-white flex items-center gap-2 transition-all"
              >
                <Download size={18} /> Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
