import React from 'react'

export default (props) => {
  return (
    <div className='has-text-centered'>
      <h5 className='subtitle is-5'><strong>Make Me Acro</strong></h5>
        <figure className='projimg'>
          <a href="http://makemeacro.herokuapps.com"><img className='tile-img' src="../images/makemeacro.png" /></a>
        </figure>
        <p className="description">I spend lots of my time at acro jams, where you meet with people and improvise acro yoga poses. However, many times people end up standing around asking each other, "What pose should we do!?" Created in React, I built this app after 6 weeks of learning. It utilizes the whole stack, from a database to which users can contribute to an interactive interface.</p>
        <div className='buttons is-centered'>
          <span className="tag is-danger">React</span>
          <span className="tag is-danger">SQL Database</span>
        </div>

        <div className='buttons is-centered'>
          <a href='http://makemeacro.herokuapps.com' className='button is-primary is-outlined'>See it live</a>
        </div>
    </div>
  )
}
