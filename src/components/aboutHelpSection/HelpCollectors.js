import React, {Component} from 'react';

export class HelpCollectors extends Component {
  state = {
    fundations: [
      {
        name: "Macaroon gummies",
        task: "Cake bear claw biscuit powder dragée dessert. Gummies biscuit chocolate bar cotton candy.",
        needs: ['muffin', 'soufflé', 'chocolate', 'cookie', 'topping']
      },
      {
        name: "Chocolate cake ",
        task: "Apple pie jelly-o marshmallow icing cupcake chupa chups jelly beans.",
        needs: ['chups', 'danish', 'jelly']
      },
      {
        name: "Apple pie",
        task: "Tiramisu soufflé dragée icing jelly-o tootsie roll. Lemon drops pastry halvah",
        needs: ['Chupa', 'chups', 'danish', 'jelly', 'beans', 'caramels']
      }
    ]
  }

  render() {
    return(
      <div>
        <div>
          Sweet toffee liquorice jelly. Chupa chups danish jelly beans caramels macaroon apple pie. Toffee gingerbread croissant fruitcake dragée.
        </div>
        <div>
          <div>
            {this.state.fundations.map(element => {
              return (
                <>
                  <div key={element.name}>
                    <div>Zbiórka {element.name}</div>
                    <div>Cel i misja: {element.task}</div>
                  </div>
                  <div>{element.needs}</div>
                </>
              )
            })}
          </div>
        </div>
        <div>1</div>
      </div>
    )
  }
}