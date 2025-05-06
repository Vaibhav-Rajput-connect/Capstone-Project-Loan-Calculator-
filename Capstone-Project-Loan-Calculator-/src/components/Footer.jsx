import React from 'react'

const Footer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#E5F2FF',fontFamily:'Syne, sans-serif',color:'#381664',borderTop:'1px solid '}}>
      <p>© 2025 HomeHarbor</p>
      <button style={{ padding: '5px 10px', cursor: 'pointer',fontFamily:'Syne, sans-serif',color:'#381664',background:'none',borderRadius:'4px',}}>Contact</button>
    </div>
  )
}

export default Footer;