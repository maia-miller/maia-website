import React from 'react'

export default (props) => {

return (

  <div className='coverpage'>

      <div className="coverpage-text">
        <h1 className='hero-title'>Hi, I'm Maia</h1>
        <h2 className='hero-subtitle'>I'm a software developer based in Wellington, NZ.</h2>
        <button className="hero-button"><a className="hero-button" href='#work'>My Work</a></button>
        <button className="hero-button"><a className="hero-button" href='#contact'>Hire Me</a></button>
      </div>


      <div id='vid-coverpage-container'>
        <video autoPlay muted loop id="header-vid">
          <source src="../images/722741424.mp4" type="video/mp4" />
        </video>
      </div>


  </div>

  )
}
