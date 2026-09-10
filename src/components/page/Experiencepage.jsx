import React from "react";
import { Helmet } from "react-helmet-async";

import Experience from "../Experience";
import Process from "../Process";
import WhyChooseMe from "../WhyChooseMe";
import CTA from "../CTA";

export default function Experiencepage() {
  return (
    <>
      <Helmet>
        <title>Experience | Full Stack MERN Developer | Md Tauseef</title>

        <meta
          name="description"
          content="Explore the professional experience of Md Tauseef as a MERN Stack and React.js Developer, working on production-ready web applications and client projects."
        />

        <meta
          property="og:title"
          content="Experience | Full Stack MERN Developer | Md Tauseef"
        />

        <meta
          property="og:description"
          content="Explore Md Tauseef's professional experience in MERN Stack, React.js and modern web application development."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <Experience />

        <Process />

        <WhyChooseMe />

        <CTA />
      </main>
    </>
  );
}