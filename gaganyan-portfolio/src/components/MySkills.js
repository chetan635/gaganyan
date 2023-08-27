import React from "react";
import "../styles/MySkills.css";
import SectionHeadings from "./shared-components/SectionHeadings";
import { SiJavascript, SiEmberdotjs } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { IoLogoNodejs } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { BsCodeSlash } from "react-icons/bs";
import { BiLogoJava } from "react-icons/bi";


export default function MySkills() {
  const data = {
    heading: "My Skills",
  };
  return (
    <div id="skills" className="my-skills-details-full">
      <SectionHeadings data={data} />
      <div className="my-skill-container pd-y-2">
        <div className="my-skills-heading">Here are my skills</div>
        <div className="my-skills-percentage-bars">
          <div className="skill mr-y-3" data-aos="zoom-in">
            <IoLogoHtml5 /> HTML
            <div class="w3-border">
              <div class="w3-grey html"></div>
            </div>
          </div>
          <div className="skill" data-aos="zoom-in">
            <IoLogoCss3 /> CSS
            <div class="w3-border">
              <div class="w3-grey css"></div>
            </div>
          </div>
          <div className="skill mr-y-3" data-aos="zoom-in">
            <SiJavascript /> Javascript
            <div class="w3-border">
              <div class="w3-grey javascript"></div>
            </div>
          </div>
          <div className="skill" data-aos="zoom-in">
            <SiEmberdotjs /> Ember Js
            <div class="w3-border">
              <div class="w3-grey ember-js"></div>
            </div>
          </div>
          <div className="skill mr-y-3" data-aos="zoom-in">
            <FaReact /> React Js
            <div class="w3-border">
              <div class="w3-grey react-js"></div>
            </div>
          </div>
        </div>
        <div className="my-skills-cards">
          <div className=" skill-card skill-card-nodejs" data-aos="zoom-in">
            <div className="skill-card-logo-nodejs"><IoLogoNodejs/></div>
            <div className="skill-card-name">Node Js</div>
          </div>
          <div className="skill-card skill-card-graphql" data-aos="zoom-in">
            <div className="skill-card-logo-graphql"><GrGraphQl/></div>
            <div className="skill-card-name">GraphQL</div>
          </div>
          <div className="skill-card skill-card-cpp" data-aos="zoom-in">
            <div className="skill-card-logo-cpp"><BsCodeSlash/></div>
            <div className="skill-card-name">C++</div>
          </div>
          <div className="skill-card skill-card-java" data-aos="zoom-in">
            <div className="skill-card-logo-java"><BiLogoJava/></div>
            <div className="skill-card-name">cheatn</div>
          </div>
        </div>
      </div>
    </div>
  );
}
