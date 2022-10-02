/* eslint-disable n/handle-callback-err */
/* eslint-disable no-undef */
/* eslint-disable import/no-named-default */
/* eslint-disable no-unused-vars */
import * as THREE from 'three'
import React, { Suspense, useEffect, useState, useLayoutEffect } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { ScrollControls, Sky, useScroll, useGLTF, Stars, PerspectiveCamera, OrbitControls, FlyControls, FirstPersonControls } from '@react-three/drei'
import { getLatLngObj, getSatelliteInfo } from 'tle.js'
import * as satellite from 'satellite.js'

// import { default as ApiTime } from '../../services/ApiTime';

import { default as Iss } from '../ISS/ISS.js'
import { default as Earth } from '../Earth/Earth.js'

const parseString = require('xml2js').parseString

export default function App (props) {
  const [dates, setDates] = useState([])
  // useEffect(() => {
  // const url = 'https://tle.ivanstanojevic.me/api/tle/25544'
  // const myHeaders = new Headers()
  // const requestOptions2 = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   redirect: 'follow',
  //   mode: 'cors'
  // }

  const [satelliteInfo, setSatelliteInfo] = useState([])

  useEffect(() => {
    const url = 'https://tle.ivanstanojevic.me/api/tle/25544'
    const myHeaders = new Headers()
    const requestOptions1 = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
      mode: 'cors'
    }
    fetch(url, requestOptions1)
      .then(response => response.json())
      .then(result => {
        setSatelliteInfo(result)
      })
      .catch(error => { console.log(error) })
  }, [])

  //   const url2 = 'https://sscweb.gsfc.nasa.gov/WS/sscr/2/observatories'
  //   const requestOptions2 = {
  //     method: 'GET',
  //     headers: myHeaders,
  //     redirect: 'follow',
  //     mode: 'cors'
  //   }

  //   fetch(url2, requestOptions2)
  //     .then(response => response.text())
  //     .then(result => {
  //       const xml = result
  //       parseString(xml, function (err, result) {
  //         console.log(result, 'result')
  //         // FECHAS PARA URI CON AMOR <3
  //         setDates(result)
  //       })
  //     }, [])
  // }, [])

  if (satelliteInfo.length === 0) {
    console.log('Cargando...')
  }
  console.log('info:', satelliteInfo)
  const line1 = satelliteInfo.line1
  const line2 = satelliteInfo.line2
  const tle = `
      ${line1}
      ${line2}`
  // console.log('de otros:', tle)
  console.log(getLatLngObj(tle))

  const latitud = getLatLngObj(tle).lat
  const longitud = getLatLngObj(tle).lng

  console.log('latitud y:', latitud)
  console.log('longitud x:', longitud)

  const date = new Date()

  const satInfo = getSatelliteInfo(tle, date, latitud, longitud, 0)

  console.log('satInfo:', satInfo)

  const latY = satInfo.lat
  const lngX = satInfo.lng

  const newPosition = {
    x: lngX,
    y: latY,
    vel: satInfo.velocity
  }

  return (
    <Canvas style={{ background: '#000000' }}>
      <PerspectiveCamera makeDefault position={[-300, 0, 0]} />

      <ambientLight intensity={1} />
      <spotLight angle={0.14} color='#ffffff' position={[25, 50, -20]} shadow-mapSize={[2048, 2048]} shadow-bias={1} castShadow />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <Earth scale={0.1} position={[0, 0, 0]}>
        <Iss scale={1} position={[1000, 0, 0]} newPosition={newPosition} />
      </Earth>

      <FlyControls autoForward={false} dragToLook movementSpeed={10} rollSpeed={1} />
      <OrbitControls />
    </Canvas>
  )
}
