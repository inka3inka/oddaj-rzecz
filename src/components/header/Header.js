import React from 'react';
import {HeaderLog} from './HeaderLog';
import {HeaderNav} from './HeaderNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {animateScroll as scroll} from "react-scroll/modules";

export function Header() {
  return (
    <div className="header__container">
      <div className="header__container__elements">
        <HeaderLog />
        <HeaderNav />
        <div
          className="return-to-top"
          onClick={() => {scroll.scrollToTop()}}>
          <FontAwesomeIcon className="return-to-top-arrow" icon={faChevronUp} />
        </div>
      </div>
    </div>
  )
}