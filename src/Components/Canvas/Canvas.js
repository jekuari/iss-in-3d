import * as THREE from 'three'
import { Suspense, useEffect, useLayoutEffect, } from 'react'
import { Canvas, useFrame, useThree, } from '@react-three/fiber'
import { ScrollControls, Sky, useScroll, useGLTF, Stars, } from '@react-three/drei'
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";

import { default as ISS } from '../ISS/ISS.js';
import { default as Earth } from '../Earth/Earth.js';

const CameraController = () => {
   const { camera, gl } = useThree();
   useEffect(
      () => {
         const controls = new PointerLockControls(camera, gl.domElement);

         controls.minDistance = 0;
         controls.maxDistance = 50;
         return () => {
            controls.dispose();
         };
      },
      [camera, gl]
   );
   return null;
};

export default function ISSComponent() {
   return (
      <Canvas >
         <ambientLight />
         <CameraController />
         <spotLight angle={0.14} color="#ffffff" position={[25, 50, -20]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow />
         <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
         <mesh>
            <ISS scale={0.2} position={[0, 0, 0]} />
            <Earth scale={0.02} position={[100, 0, 0]} />
         </mesh>
      </Canvas>
   )
}