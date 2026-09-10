import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Layout,
  Code2,
  Server,
  Database,
  Cloud,
  CheckCircle2,
} from "lucide-react";

import { servicesData } from "../data/services";

export default function Services() {
  const serviceStyles = [
    {
      icon: Globe,
      accent: "text-violet-600",
      iconBg: "bg-violet-50",
      iconBorder: "border-violet-100",
      number: "text-violet-100",
      glow: "bg-violet-200/30",
    },
    {
      icon: Layout,
      accent: "text-blue-600",
      iconBg: "bg-blue-50",
      iconBorder: "border-blue-100",
      number: "text-blue-100",
      glow: "bg-blue-200/30",
    },
    {
      icon: Code2,
      accent: "text-teal-600",
      iconBg: "bg-teal-50",
      iconBorder: "border-teal-100",
      number: "text-teal-100",
      glow: "bg-teal-200/30",
    },
    {
      icon: Server,
      accent: "text-orange-600",
      iconBg: "bg-orange-50",
      iconBorder: "border-orange-100",
      number: "text-orange-100",
      glow: "bg-orange-200/30",
    },
    {
      icon: Database,
      accent: "text-emerald-600",
      iconBg: "bg-emerald-50",
      iconBorder: "border-emerald-100",
      number: "text-emerald-100",
      glow: "bg-emerald-200/30",
    },
    {
      icon: Cloud,
      accent: "text-cyan-600",
      iconBg: "bg-cyan-50",
      iconBorder: "border-cyan-100",
      number: "text-cyan-100",
      glow: "bg-cyan-200/30",
    },
  ];

  return (
    <section
  id="services"
  aria-labelledby="services-heading"
  className="
    relative
    overflow-hidden
    bg-white
    px-[30px]
    py-[45px]
  "
>
      {/* ================= BACKGROUND DECORATION ================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-96
          w-96
          rounded-full
          bg-teal-100/30
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-20
          h-96
          w-96
          rounded-full
          bg-violet-100/20
          blur-3xl
        "
      />

      <div className="relative z-10 w-full">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="
            mb-12
            flex
            flex-col
            gap-7
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-3xl">

            {/* Eyebrow */}

            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-teal-600" />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-teal-700
                "
              >
                What I Offer
              </span>
            </div>

            {/* Heading */}

            <h2
  id="services-heading"
  className="
    text-3xl
    font-[900]
    leading-[1.08]
    tracking-[-0.03em]
    text-slate-950
    sm:text-4xl
    lg:text-[48px]
  "
>
              Digital solutions
              <br />

              <span className="text-teal-700">
                built to perform.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-2xl
                text-[15px]
                leading-7
                text-slate-500
                sm:text-base
              "
            >
              From polished user interfaces to scalable backend systems, I
              build reliable digital products focused on performance,
              usability, and real business needs.
            </p>
          </div>

          {/* Header Side Info */}

          <div
            className="
              hidden
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              px-5
              py-4
              lg:block
              lg:min-w-[235px]
            "
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Development Approach
              </span>
            </div>

            <p className="text-sm font-bold text-slate-900">
              Design → Build → Deploy
            </p>
          </div>
        </motion.div>

        {/* ================= SERVICES ================= */}

        <div className="space-y-4">
          {servicesData.map((service, index) => {
            const style =
              serviceStyles[index % serviceStyles.length];

            const Icon = style.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-slate-300
                  hover:shadow-[0_25px_70px_rgba(15,23,42,0.09)]
                "
              >
                {/* Hover Glow */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-56
                    w-56
                    rounded-full
                    ${style.glow}
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  `}
                />

                {/* Top Accent */}

                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-[2px]
                    bg-gradient-to-r
                    from-teal-500
                    via-teal-400
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    grid
                    grid-cols-1
                    gap-6
                    p-6
                    sm:p-7
                    lg:grid-cols-[90px_70px_1fr_150px]
                    lg:items-center
                    lg:gap-8
                    lg:px-8
                    lg:py-7
                  "
                >
                  {/* ================= NUMBER ================= */}

                  <div className="hidden lg:block">
                    <span
                      className={`
                        text-[58px]
                        font-[900]
                        leading-none
                        tracking-[-0.08em]
                        ${style.number}
                        transition-all
                        duration-500
                        group-hover:opacity-70
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="mt-2 h-px w-8 bg-slate-200 transition-all duration-300 group-hover:w-12 group-hover:bg-teal-400" />
                  </div>

                  {/* ================= ICON ================= */}

                  <div
                    className={`
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      ${style.iconBg}
                      ${style.iconBorder}
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:rotate-2
                    `}
                  >
                    <Icon
                      className={`h-6 w-6 ${style.accent}`}
                      strokeWidth={1.9}
                    />
                  </div>

                  {/* ================= CONTENT ================= */}

                  <div>
                    <div className="mb-2 flex items-center gap-3 lg:hidden">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        Service {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="h-px w-8 bg-slate-200" />
                    </div>

                    <h3
                      className="
                        text-xl
                        font-[850]
                        tracking-tight
                        text-slate-950
                        transition-colors
                        duration-300
                        group-hover:text-teal-700
                        sm:text-2xl
                      "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-3xl
                        text-[13px]
                        leading-6
                        text-slate-500
                        sm:text-sm
                        sm:leading-7
                      "
                    >
                      {service.description}
                    </p>

                    {/* Service Benefits */}

                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2
                          className={`h-3.5 w-3.5 ${style.accent}`}
                          strokeWidth={2.3}
                        />

                        <span className="text-[11px] font-semibold text-slate-500">
                          Clean Architecture
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <CheckCircle2
                          className={`h-3.5 w-3.5 ${style.accent}`}
                          strokeWidth={2.3}
                        />

                        <span className="text-[11px] font-semibold text-slate-500">
                          Responsive Experience
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ================= ACTION ================= */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      border-t
                      border-slate-100
                      pt-5
                      lg:block
                      lg:border-l
                      lg:border-t-0
                      lg:pl-8
                      lg:pt-0
                    "
                  >
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        Service
                      </p>

                      <p
                        className="
                          mt-1
                          text-xs
                          font-bold
                          text-slate-800
                        "
                      >
                        Available
                      </p>
                    </div>

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-slate-200
                        bg-slate-50
                        text-slate-400
                        transition-all
                        duration-300
                        group-hover:border-teal-200
                        group-hover:bg-teal-50
                        group-hover:text-teal-700
                        lg:mt-5
                      "
                    >
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
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
          }}
          transition={{
            duration: 0.55,
            delay: 0.15,
          }}
          className="
            mt-6
            flex
            flex-col
            gap-4
            rounded-[24px]
            border
            border-slate-200
            bg-slate-950
            px-6
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-8
          "
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-teal-400">
              Have a project in mind?
            </p>

            <h3 className="mt-1 text-lg font-extrabold tracking-tight text-white">
              Let&apos;s turn your idea into a working product.
            </h3>
          </div>

          <a
            href="#contact"
            className="
              inline-flex
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-yellow-400
              px-5
              py-3
              text-sm
              font-bold
              text-slate-950
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-yellow-300
              hover:shadow-[0_10px_30px_rgba(250,204,21,0.2)]
            "
          >
            Start a Conversation
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}