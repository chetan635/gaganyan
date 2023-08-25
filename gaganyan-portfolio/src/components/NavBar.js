import React from 'react'
import '../styles/NavBar.css'
export default function navBar() {
  return (
    <div className="Navbody">
      <div className="profileName">
        Chetan Chinchulkar.
      </div>
      <div className="profileNavigation">
        <ul className='profileNavigation_Items'>
          <li>HOME</li>
          <li>SKILLS</li>
          <li>WORKS</li>
          <li>RESUME</li>
          <li>CONTACTS</li>
        </ul>
        <button className='profileNavigation_HireMe'>HIRE ME</button>
      </div>
    </div>
  )
}
