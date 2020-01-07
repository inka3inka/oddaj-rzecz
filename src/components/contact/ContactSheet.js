import React from 'react';

export function ContactSheet() {
  return(
    <div className="contactSheet__container">
      <div className="contactSheet__image"/>
      <div className="contactSheet__text">
        <div className="contactSheet__text--header">Skontaktuj się z nami</div>
        <div className="contactSheet__text--form">
          <div className="contactSheet__form--information">
            <p>Wpisz swoje imię<input placeholder="Krzysztof"/></p>
            <p>Wpisz swój e-mail<input placeholder="abc@xyz.pl"/></p>
          </div>
          <div className="contactSheet__form--message">
            <p>Wpisz swoją wiadomość</p><textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut egestas odio. Nulla id ante eget elit egestas tempus eu eu est. Integer sagittis semper vestibulum."/>
          </div>
        </div>
        <div className="contactSheet__form--sendButton">
          <div>Wyślij</div>
        </div>
      </div>
    </div>
  )
}