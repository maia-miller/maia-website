import React from 'react'

export default (props) => {
  return (
    <div className='has-text-centered'>
      <h5 className='subtitle is-5'><strong>Research Snapshot</strong></h5>
      <figure className='projimg'>
          <a href="../images/researchsnapshot.jpg"><img className='tile-img' src="../images/researchsnapshot.jpg" /></a>
        </figure>
        <p className="description">Research snapshots are a summary of scientific articles, written to improve the transition from research to action. Snapshots are distributed to over 2,500 subscribers through the Canadian Mental Health Association's newsletter.</p>
        <div className='buttons is-centered'>
          <span className="tag is-danger">Written Communication</span>
          <span className="tag is-danger">Summarizing</span>
        </div>

        <div className='buttons is-centered'>
          <a href='../images/researchsnapshot.jpg' className='button is-primary is-outlined'>Read the Research Snapshot</a>
        </div>

    </div>
  )
}
