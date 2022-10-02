import React, { useRef, useEffect } from 'react';

import * as THREE from 'three';

import { default as Earth } from '../Earth/Earth';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function Canvas() {

   const container = useRef(null);

   const scene = new THREE.Scene();
   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);

   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);

   const geometry = new THREE.BoxGeometry(1, 1, 1);
   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
   const cube = new THREE.Mesh(geometry, material);
   scene.add(cube);


   useEffect(() => {
      loader.load('/resources/iss.glb', function (glb) {

         scene.add(glb.scene);

      }, undefined, function (error) {
         alert(error);
      });

   }, [])

   camera.position.z = 5;

   renderer.render(scene, camera);



   useEffect(() => {
      container.current.innerHTML = "";
      container.current.append(renderer.domElement);
   }, [container, renderer.domElement]);

   const loader = new GLTFLoader();

   return (
      <div ref={container} >

      </div>
   )
}
