import React from "react";

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-card">

                <h1>Contact Us 📞</h1>

                <p className="contact-intro">
                    Have a question, suggestion, or just want to say hello?
                    We'd love to hear from you!
                </p>

                <div className="contact-info">
                    <div className="contact-item">
                        <span>📧</span>
                        <div>
                            <h3>Email</h3>
                            <p>support@foodhub.com</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span>📱</span>
                        <div>
                            <h3>Phone</h3>
                            <p>+91 70827 11041</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span>📍</span>
                        <div>
                            <h3>Address</h3>
                            <p>Karnal, Haryana, India</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form">
                    <input
                        type="text"
                        placeholder="Your Name"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                    />

                    <textarea
                        placeholder="Write your message..."
                        rows="5"
                    ></textarea>

                    <button type="submit">
                        Send Message 🚀
                    </button>
                </form>

            </div>
        </div>
    );
}

export default Contact;
