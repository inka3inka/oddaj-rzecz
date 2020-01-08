import React, {Component} from 'react';

// export function HelpSheet(props) {
//   return (
//     <>
//       <div>
//         <div className="helpSheet__description">
//           {props.description}
//         </div>
//         <div className="organization__container">
//
//             {props.organization.map(element => {
//               return (
//                 <li key={element.name}>
//                   <div className="organization__about">
//                     <div className="organization__about--name">{props.class}: {element.name}</div>
//                     <div className="organization__about--task">Cel i misja: {element.task}</div>
//                   </div>
//                   <div className="organization__needs">{element.needs.join(", ")}</div>
//                 </li>
//               )
//             })}
//         </div>
//       </div>
//       <div>1</div>
//     </>
//   )
// }

export class HelpSheet extends Component {
  state = {
    organizations: this.props.organization,
    class: this.props.class,
    numberOfPages: this.props.organization.length,
    numberOfOptions: ""
  };

  pagesCutter = () => {
    let pagesSections;
    pagesSections = Math.floor((this.state.numberOfPages)/3);
    console.log(pagesSections);
    this.setState({
      numberOfOptions: pagesSections
    })
  }

  componentDidMount() {
    this.pagesCutter()
  }

  render() {

    let paginate;
    for (let i = 0; i <= this.state.numberOfOptions; i++){

    }


    return (
      <>
        <div>
          <div className="helpSheet__description">
            {this.props.description}
          </div>
          <div className="organization__container">

            {this.state.organizations.map(element => {
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
          {this.state.numberOfOptions}
        </div>
      </>
    )
  }

}
