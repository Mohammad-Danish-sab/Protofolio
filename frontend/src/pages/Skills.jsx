import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiExpress,
  SiFastapi,
  SiTailwindcss,
  SiCanva,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, level: 98 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 95 },
      { name: "JavaScript", icon: <FaJs />, level: 92 },
      { name: "React.js", icon: <FaReact />, level: 95 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 96 },
    ],
  },

  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 90 },
      { name: "Express.js", icon: <SiExpress />, level: 88 },
      { name: "FastAPI", icon: <SiFastapi />, level: 90 },
    ],
  },

  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: "C", level: 85 },
      { name: "C++", icon: "C++", level: 88 },
      { name: "Python", icon: <FaPython />, level: 92 },
      { name: "JavaScript", icon: <FaJs />, level: 92 },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 84 },
      { name: "MySQL", icon: <SiMysql />, level: 86 },
    ],
  },

  {
    title: "Tools & Design",
    skills: [
      { name: "GitHub", icon: <FaGithub />, level: 92 },
      { name: "Git", icon: <FaGitAlt />, level: 88 },
      { name: "Postman", icon: <SiPostman />, level: 90 },
      { name: "VS Code", icon: <VscVscode />, level: 96,},
      { name: "Canva", icon: <SiCanva />, level: 85 },
      { name: "Figma", icon: <FaFigma />, level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-[#405092] text-white pt-36 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[5px] text-sm">
            Expertise
          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-5">
            Technical Skills
          </h1>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Frontend, Backend, Databases, APIs and Modern Development Tools.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {[
            ["20+", "Projects"],
            ["12+", "Technologies"],
            ["5+", "Frameworks"],
            ["2+", "Databases"],
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="
              bg-white/5
              border border-white/10
              rounded-[30px]
              p-8
              text-center
              backdrop-blur-xl
              "
            >
              <h3 className="text-5xl font-black text-cyan-400">{item[0]}</h3>

              <p className="text-zinc-400 mt-2">{item[1]}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="
              bg-white/5
              border border-white/10
              rounded-[40px]
              p-8
              backdrop-blur-xl
              "
            >
              <h2 className="text-3xl font-black text-cyan-400 mb-8">
                {category.title}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                    }}
                    className="
                    bg-[#0d0d0d]
                    border border-white/10
                    rounded-3xl
                    p-6
                    "
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className="text-4xl text-cyan-400">{skill.icon}</div>

                      <div>
                        <h3 className="font-bold text-xl">{skill.name}</h3>

                        <p className="text-zinc-500 text-sm">
                          {skill.level}% Proficiency
                        </p>
                      </div>
                    </div>

                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        transition={{ duration: 1 }}
                        className="
                        h-full
                        rounded-full
                        bg-linear-to-r
                        from-cyan-500
                        to-teal-500
                        "
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
