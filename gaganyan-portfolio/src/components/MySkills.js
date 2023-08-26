import React from "react";
import "../styles/MySkills.css";
import SectionHeadings from "./shared-components/SectionHeadings";
import {
  SiJavascript,
  SiEmberdotjs
} from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { IoLogoNodejs } from "react-icons/io";
import { FaReact } from "react-icons/fa";

export default function MySkills() {
  const data = {
    heading: "My Skills",
  };
  return (
    <div className="my-skills-details-full">
      <SectionHeadings data={data} />
      <div className="my-skill-container pd-y-2">
        <div className="my-skills-heading">Here are my skills</div>
        <div className="my-skills-percentage-bars">
          <div className="skill mr-y-3" data-aos="zoom-in">
            <IoLogoHtml5/> HTML
            <div class="w3-border">
              <div class="w3-grey html"></div>
            </div>
          </div>
          <div className="skill" data-aos="zoom-in">
            <IoLogoCss3/> CSS
            <div class="w3-border">
              <div class="w3-grey css"></div>
            </div>
          </div>
          <div className="skill mr-y-3" data-aos="zoom-in">
            <SiJavascript/> Javascript
            <div class="w3-border">
              <div class="w3-grey javascript"></div>
            </div>
          </div>
          <div className="skill" data-aos="zoom-in">
            <SiEmberdotjs/> Ember Js
            <div class="w3-border">
              <div class="w3-grey ember-js"></div>
            </div>
          </div>
          <div className="skill mr-y-3" data-aos="zoom-in">
            <FaReact/> React Js
            <div class="w3-border">
              <div class="w3-grey react-js"></div>
            </div>
          </div>
        </div>
        <div className="my-skills-cards">
          <div className="skill-card-1" data-aos="zoom-in">
            <div className="skill-card-logo-2">apple</div>
            <div className="skill-card-name">cheatn</div>
          </div>
          <div className="skill-card-2" data-aos="zoom-in">
            <div className="skill-card-logo-1">apple</div>
            <div className="skill-card-name">cheatn</div>
          </div>
          <div className="skill-card-3" data-aos="zoom-in">
            <div className="skill-card-logo-2">apple</div>
            <div className="skill-card-name">cheatn</div>
          </div>
          <div className="skill-card-4" data-aos="zoom-in">
            <div className="skill-card-logo-1">apple</div>
            <div className="skill-card-name">cheatn</div>
          </div>
        </div>
      </div>
    </div>
  );
}
