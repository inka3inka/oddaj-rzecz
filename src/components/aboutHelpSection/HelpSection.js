import React, {Component} from 'react';
// import {HelpSheet} from "./HelpSheet";
import {HelpFundations} from "./HelpFundations";
import {HelpOrganizations} from "./HelpOrganizations";
import {HelpCollectors} from "./HelpCollectors";

export class HelpSection extends Component {
  state = {
    toShow: 'fundations'
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
  }

  showCollectors = () => {
    this.setState({
      toShow: 'collectors'
    })
  }

  render() {
    return (
      <div className="helpSection__container">
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
        <div className="helpSheet__container">
          {() => {
              if (this.state.toShow === 'fundations') {
                return (<HelpFundations />)
              }
              else if (this.state.toShow === 'organizations') {
                return (<HelpOrganizations />)
              }
              else if (this.state.toShow === 'collectors')
                return (<HelpCollectors />)
            }
          }
        </div>
      </div>
    )
  }

}