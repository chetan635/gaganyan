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
      <div className="title">Hello I'm Kiran Ahire</div>
      <div className="role">
        <TypeAnimation
          data-aos="fade-up"
          sequence={["Web Developer", 2000, "Software Engineer", 2000, ""]}
          speed={20}
          wrapper="h4"
          repeat={Infinity}
        />
      </div>
      <div className="summary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </div>
      <div className="resume">
        <button className="hire-me-btn">Hire me</button>
        <button className="resume-btn">
          Resume <FiDownload />
        </button>
      </div>
      <div className="social-media">
        <a href="">
          {" "}
          <AiFillGithub className="social-media-icon" />{" "}
        </a>
        <a href="">
          {" "}
          <FaLinkedinIn className="social-media-icon" />{" "}
        </a>
        <a href="">
          {" "}
          <AiFillInstagram className="social-media-icon" />{" "}
        </a>
        <a href="">
          {" "}
          <FaFacebook className="social-media-icon" />{" "}
        </a>
        <a href="">
          {" "}
          <AiFillTwitterCircle className="social-media-icon" />{" "}
        </a>
      </div>
    </div>
  );
}
