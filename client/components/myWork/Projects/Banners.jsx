import React from 'react'

export default (props) => {
  return (
    <div className='has-text-centered'>
      <h5 className='subtitle is-5'><strong>Web Banners</strong></h5>
      <figure className='projimg'>
          <a href="../images/banners.jpg"><img className='tile-img' src="../images/banners.jpg" /></a>
        </figure>
        <p className="description">These select web banners were posted in rotation on the organization’s website to promote traffic towards event pages, and were consistent with the event's branding.</p>
        <div className='buttons is-centered'>
          <span className="tag is-danger">Graphic Design</span>
          <span className="tag is-danger">Photoshop</span>
          <span className="tag is-danger">Illustrator</span>
        </div>

        <div className='buttons is-centered'>
          <a href='../images/banners.jpg' className='button is-primary is-outlined'>See the Ad</a>
        </div>

    </div>
  )
}
