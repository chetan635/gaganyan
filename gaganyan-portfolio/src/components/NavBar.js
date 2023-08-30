import React from "react";
import "../styles/NavBar.css";
import { useEffect, useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import profileDiscriptionData from "../data/profile-description-data.json"

export default function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // changes are not done complately, will be done soon
  const handleHamburgerMenu = () => {
    var x = document.getElementById("profile-navigation");
    if (x.style.display == "none") {
      x.style.display = "block";
      document.getElementsByClassName("hamburger-icon")[0].style.display =
        "none";
      document.getElementsByClassName("hamburger-cross-icon")[0].style.display =
        "block";
    } else {
      x.style.display = "none";
      document.getElementsByClassName("hamburger-cross-icon")[0].style.display =
        "none";
      document.getElementsByClassName("hamburger-icon")[0].style.display =
        "block";
    }
  };

  return (
    <div
      id="NavBody"
      className={`Navbody ${
        scrollPosition > 0 ? `bg-white shadow-md` : "bg-transparent"
      } `}
    >
      <div className="profile-name">
        <div className="profile-person-name">
        {profileDiscriptionData.profileContentData.name}.{" "}
        </div>
        <div className="menuButtons">
          <RxHamburgerMenu
            onClick={handleHamburgerMenu}
            className="hamburger-icon"
          />
          <RxCross1
            onClick={handleHamburgerMenu}
            className="hamburger-cross-icon"
          />
        </div>
      </div>
      <div id="profile-navigation" className="profile-navigation">
        <ul className="profile-navigation-items">
          <li>
            <a
              onClick={() => {
                const anchor = document.querySelector("#home");
                anchor.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                const anchor = document.querySelector("#skills");
                anchor.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              SKILLS
            </a>
          </li>
          <li>
            <a>WORKS</a>
          </li>
          <li>
            <a
              onClick={() => {
                const anchor = document.querySelector("#resume");
                anchor.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              RESUME
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                const anchor = document.querySelector("#contact");
                anchor.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              CONTACT
            </a>
          </li>
        </ul>
        <button
          onClick={() => {
            const anchor = document.querySelector("#contact");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          className="profile-navigation-hireme"
        >
          HIRE ME
        </button>
      </div>
    </div>
  );
}
