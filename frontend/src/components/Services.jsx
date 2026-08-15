import React from "react";
import { motion } from "framer-motion";
import { Code, Bot, Workflow, Layers } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full Stack Development",
    description:
      "Building modern, high-performance web applications using React, Tailwind CSS, and FastAPI.",
  },
  {
    icon: Bot,
    title: "AI / Machine Learning",
    description:
      "Integrating custom computer vision, NLP models, and AI pipelines into business systems.",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description:
      "Automating repetitive workflows using Python, custom microservices, and asynchronous tasks.",
  },
  {
    icon: Layers,
    title: "API & Microservices",
    description:
      "Designing secure, scalable, and documented RESTful APIs powered by FastAPI and PostgreSQL.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            Offerings
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            Services & Capabilities
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl border border-gray-800 hover:border-violet-500/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 text-cyan-400 border border-cyan-500/20 w-fit mb-6 group-hover:scale-110 transition-transform">
                  <ServiceIcon size={26} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
