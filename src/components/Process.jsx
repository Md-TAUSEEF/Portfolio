import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Map,
  Palette,
  Code2,
  Rocket,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  CircleCheck,
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Requirement",
      shortTitle: "Discover",
      desc: "Understanding your business goals, users, features, and project requirements.",
      icon: ClipboardList,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
      dot: "bg-blue-500",
    },
    {
      number: "02",
      title: "Planning",
      shortTitle: "Plan",
      desc: "Choosing the right architecture, technology stack, database, and project structure.",
      icon: Map,
      color: "text-violet-600",
      bg: "bg-violet-50",
      border: "border-violet-100",
      dot: "bg-violet-500",
    },
    {
      number: "03",
      title: "Design",
      shortTitle: "Design",
      desc: "Creating clean interfaces, responsive layouts, reusable components, and user flows.",
      icon: Palette,
      color: "text-pink-600",
      bg: "bg-pink-50",
      border: "border-pink-100",
      dot: "bg-pink-500",
    },
    {
      number: "04",
      title: "Development",
      shortTitle: "Build",
      desc: "Building the frontend, backend, APIs, database integration, and testing everything.",
      icon: Code2,
      color: "text-teal-700",
      bg: "bg-teal-50",
      border: "border-teal-100",
      dot: "bg-teal-600",
    },
    {
      number: "05",
      title: "Deployment",
      shortTitle: "Launch",
      desc: "Deploying the application and making sure it is production-ready and reliable.",
      icon: Rocket,
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-100",
      dot: "bg-orange-500",
    },
  ];

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-slate-50 px-[30px] py-[45px]"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-teal-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-violet-100/50 blur-3xl" />

      <div className="relative z-10 w-full">
        {/* ================= HEADER ================= */}
        <div className="mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3.5 py-1.5 shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-teal-700" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-teal-700">
                My Workflow
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-[46px]"
            >
              From Idea to{" "}
              <span className="text-teal-700">Production.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base"
            >
              A structured development process designed to transform business
              ideas into modern, scalable and production-ready digital
              experiences.
            </motion.p>
          </div>

          {/* ================= HEADER STATS ================= */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm lg:flex"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
              <CheckCircle2 className="h-5 w-5" />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Workflow
              </p>

              <p className="mt-0.5 text-sm font-extrabold text-slate-900">
                5 Clear Steps
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[0.75fr_1.25fr]">
          {/* ================= VISUAL PANEL ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 shadow-[0_25px_70px_rgba(15,23,42,0.12)]"
          >
            {/* Real visual */}
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
              alt="Team planning and developing a digital project"
              className="absolute inset-0 h-full w-full object-cover opacity-45"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/65 to-teal-950/60" />

            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                backgroundSize: "35px 35px",
              }}
            />

            <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-9">
              {/* Top */}
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-teal-300 backdrop-blur">
                  <Code2 className="h-6 w-6" />
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-300">
                  Development Approach
                </p>

                <h3 className="mt-3 max-w-md font-heading text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Building with clarity,
                  <br />
                  not complexity.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
                  Every project moves through a clear process so design,
                  development and business requirements stay aligned.
                </p>
              </div>

              {/* Bottom */}
              <div>
                <div className="mb-5 h-px w-full bg-white/10" />

                <div className="flex flex-wrap gap-2">
                  {["Clean Code", "Responsive UI", "Scalable APIs"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-bold text-slate-200 backdrop-blur"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute right-5 top-5 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                Approach
              </p>

              <p className="mt-1 text-sm font-extrabold text-white">
                Strategy → Build
              </p>
            </div>
          </motion.div>

          {/* ================= STEPS ================= */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[27px] top-7 bottom-7 hidden w-px bg-slate-200 sm:block" />

            <div className="space-y-3">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    className="group relative flex gap-4 sm:gap-5"
                  >
                    {/* Timeline icon */}
                    <div className="relative z-10 shrink-0">
                      <div
                        className={`flex h-[56px] w-[56px] items-center justify-center rounded-2xl border ${step.border} ${step.bg} ${step.color} shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-slate-300 group-hover:shadow-[0_15px_35px_rgba(15,23,42,0.08)]">
                        {/* Accent */}
                        <div
                          className={`absolute left-0 top-0 h-full w-1 ${step.dot}`}
                        />

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex items-start gap-3">
                            <span
                              className={`font-mono text-[11px] font-black ${step.color}`}
                            >
                              {step.number}
                            </span>

                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="font-heading text-base font-extrabold text-slate-950 sm:text-lg">
                                  {step.title}
                                </h3>

                                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-slate-500">
                                  {step.shortTitle}
                                </span>
                              </div>

                              <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm">
                                {step.desc}
                              </p>
                            </div>
                          </div>

                          <ArrowUpRight
                            className={`hidden h-4 w-4 shrink-0 ${step.color} transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:block`}
                          />
                        </div>

                        {/* Status */}
                        <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3">
                          <CircleCheck
                            className={`h-3.5 w-3.5 ${step.color}`}
                          />

                          <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                            {index === 0
                              ? "Project Discovery"
                              : index === 1
                                ? "Technical Strategy"
                                : index === 2
                                  ? "Visual Experience"
                                  : index === 3
                                    ? "Core Development"
                                    : "Production Launch"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-col gap-5 overflow-hidden rounded-[24px] border border-teal-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-7"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
              <CheckCircle2 className="h-5 w-5" />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-teal-700">
                Development Philosophy
              </p>

              <p className="mt-1 text-sm font-bold text-slate-800">
                Clear communication · Clean code · Reliable delivery
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <span className="h-2 w-2 rounded-full bg-teal-500" />
            Ready to build
          </div>
        </motion.div>
      </div>
    </section>
  );
}