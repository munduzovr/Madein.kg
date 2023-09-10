import React from 'react'



export const Navbar = () => {
  return (
    <div class="navbar">
      <header>
        <div className="logo">
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="real-madrid logo" width={100}/>

        </div>
        <ul class="navLinks">
          <a href="#"><li>Home</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>CS Go</li></a>
          <a href="#"><li>Links</li></a>
        </ul>
      </header>
    </div>
  )
}
export default Navbar;