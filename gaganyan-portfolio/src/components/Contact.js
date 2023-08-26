import React from "react";
import "../styles/Contact.css";
import { RiSendPlaneFill } from "react-icons/ri";
import SectionHeadings from "./shared-components/SectionHeadings";

export default function contact() {
    const data = {
        heading:'Contact'
    }
  return (
    <div className="contact-details-full">
        <SectionHeadings data={data}/>
      <div className="contact-me" data-aos="fade-up">
        <div className="contact-me-details">
          <div className="contact-me-details_heading" data-aos="fade-up">
            You Need
            <div className="contact-me-details_subheading pd-x-1" data-aos="fade-up">
              <div>To contact me at any point of time</div>
              <div>feel free to do so.</div>
              <br />
              <div>Thanks!</div>
            </div>
          </div>
        </div>
        <div className="contact-me-form">
          <form className="contact-form" action="submit">
            <input
              placeholder="E.g example@gmail.com"
              className="input-type mr-y-2"
              type="email"
              name="email"
              id=""
            />
            <input
              placeholder="E.g chetan chinchulkar"
              className="input-type"
              type="text"
              name="Name"
              id=""
            />
            <textarea
              placeholder="Write your message"
              className="textarea-type mr-y-2"
              name="textarea"
              id=""
              cols="20"
              rows="5"
            ></textarea>
            <button className="send-button">
              Send<RiSendPlaneFill/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
