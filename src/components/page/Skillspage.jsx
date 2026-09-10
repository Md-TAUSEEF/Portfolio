import React from "react";
import { Helmet } from "react-helmet-async";

import Experience from "../Experience";
import Process from "../Process";
import WhyChooseMe from "../WhyChooseMe";
import CTA from "../CTA";
import Skills from "../Skills";

export default function Skillspage() {
  return (
    <>
      <Helmet>
        <title>MERN Stack Skills | React, Node.js & MongoDB | Md Tauseef</title>

        <meta
          name="description"
          content="Explore Md Tauseef's MERN Stack skills including React.js, JavaScript, Redux, Node.js, Express.js, MongoDB, REST APIs, Git and modern deployment technologies."
        />

        <meta
          property="og:title"
          content="MERN Stack Skills | React, Node.js & MongoDB | Md Tauseef"
        />

        <meta
          property="og:description"
          content="Explore skills in React.js, JavaScript, Redux, Node.js, Express.js, MongoDB, REST APIs, Git and modern web development technologies."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <Skills />

        <Experience />

        <Process />

        <WhyChooseMe />

        <CTA />
      </main>
    </>
  );
}