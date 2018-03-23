import React from 'react'

export default (props) => {

  return (
    <div id='footer_container'>

        <figure>
          <a href="/#">
          <img id='footer_content' src="../images/arrow.png" /></a>
        </figure>

        <div id='vid_footer_container'>
          <video id='footer_vid' autoPlay muted loop id="footer_vid">
            <source src="../images/722741424.mp4" type="video/mp4" />
          </video>
        </div>

    </div>
  )
}
