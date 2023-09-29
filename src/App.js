import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import './components/CSS/Navbar.css';


const App = ()=> {
  return (
    <div >
        <Navbar />
        <Container/>
        <Footer/>
    </div>
  );
}

export default App;
