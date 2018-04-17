import React from 'react'

export default (props) => {

return (

  <div className='coverpage'>

    <div className='nav-bar'>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#embarassing">History</a></li>
        <li><a href="#cv">CV</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

      <div className="coverpage-text">
        <h1 className='hero-title'>Hi, I'm Maia</h1>
        <h2 className='hero-subtitle'>I'm a software developer based in Wellington, NZ.</h2>
        <a className="hero-button-link" href='#work'><button className="hero-button">My Work <span className='hero-arrows'>>></span></button></a>
        <a className="hero-button-link" href='#contact'><button className="hero-button">Hire Me <span className='hero-arrows'>>></span></button></a>
      </div>


      <div id='vid-coverpage-container'>
        <video autoPlay muted loop id="header-vid">
          <source src="../images/722741424.mp4" type="video/mp4" />
        </video>
      </div>


  </div>

  )
}
