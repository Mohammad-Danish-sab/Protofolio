import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Development",
    icon: "🎨",
    popular: true,
    description:
      "Modern responsive websites with premium UI/UX and smooth animations.",
    features: [
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
      "Framer Motion",
    ],
  },

  {
    title: "Backend Development",
    icon: "⚙️",
    description:
      "Scalable backend systems using FastAPI, Node.js and REST APIs.",
    features: ["FastAPI", "Node.js", "Authentication", "API Integration"],
  },

  {
    title: "AI Applications",
    icon: "🤖",
    popular: true,
    description:
      "AI-powered applications with machine learning and intelligent automation.",
    features: [
      "Machine Learning",
      "Prediction Systems",
      "Chatbots",
      "Analytics Dashboard",
    ],
  },

  {
    title: "UI/UX Design",
    icon: "✨",
    description: "Beautiful futuristic interfaces focused on user experience.",
    features: ["Figma Design", "Wireframes", "Prototypes", "Modern UI"],
  },

  {
    title: "Full Stack Applications",
    icon: "🚀",
    description:
      "Complete full-stack applications with frontend, backend and database.",
    features: ["React + FastAPI", "Authentication", "Dashboard", "Deployment"],
  },

  {
    title: "Portfolio Websites",
    icon: "💼",
    description:
      "Premium portfolio websites for developers, students and professionals.",
    features: [
      "Modern Design",
      "Projects Showcase",
      "Resume Download",
      "Contact Forms",
    ],
  },
];


export default function Services() {
  const handleContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen bg-[#070707] text-white pt-36 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[5px] text-sm">
            Services
          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-5">What I Offer</h1>

          <p className="text-zinc-400 max-w-3xl mx-auto mt-6 text-lg leading-8">
            Building modern web applications, AI systems and scalable backend
            solutions with premium user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {[
            { value: "15+", label: "Projects Completed" },
            { value: "10+", label: "Technologies" },
            { value: "6+", label: "Services" },
            { value: "100%", label: "Dedication" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-6
                text-center
                backdrop-blur-xl
              "
            >
              <h2 className="text-4xl font-black text-cyan-400">
                {item.value}
              </h2>

              <p className="text-zinc-400 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                relative
                bg-white/5
                border border-white/10
                rounded-[35px]
                p-8
                backdrop-blur-xl
                overflow-hidden
                group
              "
            >
              <div
                className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all duration-500
                  bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_50%)]
                "
              />

              {service.popular && (
                <div
                  className="
                    absolute
                    top-5
                    right-5
                    px-3
                    py-1
                    rounded-full
                    bg-cyan-500
                    text-black
                    text-xs
                    font-bold
                  "
                >
                  Popular
                </div>
              )}

              <div className="relative z-10">
                <div className="text-7xl mb-8">{service.icon}</div>

                <h2 className="text-3xl font-black">{service.title}</h2>

                <p className="text-zinc-400 leading-8 mt-5">
                  {service.description}
                </p>

                <div className="mt-8 space-y-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />

                      <span className="text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleContact}
                  className="
                    mt-10
                    w-full
                    py-4
                    rounded-2xl
                    bg-linear-to-r
                    from-cyan-500
                    to-teal-500
                    font-semibold
                    hover:scale-105
                    transition-all duration-300
                  "
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-28">
          <h2 className="text-4xl md:text-5xl font-black text-center">
            My Working Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {[
              "Requirement Analysis",
              "UI/UX Planning",
              "Development",
              "Testing & Deployment",
            ].map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="
                  bg-white/5
                  border border-white/10
                  rounded-3xl
                  p-6
                  text-center
                "
              >
                <div
                  className="
                    w-14 h-14
                    mx-auto
                    rounded-full
                    bg-linear-to-r
                    from-cyan-500
                    to-teal-500
                    flex items-center
                    justify-center
                    font-bold
                    text-xl
                    mb-5
                  "
                >
                  {index + 1}
                </div>

                <h3 className="font-semibold">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        <div
          className="
            mt-28
            rounded-[40px]
            border border-cyan-400/20
            bg-linear-to-r
            from-cyan-500/10
            to-teal-500/10
            p-12
            text-center
          "
        >
          <h2 className="text-4xl md:text-6xl font-black">
            Ready To Build Something Amazing?
          </h2>

          <p className="text-zinc-400 max-w-3xl mx-auto mt-6 text-lg leading-8">
            Let's work together to create modern web applications, AI-powered
            systems and premium digital experiences.
          </p>

          <button
            onClick={handleContact}
            className="
              mt-10
              px-10
              py-4
              rounded-2xl
              bg-linear-to-r
              from-cyan-500
              to-teal-500
              font-semibold
              hover:scale-105
              transition-all duration-300
            "
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}

