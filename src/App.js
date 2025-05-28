import React, {useEffect, useState, useRef} from 'react';
import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './home.js';
import NavBar from './navBar.js';
import Footer from './footer.js';
import InstaLogo from './instaLogo.js';

function App() {
  const [mode, setMode] = useState('light');
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [viewMode, setViewMode] = useState(
    screenSize.width >= 768 ? 'desktop' :
    screenSize.width < 768 && screenSize.width > 414 ? 'tablet' :
    'mobile'
  );
  
  useEffect(() => {
    document.body.style.backgroundColor = mode === 'light' ? 'white' : 'black';
  }, [mode]);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    setViewMode(
      screenSize.width >= 768 ? 'desktop' :
    screenSize.width < 768 && screenSize.width > 430 ? 'tablet' :
    'mobile'
    )
  }, [screenSize]);

 

  return (
   <div>
    <Router>
      <NavBar viewMode = {viewMode}/>
      <Routes>
        <Route path='/' element={<Home viewMode = {viewMode}/>}/>
      </Routes>
      <Footer/>
    </Router>
   </div>
  );
}

export default App;
