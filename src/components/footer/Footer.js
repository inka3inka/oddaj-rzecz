import React from 'react';
import facebook from '../../assets/Facebook.svg';
import instagram from '../../assets/Instagram.svg';

export function Footer() {
  return(
    <div>
      <div>Copyright by Coderslab</div>
      <div>
        <div><img src={facebook} alt="Facebook"/></div>
        <div><img src={instagram} alt="Instagram"/></div>
      </div>
    </div>
  )
}