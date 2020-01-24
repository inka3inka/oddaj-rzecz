// import React, {Component} from 'react';
//
// export class HelpSheet extends Component {
//   state = {
//     organizations: this.props.organization,
//     class: this.props.class,
//     numberOfPages: this.props.organization.length,
//     numberOfOptions: "",
//     revealOrganizations: [],
//     firstIndex: 0,
//     lastIndex: 3
//   };
//
//   pagesCutter = () => {
//     let pagesSections;
//     pagesSections = Math.floor((this.state.numberOfPages)/3);
//     console.log(pagesSections);
//     this.setState({
//       numberOfOptions: pagesSections
//     })
//   }
//
//   pagesPrinter = () => {
//     let paginate = [];
//     for (let i = 1; i <= this.state.numberOfOptions; i++){
//       paginate.push(<div key={i} onClick={() => this.setIndex(i)}>{i}</div>);
//     }
//     return paginate
//   }
//
//   revealOrganizations = () => {
//     let revealOrganizations = this.state.organizations.slice(this.state.firstIndex, this.state.lastIndex);
//     this.setState({
//       revealOrganizations: revealOrganizations
//     })
//   }
//
//   setIndex = (a) => {
//     let firstIndex = a*3 - 3;
//     let lastIndex = a*3;
//     this.setState({
//       firstIndex: firstIndex,
//       lastIndex: lastIndex
//     })
//   }
//
//   componentDidMount() {
//     this.pagesCutter();
//   }
//
//   render() {
//     this.revealOrganizations();
//     return (
//       <>
//         <div>
//           <div className="helpSheet__description">
//             {this.props.description}
//           </div>
//           <div className="organization__container">
//
//             {this.state.revealOrganizations.map(element => {
//               return (
//                 <li key={element.name}>
//                   <div className="organization__about">
//                     <div className="organization__about--name">{this.state.class}: {element.name}</div>
//                     <div className="organization__about--task">Cel i misja: {element.task}</div>
//                   </div>
//                   <div className="organization__needs">{element.needs.join(", ")}</div>
//                 </li>
//               )
//             })}
//           </div>
//         </div>
//         <div>
//           {this.pagesPrinter()}
//         </div>
//       </>
//     )
//   }
//
// }



import React, {Component} from 'react';

export class HelpSheet extends Component {
  state = {
    organizations: this.props.organization,
    class: this.props.class,
    numberOfPages: this.props.organization.length,
    numberOfOptions: "",
    revealOrganizations: [],
    firstIndex: 0,
    lastIndex: 3
  };

  pagesCutter = () => {
    let pagesSections;
    pagesSections = Math.floor((this.state.numberOfPages)/3);
    console.log(pagesSections);
    this.setState({
      numberOfOptions: pagesSections
    })
  }

  pagesPrinter = () => {
    let paginate = [];
    for (let i = 1; i <= this.state.numberOfOptions; i++){
      // paginate.push(<div key={i} onClick={this.setIndex(i)}>{i}</div>);
      paginate.push(<div key={i} onClick={() => this.setIndex(i)}>{i}</div>);
    }
    return paginate
  }

  revealOrganizations = () => {
    let revealOrganizations = this.state.organizations.slice(this.state.firstIndex, this.state.lastIndex);
    this.setState({
      revealOrganizations: revealOrganizations
    })
  }

  setIndex = (a) => {
    let firstIndex = a*3 - 3;
    let lastIndex = a*3;
    this.setState({
      firstIndex: firstIndex,
      lastIndex: lastIndex
    })
    console.log(this.state.firstIndex);
    console.log(this.state.lastIndex);
    this.revealOrganizations()
  }

  componentDidMount() {
    this.pagesCutter()
  }

  render() {
    return (
      <>
        <div>
          <div className="helpSheet__description">
            {this.props.description}
          </div>
          <div className="organization__container">


            {this.state.revealOrganizations.map(element => {
              return (
                <li key={element.name}>
                  <div className="organization__about">
                    <div className="organization__about--name">{this.state.class}: {element.name}</div>
                    <div className="organization__about--task">Cel i misja: {element.task}</div>
                  </div>
                  <div className="organization__needs">{element.needs.join(", ")}</div>
                </li>
              )
            })}
          </div>
        </div>
        <div>
          {this.pagesPrinter()}
        </div>
      </>
    )
  }

}
