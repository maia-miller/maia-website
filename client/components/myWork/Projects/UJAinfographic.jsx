import React from 'react'

export default (props) => {
  return (
    <div className=''>
      <h2 className='subject-title'>Infographic</h2>
      <div className='img-container'>
        <a href="../images/UJAinfographic.jpg"><img className='tile-img' src="../images/UJAinfographic.jpg" /></a>
      </div>
      <p className="tile-text">As part of the organization's Weekly Snapshot newsletter, I designed an image that could easily translate the value that the organization provided to the community. The objective was to convey real-world, concrete accomplishments in a quick and easy format. In addition to design skills, creating these infographics required the ability to interpret and transform often-cumbersome information into shareable and captivating visuals. This image was also shared on Facebook, Twitter and Instagram.</p>

      <div className='tags'>
        <div className="tag">Graphic Design</div>
        <div className="tag">Communication</div>
      </div>

      <div className='demo'>
        <a href='../images/UJAinfographic.jpg' className='demo-button'>See the Whole Email</a>
      </div>

    </div>
  )
}
