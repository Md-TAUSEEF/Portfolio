
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Sparkles,
  ArrowUpRight,
  MessageCircle,
  Globe,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Full Stack Web App",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.error) {
      setStatus({
        submitting: false,
        success: false,
        error: false,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
      });

      return;
    }

    setStatus({
      submitting: true,
      success: false,
      error: false,
    });

    // Your WhatsApp number
    const whatsappNumber = "917255005301";

    // Message sent to WhatsApp
    const whatsappMessage = `
Hello Md Tauseef,

I would like to discuss a project with you.

━━━━━━━━━━━━━━━━━━
PROJECT DETAILS
━━━━━━━━━━━━━━━━━━

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Project Type: ${formData.projectType}

Message:
${formData.message}

━━━━━━━━━━━━━━━━━━
Sent from your portfolio website.
`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setTimeout(() => {
      setStatus({
        submitting: false,
        success: true,
        error: false,
      });

      // Open WhatsApp
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "Full Stack Web App",
        message: "",
      });
    }, 700);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-slate-200 bg-slate-50 px-[30px] py-[45px]"
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

      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-teal-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-violet-100/40 blur-3xl" />

      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="mb-9 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-teal-700" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal-700">
                Get In Touch
              </span>
            </div>

            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">
              Let's Build Something{" "}
              <span className="text-teal-700">Great.</span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Have a project idea, business requirement, or web application in
              mind? Share your requirements and let's turn them into a
              production-ready digital solution.
            </p>
          </div>

          {/* Availability Badge */}
          <div className="hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 shadow-sm lg:flex">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white" />
              <MessageCircle className="h-5 w-5" />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                Current Status
              </p>

              <p className="mt-0.5 text-sm font-extrabold text-slate-900">
                Available for Projects
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
          {/* LEFT SIDE */}
          <div className="xl:col-span-4">
            <div className="relative h-full overflow-hidden rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm">
              {/* Card Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-teal-100/50 blur-3xl" />

              <div className="relative z-10">
                {/* Small Heading */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-teal-700">
                      Contact Details
                    </p>

                    <h3 className="mt-1 font-heading text-xl font-extrabold text-slate-950">
                      Let's Connect
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  I'm available for MERN development, business websites,
                  dashboards, APIs, and complete web application projects.
                </p>

                {/* Contact Items */}
                <div className="mt-6 space-y-3">
                  {/* Email */}
                  <a
                    href="mailto:mdtauseefkhan38@gamil.com"
                    className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:bg-teal-50/50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-100">
                      <Mail className="h-4.5 w-4.5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Email
                      </p>

                      <p className="mt-0.5 truncate text-xs font-bold text-slate-800 group-hover:text-teal-700">
                        mdtauseefkhan38@gamil.com
                      </p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/917255005301"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50/50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
                      <FaWhatsapp className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        WhatsApp
                      </p>

                      <p className="mt-0.5 text-xs font-bold text-slate-800 group-hover:text-emerald-600">
                        +91 72550 05301
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                      <MapPin className="h-4.5 w-4.5" />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Location
                      </p>

                      <p className="mt-0.5 text-xs font-bold text-slate-800">
                        India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-slate-100" />

                {/* Social */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      Follow / Connect
                    </p>

                    <p className="mt-1 text-xs font-bold text-slate-700">
                      Find me online
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/Md-TAUSEEF"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
                    >
                      <FaGithub className="h-4 w-4" />
                    </a>

                    <a
                      href="https://www.linkedin.com/in-md-tauseef"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                    >
                      <FaLinkedinIn className="h-4 w-4" />
                    </a>

                    <a
                      href="https://wa.me/917255005301"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white"
                    >
                      <FaWhatsapp className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Bottom Badge */}
                <div className="mt-5 flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-3">
                  <Globe className="h-4 w-4 text-teal-400" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.13em] text-slate-300">
                    Available for Remote Projects
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="xl:col-span-8">
            <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              {/* Form Top Accent */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-teal-600 via-teal-400 to-yellow-400" />

              {/* Form Header */}
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-teal-700">
                    Project Enquiry
                  </p>

                  <h3 className="mt-1 font-heading text-xl font-extrabold text-slate-950 sm:text-2xl">
                    Tell Me About Your Project
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Fill in the details below and I'll get back to you.
                  </p>
                </div>

                <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 sm:flex">
                  <Send className="h-5 w-5" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Success */}
                {status.success && (
                  <div
                    role="alert"
                    className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-xs font-medium text-emerald-800"
                  >
                    <CheckCircle className="h-5 w-5 shrink-0 text-emerald-600" />

                    <span>
                      Your enquiry is ready in WhatsApp. Please press Send to
                      submit it.
                    </span>
                  </div>
                )}

                {/* Error */}
                {status.error && (
                  <div
                    role="alert"
                    className="flex items-center gap-3 rounded-xl border border-rose-200 bg-rose-50 p-3.5 text-xs font-medium text-rose-800"
                  >
                    <AlertCircle className="h-5 w-5 shrink-0 text-rose-600" />

                    <span>
                      Please fill in Name, Email and Message before submitting.
                    </span>
                  </div>
                )}

                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold text-slate-700"
                    >
                      Your Name <span className="text-teal-700">*</span>
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      autoComplete="name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-xs text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold text-slate-700"
                    >
                      Your Email <span className="text-teal-700">*</span>
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      autoComplete="email"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-xs text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10"
                    />
                  </div>
                </div>

                {/* Phone + Project */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="phone"
                      className="text-xs font-bold text-slate-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-xs text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="projectType"
                      className="text-xs font-bold text-slate-700"
                    >
                      Project Type
                    </label>

                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-xs text-slate-700 outline-none transition-all focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10"
                    >
                      <option value="Full Stack Web App">
                        Full Stack Web App (MERN)
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

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold text-slate-700"
                  >
                    Project Details <span className="text-teal-700">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, features, requirements, timeline, etc..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-xs leading-5 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-xs font-extrabold text-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-400/20 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status.submitting ? "Opening WhatsApp..." : "Send Enquiry"}

                  {!status.submitting && (
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}

                  {status.submitting && (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950/30 border-t-slate-950" />
                  )}
                </button>

                <p className="text-center text-[9px] font-medium text-slate-400">
                  Your enquiry will open directly in WhatsApp for quick
                  communication.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
