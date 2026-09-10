import React from "react";
import { Helmet } from "react-helmet-async";

import Services from "../Services";
import Projects from "../Projects";
import CTA from "../CTA";

export default function Projectspage() {
  return (
    <>
      <Helmet>
        <title>Projects | MERN & Web Development | Md Tauseef</title>

        <meta
          name="description"
          content="Explore real-world web development projects built with React, Node.js, Express.js, MongoDB and modern frontend technologies by Md Tauseef."
        />

        <meta
          property="og:title"
          content="Projects | MERN & Web Development | Md Tauseef"
        />

        <meta
          property="og:description"
          content="Explore real-world MERN Stack and web development projects built by Md Tauseef using modern technologies."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <Projects />

        <Services />

        <CTA />
      </main>
    </>
  );
}