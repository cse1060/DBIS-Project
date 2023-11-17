// src/components/ContactUs.js
"use client"
import React from "react";
import "../../css/contactus.scss";
import ParticleBackground from "@/components/ParticleBackground";
import FadeIn from "react-fade-in/lib/FadeIn";
const ContactUs = () => {
    return (
        <>
            <ParticleBackground/>
          <FadeIn>
            <div className="aboooove"></div>
            <center>
              <div>
                <h1 className="contactusss">Contact Us</h1>
                <p className="cnt">
                  If you have any questions or concerns, please feel free to
                  contact one of our team members:
                </p>

                <div className="contact-card box">
                  <h2>Pratham</h2>
                  <p>Email: pratham@example.com</p>
                  <p>Phone: +1 (555) 987-6543</p>
                </div>

                <div className="contact-card box">
                  <h2>Vashistha</h2>
                  <p>Email: vashistha@example.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                </div>

                <div className="contact-card box">
                  <h2>Param</h2>
                  <p>Email: param@example.com</p>
                  <p>Phone: +1 (555) 876-5432</p>
                </div>

                <div className="contact-card box">
                  <h2>Samyak</h2>
                  <p>Email: samyak@example.com</p>
                  <p>Phone: +1 (555) 234-5678</p>
                </div>
              </div>
            </center>
          </FadeIn>
      </>
    );
};

export default ContactUs;
