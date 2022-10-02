import React, { useState, useEffect } from 'react';

export default function GitHub() {

   useEffect(() => {
      window.location.href = 'https://github.com/levedoper/iss-in-3d.git';
   }, [])

  return (
    <div style={{color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
      <h1>Redirecting...</h1>
    </div>
  )
}
//https://github.com/levedoper/iss-in-3d.git