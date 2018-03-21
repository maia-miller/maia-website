import React from 'react'

export default (props) => {
  return (
    <div className='has-text-centered'>
      <h5 className='subtitle is-5'><strong>Social Media Results</strong></h5>
        <figure className=''>
          <a href="../images/TCSsmResults.jpg"><img src="../images/TCSsmResults.jpg" /></a>
        </figure>
        <p className="description">The Cup Store saw increases to their Twitter activity and results in all facets, including followers, likes and shares. In total, there was an 11% increase in twitter followers.</p>
        <div className='buttons is-centered'>
          <span className="tag is-danger">Marketing strategy</span>
          <span className="tag is-danger">Social Media</span>
          <span className="tag is-danger">Evaluation and Metrics</span>
        </div>

        <div className='buttons is-centered'>
          <a href='../images/TCSsmResults.jpg' className='button is-primary is-outlined'>View the Chart</a>
        </div>

    </div>
  )
}
