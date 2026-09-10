import React from "react";
import { Helmet } from "react-helmet-async";

import Services from "../Services";
import Projects from "../Projects";
import CTA from "../CTA";

export default function Servicespage() {
  return (
    <>
      <Helmet>
        <title>Web Development Services | Md Tauseef</title>

        <meta
          name="description"
          content="Explore web development services by Md Tauseef, including MERN Stack development, React frontend, business websites, admin dashboards, APIs and custom web applications."
        />

        <meta
          property="og:title"
          content="Web Development Services | Md Tauseef"
        />

        <meta
          property="og:description"
          content="MERN Stack development, React frontend, business websites, admin dashboards, APIs and custom web applications by Md Tauseef."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <Services />

        <Projects />

        <CTA />
      </main>
    </>
  );
}