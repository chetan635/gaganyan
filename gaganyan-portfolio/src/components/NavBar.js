import React from "react";
import "../styles/NavBar.css";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

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
    var navBody = document.getElementById("NavBody");
    var navBodyClassName = navBody.className;
    if (x.className === "profile-navigation") {
      x.className += " hide-profile-nav";
      navBody.className += " profile-nav-height-change";
    } else {
      x.className = "profile-navigation";
      navBody.className = navBodyClassName;
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
        Chetan Chinchulkar.{" "}
        <RxHamburgerMenu
          onClick={handleHamburgerMenu}
          className="hamburger-icon"
        />
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
              CONTACTS
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
