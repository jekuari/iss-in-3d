import React, { useRef, useEffect } from 'react';

import * as THREE from 'three';

import Stats from 'three/addons/libs/stats.module.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';


export default function Canvas() {

   const container = useRef(null);

   const clock = new THREE.Clock();


   // const stats = new Stats();
   // container.appendChild( stats.dom );

   const renderer = new THREE.WebGLRenderer( { antialias: true } );
   // renderer.setPixelRatio( window.devicePixelRatio );
   renderer.setSize( window.innerWidth, window.innerHeight );
   renderer.outputEncoding = THREE.sRGBEncoding;

   const pmremGenerator = new THREE.PMREMGenerator( renderer );

   const scene = new THREE.Scene();
   scene.background = new THREE.Color( 0x000224 );
   scene.environment = pmremGenerator.fromScene( new RoomEnvironment(), 0.04 ).texture;

   const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 100 );
   camera.position.set( 5, 2, 8 );

   const controls = new OrbitControls( camera, renderer.domElement );
   controls.target.set( 0, 0.5, 0 );
   controls.update();
   controls.enablePan = true;
   controls.enableDamping = false;

   const dracoLoader = new DRACOLoader();
   dracoLoader.setDecoderPath( 'js/libs/draco/gltf/' );

   const loader = new GLTFLoader();
   loader.setDRACOLoader( dracoLoader );
   loader.load( '/resources/earth.glb', function ( gltf ) {

      const model = gltf.scene;
      model.position.set( 0, 0, 0 );
      model.scale.set( 0.005, 0.005, 0.005 );
      scene.add( model );

      // mixer = new THREE.AnimationMixer( model );
      // mixer.clipAction( gltf.animations[ 0 ] ).play();

      

   }, undefined, function ( e ) {

      console.error( e );

   } );

   loader.load( '/resources/iss.glb', function ( gltf ) {

      const model = gltf.scene;
      model.position.set( 20, 0, 0 );
      model.scale.set( 0.1, 0.1, 0.1 );
      scene.add( model );

      // mixer = new THREE.AnimationMixer( model );
      // mixer.clipAction( gltf.animations[ 0 ] ).play();

      animate();

   }, undefined, function ( e ) {

      console.error( e );

   } );


   // window.onresize = function () {

   //    // camera.aspect = window.innerWidth / window.innerHeight;
   //    // camera.updateProjectionMatrix();

   //    renderer.setSize( window.innerWidth, window.innerHeight );
   //    renderer.setPixelRatio( window.devicePixelRatio );
   // };


   function animate() {

      // requestAnimationFrame( animate );

      // const delta = clock.getDelta();

      // mixer.update( delta );

      controls.update();

      // stats.update();

      renderer.render( scene, camera );

   }

   useEffect(() => {
      container.current.innerHTML = "";
      container.current.append(renderer.domElement);
   }, [container, renderer.domElement]);

   return (
      <div ref={container} >

      </div>
   )
}
