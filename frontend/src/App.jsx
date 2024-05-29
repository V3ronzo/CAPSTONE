import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Reviews from './pages/Reviews';
import Checklist from './pages/Checklist';
import WeatherForecast from './pages/WeatherForecast';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/weather" element={<WeatherForecast />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;