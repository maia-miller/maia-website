import React from 'react'

export default (props) => {

return (
  <div id='coverpage-container'>
      <div className='container'>
        <div id='header-content-box'>
          <div className='hero-body'>
            <h1 className='title is-1'>Hi, I'm Maia</h1>
            <h1 className='subtitle is 1'>I'm a software developer based in Wellington, NZ.</h1>
            <a href='#work' className='button is-medium is-danger'>My Work ></a>
            <a href='#contact' className='button is-medium is-danger'>Hire Me ></a>
          </div>
        </div>

        <video loop muted autoPlay poster="img/videoframe.jpg" className="vid">
          <source src="../images/722741424.mp4" type="video/mp4" />
        </video>

      </div>

  </div>

  )
}
