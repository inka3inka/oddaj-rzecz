import React from 'react';
import {ColumnElement} from "./ColumnElement";

export function ColumnsContainer() {
  return (
    <div className="columns__container">
      <ColumnElement
        number="10"
        title="oddanych worków"
        text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentseque vel enim a elit viverra elementuma. Alquam erat volutpat."
      />
      <ColumnElement
        number="5"
        title="wspartych organizacji"
        text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentseque vel enim a elit viverra elementuma. Alquam erat volutpat."
      />
      <ColumnElement
        number="7"
        title="zorganizowanych zbiórek"
        text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentseque vel enim a elit viverra elementuma. Alquam erat volutpat."
      />
    </div>
  )
}