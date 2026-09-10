import React from "react";
import { Helmet } from "react-helmet-async";

import About from "../About";
import Projectspage from "./Projectspage";

export default function Aboutpage() {
  return (
    <>
      <Helmet>
        <title>About Md Tauseef | Full Stack MERN Developer</title>

        <meta
          name="description"
          content="Learn more about Md Tauseef, a Full Stack MERN Developer building modern, responsive and production-ready web applications."
        />

        <meta
          property="og:title"
          content="About Md Tauseef | Full Stack MERN Developer"
        />

        <meta
          property="og:description"
          content="Learn more about Md Tauseef and his experience building modern, responsive and production-ready web applications."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <About />

        <Projectspage />
      </main>
    </>
  );
}