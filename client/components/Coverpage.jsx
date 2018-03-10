import React from 'react'

export default (props) => {

  // <h1 className='title is-1'>Hi, I'm Maia</h1>
  // <h1 className='subtitle is 1'>I'm a software developer based in Wellington, NZ.</h1>
  // <a href='#work' className='button is-medium is-danger'>My Work ></a>
  // <a href='#contact' className='button is-medium is-danger'>Hire Me ></a>
return (

  <div id='footer-container'>

    <div id='content-box'>

      <figure>
        <img id='top' src="../images/acro.jpg" />
      </figure>

      <div id='vid-footer-container'>
        <video autoPlay muted loop id="vid">
          <source src="../images/722741424.mp4" type="video/mp4" />
        </video>
      </div>

    </div>

  </div>


  )
}
