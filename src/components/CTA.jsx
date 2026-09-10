import React from "react";
import {
  ArrowRight,
  MessageSquare,
  Sparkles,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden border-t border-slate-200 bg-white px-[30px] py-[45px]"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-teal-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-0 h-72 w-72 rounded-full bg-yellow-100/40 blur-3xl" />

      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[26px] border border-slate-800 bg-slate-950 px-6 py-6 shadow-[0_20px_55px_rgba(15,23,42,0.14)] sm:px-8 sm:py-7 lg:px-10 lg:py-8"
        >
          {/* Inner Glows */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Content */}
            <div className="max-w-4xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1"
              >
                <Sparkles className="h-3 w-3 text-teal-400" />

                <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-teal-300">
                  Let's Collaborate
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-heading text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-[38px]"
              >
                Have a project in mind?
                <span className="ml-2 text-teal-400">
                  Let's build it together.
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="mt-3 max-w-3xl text-xs leading-6 text-slate-400 sm:text-sm"
              >
                Whether you need a business website, web application, admin
                dashboard, or complete MERN stack solution, I can help turn
                your requirements into a reliable digital product.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 flex flex-wrap items-center gap-3"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 text-xs font-extrabold text-slate-950 shadow-md shadow-yellow-400/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-lg"
                >
                  Start a Project

                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <MessageSquare className="h-3.5 w-3.5 text-teal-400" />
                  Contact Me
                </a>
              </motion.div>
            </div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="hidden shrink-0 lg:block"
            >
              <div className="relative flex h-28 w-28 items-center justify-center rounded-[22px] border border-white/10 bg-white/[0.04]">
                <div className="absolute inset-3 rounded-[17px] border border-teal-400/20" />

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400">
                  <Code2 className="h-6 w-6" />
                </div>

                <span className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-yellow-400" />
                <span className="absolute bottom-4 left-4 h-1.5 w-1.5 rounded-full bg-teal-400" />
                <span className="absolute bottom-3 right-5 h-1.5 w-1.5 rounded-full bg-violet-400" />
              </div>
            </motion.div>
          </div>

          {/* Bottom Info */}
          <div className="relative z-10 mt-5 flex flex-col gap-2 border-t border-white/10 pt-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-slate-500">
              Full Stack · MERN · Production Ready
            </p>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />

              <span className="text-[8px] font-bold uppercase tracking-[0.13em] text-slate-500">
                Available for new projects
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}