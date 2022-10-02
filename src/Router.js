import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

import { default as App } from './App/App.js';
import { default as GalleryByYear } from './Routes/GalleryByYear/GalleryByYear.js';
import { default as NavBar } from './Components/NavBar/NavBar.js';
import { default as More } from './Routes/More/More.js';
import { default as GitHub }  from './Routes/GitHub/GitHub.js';
import { default as Watermark } from './Components/Watermark/Watermark.js';

export default function Router() {
   return (
      <BrowserRouter>
         <NavBar />
         <Routes>
            <Route exact index element={<App />} />
            <Route exact path='home' element={<App />} />
            <Route exact path='gallery' element={<GalleryByYear />} />
            <Route exact path='more' element={<More />}/>
            <Route exact path='github' element={<GitHub />}/>
         </Routes>
         <Watermark />
      </BrowserRouter>
   )
}
