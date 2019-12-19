import React, {Component} from 'react';
import {HelpSheet} from "./HelpSheet";

export class HelpSection extends Component {
  state = {

  }
  render() {
    return (
      <div className="helpSection__container">
        <div className="helpSection__options">
          <div className="helpSection__options--header">
            Komu pomagamy?
          </div>
          <div className="helpSection__organizationsButtons">
            <div className="helpSection__organizationsButton">Fundacjom</div>
            <div className="helpSection__organizationsButton">Organizacjom pozarządowym</div>
            <div className="helpSection__organizationsButton">Lokalnym zbiórkom</div>
          </div>
        </div>
        <div className="helpSheet__container">
          <HelpSheet />
        </div>
      </div>
    )
  }

}