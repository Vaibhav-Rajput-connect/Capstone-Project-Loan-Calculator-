import React from 'react'
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Mortgage from './components/Mortgage';
import Contact from './components/Contact';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Mortgage/>
      <Contact/>

    </div>
  );
}

export default App;
