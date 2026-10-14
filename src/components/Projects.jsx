import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Globe2,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: "01",
    title: "SK Agro Foods",
    category: "E-Commerce",
    description:
      "A modern agriculture and food products website showcasing premium Indian sattu, makhana and other food products with WhatsApp-based enquiries.",
    url: "https://sk-agro-qf44.vercel.app/",
    tech: ["React", "Vite", "Tailwind", "WhatsApp"],
  },
  {
    id: "02",
    title: "Mayfield Global School CRM",
    category: "School CRM",
    description:
      "A comprehensive school management platform designed to streamline admissions, student management, academic operations and school administration.",
    url: "https://mayfield-global-school-crm.vercel.app/",
    tech: ["React", "Node.js", "MongoDB", "REST API"],
  },
  {
    id: "03",
    title: "Green Hub Environmental Solutions",
    category: "Business Website",
    description:
      "A professional environmental compliance consultancy website featuring BIS Certification, EPR Registration, FSSAI, ISO and regulatory approval services.",
    url: "https://bis-olive.vercel.app/",
    tech: ["React", "Vite", "Tailwind", "React Router"],
  },
  {
    id: "04",
    title: "NextGen Education CRM",
    category: "CRM Platform",
    description:
      "A full-stack education CRM built to manage student admissions, leads, counsellors, universities, documents and business workflows.",
    url: "https://www.nextgenedu.co/",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: "05",
    title: "Zenvix",
    category: "Web Application",
    description:
      "A modern course-to-placement platform connecting learning, skill development, practical projects and career opportunities.",
    url: "https://zenvix-five.vercel.app/",
    tech: ["MERN", "Cloudinary", "REST API"],
  },
  {
    id: "06",
    title: "V.A Enterprises",
    category: "Business Website",
    description:
      "A premium garment labels and apparel branding website showcasing clothing labels, tags, printing solutions and WhatsApp-based product enquiries.",
    url: "https://vaenterprice.vercel.app/",
    tech: ["React", "Vite", "Tailwind", "WhatsApp"],
  },
  {
    id: "07",
    title: "EKACEL",
    category: "Energy Solutions",
    description:
      "A modern battery and energy solutions platform showcasing industrial batteries, solar energy products and energy storage solutions.",
    url: "https://ekacel.vercel.app/",
    tech: ["React", "MUI", "Responsive UI"],
  },
  {
    id: "08",
    title: "KMR Conchem",
    category: "Business Website",
    description:
      "A premium industrial business website showcasing construction chemicals, waterproofing solutions and infrastructure-related products.",
    url: "https://kmr-phi.vercel.app/",
    tech: ["React", "Tailwind", "Vercel"],
  },
  {
    id: "09",
    title: "Karipatta",
    category: "Business Website",
    description:
      "A modern business-focused web experience featuring a clean responsive interface, professional layouts and smooth navigation.",
    url: "https://karipatta.vercel.app/",
    tech: ["React", "Responsive", "Vercel"],
  },
  {
    id: "10",
    title: "Book Store",
    category: "Web Application",
    description:
      "An online bookstore application featuring organized book collections, product browsing and a clean shopping experience.",
    url: "https://book-store-yo6o.onrender.com/",
    tech: ["React", "JavaScript", "Render"],
  },
  {
    id: "11",
    title: "Project Course Bundler",
    category: "Learning Management",
    description:
      "A full-stack learning management and course bundling platform designed for online education, course delivery and subscription management.",
    url: "",
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    comingSoon: true,
  },
];

/* =========================================================
   CONFIGURATION
========================================================= */

const INITIAL_PROJECT_COUNT = 8;

/* =========================================================
   PROJECT PREVIEW COMPONENT
========================================================= */

function ProjectPreview({ project }) {
  if (project.comingSoon || !project.url) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.18),transparent_55%)]" />

        <div className="relative px-6 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Sparkles className="h-6 w-6 text-teal-400" />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
            Project Showcase
          </p>

          <h3 className="mt-2 text-lg font-bold text-white">
            {project.title}
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-slate-400">
            Full-Stack Web Application
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
      className="pointer-events-none absolute left-0 top-0 h-full w-full border-0 bg-white"
      scrolling="no"
      tabIndex={-1}
    />
  );
}

/* =========================================================
   PROJECT CARD COMPONENT
========================================================= */

