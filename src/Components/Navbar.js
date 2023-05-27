import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"

function Navbar() {
  return (
    <div className='container'>
      <div>
        <p style={{color:"white" }}>Header</p>
      </div>
      <div className='child'>
        <Link to="/" style={{textDecoration:"none"}}>
        <p style={{color:"white" }}>SignUp</p>
        </Link>
        <Link to="/profile" style={{textDecoration:"none"}}>
        <p style={{color:"white" ,textDecoration:"none"}}>Profile</p>
        </Link>
        
      </div>
    </div>
  )
}

export default Navbar
