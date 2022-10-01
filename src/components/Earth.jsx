import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const Earth = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    const currentMount = mountRef.current

    // scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    camera.position.z = 4
    scene.add(camera)

    // renderer
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight)
    currentMount.appendChild(renderer.domElement)

    // controls
    const controls = new OrbitControls(camera, renderer.domElement)

    // cube
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
    )
    scene.add(cube)

    const moveCamera = () => {
      const t = document.body.getBoundingClientRect().top
      cube.rotation.x += 0.05
      cube.rotation.y += 0.075
      cube.rotation.z += 0.05

      camera.position.z = t * -0.01
      camera.position.x = t * -0.0002
      camera.position.y = t * -0.0002
    }

    document.body.onscroll = moveCamera

    const animate = () => {
      // render
      renderer.render(scene, camera)
      // eslint-disable-next-line no-undef
      requestAnimationFrame(animate)

      cube.rotation.x += 0.01
      cube.rotation.y += 0.005
      cube.rotation.z += 0.01

      controls.update()

      renderer.render(scene, camera)
    }

    animate()

    // clean up scene
    return () => {
      currentMount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      className='Contenedor3D'
      style={{ width: '100%', height: '100vh' }}
      ref={mountRef}
    />
  )
}

export default Earth
