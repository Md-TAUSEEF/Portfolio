import React from "react";
import { Helmet } from "react-helmet-async";

import Services from "../Services";
import Projects from "../Projects";
import CTA from "../CTA";
import Contact from "../Contact";

export default function Contactpage() {
  return (
    <>
      <Helmet>
        <title>Contact Md Tauseef | Hire a Full Stack MERN Developer</title>

        <meta
          name="description"
          content="Contact Md Tauseef for MERN Stack development, React frontend, business websites, admin dashboards, APIs and custom web applications."
        />

        <meta
          property="og:title"
          content="Contact Md Tauseef | Hire a Full Stack MERN Developer"
        />

        <meta
          property="og:description"
          content="Get in touch with Md Tauseef for MERN Stack development, React applications, business websites, dashboards and custom web solutions."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <Contact />

        <Projects />

        <Services />

        <CTA />
      </main>
    </>
  );
}