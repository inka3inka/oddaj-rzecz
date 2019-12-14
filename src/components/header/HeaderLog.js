import React from 'react';
import {Link} from 'react-router-dom';

export function HeaderLog() {
  return (
    <div className="header__container__elements__log">
      <div>
        <Link to="/logowanie">Zaloguj</Link>
      </div>
      <div>
        <Link to="/rejestracja">Załóż konto</Link>
      </div>
    </div>
  )
}