import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../../components/Home/Home';
import Blog from '../../components/Blog/Blog';
import Community from '../../components/Community/Community';
import Features from '../../components/Features/Features';
import Pricing from '../../components/Pricing/Pricing';
import Typography from '../../Styless/Typography/Typography';


function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/community' element={<Community />} />
      <Route path='/features' element={<Features />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path="/typography" element={<Typography />} />
    </Routes>
  );
}

export default AppRoutes;