import React from "react";
import "../styles/PortfolioDescription.css";
import PortfolioDescriptionIntroduction from "./PortfolioDescriptionIntroduction";
import PortfolioDescriptionProfile from "./PortfolioDescriptionProfile";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

export default function PortfolioDescription() {
  return (
    <div id="home" className="PortfolioDescbody">
      <div className="social-media-left-bar">
        <div className="social-media-left-bar-icons">
          <a href="">
            {" "}
            <AiFillGithub className="social-media-icon github-icon" />{" "}
          </a>
        </div>
        <div className="social-media-left-bar-icons">
          <a href="">
            {" "}
            <FaLinkedinIn className="social-media-icon linkedin-icon" />{" "}
          </a>
        </div>
        <div className="social-media-left-bar-icons">
          <a href="">
            {" "}
            <AiFillInstagram className="social-media-icon instagram-icon" />{" "}
          </a>
        </div>
        <div className="social-media-left-bar-icons">
          <a href="">
            {" "}
            <FaFacebook className="social-media-icon facebook-icon" />{" "}
          </a>
        </div>
        <div className="social-media-left-bar-icons">
          <a href="">
            {" "}
            <AiFillTwitterCircle className="social-media-icon tweeter-icon" />{" "}
          </a>
        </div>
      </div>
      <div className="leftPart">
        <PortfolioDescriptionIntroduction />
      </div>
      <div className="rightPart">
        <PortfolioDescriptionProfile />
      </div>
    </div>
  );
}
