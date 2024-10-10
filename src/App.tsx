//import { useState } from 'react'
//import './App.css'
import './components/page.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/dashboard';
import PlanetData from './pages/planetData';

function App() {

  return (
    <>
     <Router>
      <Routes>
      <Route path="/" element={<DashBoard />} />     

      <Route path="/planetData" element={<PlanetData/>} />       
      <Route path="/planetData/:id" element={<PlanetData />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
