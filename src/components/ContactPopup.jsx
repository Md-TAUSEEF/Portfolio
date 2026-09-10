
import React, { useEffect, useState } from "react";
import {
  X,
  Send,
  User,
  Mail,
  Phone,
  BriefcaseBusiness,
  MessageSquare,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 40000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "917255005301";

    const whatsappMessage = `
Hello Md Tauseef,

I would like to discuss a project with you.

━━━━━━━━━━━━━━━━━━
PROJECT DETAILS
━━━━━━━━━━━━━━━━━━

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Project Type: ${formData.projectType || "Not specified"}

Message:
${formData.message}

━━━━━━━━━━━━━━━━━━
Sent from your portfolio website.
`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });

    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 px-[30px] py-6 backdrop-blur-md">

      {/* ================= POPUP ================= */}
      <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto overflow-hidden rounded-[30px] border border-white/30 bg-white shadow-[0_35px_120px_rgba(15,23,42,0.35)]">

        {/* ================= CLOSE ================= */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close contact form"
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-500 shadow-md backdrop-blur transition-all duration-300 hover:scale-105 hover:border-red-200 hover:bg-red-50 hover:text-red-500"
        >
          <X className="h-4.5 w-4.5" />
        </button>

        {/* ================= HEADER ================= */}
        <div className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 px-6 py-7 sm:px-8 sm:py-8">

          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-teal-400/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

          {/* Small Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative pr-10">

            {/* Company Logo */}
            <div className="mb-5 flex items-center justify-between">

              <div className="flex h-12 items-center rounded-xl border border-white/15 bg-white/10 px-3 shadow-lg backdrop-blur-md">
                <img
                  src="/images/logo.png"
                  alt="Company Logo"
                  className="h-8 w-auto max-w-[150px] object-contain"
                />
              </div>

              <div className="hidden items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1.5 sm:flex">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
                </span>

                <span className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-teal-300">
                  Available for Projects
                </span>
              </div>
            </div>

            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-300/10 px-3 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-yellow-300" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-yellow-200">
                Let's Work Together
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Have a project in mind?
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
              Tell me about your idea, requirements or business needs.
              I'll get back to you and we'll discuss how to build it.
            </p>

            {/* Trust Points */}
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-teal-400" />
                Fast Response
              </div>

              <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                Direct WhatsApp
              </div>

              <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-violet-400" />
                Project Discussion
              </div>
            </div>
          </div>
        </div>

        {/* ================= FORM ================= */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-white px-6 py-6 sm:px-8 sm:py-8"
        >

          {/* Name + Email */}
          <div className="grid gap-5 sm:grid-cols-2">

            {/* Name */}
            <div>
              <label
                htmlFor="popup-name"
                className="mb-2 block text-xs font-bold text-slate-700"
              >
                Your Name
              </label>

              <div className="group relative">

                <div className="pointer-events-none absolute left-3.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg bg-blue-50">
                  <User className="h-4 w-4 text-blue-600 transition-transform duration-300 group-focus-within:scale-110" />
                </div>

                <input
                  id="popup-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-12 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-blue-200 hover:bg-white focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="popup-email"
                className="mb-2 block text-xs font-bold text-slate-700"
              >
                Email Address
              </label>

              <div className="group relative">

                <div className="pointer-events-none absolute left-3.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg bg-red-50">
                  <Mail className="h-4 w-4 text-red-500 transition-transform duration-300 group-focus-within:scale-110" />
                </div>

                <input
                  id="popup-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-12 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-red-200 hover:bg-white focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-400/10"
                />
              </div>
            </div>
          </div>

          {/* Phone + Project */}
          <div className="grid gap-5 sm:grid-cols-2">

            {/* Phone */}
            <div>
              <label
                htmlFor="popup-phone"
                className="mb-2 block text-xs font-bold text-slate-700"
              >
                Phone Number
                <span className="ml-1 font-medium text-slate-400">
                  (Optional)
                </span>
              </label>

              <div className="group relative">

                <div className="pointer-events-none absolute left-3.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg bg-emerald-50">
                  <Phone className="h-4 w-4 text-emerald-600 transition-transform duration-300 group-focus-within:scale-110" />
                </div>

                <input
                  id="popup-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-12 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-emerald-200 hover:bg-white focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label
                htmlFor="popup-projectType"
                className="mb-2 block text-xs font-bold text-slate-700"
              >
                Project Type
              </label>

              <div className="group relative">

                <div className="pointer-events-none absolute left-3.5 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg bg-violet-50">
                  <BriefcaseBusiness className="h-4 w-4 text-violet-600 transition-transform duration-300 group-focus-within:scale-110" />
                </div>

                <select
                  id="popup-projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 pl-12 pr-4 text-sm text-slate-700 outline-none transition-all hover:border-violet-200 hover:bg-white focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                >
                  <option value="">Select project type</option>
                  <option value="MERN Stack Development">
                    MERN Stack Development
                  </option>
                  <option value="Business Website">
                    Business Website
                  </option>
                  <option value="React Frontend">
                    React Frontend
                  </option>
                  <option value="Admin CRM Dashboard">
                    Admin CRM Dashboard
                  </option>
                  <option value="API Development">
                    API Development
                  </option>
                  <option value="E-Commerce Website">
                    E-Commerce Website
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="popup-message"
              className="mb-2 block text-xs font-bold text-slate-700"
            >
              Project Details
            </label>

            <div className="group relative">

              <div className="pointer-events-none absolute left-3.5 top-3.5 flex h-7 w-7 items-center justify-center rounded-lg bg-orange-50">
                <MessageSquare className="h-4 w-4 text-orange-500 transition-transform duration-300 group-focus-within:scale-110" />
              </div>

              <textarea
                id="popup-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell me about your project, requirements, features, timeline, etc."
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-12 pr-4 text-sm leading-6 text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-orange-200 hover:bg-white focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-400/10"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-yellow-400 px-5 py-3.5 text-sm font-extrabold text-slate-950 shadow-[0_8px_25px_rgba(250,204,21,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-[0_12px_30px_rgba(250,204,21,0.35)]"
          >
            {/* Shine */}
            <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative flex items-center gap-2">
              Send Enquiry on WhatsApp

              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </span>
          </button>

          {/* Bottom Info */}
          <div className="flex items-center justify-center gap-2 text-center">

            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50">
              <ArrowUpRight className="h-3 w-3 text-emerald-600" />
            </div>

            <p className="text-[11px] font-medium text-slate-400">
              Your enquiry will open directly in WhatsApp
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
