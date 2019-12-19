import React from 'react';

export function HelpSheet(props) {
  return (
    <div>
      <div>
        {props.description}
      </div>
      <div>
        <div>
          {props.organization.map(element => {
            return (
              <li key={element.name}>
                <div>
                  <div>{props.class}: {element.name}</div>
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

