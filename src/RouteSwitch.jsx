import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

const RouteSwitch = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} /> */}
    </Routes>
  </BrowserRouter>
);

export default RouteSwitch;
