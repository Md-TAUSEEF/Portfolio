
import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  ArrowRight,
  User,
  Briefcase,
  Cpu,
  MapPin,
  Target,
  Code2,
  Sparkles,
  MonitorSmartphone,
  ServerCog,
  Database,
  Rocket,
  Handshake,
} from "lucide-react";

export default function About() {
  const highlights = [
    {
      text: "Full Stack & MERN Stack Development",
      icon: Code2,
      iconColor: "text-violet-600",
      iconBg: "bg-violet-50",
      iconBorder: "border-violet-100",
    },
    {
      text: "Responsive & Clean User Interfaces",
      icon: MonitorSmartphone,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      iconBorder: "border-blue-100",
    },
    {
      text: "Scalable Backend APIs & Architecture",
      icon: ServerCog,
      iconColor: "text-teal-600",
      iconBg: "bg-teal-50",
      iconBorder: "border-teal-100",
    },
    {
      text: "Database Design & Integration",
      icon: Database,
      iconColor: "text-orange-600",
      iconBg: "bg-orange-50",
      iconBorder: "border-orange-100",
    },
    {
      text: "Production Deployment & Optimization",
      icon: Rocket,
      iconColor: "text-rose-600",
      iconBg: "bg-rose-50",
      iconBorder: "border-rose-100",
    },
    {
      text: "Client-Focused Business Solutions",
      icon: Handshake,
      iconColor: "text-amber-600",
      iconBg: "bg-amber-50",
      iconBorder: "border-amber-100",
    },
  ];

  const profileItems = [
    {
      icon: User,
      label: "Role",
      value: "Full Stack / MERN Stack Developer",
      iconColor: "text-violet-600",
      iconBg: "bg-violet-50",
      iconBorder: "border-violet-100",
    },
    {
      icon: Briefcase,
      label: "Projects",
      value: "10+ Real-World Projects Built",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      iconBorder: "border-blue-100",
    },
    {
      icon: Cpu,
      label: "Primary Stack",
      value: "React.js / Node.js / Express.js / MongoDB",
      iconColor: "text-teal-600",
      iconBg: "bg-teal-50",
      iconBorder: "border-teal-100",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India · Remote & On-site",
      iconColor: "text-orange-600",
      iconBg: "bg-orange-50",
      iconBorder: "border-orange-100",
    },
    {
      icon: Target,
      label: "Focus",
      value: "Web Applications & Business Solutions",
      iconColor: "text-rose-600",
      iconBg: "bg-rose-50",
      iconBorder: "border-rose-100",
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="
        relative
        overflow-hidden
        bg-white
        px-[30px]
        py-[45px]
      "
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          top-20
          h-72
          w-72
          rounded-full
          bg-teal-100/40
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-10
          h-64
          w-64
          rounded-full
          bg-yellow-100/40
          blur-3xl
        "
      />

      {/* ================= FULL WIDTH CONTENT ================= */}

      <div className="relative z-10 w-full">

        {/* ================= SECTION HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-10 max-w-3xl"
        >
          {/* Eyebrow */}

          <div className="mb-3 inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-teal-600"
            />

            <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-teal-700">
              About Me
            </span>
          </div>

          {/* Heading */}

          <h2
            id="about-heading"
            className="
              text-3xl
              font-[900]
              leading-[1.15]
              tracking-tight
              text-slate-950
              sm:text-4xl
              lg:text-[44px]
            "
          >
            Building reliable digital experiences with{" "}
            <span className="text-teal-700">
              modern technologies.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-500 sm:text-base">
            I combine modern frontend technologies, scalable backend
            architecture, and business-focused thinking to build fast,
            responsive, and production-ready web applications.
          </p>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-12">

          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:col-span-7"
          >
            {/* Intro Card */}

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-[0_10px_40px_rgba(15,23,42,0.06)]
                sm:p-7
              "
            >
              {/* Decorative Line */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-1
                  bg-gradient-to-b
                  from-teal-500
                  via-cyan-500
                  to-violet-500
                "
              />

              {/* Description */}

              <div className="space-y-5 text-[15px] leading-7 text-slate-600">
                <p>
                  I am a dedicated{" "}
                  <strong className="font-semibold text-slate-950">
                    Full Stack / MERN Stack Developer
                  </strong>{" "}
                  specializing in React.js, Node.js, Express.js, and MongoDB.
                  I build responsive, high-performance, and production-ready
                  web applications designed around real business
                  requirements.
                </p>

                <p>
                  From developing interactive React.js interfaces to building
                  scalable backend systems and REST APIs with Node.js and
                  Express.js, I focus on clean, maintainable code, reliable
                  architecture, and practical user experiences that help
                  businesses turn ideas into working digital products.
                </p>
              </div>

              {/* ================= MINI STATS ================= */}

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">

                <div
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-4
                  "
                >
                  <Code2
                    aria-hidden="true"
                    className="mb-2 h-5 w-5 text-teal-600"
                  />

                  <p className="text-xl font-extrabold text-slate-950">
                    10+
                  </p>

                  <p className="mt-1 text-[11px] font-medium text-slate-500">
                    Real-world Projects
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-4
                  "
                >
                  <Cpu
                    aria-hidden="true"
                    className="mb-2 h-5 w-5 text-violet-600"
                  />

                  <p className="text-xl font-extrabold text-slate-950">
                    MERN
                  </p>

                  <p className="mt-1 text-[11px] font-medium text-slate-500">
                    Full Stack Development
                  </p>
                </div>

                <div
                  className="
                    col-span-2
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-4
                    sm:col-span-1
                  "
                >
                  <Sparkles
                    aria-hidden="true"
                    className="mb-2 h-5 w-5 text-amber-500"
                  />

                  <p className="text-xl font-extrabold text-slate-950">
                    Production
                  </p>

                  <p className="mt-1 text-[11px] font-medium text-slate-500">
                    Ready Applications
                  </p>
                </div>
              </div>

              {/* ================= HIGHLIGHTS ================= */}

              <div className="mt-7">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    aria-hidden="true"
                    className="h-px flex-1 bg-slate-200"
                  />

                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    What I Bring
                  </span>

                  <div
                    aria-hidden="true"
                    className="h-px flex-1 bg-slate-200"
                  />
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {highlights.map(
                    (
                      {
                        text,
                        icon: Icon,
                        iconColor,
                        iconBg,
                        iconBorder,
                      },
                      index
                    ) => (
                      <motion.div
                        key={text}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.05,
                        }}
                        className="
                          group
                          flex
                          items-center
                          gap-3
                          rounded-2xl
                          border
                          border-slate-200
                          bg-slate-50/70
                          px-4
                          py-3
                          transition-all
                          duration-200
                          hover:-translate-y-0.5
                          hover:border-slate-300
                          hover:bg-white
                          hover:shadow-sm
                        "
                      >
                        {/* Different Colored Icon */}

                        <span
                          aria-hidden="true"
                          className={`
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            ${iconBg}
                            ${iconBorder}
                            transition-transform
                            duration-200
                            group-hover:scale-105
                          `}
                        >
                          <Icon
                            className={`h-[17px] w-[17px] ${iconColor}`}
                            strokeWidth={2.2}
                          />
                        </span>

                        <span className="text-[13px] font-semibold leading-5 text-slate-800">
                          {text}
                        </span>
                      </motion.div>
                    )
                  )}
                </div>
              </div>

              {/* ================= ACTIONS ================= */}

              <div className="mt-7 flex flex-wrap items-center gap-3">
             <a
  href="/Md Tauseef Ali (2).pdf"
  download="Md-Tauseef-Resume.pdf"
  aria-label="Download Md Tauseef's resume"

                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-yellow-400
                    px-5
                    py-3
                    text-[13px]
                    font-bold
                    text-slate-950
                    shadow-[0_8px_20px_rgba(250,204,21,0.18)]
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-yellow-500
                    hover:shadow-[0_12px_25px_rgba(250,204,21,0.25)]
                  "
                >
                  Download Resume

                  <Download
                    aria-hidden="true"
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-200
                      group-hover:translate-y-0.5
                    "
                  />
                </a>

                <a
                  href="#contact"
                  aria-label="Connect with Md Tauseef"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    px-5
                    py-3
                    text-[13px]
                    font-semibold
                    text-slate-800
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-teal-300
                    hover:bg-teal-50/50
                    hover:text-teal-700
                  "
                >
                  Let's Connect

                  <ArrowRight
                    aria-hidden="true"
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT PROFILE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:col-span-5"
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-slate-50
                p-5
                shadow-[0_15px_45px_rgba(15,23,42,0.07)]
                sm:p-6
              "
            >
              {/* Card Top Decoration */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-1
                  bg-gradient-to-r
                  from-teal-500
                  via-cyan-500
                  to-violet-500
                "
              />

              {/* Profile Header */}

              <div
                className="
                  mb-5
                  flex
                  items-center
                  justify-between
                  border-b
                  border-slate-200
                  pb-5
                "
              >
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-teal-700">
                    Professional Profile
                  </p>

                  <h3 className="mt-1 text-xl font-extrabold tracking-tight text-slate-950">
                    A little more about me
                  </h3>
                </div>

                <div
                  aria-hidden="true"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-teal-100
                    bg-teal-50
                  "
                >
                  <User className="h-5 w-5 text-teal-700" />
                </div>
              </div>

              {/* Profile Items */}

              <div className="space-y-3">
                {profileItems.map(
                  (
                    {
                      icon: Icon,
                      label,
                      value,
                      iconColor,
                      iconBg,
                      iconBorder,
                    },
                    index
                  ) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.06,
                      }}
                      className="
                        group
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-3.5
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:border-slate-300
                        hover:shadow-md
                      "
                    >
                      <div
                        aria-hidden="true"
                        className={`
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          ${iconBg}
                          ${iconBorder}
                        `}
                      >
                        <Icon
                          className={`h-5 w-5 ${iconColor}`}
                          strokeWidth={2.2}
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          {label}
                        </p>

                        <p className="mt-0.5 text-[13px] font-bold leading-5 text-slate-900">
                          {value}
                        </p>
                      </div>
                    </motion.div>
                  )
                )}
              </div>

              {/* Bottom Message */}

              <div
                className="
                  mt-5
                  rounded-2xl
                  border
                  border-teal-100
                  bg-teal-50/70
                  p-4
                "
              >
                <div className="flex items-start gap-3">
                  <div
                    aria-hidden="true"
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-teal-100
                    "
                  >
                    <Sparkles className="h-4 w-4 text-teal-700" />
                  </div>

                  <div>
                    <p className="text-[13px] font-bold text-slate-900">
                      Focused on building useful products
                    </p>

                    <p className="mt-1 text-[12px] leading-5 text-slate-500">
                      I turn business requirements into practical,
                      user-friendly, scalable, and production-ready web
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
