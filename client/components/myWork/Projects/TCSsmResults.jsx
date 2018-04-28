import React from 'react'

export default (props) => {
  return (
    <div className=''>
      <h2 className='subject-title'>Social Media Results</h2>
      <div className='img-container'>
        <a href="../images/TCSsmResults.jpg"><img className='tile-img' src="../images/TCSsmResults-square.jpg" /></a>
      </div>
      <p className="tile-text">The Cup Store saw increases to their Twitter activity and results in all facets, including followers, likes and shares. In total, there was an 11% increase in twitter followers.</p>

      <div className='tags'>
        <div className="tag">Marketing Strategy</div>
        <div className="tag">Social Media</div>
        <div className="tag">Evaluation and Metrics</div>
      </div>

      <div className='demo'>
        <a href='../images/TCSsmResults.jpg' className='demo-button'>View the Chart</a>
      </div>

    </div>
  )
}
