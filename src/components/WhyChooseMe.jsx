
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  BriefcaseBusiness,
  Clock3,
  ArrowUpRight,
  Sparkles,
  Check,
} from "lucide-react";

export default function WhyChooseMe() {
  const reasons = [
    {
      number: "01",
      icon: Code2,
      title: "Clean & Maintainable Code",
      description:
        "Writing modular, reusable, and well-structured code that stays easy to understand, scale, and maintain.",
      accent: "teal",
      label: "Code Quality",
    },
    {
      number: "02",
      icon: Smartphone,
      title: "Responsive Experiences",
      description:
        "Building polished interfaces that deliver a consistent experience across mobile, tablet, and desktop.",
      accent: "blue",
      label: "User Experience",
    },
    {
      number: "03",
      icon: BriefcaseBusiness,
      title: "Business-Focused Solutions",
      description:
        "Turning business requirements into practical digital products focused on usability, engagement, and performance.",
      accent: "violet",
      label: "Business Impact",
    },
    {
      number: "04",
      icon: Clock3,
      title: "Reliable Delivery",
      description:
        "Following a structured development process to deliver production-ready work without compromising quality.",
      accent: "orange",
      label: "Project Delivery",
    },
  ];

  const accentStyles = {
    teal: {
      text: "text-teal-700",
      bg: "bg-teal-50",
      border: "border-teal-100",
      line: "bg-teal-600",
      soft: "bg-teal-500/10",
      ring: "group-hover:ring-teal-100",
    },
    blue: {
      text: "text-blue-700",
      bg: "bg-blue-50",
      border: "border-blue-100",
      line: "bg-blue-600",
      soft: "bg-blue-500/10",
      ring: "group-hover:ring-blue-100",
    },
    violet: {
      text: "text-violet-700",
      bg: "bg-violet-50",
      border: "border-violet-100",
      line: "bg-violet-600",
      soft: "bg-violet-500/10",
      ring: "group-hover:ring-violet-100",
    },
    orange: {
      text: "text-orange-700",
      bg: "bg-orange-50",
      border: "border-orange-100",
      line: "bg-orange-600",
      soft: "bg-orange-500/10",
      ring: "group-hover:ring-orange-100",
    },
  };

  return (
    <section
      id="why-me"
      className="relative overflow-hidden bg-[#f8fafc] px-[30px] py-[45px]"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-teal-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-100/40 blur-3xl" />

      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 80%)",
        }}
      />

      <div className="relative z-10 w-full">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-teal-700" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal-700">
                Why Work With Me
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-[46px]"
            >
              More Than Just{" "}
              <span className="text-teal-700">Writing Code.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base"
            >
              I focus on building digital products that look polished,
              perform reliably, and solve real business problems.
            </motion.p>
          </div>

          {/* Header badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="hidden items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm lg:flex"
          >
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                My Approach
              </p>

              <p className="mt-1 text-sm font-extrabold text-slate-900">
                Quality First
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
              <Check className="h-5 w-5" />
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            FEATURE GRID
        ====================================================== */}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            const style = accentStyles[item.accent];

            return (
              <motion.div
                key={item.number}
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
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="group relative"
              >
                <div
                  className={`relative h-full min-h-[340px] overflow-hidden rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_55px_rgba(15,23,42,0.10)] ${style.ring}`}
                >
                  {/* Accent vertical line */}
                  <div
                    className={`absolute left-0 top-8 h-16 w-1 rounded-r-full ${style.line}`}
                  />

                  {/* Giant background number */}
                  <div
                    className={`pointer-events-none absolute -right-2 -top-7 select-none font-heading text-[150px] font-black leading-none ${style.text} opacity-[0.045] transition-all duration-500 group-hover:-translate-y-3 group-hover:opacity-[0.08]`}
                  >
                    {item.number}
                  </div>

                  {/* Top row */}
                  <div className="relative z-10 flex items-start justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${style.border} ${style.bg} ${style.text} shadow-sm transition-all duration-500 group-hover:scale-105`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all duration-300 group-hover:border-slate-300 group-hover:${style.text}`}
                    >
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Number + label */}
                  <div className="relative z-10 mt-8 flex items-center gap-2">
                    <span
                      className={`font-mono text-[11px] font-black ${style.text}`}
                    >
                      {item.number}
                    </span>

                    <span className="h-px w-8 bg-slate-200" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                      {item.label}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-4">
                    <h3 className="max-w-[250px] font-heading text-xl font-extrabold leading-tight tracking-tight text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="mb-4 h-px bg-slate-100" />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className={`h-2 w-2 rounded-full ${style.line}`}
                        />

                        <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Core Strength
                        </span>
                      </div>

                      <span
                        className={`text-[10px] font-extrabold ${style.text}`}
                      >
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-6 overflow-hidden rounded-[24px] border border-slate-200 bg-slate-950 px-6 py-5 shadow-[0_15px_45px_rgba(15,23,42,0.10)] sm:px-7"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
                <Code2 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Development Mindset
                </p>

                <p className="mt-1 text-sm font-bold text-white">
                  Think clearly. Build beautifully. Deliver reliably.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-400" />

              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                Full Stack · MERN · Production
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
