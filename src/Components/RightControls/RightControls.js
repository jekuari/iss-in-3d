/* eslint-disable import/no-named-default */
import React from 'react'

import './RightControls.scss'

import { default as Square } from '../Square/Square'

<<<<<<< HEAD
export default function RightControls () {
  return (
    <div className='--right-controls'>
      <Square empty />
      <Square>
        <span class='material-symbols-outlined' style={{ transform: 'rotateZ(180deg)' }}>
          arrow_drop_down
        </span>
      </Square>
      <Square empty />
      <Square>
        <span class='material-symbols-outlined' style={{ transform: 'rotateZ(90deg)' }}>
          arrow_drop_down
        </span>
      </Square>
      <Square>
        <span class='material-symbols-outlined' style={{ transform: 'rotateZ(0deg)' }}>
          arrow_drop_down
        </span>
      </Square>
      <Square>
        <span class='material-symbols-outlined' style={{ transform: 'rotateZ(270deg)' }}>
          arrow_drop_down
        </span>
      </Square>
=======
export default function RightControls() {
   return (
      <div className='--right-controls'>
         <Square empty />
         <Square>
            <span className="material-symbols-outlined" style={{ transform: 'rotateZ(180deg)' }}>
               arrow_drop_down
            </span>
         </Square>
         <Square empty />
         <Square>
            <span className="material-symbols-outlined" style={{ transform: 'rotateZ(90deg)' }}>
               arrow_drop_down
            </span>
         </Square>
         <Square>
            <span className="material-symbols-outlined" style={{ transform: 'rotateZ(0deg)' }}>
               arrow_drop_down
            </span>
         </Square>
         <Square>
            <span className="material-symbols-outlined" style={{ transform: 'rotateZ(270deg)' }}>
               arrow_drop_down
            </span>
         </Square>
>>>>>>> 044b7f8d8ecd030edab2df91f00422ca20880cb5

    </div>
  )
}
