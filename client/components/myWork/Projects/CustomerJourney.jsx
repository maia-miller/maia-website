import React from 'react'

export default (props) => {
  return (
    <div className='has-text-centered'>
      <h5 className='subtitle is-5'><strong>Customer Journey</strong></h5>
        <figure className=''>
          <a href="../images/customerJourney.jpg"><img className='projimg' src="../images/customerJourney.jpg" /></a>
        </figure>
        <p className="description">I mapped a workflow identifying all points of contact with the customer in order to identify pain points in the ordering process. This customer journey map enable the company to focus on areas of improvement to avoid redundancy and improve efficiency.</p>
        <div className='buttons is-centered'>
          <span className="tag is-danger">Strategy</span>
          <span className="tag is-danger">User Experience</span>
        </div>

        <div className='buttons is-centered'>
          <a href='../images/customerJourney.jpg' className='button is-primary is-outlined'>View the Chart</a>
        </div>

    </div>
  )
}
