/* eslint-disable import/no-named-default */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

import './LeftControls.scss'
import { default as Square } from '../Square/Square'

export default function LeftControls() {

   useEffect(() => {
      window.addEventListener('keydown', handleKeyDown)
         window.addEventListener('keyup', handleKeyUp)
      return () => {
         window.removeEventListener('keydown', handleKeyDown)
         window.removeEventListener('keyup', handleKeyUp)
      };

   }, []);

   const handleKeyDown = (e) => {
       const key = e.key;

         if (key === 'w') {
            setStyleOne({backgroundColor: 'white', color: 'black'});
         }
         if (key === 'a') {
            setStyleTwo({backgroundColor: 'white', color: 'black'});
         }

         if (key === 's') {
            setStyleThree({backgroundColor: 'white', color: 'black'});
         }

         if (key === 'd') {
            setStyleFour({backgroundColor: 'white', color: 'black'});
         }

   }

   const handleKeyUp = (e) => {
      setStyleOne({backgroundColor: 'transparent'});
      setStyleTwo({backgroundColor: 'transparent'});
      setStyleThree({backgroundColor: 'transparent'});
      setStyleFour({backgroundColor: 'transparent'});
   }

   const [styleOne, setStyleOne] = useState({});
   const [styleTwo, setStyleTwo] = useState({});
   const [styleThree, setStyleThree] = useState({});
   const [styleFour, setStyleFour] = useState({});
   

   return (
      <div className='--left-controls'>
         <Square style={{border: 'none'}} />
         <Square style={styleOne}>
            W
         </Square>
         <Square style={{border: 'none'}} />
         <Square style={styleTwo}>
            A
         </Square>
         <Square style={styleThree}>
            S
         </Square>
         <Square style={styleFour}>
            D
         </Square>
      </div>
   )
}
