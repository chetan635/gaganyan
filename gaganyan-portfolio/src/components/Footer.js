import React from 'react';
import '../styles/Footer.css';
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

export default function footer() {
  return (
    <div className="footer-body">
        <div className="footer-title">
            <h1 data-aos="zoom-out">Let's Talk</h1>
        </div>
        <div className="footer-social-media">
          <a 
            data-aos="fade-up" data-aos-duration="1000"
            href=""
            className="footer-icons-section"
          >
            <FaTelegramPlane className="footer-icons teligram-icon" />
            <div className="footer-icons-text">Telegram</div>
          </a>
          <a 
            data-aos="fade-up" data-aos-duration="1000"
            href=""
            className="footer-icons-section"
          >
            <IoLogoWhatsapp className="footer-icons whatsapp-icon" />
            <div className="footer-icons-text">WhatsApp</div>
          </a>
          <a 
            data-aos="fade-up" data-aos-duration="1000"
            href=""
            className="footer-icons-section"
          >
            <RiInstagramFill className="footer-icons instagram-icon" />
            <div className="footer-icons-text">Instagram</div>
          </a>
        </div>
        <div className="footer-copyrights">
            | Copyright &copy; 2023 All rights reserved |
        </div>
        <br />
    </div>
  )
}
