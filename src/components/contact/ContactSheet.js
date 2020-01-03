import React from 'react';

export function ContactSheet() {
  return(
    <div>
      <div>Skontaktuj się z nami</div>
      <div>
        <div>
          <p>Wpisz swoje imię</p><input/>
          <p>Wpisz swój e-mail</p><input/>
        </div>
        <div>
          <p>Wpis swoją wiadomość</p><input/>
        </div>
      </div>
      <div>
        <button>Wyślij</button>
      </div>
    </div>
  )
}