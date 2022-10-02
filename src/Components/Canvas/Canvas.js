import * as THREE from 'three'
import React, { Suspense, useEffect, useState, useLayoutEffect, } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { ScrollControls, Sky, useScroll, useGLTF, Stars, PerspectiveCamera, OrbitControls, FlyControls, FirstPersonControls } from '@react-three/drei'

// import { default as ApiTime } from '../../services/ApiTime';

import { default as ISS } from '../ISS/ISS.js';
import { default as Earth } from '../Earth/Earth.js';

var parseString = require('xml2js').parseString;

export default function App(props) {

   const ref = React.useRef()

   const [satelliteInfo, setSatelliteInfo] = useState([]);

   const [dates, setDates] = useState([]);


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

      const url2 = 'https://sscweb.gsfc.nasa.gov/WS/sscr/2/observatories';

      var requestOptions2 = {
         method: 'GET',
         headers: myHeaders,
         redirect: 'follow',
         mode: 'cors'
      };

      fetch(url2, requestOptions2)
         .then(response => response.text())
         .then(result => {
            const xml = result;
            parseString(xml, function (err, result) {
               console.log(result, 'result')
               // FECHAS PARA URI CON AMOR <3
            });

         });
   }, [])


   return (
      <Canvas style={{ background: "#000000" }}>
         <PerspectiveCamera makeDefault position={[-15, 0, 0]} />

         <ambientLight intensity={1} />
         <spotLight angle={0.14} color="#ffffff" position={[25, 50, -20]} shadow-mapSize={[2048, 2048]} shadow-bias={1} castShadow />
         <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

         <ISS scale={0.1} position={[0, 0, 0]} />
         <Earth scale={0.02} position={[100, 0, 0]} />

         <FlyControls autoForward={false} dragToLook={true} movementSpeed={10} rollSpeed={1} />
         <OrbitControls />
      </Canvas>
   )
}