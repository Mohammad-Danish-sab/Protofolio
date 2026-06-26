import { useState } from "react";
import { motion } from "framer-motion";
import API from "../api/api";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await API.post("/contact", formData);

      setSuccess("✅ Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setLoading(false);
    } catch (error) {
      console.log(error);
      setSuccess("❌ Failed to send message.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white pt-36 pb-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 blur-[150px] rounded-full"></div>

      <div
        className="
        absolute inset-0
        opacity-[0.03]
        bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)]
        bg-[size:60px_60px]
        "
      />

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

        <div className="grid grid-cols-3 gap-4 mb-16">
          {[
            ["20+", "Projects"],
            ["2+", "Years Learning"],
            ["100%", "Dedication"],
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center"
            >
              <h3 className="text-3xl font-black text-cyan-400">{item[0]}</h3>

              <p className="text-zinc-400 mt-2">{item[1]}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="
            bg-white/5
            border border-white/10
            rounded-[40px]
            p-8
            backdrop-blur-xl
            "
          >
            <div className="grid grid-cols-2 gap-4 mb-10">
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

            <div className="space-y-6">
              {[
                {
                  icon: <FaEnvelope />,
                  title: "Email",
                  value: "danish.sab05@gmail.com",
                },
                {
                  icon: <FaWhatsapp />,
                  title: "WhatsApp",
                  value: "+91 8294534533",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Location",
                  value: "India",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                  flex items-center gap-5
                  p-5
                  rounded-3xl
                  bg-white/5
                  border border-white/10
                  "
                >
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xl">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-zinc-500">{item.title}</p>

                    <h3 className="text-xl font-semibold">{item.value}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}

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

          {/* Right Side Form */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="
            bg-white/5
            border border-white/10
            rounded-[40px]
            p-8
            backdrop-blur-xl
            "
          >
            <h2 className="text-4xl font-black mb-8">Send Message</h2>

            <div className="space-y-6">
              <div className="relative">
                <FaUser className="absolute left-5 top-5 text-cyan-400" />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full pl-14 py-4 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-5 top-5 text-cyan-400" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full pl-14 py-4 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400"
                />
              </div>

              <div className="relative">
                <FaTag className="absolute left-5 top-5 text-cyan-400" />

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full pl-14 py-4 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400"
                />
              </div>

              <div className="relative">
                <FaCommentDots className="absolute left-5 top-5 text-cyan-400" />

                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className="w-full pl-14 py-4 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="
                w-full
                py-5
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-teal-500
                font-bold
                text-lg
                hover:scale-[1.02]
                transition-all
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-center text-cyan-400">{success}</p>
              )}

              <a
                href="https://wa.me/918294534533"
                target="_blank"
                rel="noreferrer"
                className="
                w-full
                flex
                items-center
                justify-center
                gap-3
                py-5
                rounded-2xl
                bg-green-500
                font-bold
                hover:scale-[1.02]
                transition-all
                "
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>
            </div>
          </motion.form>
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
