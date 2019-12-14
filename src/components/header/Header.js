import React from 'react';
import {HeaderLog} from './HeaderLog';
import {HeaderNav} from './HeaderNav';

export function Header() {
  return (
    <div className="header__container">
      <div className="header__container__elements">
        <HeaderLog />
        <HeaderNav />
      </div>
    </div>
  )
}