import React from "react"; 
import TCS from "./Images/TCS.jpg";
import Kg from "./Images/Kg.png";
import Cloude from "./Images/ClodeCng.jpg";
import code1 from "./Images/code1.jpg";
import code2 from "./Images/code2.jpg";
import Slashmark from "./Images/SlashMark.jpg";
import Slash from "./Images/SlashMarkOfr.jpg";
import Noc from "./Images/Noc.jpg";
import pdg from "./Images/pdg.jpg";
import "./Certificate.css";
import Footer from "./Pages/Footer";

const certificates = [
  {
    Image: TCS,
    title: "CyberSecurity Analyst",
    recipientName: "Md Tauseef",
    date: "May 22, 2024",
  },
  {
    Image: Kg,
    title: "React & Redux Youtube Course",
    recipientName: "Md Tauseef",
    date: "January 9, 2024",
  },
  {
    Image: Slashmark,
    title: "InternShip Completion Certificate from Slash Mark",
    recipientName: "Md Tauseef",
    date: "March 15, 2024",
  },
  {
    Image: Slash,
    title: "Slash Mark Offer Letter",
    recipientName: "Md Tauseef",
    date: "Dec 15, 2023",
  },
  {
    Image: pdg,
    title: "Prodigy Infotech Internship Offer Letter",
    recipientName: "Md Tauseef",
    date: "Dec 31, 2024",
  },
  {
    Image: Cloude,
    title: "Internship Appointment Letter from Cloude CounSelage",
    recipientName: "Md Tauseef",
    date: "Oct 22, 2023",
  },
  {
    Image: code1,
    title: "CodeClause InternShip Completion Certificate",
    recipientName: "Md Tauseef",
    date: "Sep 1, 2023",
  },
  {
    Image: code2,
    title: "CodeClause InternShip Completion Certificate",
    recipientName: "Md Tauseef",
    date: "Sep 1, 2023",
  },
  {
    Image: Noc,
    title: "NOC For Internship",
    recipientName: "Md Tauseef",
    date: "Mar 15, 2024",
  }
];

const Certificate = () => {
  return (
    <>
    <div className="Certificate">
      <h2>Certificates</h2>
      <div className="Certificate_list">
        {certificates.map((cert, index) => (
          <div key={index} className="Certificate_item">
            <img src={cert.Image} alt={cert.title} className="cert-image" />
            <h3>{cert.title}</h3>
            <p>{cert.recipientName}</p>
            <h4>{cert.date}</h4>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Certificate;
