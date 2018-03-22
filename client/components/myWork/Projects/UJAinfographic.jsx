import React from 'react'

export default (props) => {
  return (
    <div className='has-text-centered'>
      <h5 className='subtitle is-5'><strong>Announcement Email to Staff</strong></h5>
      <figure className='projimg'>
          <a href="../images/UJAemail.jpg"><img className='tile-img' src="../images/UJAstaffemail.jpg" /></a>
        </figure>
        <p className="description">I was given the requirement to design an email that was fun and engaging in order to announce the launch of UJA's Walk with Israel to staff. This email saw a 90% open rate and a 23% click-through rate. The majority of clicks (30%) came from the very bottom button, indicating that the design and content of the email encouraged users to read through the entirety of the email before engaging with the call to action.</p>
        <div className='buttons is-centered'>
          <span className="tag is-danger">Email Marketing</span>
          <span className="tag is-danger">Graphic Design</span>
        </div>

        <div className='buttons is-centered'>
          <a href='../images/UJAemail.jpg' className='button is-primary is-outlined'>See the Whole Email</a>
        </div>

    </div>
  )
}
