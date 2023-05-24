import React from 'react'
import Home from './pages/Home'
import Nav from './components/Nav'
import { Routes, Route } from "react-router-dom";
import Topics from './pages/Topics';
const App = () => {
  return (
    <>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/topic" element={<Topics />} />
    </Routes>
    </>
  )
}

export default App