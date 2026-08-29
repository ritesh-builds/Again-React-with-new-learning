import React from "react";
import "../style/Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        <div className="contact-heading">
          <span>GET IN TOUCH</span>

          <h1>
            Let's talk
            <br />
            <strong>footwear.</strong>
          </h1>

          <p>
            Have a question, suggestion, or just want to say hello?
            We'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">
            <div>
              <span>Email</span>
              <p>hello@comfortfootwear.com</p>
            </div>

            <div>
              <span>Phone</span>
              <p>+91 98765-43210</p>
            </div>

            <div>
              <span>Location</span>
              <p>New Delhi, India</p>
            </div>
          </div>

          <form className="contact-form">
            <div className="input-row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>

            <input type="text" placeholder="Subject" />

            <textarea
              placeholder="Tell us something..."
              rows="5"
            ></textarea>

            <button type="submit">
              Send Message →
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;

