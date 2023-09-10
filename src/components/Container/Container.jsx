import React from 'react'
import me from '../../img/me.jpeg'

const Container = (props) => {
  
  return (
    <div class="container">

    <div className="about">
    <img src={me} alt="me" width="200"/>
      <h2>HELLO!</h2>
      <h2>My name is Rustam, i'm front-end web-developer</h2>
    </div>
    <button type="button" class="bioBtn btn" onClick={()=> props.show}>Bio</button>
    <div className="bio">
        <p>I was born in Bishkek in 1996 Septemer 2nd</p>
    </div>
    </div>
  )
}

export default Container