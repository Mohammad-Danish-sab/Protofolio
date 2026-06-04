import { motion } from "framer-motion";

import { FaReact, FaNodeJs, FaPython, FaDownload } from "react-icons/fa";

import { SiFastapi, SiMongodb, SiTailwindcss } from "react-icons/si";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import img1 from "../assets/Images/img1.jpeg";
import img2 from "../assets/Images/img2.jpeg";
import img3 from "../assets/Images/img3.jpeg";
import img4 from "../assets/Images/img4.jpeg";
import img5 from "../assets/Images/img5.jpeg";
import img6 from "../assets/Images/img6.jpeg";
import img7 from "../assets/Images/img7.jpeg";

const achievements = [
  { number: "20+", title: "Projects" },
  { number: "10+", title: "Technologies" },
  { number: "2+", title: "Years Learning" },
  { number: "100%", title: "Dedication" },
];

const services = [
  "Frontend Development",
  "Backend Development",
  "Full-Stack Development",
  "AI Powered Applications",
];

const techStack = [
  {
    icon: <FaReact />,
    name: "React",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
  },
  {
    icon: <FaPython />,
    name: "Python",
  },
  {
    icon: <SiFastapi />,
    name: "FastAPI",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
  },
];

const galleryImages = [img1, img2, img3, img4, img5, img6, img7];

export default function About() {
  return (
    <div className="min-h-screen bg-[#070707] text-white relative overflow-hidden pt-36 pb-20 px-6">
      <div
        className="
        absolute inset-0
        opacity-[0.03]
        bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)]
        bg-size-[60px_60px]
        "
      />

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
             rounded-[40px]
             bg-white/5
             border border-cyan-400/20
             p-5
             backdrop-blur-xl
             shadow-[0_0_40px_rgba(6,182,212,0.15)]
             "
          >
            <Swiper
              modules={[Autoplay, EffectCoverflow, Pagination]}
              effect="coverflow"
              centeredSlides={true}
              slidesPerView={1}
              loop={true}
              grabCursor={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 10,
                stretch: 0,
                depth: 120,
                modifier: 2,
                slideShadows: false,
              }}
            >
              {galleryImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative overflow-hidden rounded-[30px]">
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="
            w-full
            h-100
            object-cover
            rounded-[30px]
            transition-all
            duration-500
            hover:scale-105
            "
                    />

                    <div
                      className="
            absolute
            inset-0
            bg-linear-to-t
            from-black/60
            via-transparent
            to-transparent
            "
                    />

                    <div className="absolute bottom-8 left-8">
                      <h3 className="text-3xl font-bold text-white">
                        Full Stack Developer
                      </h3>

                      <p className="text-zinc-300 mt-2">
                        Building Modern Web Applications
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-cyan-400 uppercase tracking-[5px]">About Me</p>

            <h1 className="text-6xl font-black mt-5">Full Stack Developer</h1>

            <p className="text-zinc-400 mt-8 text-lg leading-8">
              Passionate Computer Science Engineering student and aspiring
              Full-Stack Developer focused on building modern web applications,
              scalable backend systems, and AI-driven solutions. Skilled in
              React, JavaScript, Node.js, SQL, and C++. Dedicated to continuous
              learning, problem-solving, and creating innovative, user-friendly
              digital experiences that deliver real-world impact.
            </p>

            <a
              href="/resume.pdf"
              download
              className="
              inline-flex
              items-center
              gap-3
              mt-10
              px-8
              py-4
              rounded-2xl
              bg-linear-to-r
              from-cyan-500
              to-teal-500
              "
            >
              <FaDownload />
              Download Resume
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">
          <motion.div
            whileHover={{ y: -8 }}
            className="
            rounded-[35px]
            bg-white/5
            border border-white/10
            p-8
            "
          >
            <h2 className="text-3xl font-black mb-6">Who I Am</h2>

            <p className="text-zinc-400 leading-8">
              I'm Mohammad Danish, a Computer Science Engineering student and
              aspiring Full-Stack Developer with a passion for creating
              innovative digital experiences. I specialize in developing modern
              web applications, designing scalable backend systems, and
              exploring AI-driven technologies. With a strong foundation in
              React, JavaScript, Node.js, SQL, and C++, I enjoy building
              solutions that are both visually appealing and technically robust.
              My focus is on continuous learning, problem-solving, and
              delivering high-quality software that provides real value to
              users. I am actively expanding my expertise in Artificial
              Intelligence, and advanced software development practices to
              prepare for the next generation of technology-driven challenges.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="
            rounded-[35px]
            bg-white/5
            border border-white/10
            p-8
            "
          >
            <h2 className="text-3xl font-black mb-6">What I Do</h2>

            <div className="space-y-4">
              {services.map((item, i) => (
                <div
                  key={i}
                  className="
                  flex items-center gap-3
                  p-3
                  rounded-2xl
                  bg-cyan-500/5
                  border border-cyan-400/10
                  "
                >
                  <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
              rounded-[35px]
              bg-linear-to-br
              from-cyan-500/10
              to-teal-500/5
              border border-cyan-400/10
              p-8
              text-center
              "
            >
              <h2 className="text-5xl font-black text-cyan-400">
                {item.number}
              </h2>

              <p className="text-zinc-400 mt-3">{item.title}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <h2 className="text-4xl font-black text-center">
            Favorite Technologies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {techStack.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                className="
                rounded-[30px]
                bg-white/5
                border border-white/10
                p-6
                text-center
                "
              >
                <div className="text-5xl text-cyan-400 flex justify-center">
                  {item.icon}
                </div>

                <p className="mt-4 font-semibold">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-4xl font-black text-center mb-12">
            Why Hire Me?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Clean & Maintainable Code",
              "Scalable Backend Systems",
              "Problem Solving",
              "Quick learner with a growth mindset and eagerness to improve continuously.",
              "Committed to continuous learning and staying updated with industry trends.",
              "Dedicated to delivering high-quality solutions that create real value for users.",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="
                rounded-[35px]
                bg-white/5
                border border-white/10
                p-8
                text-center
                "
              >
                <div className="text-5xl mb-5">⚡</div>

                <h3 className="text-2xl font-bold">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}