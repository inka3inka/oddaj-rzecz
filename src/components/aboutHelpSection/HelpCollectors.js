import React, {Component} from 'react';
import {HelpSheet} from "./HelpSheet";

export class HelpCollectors extends Component {
  state = {
    class: 'Zbiórka',
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
    ],
    description: 'Sweet toffee liquorice jelly. Chupa chups danish jelly beans caramels macaroon apple pie. Toffee gingerbread croissant fruitcake dragée'
  }

  render() {
    return(
      <HelpSheet description={this.state.description} organization={this.state.fundations} class={this.state.class}/>
    )
  }
}