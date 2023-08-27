import React, { useRef } from "react";
import "../styles/Contact.css";
import { RiSendPlaneFill } from "react-icons/ri";
import SectionHeadings from "./shared-components/SectionHeadings";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

export default function Contact() {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const messageRef = useRef(null);
  useEffect(() => emailjs.init("7XR6F_Aev9GKKtpw5"), []);
  const data = {
    heading: "Contact",
  };

  const sendEmail = (e) => {
    const form = document.getElementsByName('contact-form')[0];
    e.preventDefault();
    const serviceId = "service_5wio7xy";
    const templateId = "template_69qw9ip";

    emailjs
      .send(serviceId, templateId, {
        sendername: nameRef.current.value,
        name: "Chetan",
        recipient: emailRef.current.value,
        message: messageRef.current.value,
      })
      .then(
        (result) => {
          alert("Email sent succefully");
          form.reset();
          // show the user a success message
        },
        (error) => {
          alert("somethign went wrong, please try again some time after");
          // show the user an error
        }
      );
  };
  return (
    <div id="contact" className="contact-details-body">
      <SectionHeadings data={data} />
      <div className="contact-me" data-aos="fade-up">
        <div className="contact-me-details">
          <div className="contact-me-details_heading" data-aos="fade-up">
            You Need
            <div
              className="contact-me-details_subheading pd-x-1"
              data-aos="fade-up"
            >
              <div>To contact me at any point of time</div>
              <div>feel free to do so.</div>
              <br />
              <div>Thanks!</div>
            </div>
          </div>
        </div>
        <div className="contact-me-form">
          <form name="contact-form" className="contact-form" onSubmit={sendEmail}>
            <input
              ref={emailRef}
              placeholder="E.g example@gmail.com"
              className="input-type mr-y-2"
              type="email"
              name="email"
              id=""
            />
            <input
              ref={nameRef}
              placeholder="E.g chetan chinchulkar"
              className="input-type"
              type="text"
              name="Name"
              id=""
            />
            <textarea
              ref={messageRef}
              placeholder="Write your message"
              className="textarea-type mr-y-2"
              name="textarea"
              id=""
              cols="20"
              rows="5"
            ></textarea>
            <button type="submit" className="send-button">
              Send
              <RiSendPlaneFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
