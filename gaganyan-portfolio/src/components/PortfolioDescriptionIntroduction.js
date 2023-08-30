import React from "react";
import "../styles/PortfolioDescriptionIntroduction.css";
import { FiDownload } from "react-icons/fi";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import profileDiscriptionData from "../data/profile-description-data.json"

export default function PortfolioDescriptionIntroduction() {
  return (
    <div className="body">
      <div className="title" data-aos="fade-up">
        Hello I'm {profileDiscriptionData.profileContentData.name} !
      </div>
      <div className="role">
        <TypeAnimation
          data-aos="fade-up"
          sequence={[
            `${profileDiscriptionData.profileContentData.roles[0]}`,
            2000,
            `${profileDiscriptionData.profileContentData.roles[1]}`,
            2000,
            `${profileDiscriptionData.profileContentData.roles[2]}`,
            2000,
            "",
          ]}
          speed={20}
          wrapper="h4"
          repeat={Infinity}
        />
      </div>
      <div className="summary">
        {profileDiscriptionData.profileContentData.faceContent}
      </div>
      <div className="resume" data-aos="fade-up">
        <button
          onClick={() => {
            const anchor = document.querySelector("#contact");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          className="hire-me-btn"
        >
          Hire me
        </button>
        <button className="resume-btn">
          Resume <FiDownload />
        </button>
      </div>
      <div className="social-media" data-aos="fade-up" data-aos-duration="1500">
        <a href="">
          {" "}
          <AiFillGithub className="social-media-icon github-icon" />{" "}
        </a>
        <a href="">
          {" "}
          <FaLinkedinIn className="social-media-icon linkedin-icon" />{" "}
        </a>
        <a href="">
          {" "}
          <AiFillInstagram className="social-media-icon instagram-icon" />{" "}
        </a>
        <a href="">
          {" "}
          <FaFacebook className="social-media-icon facebook-icon" />{" "}
        </a>
        <a href="">
          {" "}
          <AiFillTwitterCircle className="social-media-icon tweeter-icon" />{" "}
        </a>
      </div>
    </div>
  );
}
