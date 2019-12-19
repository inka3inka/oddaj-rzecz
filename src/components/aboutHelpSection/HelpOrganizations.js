import React, {Component} from 'react';

export class HelpOrganizations extends Component {
  state = {
    fundations: [
      {
        name: "Phasellus aliquet",
        task: "Nulla facilisi. Nunc dictum ac arcu molestie lobortis",
        needs: ['mollis', 'nunc', 'pharetra', 'libero', 'interdum', 'mattis']
      },
      {
        name: "Fusce ligula",
        task: "Phasellus sed tortor enim. Donec eu dolor ut ligula vulputate",
        needs: ['pharetra', 'libero', 'interdum', 'mattis']
      },
      {
        name: "Aliquam vulputate",
        task: "Vestibulum pharetra turpis scelerisque nulla malesuada",
        needs: ['mollis', 'nunc', 'pharetra', 'libero']
      },
      {
        name: "Pellentesque ac",
        task: "Donec auctor sed neque ut gravida",
        needs: ['dictum', 'ac', 'arcu', 'molestie', 'lobortis']
      },
      {
        name: "Cras eu viverra",
        task: "Curabitur et tempus massa. Nam scelerisque efficitur nisi",
        needs: ['mollis', 'nunc', 'pharetra', 'libero']
      },
      {
        name: "Mauris iaculis",
        task: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej",
        needs: ['arcu', 'molestie', 'lobortis']
      }
    ],
  }

  render() {
    return(
      <div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque, enim vel rutrum pretium, eros sem viverra metus, id congue nisi est eu turpis. Vestibulum sit amet libero eu ante malesuada dapibus at quis nulla.
        </div>
        <div>
          <div>
            {this.state.fundations.map(element => {
              return (
                <li key={element.name}>
                  <div>
                    <div>Organizacja {element.name}</div>
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