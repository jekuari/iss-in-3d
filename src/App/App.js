import React from 'react';

import './App.css';

import { default as Canvas } from '../Components/Canvas/Canvas.js';

import { default as NavBar } from '../Components/NavBar/NavBar';

import { default as LeftControls } from '../Components/LeftControls/LeftControls';
import { default as RightControls } from '../Components/RightControls/RightControls';

export default function App() {
  return (
    <div className='App'>
      <Canvas />

      <LeftControls />
      <RightControls />
    </div>
  )
}
