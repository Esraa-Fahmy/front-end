// MainRoutes.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Categories from '../Categories/Categories';
import Register from '../Register/Register';
import Religious from '../../Pages/Religious/Religious';
import Pharonic from '../../Pages/Pharonic/Pharonic';
import Medical from '../../Pages/Medical/Medical';
import Recreational from '../../Pages/Recreational/Recreational';
import Details from '../../Pages/Details/Details';
import Suggestions from '../../Pages/Suggestions/Suggestions';


function MainRoutes() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/categories' element={<Categories/>}/>
    <Route path='/suggestions' element={<Suggestions/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/religious' element={<Religious/>}/>
    <Route path='/pharonic' element={<Pharonic/>}/>
    <Route path='/medical' element={<Medical/>}/>
    <Route path="/details/:id" element={<Details />} />
    <Route path='/recreational' element={<Recreational/>}/>
  </Routes>
  </>
  );
}

export default MainRoutes;