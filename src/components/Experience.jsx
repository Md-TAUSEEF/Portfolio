
import React from "react";
import {
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Code2,
  Building2,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      id: "01",
      current: true,
      role: "MERN Stack Developer",
      company: "Earth Bound Solutions",
      period: "Apr 2026 – Present",
      type: "Full-time",
      icon: Code2,
      iconBg: "bg-teal-50",
      iconBorder: "border-teal-100",
      iconColor: "text-teal-700",
      numberColor: "text-teal-100",
      badgeBg: "bg-emerald-50",
      badgeBorder: "border-emerald-200",
      badgeColor: "text-emerald-700",
      description:
        "Building modern web applications and business solutions using the MERN stack with a focus on responsive UI, APIs, database integration and production deployment.",
      skills: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    },
    {
      id: "02",
      current: false,
      role: "React.js Developer",
      company: "Infosol Technosol Pvt. Ltd.",
      period: "Feb 2025 – Mar 2026",
      type: "Professional Experience",
      icon: Building2,
      iconBg: "bg-violet-50",
      iconBorder: "border-violet-100",
      iconColor: "text-violet-700",
      numberColor: "text-violet-100",
      badgeBg: "bg-violet-50",
      badgeBorder: "border-violet-200",
      badgeColor: "text-violet-700",
      description:
        "Worked on React.js development, responsive interfaces, API integration, reusable components, state management and frontend optimization.",
      skills: ["React.js", "JavaScript", "API Integration", "UI"],
    },
    {
      id: "03",
      current: false,
      role: "Web Development Intern",
      company: "Cloud Counselage",
      period: "Aug 2024 – Sep 2024",
      type: "Internship",
      icon: GraduationCap,
      iconBg: "bg-orange-50",
      iconBorder: "border-orange-100",
      iconColor: "text-orange-600",
      numberColor: "text-orange-100",
      badgeBg: "bg-orange-50",
      badgeBorder: "border-orange-200",
      badgeColor: "text-orange-700",
      description:
        "Gained practical experience in web development, frontend implementation, responsive design and working with modern development workflows.",
      skills: ["Web Development", "HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white px-[30px] py-[45px]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-150px] top-[-120px] h-[320px] w-[320px] rounded-full bg-teal-100/30 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-[320px] w-[320px] rounded-full bg-violet-100/25 blur-[110px]" />

      <div className="relative z-10 w-full">

        {/* ================= HEADER ================= */}
        <div className="mb-9 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-teal-700" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-teal-700">
                Career Journey
              </span>
            </div>

            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-[42px]">
              My Professional{" "}
              <span className="text-teal-700">Experience</span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
              A journey from frontend development to full-stack engineering,
              focused on building practical and production-ready solutions.
            </p>
          </div>

          {/* Small experience summary */}
          <div className="flex w-fit items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-white">
              <BriefcaseBusiness className="h-4 w-4" />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                Career Path
              </p>

              <p className="text-xs font-extrabold text-slate-900">
                Frontend → Full Stack
              </p>
            </div>
          </div>
        </div>

        {/* ================= EXPERIENCE GRID ================= */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <motion.article
                key={experience.id}
                initial={{
                  opacity: 0,
                  y: 20,
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
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className={`group relative overflow-hidden rounded-[20px] border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)] ${
                  experience.current
                    ? "border-teal-200 shadow-[0_10px_35px_rgba(13,148,136,0.08)]"
                    : "border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.05)]"
                }`}
              >
                {/* Top accent */}
                <div
                  className={`h-[3px] w-full ${
                    experience.current
                      ? "bg-teal-700"
                      : index === 1
                        ? "bg-violet-500"
                        : "bg-orange-500"
                  }`}
                />

                {/* Large number */}
                <div
                  className={`pointer-events-none absolute right-4 top-1 select-none text-[70px] font-black leading-none ${experience.numberColor}`}
                >
                  {experience.id}
                </div>

                <div className="relative z-10 p-5">

                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border ${experience.iconBg} ${experience.iconBorder} ${experience.iconColor} transition-transform duration-300 group-hover:scale-105`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    {experience.current ? (
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[8px] font-extrabold uppercase tracking-wider ${experience.badgeBg} ${experience.badgeBorder} ${experience.badgeColor}`}
                      >
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                        Current
                      </span>
                    ) : (
                      <span
                        className={`rounded-full border px-2.5 py-1 text-[8px] font-extrabold uppercase tracking-wider ${experience.badgeBg} ${experience.badgeBorder} ${experience.badgeColor}`}
                      >
                        Previous
                      </span>
                    )}
                  </div>

                  {/* Role */}
                  <div className="mt-5">
                    <p
                      className={`text-[9px] font-extrabold uppercase tracking-[0.16em] ${experience.iconColor}`}
                    >
                      {experience.current
                        ? "Current Position"
                        : experience.type}
                    </p>

                    <h3 className="mt-1.5 font-heading text-xl font-extrabold leading-tight tracking-tight text-slate-950">
                      {experience.role}
                    </h3>

                    <div className="mt-2 flex items-center gap-1.5">
                      <span className="text-xs font-bold text-slate-700">
                        {experience.company}
                      </span>

                      <ArrowUpRight
                        className={`h-3.5 w-3.5 ${experience.iconColor}`}
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="mt-4 flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                    <CalendarDays
                      className={`h-3.5 w-3.5 ${experience.iconColor}`}
                    />

                    <span className="text-[10px] font-bold text-slate-600">
                      {experience.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs leading-5 text-slate-500">
                    {experience.description}
                  </p>

                  {/* Divider */}
                  <div className="my-4 h-px bg-slate-100" />

                  {/* Skills */}
                  <div>
                    <p className="mb-2 text-[9px] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                      Key Skills
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-[9px] font-semibold text-slate-600"
                        >
                          <Check
                            className={`h-2.5 w-2.5 ${experience.iconColor}`}
                          />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom */}
                <div
                  className={`border-t px-5 py-3 ${
                    experience.current
                      ? "border-teal-100 bg-teal-50/40"
                      : "border-slate-100 bg-slate-50/70"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          experience.current
                            ? "bg-emerald-500"
                            : experience.iconColor.replace(
                                "text-",
                                "bg-"
                              )
                        }`}
                      />

                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                        {experience.current
                          ? "Currently Working"
                          : "Completed"}
                      </span>
                    </div>

                    <span className="text-[9px] font-bold text-slate-400">
                      {experience.id} / 03
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ================= BOTTOM CAREER BAR ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-4 flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-teal-700 shadow-sm">
              <MapPin className="h-4 w-4" />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                Professional Focus
              </p>

              <p className="text-xs font-extrabold text-slate-800">
                Full Stack Development · Real-World Applications
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 transition-colors hover:text-teal-800"
          >
            Explore My Work
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
