import React from 'react'

export default (props) => {
  return (
    <div className=''>
      <h2 className='subject-title'>Web Banners</h2>
      <div className='img-container'>
        <a href="../images/banners.jpg"><img className='tile-img' src="../images/banners.jpg" /></a>
      </div>
      <p className="tile-text">These select web banners were posted in rotation on the organization’s website to promote traffic towards event pages, and were consistent with the event's branding.</p>

      <div className='tags'>
        <span className="tag">Graphic Design</span>
        <span className="tag">Photoshop</span>
        <span className="tag">Illustrator</span>
      </div>

      <div className='demo'>
        <a href='../images/banners.jpg' className='demo-button'>See the Ad</a>
      </div>

    </div>
  )
}