function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -15,
        scale: 0.97,
      }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.04, 0.25),
      }}
      className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-300 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]"
    >
      {/* =====================================================
          BROWSER PREVIEW
      ===================================================== */}

      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        {/* Browser Bar */}

        <div className="absolute left-0 right-0 top-0 z-20 flex h-8 items-center border-b border-slate-200 bg-white/95 px-3 backdrop-blur">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span className="h-2 w-2 rounded-full bg-slate-300" />
          </div>

          <div className="mx-auto flex max-w-[65%] items-center gap-1.5 truncate rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[9px] text-slate-400">
            <Globe2 className="h-2.5 w-2.5 shrink-0" />

            <span className="truncate">
              {project.url
                ? new URL(project.url).hostname
                : "project-showcase"}
            </span>
          </div>
        </div>

        {/* Actual Website Preview */}

        <div className="absolute inset-x-0 bottom-0 top-8 overflow-hidden">
          <ProjectPreview project={project} />
        </div>

        {/* Hover Overlay */}

        {!project.comingSoon && (
          <div className="pointer-events-none absolute inset-0 z-10 bg-teal-950/0 transition-colors duration-300 group-hover:bg-teal-950/10" />
        )}

        {/* Project Number */}

        <div className="absolute bottom-3 left-3 z-20 flex h-8 min-w-8 items-center justify-center rounded-lg border border-white/60 bg-white/90 px-2 text-[10px] font-extrabold text-slate-800 shadow-sm backdrop-blur">
          {project.id}
        </div>
      </div>

      {/* =====================================================
          PROJECT CONTENT
      ===================================================== */}

      <div className="flex flex-1 flex-col p-5">
        {/* Category + Title */}

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

        {/* Description */}

        <p className="min-h-[52px] text-xs leading-5 text-slate-500">
          {project.description}
        </p>

        {/* Technology Tags */}

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

        {/* Project Button */}

        <div className="mt-auto pt-5">
          <div className="border-t border-slate-100 pt-4">
            {project.comingSoon || !project.url ? (
              <div className="flex w-full cursor-default items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-500">
                Live Demo Coming Soon
                <Sparkles className="h-3.5 w-3.5" />
              </div>
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
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN PROJECTS SECTION
========================================================= */

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const totalProjects = String(projects.length).padStart(2, "0");

  // Initially show only 8 projects.
  // When View All is clicked, show all projects.
  const visibleProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_PROJECT_COUNT);

  const remainingProjects = projects.length - INITIAL_PROJECT_COUNT;

  const handleToggleProjects = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-y border-slate-200 bg-slate-50 px-[30px] py-[45px]"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute left-[-100px] top-[120px] h-[300px] w-[300px] rounded-full bg-teal-200/20 blur-[100px]" />

      <div className="pointer-events-none absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-slate-300/30 blur-[100px]" />

      <div className="relative z-10 w-full">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            {/* Label */}

            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />

              <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
                Selected Work
              </span>
            </div>

            {/* Heading */}

            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Projects That{" "}
              <span className="text-teal-700">
                Solve Real Problems.
              </span>
            </h2>

            {/* Description */}

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              A selection of real-world websites and web applications
              I've worked on, from business websites to full-stack
              platforms.
            </p>
          </div>

          {/* Project Count */}

          <div className="hidden shrink-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm sm:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
              {totalProjects}
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

        {/* =====================================================
            PROJECTS GRID
        ===================================================== */}

        <motion.div
          layout
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* =====================================================
            VIEW ALL PROJECTS / SHOW LESS BUTTON
        ===================================================== */}

        {projects.length > INITIAL_PROJECT_COUNT && (
          <div className="mt-10 flex flex-col items-center justify-center">
            <motion.button
              type="button"
              onClick={handleToggleProjects}
              aria-expanded={showAll}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group/btn inline-flex items-center justify-center gap-3 rounded-2xl border border-teal-200 bg-white px-8 py-4 text-sm font-bold text-slate-900 shadow-[0_8px_25px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-teal-500 hover:bg-teal-700 hover:text-white hover:shadow-[0_15px_35px_rgba(13,148,136,0.2)]"
            >
              {showAll ? (
                <>
                  Show Less Projects

                  <ChevronUp className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-1" />
                </>
              ) : (
                <>
                  View All Projects

                  <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-teal-50 px-1.5 text-[10px] font-extrabold text-teal-700 transition-colors group-hover/btn:bg-white/20 group-hover/btn:text-white">
                    +{remainingProjects}
                  </span>

                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-y-1" />
                </>
              )}
            </motion.button>

            {/* Small Info Text */}

            <p className="mt-3 text-center text-xs text-slate-400">
              {showAll
                ? `Showing all ${projects.length} projects`
                : `Showing ${INITIAL_PROJECT_COUNT} of ${projects.length} projects`}
            </p>
          </div>
        )}

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm sm:flex-row">
          <div>
            <p className="text-sm font-bold text-slate-950">
              Have a project in mind?
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Let's turn your idea into a production-ready web
              experience.
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