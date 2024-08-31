import React from 'react';
import "../Styles/ContactUs.css";

const Contact = () => {
    return (
        <main>
            <section className="section-contact">
                <div className="container grid grid-two-cols">
                    <div className="contact-info">
                        <h1 className="contact-title" style={{ fontSize: "4rem", fontWeight: "100" }}>Get in Touch</h1>
                        <p className="contact-subtitle" style={{ fontSize: "2rem", fontWeight: "100" }}>
                            We'd love to hear from you! Whether you have questions about our courses, need support, or just want to say hello, feel free to reach out.
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <h3 style={{ fontSize: "1.8rem", fontWeight: "100",color:"#f8f9fa" }}>Email</h3>
                                <p style={{ fontSize: "1.6rem", fontWeight: "100" }}>support@stockedtsec.com</p>
                            </div>
                            <div className="contact-item">
                                <h3 style={{ fontSize: "1.8rem", fontWeight: "100",color:"#f8f9fa" }}>Phone</h3>
                                <p style={{ fontSize: "1.6rem", fontWeight: "100" }}>+1 (555) 123-4567</p>
                            </div>
                            <div className="contact-item">
                                <h3 style={{ fontSize: "1.8rem", fontWeight: "100",color:"#f8f9fa" }}>Address</h3>
                                <p style={{ fontSize: "1.6rem", fontWeight: "100" }}>
                                    123 Finance Street<br />
                                    Investment City, IC 45678
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h2 className="form-title" style={{ fontSize: "3rem", fontWeight: "100" }}>Contact Form</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name" style={{ fontSize: "1.6rem", fontWeight: "100" }}>Name</label>
                                <input type="text" id="name" className="form-control" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" style={{ fontSize: "1.6rem", fontWeight: "100" }}>Email</label>
                                <input type="email" id="email" className="form-control" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" style={{ fontSize: "1.6rem", fontWeight: "100" }}>Message</label>
                                <textarea id="message" className="form-control" placeholder="Your Message" rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn submit-btn" style={{ backgroundColor: "#dc2f02", color: "black" }}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
