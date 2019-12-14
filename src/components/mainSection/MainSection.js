import React from 'react';

export function MainSection() {
  return (
    <div className="mainSection__container">
      <div className="mainSection__container__element__picture">
        <div className="mainSection__picture"/>
      </div>
      <div className="mainSection__container__element__text">
        <div className="mainSection__container__par">
          <p>Zacznij pomagać!</p>
          <p>Oddaj niechciane rzeczy w zaufane ręce</p>
        </div>
        <div className="mainSection__container__links">
          <div>oddaj rzeczy</div>
          <div>zorganizuj zbiórkę</div>
        </div>
      </div>
    </div>
  )
}