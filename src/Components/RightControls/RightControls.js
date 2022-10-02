import React, { useState, useEffect } from 'react';

import './RightControls.scss'

import { default as Square } from '../Square/Square'

export default function RightControls(props) {

   useEffect(() => {
      handleOnResize();
      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)

      window.addEventListener('onresize', handleOnResize)

      return () => {
         window.removeEventListener('keydown', handleKeyDown)
         window.removeEventListener('keyup', handleKeyUp)
         window.removeEventListener('onresize', handleOnResize)
      };

   }, []);

   const handleOnResize = () => {
      const width = window.innerWidth;
      if (width < 800) {
         setStyleOne({display: 'none'});
         setStyleTwo({display: 'none'});
         setStyleThree({display: 'none'});
         setStyleFour({display: 'none'});
      } else {
         setStyleOne({});
         setStyleTwo({});
         setStyleThree({});
         setStyleFour({});
      }
   }

   const handleKeyDown = (e) => {
      const key = e.key;

      if (key === 'ArrowUp') {
         setStyleOne({ backgroundColor: 'white', color: 'black' });
      }
      if (key === 'ArrowLeft') {
         setStyleTwo({ backgroundColor: 'white', color: 'black' });
      }

      if (key === 'ArrowDown') {
         setStyleThree({ backgroundColor: 'white', color: 'black' });
      }

      if (key === 'ArrowRight') {
         setStyleFour({ backgroundColor: 'white', color: 'black' });
      }

   }

   const handleKeyUp = (e) => {
      setStyleOne({ backgroundColor: 'transparent' });
      setStyleTwo({ backgroundColor: 'transparent' });
      setStyleThree({ backgroundColor: 'transparent' });
      setStyleFour({ backgroundColor: 'transparent' });
   }

   const [styleOne, setStyleOne] = useState({});
   const [styleTwo, setStyleTwo] = useState({});
   const [styleThree, setStyleThree] = useState({});
   const [styleFour, setStyleFour] = useState({});


   return (
      <div className='--right-controls'>
         <Square style={{border: 'none'}} />
         <Square key={'ArrowUp'} style={styleOne} >
            <span className="material-symbols-outlined" style={{transform: 'rotate(180deg)'}} >
               arrow_drop_down
            </span>
         </Square>
         <Square style={{border: 'none'}} />
         <Square key={'ArrowLeft'} style={styleTwo} >
            <span className="material-symbols-outlined" style={{transform: 'rotate(90deg)'}} >
               arrow_drop_down
            </span>
         </Square>
         <Square key={'ArrowDown'} style={styleThree} >
            <span className="material-symbols-outlined" >
               arrow_drop_down
            </span>
         </Square>
         <Square key={'ArrowRight'} style={styleFour}>
            <span className="material-symbols-outlined" style={{transform: 'rotate(270deg)'}} >
               arrow_drop_down
            </span>
         </Square>

      </div>
   )
}
