import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import './components/CSS/Navbar.css';


const App = ()=> {

  let [shower,setShow] = useState('none');

  function show(shower){
    shower.style.display = 'block';
  }


  return (
    <div >
        <Navbar />
        <Container show={show}/>
        <Footer/>
    </div>
  );
}

export default App;
