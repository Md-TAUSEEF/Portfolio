
import React from "react";
import { ExternalLink, GitBranch } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div>
        {/* Project Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            width="640"
            height="400"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Project Category */}
          {project.category && (
            <div className="absolute left-4 top-4">
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur-md">
                {project.category}
              </span>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="space-y-4 p-6">
          <h3 className="font-heading text-xl font-bold text-slate-950 transition-colors group-hover:text-teal-700">
            {project.title}
          </h3>

          <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">
            {project.description}
          </p>

          {/* Technology Tags */}
          {project.tags?.length > 0 && (
            <div
              className="flex flex-wrap gap-1.5 pt-2"
              aria-label={`${project.title} technologies`}
            >
              {project.tags.map((tag, idx) => (
                <span
                  key={`${tag}-${idx}`}
                  className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 px-6 pb-6 pt-2">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${project.title}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-800"
          >
            <span>Live Demo</span>
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:bg-slate-50"
          >
            <span>GitHub</span>
            <GitBranch className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
