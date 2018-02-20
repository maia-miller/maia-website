import React from 'react'

export default (props) => {

  // document.getElementById('vid1').addEventListener('loadedmetadata', function() {
  //   this.currentTime = 50;
  // }, false);

return (
    <div className='video'>
      <video autoPlay muted loop id="vid-background">
        <source src="../images/343378693.mp4" type="video/mp4" />
      </video>

      <div className='content'>
        <h1>Hi, I'm Maia</h1>
        <p>I'm a software developer based in Wellington, NZ.</p>
        <button>My Work</button>
        <button>Hire Me</button>
      </div>
    </div>
  )
}
