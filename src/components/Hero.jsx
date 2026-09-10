
import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Globe2,
  Layers,
  Users,
} from "lucide-react";

const trustIndicators = [
  {
    icon: Layers,
    label: "7+ real-world projects built",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-400/15",
    iconBorder: "border-violet-300/30",
  },
  {
    icon: Users,
    label: "Full Stack / MERN Developer",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-400/15",
    iconBorder: "border-cyan-300/30",
  },
  {
    icon: Globe2,
    label: "Production-ready web applications",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/15",
    iconBorder: "border-emerald-300/30",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="
        relative
        isolate
        h-[680px]
        overflow-hidden
        pt-[115px]
        pb-10
        sm:h-[700px]
        sm:pt-[125px]
        lg:h-[700px]
        lg:min-h-0
        lg:pt-[125px]
        lg:pb-10
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-30
          overflow-hidden
        "
        animate={{
          scale: [1, 1.018, 1.008, 1.02, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <img
          src="/images/zenvix-hero.webp"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </motion.div>

      {/* ================= GRADIENT OVERLAY ================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
        "
        style={{
          background:
            "linear-gradient(90deg, rgba(15, 23, 42, 0.68) 0%, rgba(15, 23, 42, 0.52) 30%, rgba(15, 23, 42, 0.18) 62%, rgba(15, 23, 42, 0.03) 100%)",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          w-full
          max-w-full
          px-[30px]
          sm:px-[40px]
          lg:px-[50px]
        "
      >
        <div className="flex w-full items-center">
          <div className="w-full max-w-[580px]">

            {/* ================= EYEBROW ================= */}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="
                mb-4
                inline-flex
                items-center
                gap-2
                rounded-md
                bg-white/10
                px-3
                py-1
                backdrop-blur-sm
              "
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-sky-400"
              />

              <span className="text-[12px] font-bold uppercase tracking-widest text-white">
                Full Stack Developer · MERN
              </span>
            </motion.div>

            {/* ================= MAIN HEADING ================= */}

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="
                text-[38px]
                font-[900]
                leading-[1.1]
                tracking-tight
                text-white
                drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]
                sm:text-[46px]
                lg:text-[52px]
              "
            >
              Hi, I'm{" "}
              <span className="text-sky-400">Md Tauseef</span>. I build
              modern web experiences.
            </motion.h1>

            {/* ================= DESCRIPTION ================= */}

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="
                mt-4
                max-w-[500px]
                text-[15px]
                font-normal
                leading-relaxed
                text-slate-100/90
                drop-shadow-sm
              "
            >
              I'm a{" "}
              <strong className="font-semibold text-white">
                Full Stack / MERN Stack Developer
              </strong>{" "}
              specializing in React.js, Node.js, Express.js, and MongoDB. I
              build modern, scalable, responsive, and production-ready web
              applications that solve real business problems.
            </motion.p>

            {/* ================= ACTION BUTTONS ================= */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="
                mt-7
                flex
                flex-col
                gap-3.5
                sm:flex-row
                sm:items-center
              "
            >
              {/* VIEW MY WORK */}

              <div className="relative">
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -inset-3
                    rounded-xl
                    bg-blue-500/20
                    blur-xl
                  "
                />

                <a
                  href="#projects"
                  className="
                    relative
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    bg-[#1e293b]
                    px-6
                    py-3.5
                    text-[14px]
                    font-semibold
                    text-white
                    shadow-[0_0_24px_rgba(59,130,246,0.18)]
                    transition-all
                    duration-200
                    hover:bg-[#0f172a]
                    hover:shadow-[0_0_30px_rgba(59,130,246,0.32)]
                  "
                >
                  View My Work

                  <ArrowRight
                    aria-hidden="true"
                    size={16}
                  />
                </a>
              </div>

              {/* LET'S WORK TOGETHER */}

              <div className="relative">
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -inset-3
                    rounded-xl
                    bg-cyan-400/15
                    blur-xl
                  "
                />

                <a
                  href="#contact"
                  className="
                    relative
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    border
                    border-white/40
                    bg-white/10
                    px-6
                    py-3.5
                    text-[14px]
                    font-semibold
                    text-white
                    backdrop-blur-md
                    shadow-[0_0_24px_rgba(34,211,238,0.12)]
                    transition-all
                    duration-200
                    hover:bg-white/20
                    hover:shadow-[0_0_30px_rgba(34,211,238,0.24)]
                  "
                >
                  <PlayCircle
                    aria-hidden="true"
                    size={18}
                    className="text-white"
                  />

                  Let's Work Together
                </a>
              </div>
            </motion.div>

            {/* ================= TRUST INDICATORS ================= */}

            <motion.ul
              aria-label="Professional highlights"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-2.5
                pt-2
              "
            >
              {trustIndicators.map(
                ({
                  icon: Icon,
                  label,
                  iconColor,
                  iconBg,
                  iconBorder,
                }) => (
                  <li
                    key={label}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-md
                      border
                      border-white/30
                      bg-white/15
                      px-3.5
                      py-1.5
                      backdrop-blur-md
                    "
                  >
                    <span
                      aria-hidden="true"
                      className={`
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        border
                        ${iconBg}
                        ${iconBorder}
                      `}
                    >
                      <Icon
                        aria-hidden="true"
                        size={14}
                        className={iconColor}
                        strokeWidth={2.5}
                      />
                    </span>

                    <span className="text-[12px] font-medium text-white">
                      {label}
                    </span>
                  </li>
                )
              )}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
