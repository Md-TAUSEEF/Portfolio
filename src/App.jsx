
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Aboutpage from "./components/page/Aboutpage";
import Home from "./components/page/Home";
import Servicespage from "./components/page/Servicespage";
import Experiencepage from "./components/page/Experiencepage";
import Skillspage from "./components/page/Skillspage";
import Projectspage from "./components/page/Projectspage";
import Contactpage from "./components/page/Contactpage";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar";
import ContactPopup from "./components/ContactPopup";


// =========================
// SCROLL TO TOP
// =========================
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


// =========================
// APP
// =========================
export default function App() {
  return (
    <BrowserRouter>

      {/* Page change hone par automatically top par jayega */}
      <ScrollToTop />

      <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-teal-100 selection:text-teal-900">

        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<Aboutpage />} />

          {/* Services */}
          <Route path="/services" element={<Servicespage />} />

          {/* Projects */}
          <Route path="/projects" element={<Projectspage />} />

          {/* Experience */}
          <Route path="/experience" element={<Experiencepage />} />

          {/* Skills */}
          <Route path="/skills" element={<Skillspage />} />

          {/* Contact */}
          <Route path="/contact" element={<Contactpage />} />

        </Routes>

        {/* Global Contact Popup */}
        <ContactPopup />
<Footer />
      </div>
    </BrowserRouter>
  );
}
