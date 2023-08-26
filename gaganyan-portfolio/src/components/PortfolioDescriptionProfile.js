import React from "react";
import "../styles/PortfolioDescriptionProfile.css";
import fullStackImage from "../Images/Full-stack-image.png";
import profileImage from "../Images/Chetan-profile-image.png";

export default function PortfolioDescriptionProfile() {
  return (
    <div className="portfolio-description-profile" data-aos="fade-up">
      <div className="profile-small-circle"></div>
      <div className="profile-medium-circle"></div>
      <div className="profile-main-circle">
        <img src={profileImage} alt="" className="profileImage" />
      </div>
      <div className="profile-description-circle">
        <img
          className="profile-description-circle-img"
          src={fullStackImage}
          alt=""
        />
      </div>
    </div>
  );
}
