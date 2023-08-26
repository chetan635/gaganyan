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

export default function PortfolioDescriptionIntroduction() {
  return (
    <div className="body">
      <div className="title" data-aos="fade-up">
        Hello I'm Kiran Ahire
      </div>
      <div className="role" data-aos="fade-up">
        <TypeAnimation
          data-aos="fade-up"
          sequence={[
            "Web Developer",
            2000,
            "Software Engineer",
            2000,
            "Tech enthusiast",
            2000,
            "",
          ]}
          speed={20}
          wrapper="h4"
          repeat={Infinity}
        />
      </div>
      <div className="summary" data-aos="fade-up">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </div>
      <div className="resume" data-aos="fade-up">
        <button className="hire-me-btn">Hire me</button>
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
