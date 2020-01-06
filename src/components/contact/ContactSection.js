import React from 'react';
import {Footer} from "../footer/Footer";
import {ContactSheet} from "./ContactSheet";

export function ContactSection() {
  return(
    <div className="contact__container">
      <ContactSheet />
      <Footer />
    </div>
  )
}