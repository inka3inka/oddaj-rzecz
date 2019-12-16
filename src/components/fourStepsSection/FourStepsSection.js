import React from 'react';
import {Link} from 'react-router-dom';
import {FourStepsTile} from "./FourStepsTile";

export function FourStepsSection() {
  return (
    <div className="fourSteps__container">
      <div className="fourSteps__element--standard">
        <p>Wystarczą 4 proste kroki</p>
      </div>
      <div className="fourSteps__element--higher">
        <FourStepsTile
          image="src/assets/Icon-1.svg"
          title="Wybierz rzeczy"
          text="ubrania, zabawki, sprzęt i inne"
        />
        <FourStepsTile
          image="url(src/assets/Icon-2.svg)"
          title="Spakuj je"
          text="skorzystaj z worków na śmieci"
        />
        <FourStepsTile
          image="url(../assets/Icon-3.svg)"
          title="Zdecyduj komu chcesz pomóc"
          text="wybierz zaufane miejsce"
        />
        <FourStepsTile
          image="url(../assets/Icon-4.svg)"
          title="Zamów kuriera"
          text="kurier przyjedzie w dogodnym terminie"
        />
      </div>
      <div className="fourSteps__element--standard">
        <div><Link to="/logowanie">oddaj rzeczy</Link></div>
      </div>
    </div>
  )
}