import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          HomeHarbor
          <svg className="navbar-icon" viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
          </svg>
        </a>
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Mortgage Calculator</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar