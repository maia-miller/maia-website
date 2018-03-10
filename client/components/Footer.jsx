import React from 'react'


{/* <img id='tester' src='../images/acro.jpg' /> */}
export default (props) => {

  return (
    <div id='footer-container'>

      <div id='content-box'>

        <figure>
          <img id='top' src="../images/acro.jpg" />
        </figure>

        <div id='vid-container'>
          <video autoPlay muted loop id="vid">
            <source src="../images/722741424.mp4" type="video/mp4" />
          </video>
        </div>

      </div>

    </div>
  )
}
