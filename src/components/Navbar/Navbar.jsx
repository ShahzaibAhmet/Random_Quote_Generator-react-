import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">Quote Generator</div>
        <ul className="nav-menu">
          <li>Home</li>
          <li>Quotes</li>
          <li>About</li>
          <li className='nav-contacts'>Contact us</li>
          
        </ul>
      
      
    </div>
  )
}

export default Navbar
