import React from 'react'

import './Square.scss'

export default function Square (props) {
  return (
    <div className='--square' style={props.empty ? { border: 'none' } : null}>
      {props.children}
    </div>
  )
}
