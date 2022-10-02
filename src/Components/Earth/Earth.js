/* eslint-disable no-unused-vars */
import * as THREE from 'three'
import { Suspense, useEffect, useLayoutEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, Sky, useScroll, useGLTF, Stars } from '@react-three/drei'
import { Object3D } from 'three'

export default function Earth ({ ...props }) {
  const { scene } = useGLTF('/resources/earth.glb')
  useFrame((state, delta) => {
    // scene.rotation.x += 0.0005
    scene.rotation.y += 0.0005
    state.camera.lookAt(0, 0, 0)
  })
  return <primitive object={scene} {...props} />
}

useGLTF.preload('/resources/ISS.glb')
