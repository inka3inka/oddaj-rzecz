import React from 'react';

export function FourStepsTile(props) {
  return (
    <div className="fourSteps__tile">
      <div className="fourSteps__tile--image" />
      <div>
        <div className="fourSteps__tile--title">{props.title}</div>
        <div className="fourSteps__tile--text">{props.text}</div>
      </div>
    </div>
  )
}


//style={{backgroundImage: props.image}}