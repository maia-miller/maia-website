import React from 'react'

import ProjSquare from './ProjSquare'

export default (props) => {
  return (
    <div className='work'>
      <h1>My Work</h1>

{/* can map thru tags for each proj in db to display categories*/}

      <div className='col'>Coding</div>
      <div className='col'>Marketing</div>
      <div className='col'>Design</div>
      <div className='col'>Writing</div>

{/* can map thru project db to display images. Has onHover event, onClick event*/}

      <ProjSquare />
      <ProjSquare />
      <ProjSquare />

    </div>
  )
}
