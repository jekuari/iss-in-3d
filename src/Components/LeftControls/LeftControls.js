import React, { useState, useEffect } from 'react';

import './LeftControls.scss';
import { default as Square } from '../Square/Square';

export default function LeftControls() {

   return (
      <div className='--left-controls'>
         <Square empty />
         <Square>
            W
         </Square>
         <Square empty />
         <Square>
            A
         </Square>
         <Square>
            S
         </Square>
         <Square>
            D
         </Square>
      </div>
   )
}
