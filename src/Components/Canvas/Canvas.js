/* eslint-disable import/no-named-default */
/* eslint-disable no-unused-vars */
import * as THREE from 'three'
import React, { Suspense, useEffect, useState, useLayoutEffect } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { ScrollControls, Sky, useScroll, useGLTF, Stars, PerspectiveCamera, OrbitControls, FlyControls, FirstPersonControls } from '@react-three/drei'
import { getLatLngObj, getSatelliteInfo } from 'tle.js'
import * as satellite from 'satellite.js'

import { default as Iss } from '../ISS/ISS.js'
import { default as Earth } from '../Earth/Earth.js'


   import { default as ISS } from '../ISS/ISS.js';
   import { default as Earth } from '../Earth/Earth.js';

   var parseString = require('xml2js').parseString;

   export default function App(props) {

      const [satelliteInfo, setSatelliteInfo] = useState([])
      useEffect(() => {
         const url = 'https://tle.ivanstanojevic.me/api/tle/25544'
         const myHeaders = new Headers()

         const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
            mode: 'cors'
         }
         const [satelliteInfo, setSatelliteInfo] = useState([]);

         const [dates, setDates] = useState([]);


         useEffect(() => {
            const url = 'https://tle.ivanstanojevic.me/api/tle/25544'
            var myHeaders = new Headers();

            fetch(url, requestOptions)
               .then(response => response.json())
               .then(result => {
                  setSatelliteInfo(result)
               })
               .catch(error => { console.log(error) })
         }, [])


         const line1 = satelliteInfo.line1
         const line2 = satelliteInfo.line2
         const lines = (line1 + line2)
         console.log(lines)
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

      const tle = `
  ${line1}
  ${line2}`
      console.log('de otros:', tle)
      console.log(getLatLngObj(tle))

      // const latLong = getLatLngObj(lines)

      // console.log('lines:', latLong)

      const latitud = getLatLngObj(tle).lat
      const longitud = getLatLngObj(tle).lng

      console.log('latitud:', latitud)
      console.log('longitud:', longitud)

      const date = new Date()

      const satInfo = getSatelliteInfo(tle, date, latitud, longitud)

      console.log('satInfo:', satInfo)

      return (
         <Canvas style={{ background: '#000000' }}>
            <PerspectiveCamera makeDefault position={[-15, 0, 0]} />

            <ambientLight intensity={1} />
            <spotLight angle={0.14} color='#ffffff' position={[25, 50, -20]} shadow-mapSize={[2048, 2048]} shadow-bias={1} castShadow />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <Iss scale={0.1} position={[0, 0, 0]} />
            <Earth scale={0.02} position={[100, 0, 0]} />

            <FlyControls autoForward={false} dragToLook movementSpeed={10} rollSpeed={1} />
            <OrbitControls />
         </Canvas>
      )
   }
