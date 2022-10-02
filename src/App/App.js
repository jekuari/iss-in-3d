/* eslint-disable import/no-named-default */
import React from 'react'

import './App.css'

import { default as Canvas } from '../Components/Canvas/Canvas'

import { default as NavBar } from '../Components/NavBar/NavBar'

import { default as LeftControls } from '../Components/LeftControls/LeftControls'
import { default as RightControls } from '../Components/RightControls/RightControls'
import SelectorDates from '../Components/Dates/SelectorDates'

export default function App () {
  return (
    <div className='App'>
      <Canvas />

      <LeftControls />
      <SelectorDates />
      <RightControls />
    </div>
  )
}
