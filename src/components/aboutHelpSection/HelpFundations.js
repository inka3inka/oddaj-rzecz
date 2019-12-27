import React, {Component} from 'react';
import {HelpSheet} from "./HelpSheet";

export class HelpFundations extends Component {
  state = {
    class: 'Fundacja',
    fundations: [
      {
        name: "Dbam o zdrowie",
        task: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej",
        needs: ['ubrania', 'jedzenie', 'sprzęt AGD', 'meble', 'zabawki']
      },
      {
        name: "Dla dzieci",
        task: "Pomoc dzieciom z ubogich rodzin",
        needs: ['ubrania', 'meble', 'zabawki']
      },
      {
        name: "Bez domu",
        task: "Pomoc osobom nieposiadającym miejsca zamieszkania",
        needs: ['ubrania', 'jedzenie', 'sprzęt AGD', 'meble']
      },
      {
        name: "Gorące serce",
        task: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej",
        needs: ['ubrania', 'jedzenie', 'sprzęt AGD', 'meble', 'zabawki']
      },
      {
        name: "Razem raźniej",
        task: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej",
        needs: ['ubrania', 'jedzenie', 'sprzęt AGD', 'meble', 'zabawki']
      },
      {
        name: "Pomagamy!",
        task: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej",
        needs: ['ubrania', 'jedzenie', 'sprzęt AGD', 'meble', 'zabawki']
      },
      {
        name: "Zaadoptuj zwierzaka",
        task: "Adopcja zwierząt",
        needs: ['ubrania', 'jedzenie', 'sprzęt AGD', 'meble', 'zabawki']
      }
    ],
    description: 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują'
  }

  render() {
    return(
      <HelpSheet description={this.state.description} organization={this.state.fundations} class={this.state.class}/>
    )
  }
}