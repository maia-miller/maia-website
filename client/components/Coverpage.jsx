import React from 'react'

export default (props) => {

  // document.getElementById('vid1').addEventListener('loadedmetadata', function() {
  //   this.currentTime = 50;
  // }, false);

  <div className='video'>
    <video autoPlay muted loop id="vid-background">
      <source src="../images/343378693.mp4" type="video/mp4" />
    </video>
  </div>

return (
  <div className='hero is-fullheight is-primary'>
    <div className='hero-body'>
      <div className='container'>
        <h1 className='title is-1'>Hi, I'm Maia</h1>
          <h1 className='subtitle is 1'>I'm a software developer based in Wellington, NZ.</h1>
          <a className='button is-medium is-danger'>My Work ></a>
          <a className='button is-medium is-danger'>Hire Me ></a>
        </div>
      </div>
  </div>
  )
}
