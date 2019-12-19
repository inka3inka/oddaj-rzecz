import React, {Component} from 'react';

export class HelpFundations extends Component {
  state = {
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
  }

  render() {
    return(
      <div>
        <div>
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
        </div>
        <div>
          <div>
            {this.state.fundations.map(element => {
              return (
                <li key={element.name}>
                  <div>
                    <div>Fundacja {element.name}</div>
                    <div>Cel i misja: {element.task}</div>
                  </div>
                  <div>{element.needs}</div>
                </li>
              )
            })}
          </div>
        </div>
        <div>1</div>
      </div>
    )
  }
}