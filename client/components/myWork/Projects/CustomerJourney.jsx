import React from 'react'

export default (props) => {
  return (
    <div className=''>
      <h2 className='subject-title'>Customer Journey</h2>
      <div className='img-container'>
        <a href="../images/customerJourney.jpg"><img className='tile-img' src="../images/customerJourney.jpg" /></a>
      </div>
      <p className="description">I mapped a workflow identifying all points of contact with the customer in order to identify pain points in the ordering process. This customer journey map enable the company to focus on areas of improvement to avoid redundancy and improve efficiency.</p>

      <div className='tags'>
        <span className="tag">Strategy</span>
        <span className="tag">User Experience</span>
      </div>

      <div className='demo'>
        <a href='../images/customerJourney.jpg' className='demo-button'>View the Chart</a>
      </div>

    </div>
  )
}
