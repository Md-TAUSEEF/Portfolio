
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Globe2,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    id: "01",
    title: "KMR Conchem",
    category: "Business Website",
    description:
      "A premium business website for construction chemicals and waterproofing solutions.",
    url: "https://kmr-phi.vercel.app/",
    tech: ["React", "Tailwind", "Vercel"],
  },
  {
    id: "02",
    title: "EKACEL",
    category: "Energy Solutions",
    description:
      "A modern battery and energy solutions platform with product-focused presentation.",
    url: "https://ekacel.vercel.app/",
    tech: ["React", "MUI", "Responsive UI"],
  },
  {
    id: "03",
    title: "SK Agro Foods",
    category: "E-Commerce",
    description:
      "A clean product-focused website for Indian sattu and makhana products.",
    url: "https://sk-agro-nuq2.vercel.app/",
    tech: ["React", "Vite", "WhatsApp"],
  },
  {
    id: "04",
    title: "NextGen",
    category: "CRM Platform",
    description:
      "An education CRM designed to manage admissions and business workflows.",
    url: "https://www.nextgenedu.co/",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "05",
    title: "Zenvix",
    category: "Web Application",
    description:
      "A global course-to-placement platform built around learning, development and hiring.",
    url: "https://zenvix-five.vercel.app/",
    tech: ["MERN", "Cloudinary", "REST API"],
  },
  {
    id: "06",
    title: "Karipatta",
    category: "Web Project",
    description:
      "A modern web experience created with a clean, responsive and business-focused interface.",
    url: "https://karipatta.vercel.app/",
    tech: ["React", "Responsive", "Vercel"],
  },
  {
    id: "07",
    title: "Book Store",
    category: "Web Application",
    description:
      "An online bookstore interface focused on clean browsing and product presentation.",
    url: "https://book-store-yo6o.onrender.com/",
    tech: ["React", "JavaScript", "Render"],
  },
  {
    id: "08",
    title: "Coming Next",
    category: "New Project",
    description:
      "Another digital product will be added here soon. New ideas, new challenges, new builds.",
    url: "#contact",
    tech: ["Next Build", "MERN", "Full Stack"],
    comingSoon: true,
  },
];

function ProjectPreview({ project }) {
  if (project.comingSoon) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.18),transparent_55%)]" />

        <div className="relative text-center px-6">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Sparkles className="h-6 w-6 text-teal-400" />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
            Coming Soon
          </p>

          <h3 className="mt-2 text-lg font-bold text-white">
            New Project In Progress
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-slate-400">
            Something new is being built.
          </p>
        </div>
      </div>
    );
  }

  return (
    <iframe
      src={project.url}
      title={`${project.title} live homepage`}
      loading="lazy"
      className="absolute left-0 top-0 h-full w-full border-0 bg-white"
      scrolling="no"
    />
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-y border-slate-200 bg-slate-50 px-[30px] py-[45px]"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-100px] top-[120px] h-[300px] w-[300px] rounded-full bg-teal-200/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-slate-300/30 blur-[100px]" />

      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
                Selected Work
              </span>
            </div>

            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Projects That{" "}
              <span className="text-teal-700">Solve Real Problems.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              A selection of real-world websites and web applications I've
              worked on, from business websites to full-stack platforms.
            </p>
          </div>

          {/* Project count */}
          <div className="hidden shrink-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm sm:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
              08
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Portfolio
              </p>
              <p className="text-sm font-bold text-slate-900">
                Selected Projects
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.06, 0.3),
              }}
              className="group overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-300 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]"
            >
              {/* Browser Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                {/* Browser bar */}
                <div className="absolute left-0 right-0 top-0 z-20 flex h-8 items-center border-b border-slate-200 bg-white/95 px-3 backdrop-blur">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                  </div>

                  <div className="mx-auto flex max-w-[65%] items-center gap-1.5 truncate rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[9px] text-slate-400">
                    <Globe2 className="h-2.5 w-2.5 shrink-0" />
                    <span className="truncate">
                      {project.comingSoon
                        ? "new-project"
                        : new URL(project.url).hostname}
                    </span>
                  </div>
                </div>

                {/* Actual website */}
                <div className="absolute inset-x-0 bottom-0 top-8 overflow-hidden">
                  <ProjectPreview project={project} />
                </div>

                {/* Hover overlay */}
                {!project.comingSoon && (
                  <div className="pointer-events-none absolute inset-0 z-10 bg-teal-950/0 transition-colors duration-300 group-hover:bg-teal-950/10" />
                )}

                {/* Number */}
                <div className="absolute bottom-3 left-3 z-20 flex h-8 min-w-8 items-center justify-center rounded-lg border border-white/60 bg-white/90 px-2 text-[10px] font-extrabold text-slate-800 shadow-sm backdrop-blur">
                  {project.id}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-teal-700">
                      {project.category}
                    </span>

                    <h3 className="mt-1 font-heading text-lg font-extrabold tracking-tight text-slate-950 transition-colors group-hover:text-teal-700">
                      {project.title}
                    </h3>
                  </div>

                  {!project.comingSoon && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500 transition-all duration-300 group-hover:border-teal-200 group-hover:bg-teal-50 group-hover:text-teal-700">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  )}
                </div>

                <p className="min-h-[52px] text-xs leading-5 text-slate-500">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[9px] font-semibold text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-5 border-t border-slate-100 pt-4">
                  {project.comingSoon ? (
                    <a
                      href="#contact"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-teal-700"
                    >
                      Start a Project
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-teal-700"
                    >
                      View Live Project
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm sm:flex-row">
          <div>
            <p className="text-sm font-bold text-slate-950">
              Have a project in mind?
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Let's turn your idea into a production-ready web experience.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:bg-teal-800 hover:shadow-lg"
          >
            Let's Work Together
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
