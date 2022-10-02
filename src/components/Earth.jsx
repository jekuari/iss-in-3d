/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react'


const Earth = () => {
  // const [position, setPosition] = useState()
  const [satelliteInfo, setSatelliteInfo] = useState([])
  useEffect(() => {
   const url = 'https://tle.ivanstanojevic.me/api/tle/25544'
   var myHeaders = new Headers();

   var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
      mode: 'cors'
   };

   fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
         setSatelliteInfo(result)
      })
      .catch(error => { console.log(error) });
  }, [])

  return (
    <div>a</div>
  )
}

export default Earth
