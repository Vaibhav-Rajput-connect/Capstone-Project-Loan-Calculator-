import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' ,background:'#E5F2FF',fontFamily: 'Roboto, sans-serif',fontWeight:'bolder',color:'#381664',borderBottom:"1px solid black",borderRadius:'10px',width:'auto'}}>
      <h1 
      style={{ fontSize: '2rem', fontWeight: 'bold', lineHeight: '100%', letterSpacing: '-4%', textAlign: 'left' }}>
      HomeHarbor</h1>
      <ul className='nav-links' style={{ listStyle: 'none', display: 'flex', gap: '20px', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif', color:'#381664' }}>
        <li><a href='#' className='vaibhav'>Home</a></li>
        <li><a href='#'  className='vaibhav'>Mortgage Calculator</a></li>
        <li><a href='#'  className='vaibhav'>About</a></li>
        <li><a href='#' className ="vaibhav ">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar