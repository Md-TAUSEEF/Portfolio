
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Md Tauseef delivered our MERN stack application on schedule with strong attention to detail and a clean development approach.",
      name: "Project Lead",
      role: "Engineering Manager",
      company: "Tech Solutions Partner",
      initials: "PL",
      accent: "teal",
    },
    {
      quote:
        "Tauseef understood our business requirements quickly and converted them into a responsive and practical web application.",
      name: "Operations Director",
      role: "Client Partner",
      company: "Digital Enterprise",
      initials: "OD",
      accent: "violet",
    },
    {
      quote:
        "His React implementation was clean, responsive and well structured. Communication throughout the development process was smooth.",
      name: "Senior Architect",
      role: "Technical Lead",
      company: "Software Agency",
      initials: "SA",
      accent: "blue",
    },
    {
      quote:
        "A structured developer who focuses on both the technical implementation and the actual business requirement behind the product.",
      name: "Product Manager",
      role: "Project Partner",
      company: "Digital Product Team",
      initials: "PM",
      accent: "orange",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const accentStyles = {
    teal: {
      text: "text-teal-700",
      bg: "bg-teal-50",
      border: "border-teal-100",
      fill: "bg-teal-600",
    },
    violet: {
      text: "text-violet-700",
      bg: "bg-violet-50",
      border: "border-violet-100",
      fill: "bg-violet-600",
    },
    blue: {
      text: "text-blue-700",
      bg: "bg-blue-50",
      border: "border-blue-100",
      fill: "bg-blue-600",
    },
    orange: {
      text: "text-orange-700",
      bg: "bg-orange-50",
      border: "border-orange-100",
      fill: "bg-orange-600",
    },
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-slate-200 bg-slate-50 px-[30px] py-[45px]"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-teal-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-100/40 blur-3xl" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 w-full">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-teal-700" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal-700">
                Feedback
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]"
            >
              What People Say About{" "}
              <span className="text-teal-700">My Work.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base"
            >
              Feedback that reflects my approach to development, communication,
              problem-solving, and project delivery.
            </motion.p>
          </div>

          {/* Review Counter */}
          <div className="hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm lg:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
              <Star className="h-5 w-5 fill-current" />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Featured Feedback
              </p>

              <p className="mt-0.5 text-sm font-extrabold text-slate-900">
                4 Reviews
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            TESTIMONIAL CARDS
        ====================================================== */}

        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item, index) => {
            const style = accentStyles[item.accent];
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                onMouseEnter={() => setActiveIndex(index)}
                className="group flex h-full"
              >
                {/* FIXED SAME HEIGHT CARD */}
                <div
                  className={`relative flex h-[360px] w-full flex-col overflow-hidden rounded-[24px] border bg-white p-6 transition-all duration-500 ${
                    isActive
                      ? `${style.border} shadow-[0_20px_45px_rgba(15,23,42,0.09)]`
                      : "border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-lg"
                  }`}
                >
                  {/* Active top line */}
                  <div
                    className={`absolute left-0 right-0 top-0 h-1 ${style.fill} transition-all duration-500 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />

                  {/* Background Quote */}
                  <Quote
                    className={`absolute -right-3 -top-3 h-28 w-28 ${style.text} opacity-[0.045]`}
                  />

                  {/* ================= TOP ================= */}

                  <div className="relative z-10 flex shrink-0 items-center justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${style.bg} ${style.text}`}
                    >
                      <Quote className="h-5 w-5" />
                    </div>

                    <span
                      className={`font-mono text-[11px] font-black ${style.text}`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* ================= STARS ================= */}

                  <div className="relative z-10 mt-6 flex shrink-0 items-center gap-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}

                    <span className="ml-2 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      5.0
                    </span>
                  </div>

                  {/* ================= QUOTE ================= */}

                  <div className="relative z-10 mt-5 min-h-0 flex-1 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={`${item.name}-${activeIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="line-clamp-5 text-sm leading-6 text-slate-600"
                      >
                        “{item.quote}”
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  {/* ================= PROFILE ================= */}

                  <div className="relative z-10 mt-5 shrink-0">
                    <div className="h-px bg-slate-100" />

                    <div className="mt-4 flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${style.bg} ${style.text} text-[10px] font-black`}
                      >
                        {item.initials}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-extrabold text-slate-950">
                          {item.name}
                        </p>

                        <p className="truncate text-[10px] font-medium text-slate-400">
                          {item.role}
                        </p>
                      </div>

                      <CheckCircle2
                        className={`ml-auto h-4 w-4 shrink-0 ${style.text}`}
                      />
                    </div>

                    <p className="mt-3 truncate text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">
                      {item.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            AUTO ROTATION BAR
        ====================================================== */}

        <div className="mt-6 flex flex-col gap-4 rounded-[20px] border border-slate-200 bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
              <ArrowRight className="h-4 w-4" />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                Featured Reviews
              </p>

              <p className="mt-0.5 text-xs font-bold text-slate-700">
                Reviews automatically rotate every 4 seconds
              </p>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show review ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className="group relative h-1.5 w-10 overflow-hidden rounded-full bg-slate-100"
              >
                <span
                  className={`absolute inset-y-0 left-0 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-full bg-teal-600"
                      : "w-0 bg-slate-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
