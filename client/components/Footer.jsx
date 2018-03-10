import React from 'react'

export default (props) => {

  return (
    <div id='footer_container'>

        <figure>
          <img id='footer_content' src="../images/acro.jpg" />
        </figure>

        <div id='vid_footer_container'>
          <video autoPlay muted loop id="footer_vid">
            <source src="../images/722741424.mp4" type="video/mp4" />
          </video>
        </div>

    </div>
  )
}
