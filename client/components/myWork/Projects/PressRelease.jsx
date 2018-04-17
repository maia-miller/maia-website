import React from 'react'

export default (props) => {
  return (
    <div className=''>
      <h2 className='subject-title'>Press Release</h2>
      <div className='img-container'>
        <a href="../images/pressrelease.jpg"><img className='tile-img' src="../images/pressrelease-square.jpg" /></a>
      </div>
      <p className="tile-text">Written for the York Debating Society. This article summarizes the organization's success at a recent tournament and was published on York University's online news publication, yFile.</p>

      <div className='tags'>
        <span className="tag">Journalism</span>
      </div>

      <br />
    </div>
  )
}
