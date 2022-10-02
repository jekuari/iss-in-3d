/* eslint-disable no-unused-vars */
import * as THREE from 'three'
import { Suspense, useEffect, useLayoutEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, Sky, useScroll, useGLTF, Stars } from '@react-three/drei'

export default function ISS ({ ...props }) {
  // This hook gives you off
  const { scene } = useGLTF('/resources/iss.glb')
  const vel = props.newPosition.vel
  console.log(vel)

  useFrame((state, delta) => {
    // The offset is between 0 and 1, you can apply it to your models any way you lik
    scene.rotation.z += 0.01
    // scene.rotation.z += vel / 1000
    state.camera.lookAt(0, 0, 0)
    // console.log(props.newPosition.x)
  })

  return <primitive object={scene} {...props} />
}

useGLTF.preload('/resources/ISS.glb')
