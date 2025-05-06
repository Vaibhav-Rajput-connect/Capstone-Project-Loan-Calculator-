import React from 'react'
import h1 from '../assets/h1.png'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpeg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.webp'

const Main = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <img src={h1} alt="home" style={{ width: '100%', height: '45rem', marginTop: '-10px', display: 'block', margin: '0 auto' }} />
        <h1 
          style={{
            position: 'absolute',
            bottom: '59%',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#381664',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 'bolder',
            fontSize: '7rem',
            lineHeight: '90%',
            textAlign: 'center',
          }}
        >
          Welcome to 
          HomeHarbor
        </h1>
      </div>
      <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 'bold', fontSize: '4rem', color: '#381664', lineHeight: '68px' }}>Check Out The Properties</h2>
      <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 'bold', fontSize: '1rem', color: '#381664' }}>"Explore the Property That Feels Like Home."</p>

      <card1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
          <div style={{ border: '1px solid black', borderRadius: '10px', padding: '1rem', width: '15rem', textAlign: 'center' }}>
            <img src={p1} alt="Property 1" style={{ width: '100%', borderRadius: '10px' }} />
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', color: '#381664' }}>Property 1</h3>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', color: '#381664' }}>Beautiful 3-bedroom house.</p>
            <button className='vaibhav2' > 
          
              Calculate Mortgage
            </button>
          </div>

          <div style={{ border: '1px solid black', borderRadius: '10px', padding: '1rem', width: '15rem', textAlign: 'center' }}>
            <img src={p2} alt="Property 2" style={{ width: '100%', borderRadius: '10px' }} />
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', color: '#381664' }}>Property 2</h3>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', color: '#381664' }}>Modern apartment in the city.</p>
            <button className='vaibhav2'
            >
              Calculate Mortgage
            </button>
          </div>

          <div style={{ border: '1px solid black', borderRadius: '10px', padding: '1rem', width: '15rem', textAlign: 'center' }}>
            <img src={p3} alt="Property 3" style={{ width: '100%', borderRadius: '10px' }} />
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', color: '#381664' }}>Property 3</h3>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', color: '#381664' }}>Cozy cottage near the lake.</p>
            <button className='vaibhav2'
            >
              Calculate Mortgage
            </button>
          </div>

          <div style={{ border: '1px solid black', borderRadius: '10px', padding: '1rem', width: '15rem', textAlign: 'center' }}>
            <img src={p4} alt="Property 4" style={{ width: '100%', borderRadius: '10px' }} />
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', color: '#381664' }}>Property 4</h3>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', color: '#381664' }}>Luxurious villa with a pool.</p>
            <button className='vaibhav2'
            >
              Calculate Mortgage
            </button>
          </div>
        </div>
      </card1>
      <card1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
          <div style={{ border: '1px solid black', borderRadius: '10px', padding: '1rem', width: '15rem', textAlign: 'center' }}>
            <img src={p1} alt="Property 5" style={{ width: '100%', borderRadius: '10px' }} />
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', color: '#381664' }}>Property 5</h3>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', color: '#381664' }}>Beautiful 3-bedroom house.</p>
            <button className='vaibhav2' > 
          
              Calculate Mortgage
            </button>
          </div>

          <div style={{ border: '1px solid black', borderRadius: '10px', padding: '1rem', width: '15rem', textAlign: 'center' }}>
            <img src={p2} alt="Property 6" style={{ width: '100%', borderRadius: '10px' }} />
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', color: '#381664' }}>Property 6</h3>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', color: '#381664' }}>Modern apartment in the city.</p>
            <button className='vaibhav2'
            >
              Calculate Mortgage
            </button>
          </div>

          <div style={{ border: '1px solid black', borderRadius: '10px', padding: '1rem', width: '15rem', textAlign: 'center' }}>
            <img src={p3} alt="Property 7" style={{ width: '100%', borderRadius: '10px' }} />
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', color: '#381664' }}>Property 7</h3>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', color: '#381664' }}>Cozy cottage near the lake.</p>
            <button className='vaibhav2'
            >
              Calculate Mortgage
            </button>
          </div>

          <div style={{ border: '1px solid black', borderRadius: '10px', padding: '1rem', width: '15rem', textAlign: 'center' }}>
            <img src={p4} alt="Property 8" style={{ width: '100%', borderRadius: '10px' }} />
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', color: '#381664' }}>Property 8</h3>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', color: '#381664' }}>Luxurious villa with a pool.</p>
            <button className='vaibhav2'
            >
              Calculate Mortgage
            </button>
          </div>
        </div>
      </card1>
    </div>
  )
}

export default Main