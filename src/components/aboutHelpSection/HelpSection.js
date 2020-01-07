import React, {Component} from 'react';
// import {HelpSheet} from "./HelpSheet";
import {HelpFundations} from "./HelpFundations";
import {HelpOrganizations} from "./HelpOrganizations";
import {HelpCollectors} from "./HelpCollectors";

export class HelpSection extends Component {
  state = {
    toShow: 'collectors'
  }

  showFundations = () => {
    this.setState({
      toShow: 'fundations'
    })
  }

  showOrganizations = () => {
    this.setState({
      toShow: 'organizations'
    })
  };

  showCollectors = () => {
    this.setState({
      toShow: 'collectors'
    })
  };

  render() {

    let elementToShow;

    if (this.state.toShow === 'fundations') {
      elementToShow = <HelpFundations />
    }
    else if (this.state.toShow === 'organizations') {
      elementToShow = <HelpOrganizations />
    }
    else if (this.state.toShow === 'collectors') {
      elementToShow = <HelpCollectors />
    }


    return (
      <div className="helpSection__container" id="helpActivity">
        <div className="helpSection__options">
          <div className="helpSection__options--header">
            Komu pomagamy?
          </div>
          <div className="helpSection__organizationsButtons">
            <div className="helpSection__organizationsButton" onClick={this.showFundations}>Fundacjom</div>
            <div className="helpSection__organizationsButton" onClick={this.showOrganizations}>Organizacjom pozarządowym</div>
            <div className="helpSection__organizationsButton" onClick={this.showCollectors}>Lokalnym zbiórkom</div>
          </div>
        </div>
        <div>
          <ul className="helpSheet__container">
          {elementToShow}
          </ul>
        </div>
      </div>
    )
  }

}