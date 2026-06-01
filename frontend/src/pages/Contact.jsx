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


<div className="text-center mb-20">
  <p className="text-cyan-400 uppercase tracking-[5px] text-sm">Contact</p>

  <h1 className="text-5xl md:text-7xl font-black mt-5">Let's Work Together</h1>

  <p className="text-zinc-400 max-w-3xl mx-auto mt-6 text-lg leading-8">
    Open for freelance work, internships and exciting collaborations.
  </p>

  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-400/20 mt-8">
    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>

    <span className="text-cyan-300">Available for Freelance & Internships</span>
  </div>
</div>;

<div className="grid grid-cols-3 gap-4 mb-16">
  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
    <h3 className="text-3xl font-black text-cyan-400">20+</h3>
    <p className="text-zinc-400 mt-2">Projects</p>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
    <h3 className="text-3xl font-black text-cyan-400">2+</h3>
    <p className="text-zinc-400 mt-2">Years Learning</p>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
    <h3 className="text-3xl font-black text-cyan-400">100%</h3>
    <p className="text-zinc-400 mt-2">Dedication</p>
  </div>
</div>;

<div className="grid grid-cols-2 gap-4 mb-10">
  <a
    href="mailto:danish.sab05@gmail.com"
    className="
    bg-linear-to-r
    from-cyan-500/10
    to-teal-500/10
    border border-cyan-400/20
    rounded-3xl
    p-5
    "
  >
    <h3 className="font-bold">Email Me</h3>

    <p className="text-zinc-400 text-sm mt-2">Fast Response</p>
  </a>

  <a
    href="https://wa.me/918294534533"
    target="_blank"
    rel="noreferrer"
    className="
    bg-linear-to-r
    from-green-500/10
    to-emerald-500/10
    border border-green-400/20
    rounded-3xl
    p-5
    "
  >
    <h3 className="font-bold">WhatsApp</h3>

    <p className="text-zinc-400 text-sm mt-2">Instant Chat</p>
  </a>
</div>;



