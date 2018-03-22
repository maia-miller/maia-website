import React from 'react'

export default (props) => {
  return (
    <div className='has-text-centered'>
      <h5 className='subtitle is-5'><strong>Press Release</strong></h5>
      <figure className='projimg'>
          <a href="../images/pressrelease.jpg"><img className='tile-img' src="../images/pressrelease.jpg" /></a>
        </figure>
        <p className="description">Written for the York Debating Society. This article summarizes the organization's success at a recent tournament and was published on York University's online news publication, yFile.</p>
        <div className='buttons is-centered'>
          <span className="tag is-danger">Journalism</span>
        </div>

    </div>
  )
}
