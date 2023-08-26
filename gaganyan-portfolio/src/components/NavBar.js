import React from 'react'
import '../styles/NavBar.css'
import { useEffect, useState } from "react";

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

  return (
    <div className={`Navbody ${scrollPosition > 0 ? `bg-white shadow-md` : "bg-transparent"
      } `}>
      <div className="profile-name">
        Chetan Chinchulkar.
      </div>
      <div className="profile-navigation">
        <ul className='profile-navigation-items'>
          <li><a href="">HOME</a></li>
          <li><a href="">SKILLS</a></li>
          <li><a href="">WORKS</a></li>
          <li><a href="">RESUME</a></li>
          <li><a href="">CONTACTS</a></li>
        </ul>
        <button className='profile-navigation-hireme'>HIRE ME</button>
      </div>
    </div>
  )
}
