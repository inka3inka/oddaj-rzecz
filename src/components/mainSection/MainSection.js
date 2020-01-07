import React from 'react';
import {Link} from 'react-router-dom'

export function MainSection() {
  return (
    <div className="mainSection__container" id="mainSection">
      <div className="mainSection__container__element__picture">
        <div className="mainSection__picture"/>
      </div>
      <div className="mainSection__container__element__text">
        <div className="mainSection__container__par">
          <p>Zacznij pomagać!</p>
          <p>Oddaj niechciane rzeczy w zaufane ręce</p>
        </div>
        <div className="mainSection__container__links">
          <div><Link to="/logowanie">oddaj rzeczy</Link></div>
          <div><Link to="/logowanie">zorganizuj zbiórkę</Link></div>
        </div>
      </div>
    </div>
  )
}