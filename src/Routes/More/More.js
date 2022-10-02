import React, { useState, useEffect } from 'react';

export default function More() {

   useEffect(() => {
      window.location.href = 'https://www.nasa.gov/mission_pages/station/main/index.html';
   }, [])

   return (
      <div style={{ color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
         <h1>Redirecting...</h1>
      </div>
   )
}
