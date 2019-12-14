import React from "react";
import {HeaderNavElement} from "./HeaderNavElement";
import {Link as scroll} from 'react-scroll';

export function HeaderNav() {
  return (
    <div className="header__container__elements__nav">
      <HeaderNavElement elementName="Start"/>
      <HeaderNavElement elementName="O co chodzi?"/>
      <HeaderNavElement elementName="O nas"/>
      <HeaderNavElement elementName="Fundacja i organizacje"/>
      <HeaderNavElement elementName="Kontakt"/>
    </div>
  )
}