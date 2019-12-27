import React from 'react';

export function HelpSheet(props) {
  return (
    <>
      <div>
        <div className="helpSheet__description">
          {props.description}
        </div>
        <div className="organization__container">

            {props.organization.map(element => {
              return (
                <li key={element.name}>
                  <div className="organization__about">
                    <div className="organization__about--name">{props.class}: {element.name}</div>
                    <div className="organization__about--task">Cel i misja: {element.task}</div>
                  </div>
                  <div className="organization__needs">{element.needs.join(", ")}</div>
                </li>
              )
            })}
        </div>
      </div>
      <div>1</div>
    </>
  )
}

