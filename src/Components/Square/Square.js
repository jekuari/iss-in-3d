import React, { useState, useEffect } from 'react';

import './Square.scss';

export default function Square(props) {
   


  return (
    <div className='--square' style={props.style}  >
      {props.children}
    </div>
  )
}
