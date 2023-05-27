import React from 'react';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Signup></Signup>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
     
      
    </div>
  )
}

export default App
