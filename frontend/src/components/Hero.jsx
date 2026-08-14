import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Hello, I'm
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
            FULL STACK <br />
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              SOFTWARE & AI
            </span>{" "}
            <br />
            ENGINEER
          </h1>

          <p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
            Building scalable web applications, intelligent AI solutions, and
            full-stack automation platforms with high performance and modern
            architectural principles.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold flex items-center justify-center gap-2 hover:shadow-glow-cyan transition-all duration-300"
            >
              View My Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-gray-300 font-semibold hover:text-white hover:border-gray-600 transition-all text-center"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Hero Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-5"
        >
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-cyan-500/20 via-violet-500/20 to-transparent">
            <div className="glass-panel rounded-xl p-6 border border-gray-800 shadow-2xl">
              <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                  <Terminal size={14} /> portfolio.py
                </div>
              </div>

              <pre className="font-mono text-xs text-gray-300 overflow-x-auto leading-relaxed">
                <code>{`class Developer:
    def __init__(self):
        self.name = "Alex Vance"
        self.role = "Full Stack & AI Engineer"
        self.stack = ["React", "FastAPI", "PyTorch"]
        
    def status(self):
        return "Ready to build innovative systems."

dev = Developer()
print(dev.status())`}</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
