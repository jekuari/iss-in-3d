/* eslint-disable import/no-named-default */
import React from 'react'

import './App.css'

import { default as Canvas } from '../components/Canvas/Canvas'

import { default as NavBar } from '../components/NavBar/NavBar'

import { default as LeftControls } from '../components/LeftControls/LeftControls'
import { default as RightControls } from '../components/RightControls/RightControls'
import SelectorDates from '../components/Dates/SelectorDates'

export default function App () {
  return (
    <div className='App'>
      <Canvas />
      <NavBar />
      <LeftControls />
      <SelectorDates />
      <RightControls />
    </div>
  )
}
