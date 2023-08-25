import React from 'react'
import '../styles/NavBar.css'
export default function navBar() {
  return (
    <div className="Navbody">
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
