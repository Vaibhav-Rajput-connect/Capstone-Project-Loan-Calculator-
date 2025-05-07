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
          <div style={{ border: '1px solid black', borderRadius: '10px', padding: '1rem', width: '15rem', textAlign: 'center',backgroundColor:'white' }}>
            <img src={p1} alt="Property 1" style={{ width: '100%', borderRadius: '10px' }} />
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', color: '#381664' }}>Property 1</h3>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', color: '#381664' }}>Beautiful 3-bedroom house.</p>
            <button className='vaibhav2' > 
          
              Calculate Mortgage
            </button>
          </div>

          <div style={{ border: '1px solid black', borderRadius: '10px', padding: '1rem', width: '15rem', textAlign: 'center' ,backgroundColor:'white'}}>
            <img src={p2} alt="Property 2" style={{ width: '100%', borderRadius: '10px' }} />
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', color: '#381664' }}>Property 2</h3>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', color: '#381664' }}>Modern apartment in the city.</p>
            <button className='vaibhav2'
            >
              Calculate Mortgage
            </button>
          </div>

          <div style={{ border: '1px solid black', borderRadius: '10px', padding: '1rem', width: '15rem', textAlign: 'center' ,backgroundColor:'white'}}>
            <img src={p3} alt="Property 3" style={{ width: '100%', borderRadius: '10px' }} />
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', color: '#381664' }}>Property 3</h3>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', color: '#381664' }}>Cozy cottage near the lake.</p>
            <button className='vaibhav2'
            >
              Calculate Mortgage
            </button>
          </div>

          <div style={{ border: '1px solid black', borderRadius: '10px', padding: '1rem', width: '15rem', textAlign: 'center',backgroundColor:'white' }}>
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
          <div style={{ border: '1px solid black', borderRadius: '10px', padding: '1rem', width: '15rem', textAlign: 'center',backgroundColor:'white' }}>
            <img src={p1} alt="Property 5" style={{ width: '100%', borderRadius: '10px' }} />
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', color: '#381664' }}>Property 5</h3>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', color: '#381664' }}>Beautiful 3-bedroom house.</p>
            <button className='vaibhav2' > 
          
              Calculate Mortgage
            </button>
          </div>

          <div style={{ border: '1px solid black', borderRadius: '10px', padding: '1rem', width: '15rem', textAlign: 'center',backgroundColor:'white' }}>
            <img src={p2} alt="Property 6" style={{ width: '100%', borderRadius: '10px' }} />
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', color: '#381664' }}>Property 6</h3>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', color: '#381664' }}>Modern apartment in the city.</p>
            <button className='vaibhav2'
            >
              Calculate Mortgage
            </button>
          </div>

          <div style={{ border: '1px solid black', borderRadius: '10px', padding: '1rem', width: '15rem', textAlign: 'center' ,backgroundColor:'white'}}>
            <img src={p3} alt="Property 7" style={{ width: '100%', borderRadius: '10px' }} />
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', color: '#381664' }}>Property 7</h3>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', color: '#381664' }}>Cozy cottage near the lake.</p>
            <button className='vaibhav2'
            >
              Calculate Mortgage
            </button>
          </div>

          <div style={{ border: '1px solid black', borderRadius: '10px', padding: '1rem', width: '15rem', textAlign: 'center',backgroundColor:'white' }}>
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
      <div>
        <div style={{borderRadius: '10px', padding: '1rem', margin: '2rem auto', width: '95%', backgroundColor: 'white', textAlign: 'center',border:'0.5px solid black' }}>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', color: '#381664' }}>About Us</h3>
          <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', color: '#381664', textAlign: 'justify', lineHeight: '1.6' }}>
            Welcome to <strong>HomeHarbor</strong> – Your Trusted Anchor in Real Estate.
          </p>
          <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1rem', color: '#381664', textAlign: 'justify', lineHeight: '1.6' }}>
            At HomeHarbor, we believe that finding the perfect place to call home should be smooth, secure, and inspiring. Whether you're buying, selling, or just exploring your options, we’re here to make your real estate journey effortless and rewarding.
          </p>
          <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1rem', color: '#381664', textAlign: 'justify', lineHeight: '1.6' }}>
            Founded with a passion for people and properties, HomeHarbor was created to bridge the gap between dreams and addresses. From modern apartments to spacious family homes, we connect you with properties that match your lifestyle, budget, and aspirations.
          </p>
          <h4 style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', fontSize: '1.2rem', color: '#381664', marginTop: '1rem' }}>What We Offer:</h4>
          <ul style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1rem', color: '#381664', textAlign: 'left', lineHeight: '1.6', margin: '0 auto', width: '80%' }}>
            <li>Verified property listings with detailed descriptions and high-quality images</li>
            <li>Smart tools like our built-in mortgage calculator to plan your finances</li>
            <li>A seamless user experience with responsive design and easy navigation</li>
            <li>Real-time support to guide you at every step of the way</li>
          </ul>
          <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1rem', color: '#381664', textAlign: 'justify', lineHeight: '1.6', marginTop: '1rem' }}>
            Our mission is to simplify the real estate process and empower you with the tools and confidence you need to make informed decisions. At HomeHarbor, we don’t just list properties – we help you find your place in the world.
          </p>
          <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1rem', color: '#381664', textAlign: 'center', marginTop: '1rem' }}>
            Thank you for choosing us as your real estate partner. <br />
            <strong>Welcome home.</strong>
          </p>
        </div>
        </div>
     </div>
  )
}

export default Main