import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../Hero";
import TechStack from "../TechStack";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import CTA from "../CTA";
import Contact from "../Contact";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Md Tauseef | Full Stack MERN Developer</title>

        <meta
          name="description"
          content="Md Tauseef is a Full Stack MERN Developer specializing in React.js, Node.js, Express.js, MongoDB and modern production-ready web applications."
        />

        <meta
          property="og:title"
          content="Md Tauseef | Full Stack MERN Developer"
        />

        <meta
          property="og:description"
          content="Full Stack MERN Developer building modern, scalable and business-focused web applications."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <Hero />

        <TechStack />

        <About />

        <Projects />

        <Skills />

        <CTA />

        <Contact />
      </main>
    </>
  );
}