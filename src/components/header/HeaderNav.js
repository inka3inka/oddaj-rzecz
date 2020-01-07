import React from "react";
import {HeaderNavElement} from "./HeaderNavElement";
import {Link, animateScroll as scroll} from "react-scroll";



export function HeaderNav() {
  return (
    <div className="header__container__elements__nav">
      <Link
        activeClass="active"
        to="mainSection"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}
      >
        <HeaderNavElement elementName="Start"/>
      </Link>
      <Link
        activeClass="active"
        to="fourSteps"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}
      >
        <HeaderNavElement elementName="O co chodzi?"/>
      </Link>
      <Link
        activeClass="active"
        to="aboutUs"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}
      >
        <HeaderNavElement elementName="O nas"/>
      </Link>
      <Link
        activeClass="active"
        to="helpActivity"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}
      >
        <HeaderNavElement elementName="Fundacja i organizacje"/>
      </Link>
      <Link
        activeClass="active"
        to="contactUs"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}
      >
        <HeaderNavElement elementName="Kontakt"/>
      </Link>
    </div>
  )
}