import React from "react";
import "../styles/PortfolioDescription.css";
import PortfolioDescriptionIntroduction from "./PortfolioDescriptionIntroduction";
import PortfolioDescriptionProfile from "./PortfolioDescriptionProfile";

export default function PortfolioDescription() {
  return (
    <div id="home" className="PortfolioDescbody">
      <div className="leftPart">
        <PortfolioDescriptionIntroduction />
      </div>
      <div className="rightPart">
        <PortfolioDescriptionProfile />
      </div>
    </div>
  );
}
