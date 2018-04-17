import React from 'react'

export default (props) => {
  return (
    <div className=''>
      <h2 className='subject-title'>Magazine Ad</h2>
      <div className='img-container'>
        <a href="../images/TASmag.jpg"><img className='tile-img' src="../images/TASmag-square.jpg" /></a>
      </div>
      <p className="tile-text">I oversaw the execution of this magazine ad by coordinating between the Marketing Director, graphic designer, and printing shop. This was the organization's first time advertising in this particular magazine - which was the primary legal magazine targeting lawyers under 40 - so there were high expectations to create a design that was professional yet captivating.</p>

      <div className='tags'>
        <span className="tag">Collaboration</span>
        <span className="tag">Coordination</span>
      </div>

      <div className='demo'>
        <a href='../images/TASmag.jpg' className='demo-button'>See the Ad</a>
      </div>

    </div>
  )
}
