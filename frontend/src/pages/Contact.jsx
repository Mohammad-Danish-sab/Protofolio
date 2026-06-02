import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaTag,
  FaCommentDots,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#070707] text-white pt-36 pb-20 px-6 overflow-hidden relative">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[5px] text-sm">
            Contact
          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-5">
            Let's Work Together
          </h1>

          <p className="text-zinc-400 max-w-3xl mx-auto mt-6 text-lg leading-8">
            Open for freelance work, internships and exciting collaborations.
          </p>

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-400/20 mt-8">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>

            <span className="text-cyan-300">
              Available for Freelance & Internships
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center backdrop-blur-xl">
            <h3 className="text-3xl font-black text-cyan-400">20+</h3>
            <p className="text-zinc-400 mt-2">Projects</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center backdrop-blur-xl">
            <h3 className="text-3xl font-black text-cyan-400">2+</h3>
            <p className="text-zinc-400 mt-2">Years Learning</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center backdrop-blur-xl">
            <h3 className="text-3xl font-black text-cyan-400">100%</h3>
            <p className="text-zinc-400 mt-2">Dedication</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl"
          >
            <h2 className="text-4xl font-black">Contact Information</h2>

            {/* Quick Contact */}
            <div className="grid grid-cols-2 gap-4 mt-8 mb-10">
              <a
                href="mailto:danish.sab05@gmail.com"
                className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-400/20 rounded-3xl p-5"
              >
                <h3 className="font-bold">Email Me</h3>

                <p className="text-zinc-400 text-sm mt-2">Fast Response</p>
              </a>

              <a
                href="https://wa.me/918294534533"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/20 rounded-3xl p-5"
              >
                <h3 className="font-bold">WhatsApp</h3>

                <p className="text-zinc-400 text-sm mt-2">Instant Chat</p>
              </a>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-5 p-5 rounded-3xl bg-white/5 border border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-zinc-500">Email</p>
                  <h3 className="font-semibold">danish.sab05@gmail.com</h3>
                </div>
              </div>

              <div className="flex items-center gap-5 p-5 rounded-3xl bg-white/5 border border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <FaWhatsapp />
                </div>

                <div>
                  <p className="text-zinc-500">WhatsApp</p>
                  <h3 className="font-semibold">+91 8294534533</h3>
                </div>
              </div>

              <div className="flex items-center gap-5 p-5 rounded-3xl bg-white/5 border border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-zinc-500">Location</p>
                  <h3 className="font-semibold">India</h3>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-10">
              <a
                href="https://github.com/Mohammad-Danish-sab"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 rounded-3xl bg-slate-800 flex items-center justify-center text-2xl hover:scale-110 transition-all"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/mohammad-danish14"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 rounded-3xl bg-blue-600 flex items-center justify-center text-2xl hover:scale-110 transition-all"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://wa.me/918294534533"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 rounded-3xl bg-green-500 flex items-center justify-center text-2xl hover:scale-110 transition-all"
              >
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl"
          >
            <h2 className="text-4xl font-black">Send Message</h2>

            <div className="space-y-6 mt-10">
              <div className="relative">
                <FaUser className="absolute left-5 top-5 text-cyan-400" />

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-14 py-4 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-5 top-5 text-cyan-400" />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-14 py-4 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400"
                />
              </div>

              <div className="relative">
                <FaTag className="absolute left-5 top-5 text-cyan-400" />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full pl-14 py-4 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400"
                />
              </div>

              <div className="relative">
                <FaCommentDots className="absolute left-5 top-5 text-cyan-400" />

                <textarea
                  rows="7"
                  placeholder="Write your message..."
                  className="w-full pl-14 py-4 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 font-bold text-lg hover:scale-[1.02] transition-all">
                Send Message
              </button>

              <a
                href="https://wa.me/918294534533"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-green-500 font-bold hover:bg-green-600 transition-all"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-[40px] overflow-hidden border border-white/10">
          <iframe
            title="location"
            src="https://maps.google.com/maps?q=India&t=&z=4&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
