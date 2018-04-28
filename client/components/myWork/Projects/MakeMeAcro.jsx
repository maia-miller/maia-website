import React from 'react'

export default (props) => {
  return (
    <div className=''>
      <h2 className='subject-title'>Make Me Acro</h2>
      <div className='img-container'>
        <a href="http://makemeacro.herokuapp.com"><img className='tile-img' src="../images/makemeacro.png" /></a>
      </div>
      <p className="tile-text">I spend lots of my time at acro jams, where you meet with people and improvise acro yoga poses. However, many times people end up standing around asking each other, "What pose should we do!?" Created in React, I built this app after 6 weeks of learning. It utilizes the whole stack, from a database to which users can contribute to an interactive interface.</p>

      <div className='tags'>
        <div className="tag">React</div>
        <div className="tag">SQL Database</div>
      </div>

      <div className='demo'>
        <a href='http://makemeacro.herokuapp.com'><button className='demo-button'>See it live</button></a>
      </div>

    </div>
  )
}
