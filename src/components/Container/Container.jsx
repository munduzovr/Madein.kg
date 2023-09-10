import React from 'react'
import me from '../../img/me2.jpg'
import html from '../../img/html.png'
import css from '../../img/css.png'
import js from '../../img/jslogo.png'
import reactLogo from '../../img/react2.png'

const Container = (props) => {
  
  return (
    <div class="container">

    <div className="about">
      <div className="about-text">
      <img src={me} alt="me"/>
          <h2>HELLO!</h2>
          <h2>My name is Rustam</h2>
          <h2>I'm front-end web-dev</h2>
          <button type="button" class="bioBtn btn" onClick={()=> props.show}>Bio</button>
      </div>
    </div>
    <div className="bio">
        <p>I was born in Bishkek in 1996 Septemer 2nd</p>
    </div>

    <div className="skillsBox">
        <div className="skillsText">
            <h2>SKILLS</h2>
          </div>
        <div className="skills">
          <div className="cards"><img src={html} alt="" id="htmlLogo" /></div>
          <div className="cards"><img src={css} alt="" /></div>
          <div className="cards"><img src={js} alt="" id='jsLogo'/></div>
          <div className="cards"><img src={reactLogo} alt="" id='reactLogo'/></div>
        </div>
    </div>
    </div>
  )
}

export default Container