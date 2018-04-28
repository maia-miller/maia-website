import React from 'react'

export default (props) => {
  return (
    <div className=''>
      <h2 className='subject-title'>Research Snapshot</h2>
      <div className='img-container'>
        <a href="../images/researchsnapshot.jpg"><img className='tile-img' src="../images/researchsnapshot-square.jpg" /></a>
      </div>
      <p className="tile-text">Research snapshots are a summary of scientific articles, written to improve the transition from research to action. Snapshots are distributed to over 2,500 subscribers through the Canadian Mental Health Association's newsletter.</p>

      <div className='tags'>
        <div className="tag">Written Communication</div>
        <div className="tag">Summarizing</div>
      </div>

      <div className='demo'>
        <a href='../images/researchsnapshot.jpg' className='demo-button'>Read it</a>
      </div>

    </div>
  )
}
