import React from 'react';
import facebook from '../../assets/Facebook.svg';
import instagram from '../../assets/Instagram.svg';

export function Footer() {
  return(
    <div className="footer__container">
      <div className="footer__description">Copyright by Coderslab</div>
      <div className="footer__images">
        <div><img src={facebook} alt="Facebook"/></div>
        <div><img src={instagram} alt="Instagram"/></div>
      </div>
    </div>
  )
}