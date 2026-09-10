
import React from "react";
import {
  Code2,
  Cloud,
  Globe,
} from "lucide-react";

/* =========================================================
   TECHNOLOGIES
========================================================= */

const technologies = [
  {
    name: "HTML5",
    logo: "html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: "css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "javascript/javascript-original.svg",
  },
  {
    name: "React",
    logo: "react/react-original.svg",
  },
  {
    name: "Redux",
    logo: "redux/redux-original.svg",
  },
  {
    name: "Material UI",
    logo: "materialui/materialui-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Vite",
    logo: "vitejs/vitejs-original.svg",
  },
  {
    name: "Node.js",
    logo: "nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    logo: "express/express-original.svg",
  },
  {
    name: "MongoDB",
    logo: "mongodb/mongodb-original.svg",
  },
  {
    name: "Mongoose",
    logo: "mongoose/mongoose-original.svg",
  },
  {
    name: "Git",
    logo: "git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "github/github-original.svg",
  },
  {
    name: "Postman",
    logo: "postman/postman-original.svg",
  },
  {
    name: "Cloudinary",
    logo: "cloudinary/cloudinary-original.svg",
  },
  {
    name: "JWT",
    logo: "jwt/jwt-original.svg",
  },
  {
    name: "REST APIs",
    icon: Globe,
  },
  {
    name: "Multer",
    icon: Cloud,
  },
];

/* =========================================================
   LOGO URL
========================================================= */

const getLogoUrl = (logo) => {
  if (!logo) return null;

  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${logo}`;
};

/* =========================================================
   TECHNOLOGY CARD
========================================================= */

const TechCard = ({ tech }) => {
  const logoUrl = getLogoUrl(tech.logo);
  const FallbackIcon = tech.icon || Code2;

  return (
    <li
      className="
        group
        flex
        h-[56px]
        min-w-[145px]
        shrink-0
        items-center
        gap-3
        rounded-xl
        border
        border-slate-200
        bg-white
        px-3.5
        shadow-[0_2px_8px_rgba(15,23,42,0.04)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-teal-600
        hover:shadow-[0_8px_24px_rgba(13,148,136,0.12)]
      "
    >
      {/* Logo Container */}

      <div
        aria-hidden="true"
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-slate-50
          ring-1
          ring-slate-200
          transition-all
          duration-300
          group-hover:bg-teal-50
          group-hover:ring-teal-200
        "
      >
        {logoUrl ? (
          <>
            <img
              src={logoUrl}
              alt=""
              aria-hidden="true"
              className="h-6 w-6 object-contain"
              loading="lazy"
              decoding="async"
              onError={(event) => {
                event.currentTarget.style.display = "none";

                const fallback =
                  event.currentTarget.parentElement?.querySelector(
                    ".tech-fallback-icon"
                  );

                if (fallback) {
                  fallback.classList.remove("hidden");
                }
              }}
            />

            <FallbackIcon
              aria-hidden="true"
              className="tech-fallback-icon hidden h-5 w-5 text-teal-700"
              strokeWidth={1.8}
            />
          </>
        ) : (
          <FallbackIcon
            aria-hidden="true"
            className="h-5 w-5 text-teal-700"
            strokeWidth={1.8}
          />
        )}
      </div>

      {/* Technology Name */}

      <span
        className="
          whitespace-nowrap
          text-[13px]
          font-semibold
          text-slate-700
          transition-colors
          duration-200
          group-hover:text-slate-950
        "
      >
        {tech.name}
      </span>
    </li>
  );
};

/* =========================================================
   TECH STACK
========================================================= */

export default function TechStack() {
  /*
    Duplicate the array so the marquee
    can continuously loop without an empty space.
  */

  const rowOne = [...technologies, ...technologies];
  const rowTwo = [...technologies, ...technologies];

  return (
    <section
      id="tech-stack"
      aria-labelledby="tech-stack-heading"
      className="
        border-y
        border-slate-200
        bg-slate-50
        px-[30px]
        py-[45px]
      "
    >
      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="w-full">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <header className="mx-auto mb-8 max-w-2xl text-center">

          {/* Small Badge */}

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-teal-200
              bg-teal-50
              px-3.5
              py-1.5
              text-[11px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-teal-700
            "
          >
            My Tech Stack
          </span>

          {/* Heading */}

          <h2
            id="tech-stack-heading"
            className="
              mt-3
              font-heading
              text-2xl
              font-extrabold
              leading-tight
              tracking-tight
              text-slate-950
              sm:text-3xl
            "
          >
            Technologies Behind My Work
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-2.5
              max-w-xl
              text-sm
              leading-relaxed
              text-slate-500
              sm:text-[15px]
            "
          >
            I work with modern frontend, backend, database, and development
            tools including React.js, JavaScript, Node.js, Express.js,
            MongoDB, REST APIs, and modern deployment technologies to build
            fast, scalable, responsive, and production-ready web applications.
          </p>

          {/* Accent Line */}

          <div
            aria-hidden="true"
            className="
              mx-auto
              mt-4
              h-1
              w-10
              rounded-full
              bg-teal-700
            "
          />
        </header>

        {/* =====================================================
            MARQUEE
        ===================================================== */}

        <div
          className="relative overflow-hidden"
          aria-label="Technologies and tools used by Md Tauseef"
        >
          {/* LEFT FADE */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-20
              h-full
              w-16
              bg-gradient-to-r
              from-slate-50
              to-transparent
            "
          />

          {/* RIGHT FADE */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-20
              h-full
              w-16
              bg-gradient-to-l
              from-slate-50
              to-transparent
            "
          />

          {/* =================================================
              ROW 1
              LEFT → RIGHT
          ================================================= */}

          <div className="group overflow-hidden">
            <ul
              aria-label="Frontend and full stack technologies"
              className="
                flex
                w-max
                gap-3
                py-1
                animate-marquee-left
                group-hover:[animation-play-state:paused]
              "
            >
              {rowOne.map((tech, index) => (
                <TechCard
                  key={`row-one-${tech.name}-${index}`}
                  tech={tech}
                />
              ))}
            </ul>
          </div>

          {/* =================================================
              ROW 2
              RIGHT → LEFT
          ================================================= */}

          <div className="group mt-3 overflow-hidden">
            <ul
              aria-label="Backend, database and development tools"
              className="
                flex
                w-max
                gap-3
                py-1
                animate-marquee-right
                group-hover:[animation-play-state:paused]
              "
            >
              {rowTwo.map((tech, index) => (
                <TechCard
                  key={`row-two-${tech.name}-${index}`}
                  tech={tech}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* =====================================================
          MARQUEE CSS
      ===================================================== */}

      <style>{`
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 35s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 35s linear infinite;
        }

        @media (max-width: 640px) {
          .animate-marquee-left {
            animation-duration: 28s;
          }

          .animate-marquee-right {
            animation-duration: 28s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-left,
          .animate-marquee-right {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}
