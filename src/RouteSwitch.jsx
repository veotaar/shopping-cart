import React from 'react';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const RouteSwitch = () => (
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </HashRouter>
);

export default RouteSwitch;
