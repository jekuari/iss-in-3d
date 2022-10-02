import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { default as App } from './App/App.js';
import { default as GalleryByYear } from './Routes/GalleryByYear/GalleryByYear.js';
import { default as NavBar } from './Components/NavBar/NavBar.js';

export default function Router() {
  return (
   <BrowserRouter>
      <NavBar />
      <Routes>
         <Route exact index element={<App />} />
         <Route exact path='home' element={<App />} />
         <Route exact path='gallery' element={<GalleryByYear />} />
         <Route exact path='gallery/:year' element={<GalleryByYear />} />
      </Routes>
   </BrowserRouter>
  )
}
