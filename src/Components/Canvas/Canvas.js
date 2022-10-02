import * as THREE from 'three'
import React, { Suspense, useEffect, useLayoutEffect, } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { ScrollControls, Sky, useScroll, useGLTF, Stars, PerspectiveCamera, OrbitControls, FlyControls, FirstPersonControls } from '@react-three/drei'

import { default as ISS } from '../ISS/ISS.js';
import { default as Earth } from '../Earth/Earth.js';

export default function App(props) {

   const ref = React.useRef()



   return (
      <Canvas  style={{ background: "#000000" }}>
         <PerspectiveCamera makeDefault position={[-15, 0, 0]} />

         <ambientLight intensity={1} />
         <spotLight angle={0.14} color="#ffffff" position={[25, 50, -20]} shadow-mapSize={[2048, 2048]} shadow-bias={1} castShadow />
         <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

         <ISS scale={0.1} position={[0, 0, 0]} />
         <Earth scale={0.02} position={[100, 0, 0]} />

         <FlyControls  autoForward={false} dragToLook={true} movementSpeed={10} rollSpeed={1} />
         <OrbitControls  />
      </Canvas>
   )
}