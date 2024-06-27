import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import "./Skill.css";
import Marquee from "react-fast-marquee";
import Footer from "./Footer";

export default function Skill() {
  return (
    <>
    <div className="Skill_container">
     <div className="center">
     <h1>
        My <span>Skills</span>
      </h1>
     </div>

      <div className="container2">
      <div className="skill_left">
        <div className="skill_left_row">
        <Marquee>
          <h1>My Technical Skills</h1>
          </Marquee>
        </div>
        <div className="skill_left_row1">
          <div className="skill_left_row2">
            <TiHtml5 style={{ color: "rgb(220,74,37)" }} />
            <div className="progress-line html">
              <span></span>
            </div>
          </div>

          <div className="skill_left_row2">
            <IoLogoCss3 style={{ color: "rgb(36,75,221)" }} />

            <div className="progress-line css">
              <span></span>
            </div>
          </div>

          <div className="skill_left_row2">
            <TbBrandJavascript style={{ color: "rgb(239,216,27)" }} />

            <div className="progress-line javascript">
              <span></span>
            </div>
          </div>

          <div className="skill_left_row2">
            <FaReact style={{ color: "rgb(4,209,246)" }} />

            <div className="progress-line react">
              <span></span>
            </div>
          </div>

          <div className="skill_left_row2">
            <FaBootstrap style={{ color: "rgb(133,18,242)" }} />

            <div className="progress-line bootstrap">
              <span></span>
            </div>
          </div>

          <div className="skill_left_row2">
            <FaNode style={{ color: "rgb(78,150,67)" }} />

            <div className="progress-line node">
              <span></span>
            </div>
          </div>

          <div className="skill_left_row2">
            <SiExpress style={{ color: "rgb(50,50,50)" }} />

            <div className="progress-line express">
              <span></span>
            </div>
          </div>

          <div className="skill_left_row2">
            <SiMongodb style={{ color: "rgb(64,155,57)" }} />

            <div className="progress-line mongodb">
              <span></span>
            </div>
          </div>

          <div className="skill_left_row2">
            <TbBrandCpp style={{ color: "rgb(0,66,126)" }} />

            <div className="progress-line cpp">
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <div className="skill_right">
        <h1>Professional Skills</h1>
        <div className="divided">
          <div className="skill_right1">
            <div className="circle">
              <div className="circle_row3">
                <h1>60%</h1>
              </div>
              <h2> Problem Solving</h2>
            </div>

            <div className="circle">
              <div className="circle_row3">
                <h1>70%</h1>
              </div>
              <h2>Creativity</h2>
            </div>
          </div>

          <div className="skill_right3">
            <div className="circle">
              <div className="circle_row3">
                <h1>80%</h1>
              </div>
              <h2>Communication</h2>
            </div>

            <div className="circle">
              <div className="circle_row3">
                <h1>90%</h1>
              </div>
              <h2>Teamwork</h2>
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
    <Footer/>
    </>
  );
}
