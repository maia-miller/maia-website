import React from 'react'

export default (props) => {
  return (
    <div className='has-text-centered'>
      <h5 className='subtitle is-5'><strong>Infographic</strong></h5>
      <figure className='projimg'>
          <a href="../images/UJAinfographic.jpg"><img className='tile-img' src="../images/UJAinfographic.jpg" /></a>
        </figure>
        <p className="description">As part of the organization's Weekly Snapshot newsletter, I designed an image that could easily translate the value that the organization provided to the community. The objective was to convey real-world, concrete accomplishments in a quick and easy format. In addition to design skills, creating these infographics required the ability to interpret and transform often-cumbersome information into shareable and captivating visuals. This image was also shared on Facebook, Twitter and Instagram.</p>
        <div className='buttons is-centered'>
          <span className="tag is-danger">Graphic Design</span>
          <span className="tag is-danger">Communication</span>
        </div>

        <div className='buttons is-centered'>
          <a href='../images/UJAinfographic.jpg' className='button is-primary is-outlined'>See the Whole Email</a>
        </div>

    </div>
  )
}
