import React from 'react';

export function ColumnElement(props) {
  return (
    <div className="columns__element">
      <div className="columns__element--number">{props.number}</div>
      <div className="columns__element--title">{props.title}</div>
      <div className="columns__element--text">{props.text}</div>
    </div>

  )
}

//Lorem ipsum dolor sit amet, consectetur adipisc Pellentseque vel enim a elit viverra elementuma. Alquam erat volutpat.