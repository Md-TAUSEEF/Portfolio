import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Server,
  Database,
  Wrench,
  ArrowUpRight,
  Check,
} from "lucide-react";

import { skillCategories } from "../data/skills";

export default function Skills() {
  const categoryStyles = {
    Frontend: {
      icon: Layers,
      iconColor: "text-violet-600",
      iconBg: "bg-violet-50",
      iconBorder: "border-violet-100",
      accent: "bg-violet-500",
      number: "text-violet-200",
      hoverBorder: "hover:border-violet-200",
    },

    Backend: {
      icon: Server,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      iconBorder: "border-blue-100",
      accent: "bg-blue-500",
      number: "text-blue-200",
      hoverBorder: "hover:border-blue-200",
    },

    Database: {
      icon: Database,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
      iconBorder: "border-emerald-100",
      accent: "bg-emerald-500",
      number: "text-emerald-200",
      hoverBorder: "hover:border-emerald-200",
    },

    Tools: {
      icon: Wrench,
      iconColor: "text-orange-600",
      iconBg: "bg-orange-50",
      iconBorder: "border-orange-100",
      accent: "bg-orange-500",
      number: "text-orange-200",
      hoverBorder: "hover:border-orange-200",
    },
  };

  const getCategoryStyle = (title) => {
    const normalizedTitle = title.toLowerCase();

    if (normalizedTitle.includes("frontend")) {
      return categoryStyles.Frontend;
    }

    if (normalizedTitle.includes("backend")) {
      return categoryStyles.Backend;
    }

    if (normalizedTitle.includes("database")) {
      return categoryStyles.Database;
    }

    if (normalizedTitle.includes("tool")) {
      return categoryStyles.Tools;
    }

    return {
      icon: Wrench,
      iconColor: "text-teal-600",
      iconBg: "bg-teal-50",
      iconBorder: "border-teal-100",
      accent: "bg-teal-500",
      number: "text-teal-200",
      hoverBorder: "hover:border-teal-200",
    };
  };

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-slate-50
        border-y
        border-slate-200
        px-[30px]
        py-[45px]
      "
    >
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-80
          w-80
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
          -left-40
          bottom-0
          h-72
          w-72
          rounded-full
          bg-violet-100/30
          blur-3xl
        "
      />

      <div className="relative z-10 w-full">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="
            mb-10
            flex
            flex-col
            justify-between
            gap-6
            lg:flex-row
            lg:items-end
          "
        >
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-600" />

              <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-teal-700">
                Expertise
              </span>
            </div>

            <h2
              className="
                text-3xl
                font-[900]
                leading-[1.1]
                tracking-tight
                text-slate-950
                sm:text-4xl
                lg:text-[44px]
              "
            >
              Technical{" "}
              <span className="text-teal-700">
                Skills
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-500 sm:text-base">
              A practical toolkit covering modern frontend development,
              scalable backend systems, databases, and the tools I use to
              build production-ready applications.
            </p>
          </div>

          {/* Small Header Badge */}
          <div
            className="
              hidden
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-4
              py-3
              shadow-sm
              lg:flex
            "
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50">
              <Layers className="h-4 w-4 text-teal-700" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Stack
              </p>

              <p className="text-sm font-bold text-slate-900">
                Modern & Scalable
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= SKILL CATEGORIES ================= */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {skillCategories.map((category, index) => {
            const style = getCategoryStyle(category.title);
            const Icon = style.icon;

            return (
              <motion.div
                key={category.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-[0_8px_30px_rgba(15,23,42,0.04)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]
                  ${style.hoverBorder}
                  sm:p-6
                `}
              >
                {/* Accent Line */}
                <div
                  className={`
                    absolute
                    left-0
                    top-0
                    h-full
                    w-1
                    ${style.accent}
                    opacity-80
                  `}
                />

                {/* Large Background Number */}
                <span
                  className={`
                    pointer-events-none
                    absolute
                    right-5
                    top-2
                    text-[76px]
                    font-[900]
                    leading-none
                    tracking-tighter
                    ${style.number}
                    opacity-50
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  `}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Category Header */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        ${style.iconBg}
                        ${style.iconBorder}
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      `}
                    >
                      <Icon
                        className={`h-5 w-5 ${style.iconColor}`}
                        strokeWidth={2.2}
                      />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                        Category {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-0.5 text-xl font-extrabold tracking-tight text-slate-950">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      text-slate-400
                      transition-all
                      duration-300
                      group-hover:border-slate-300
                      group-hover:bg-white
                      group-hover:text-slate-700
                    "
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Divider */}
                <div className="relative z-10 my-5 h-px bg-slate-100" />

                {/* Skills */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      whileHover={{
                        y: -2,
                      }}
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        px-3
                        py-2
                        transition-all
                        duration-200
                        hover:border-slate-300
                        hover:bg-white
                        hover:shadow-sm
                      "
                    >
                      <span
                        className={`
                          flex
                          h-4
                          w-4
                          items-center
                          justify-center
                          rounded-full
                          ${style.iconBg}
                        `}
                      >
                        <Check
                          className={`h-2.5 w-2.5 ${style.iconColor}`}
                          strokeWidth={3}
                        />
                      </span>

                      <span className="text-[12px] font-semibold text-slate-700">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                    Core Technology
                  </span>

                  <div className="flex items-center gap-1.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${style.accent}`}
                    />

                    <span className="text-[10px] font-semibold text-slate-400">
                      Active
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= BOTTOM STRIP ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="
            mt-5
            flex
            flex-col
            gap-3
            rounded-2xl
            border
            border-slate-200
            bg-white
            px-5
            py-4
            shadow-sm
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-teal-500" />

            <p className="text-[12px] font-medium text-slate-500">
              Focused on clean code, scalable architecture & real-world
              development.
            </p>
          </div>

          <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
            Full Stack Development
          </span>
        </motion.div>
      </div>
    </section>
  );
}