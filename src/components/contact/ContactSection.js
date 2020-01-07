import React from 'react';
import {Footer} from "../footer/Footer";
import {ContactSheet} from "./ContactSheet";

export function ContactSection() {
  return(
    <div className="contact__container" id="contactUs">
      <ContactSheet />
      <Footer />
    </div>
  )
}