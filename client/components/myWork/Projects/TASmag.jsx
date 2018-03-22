import React from 'react'

export default (props) => {
  return (
    <div className='has-text-centered'>
      <h5 className='subtitle is-5'><strong>Magazine Ad</strong></h5>
      <figure className='projimg'>
          <a href="../images/TASmag.jpg"><img className='tile-img' src="../images/TASmag.jpg" /></a>
        </figure>
        <p className="description">I oversaw the execution of this magazine ad by coordinating between the Marketing Director, graphic designer, and printing shop. This was the organization's first time advertising in this particular magazine - which was the primary legal magazine targeting lawyers under 40 - so there were high expectations to create a design that was professional yet captivating.</p>
        <div className='buttons is-centered'>
          <span className="tag is-danger">Collaboration</span>
          <span className="tag is-danger">Coordination</span>
        </div>

        <div className='buttons is-centered'>
          <a href='../images/TASmag.jpg' className='button is-primary is-outlined'>See the Ad</a>
        </div>

    </div>
  )
}
