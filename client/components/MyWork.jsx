import React from 'react'

import ProjSquare from './ProjSquare'

export default (props) => {
  return (
    <div id='work' className='work'>
      <div className='hero'>
        <div className='container has-text-centered'>
          <h1 className='title is-2'>My Work</h1>

{/* can map thru tags for each proj in db to display categories*/}
          <button className='button is-danger'>Show All</button>
          <button className='button is-danger is-inverted is-outlined'>Coding</button>
          <button className='button is-danger is-inverted is-outlined'>Marketing</button>
          <button className='button is-danger is-inverted is-outlined'>Design</button>
          <button className='button is-danger is-inverted is-outlined'>Writing</button>
        </div>
      </div>

  {/* can map thru project db to display images. Has onHover event, onClick event*/}

      <div className='tile is-ancestor'>
        <div className="tile is-parent">
          <article className="tile is-child notification is-3">
            <ProjSquare />
          </article>
          <article className="tile is-child notification is-3">
            <ProjSquare />
          </article>
          <article className="tile is-child notification is-3">
            <ProjSquare />
          </article>
          <article className="tile is-child notification is-3">
            <ProjSquare />
          </article>
        </div>
      </div>

      <div className='tile is-ancestor'>
        <div className="tile is-parent">
          <article className="tile is-child notification is-3">
            <ProjSquare />
          </article>
          <article className="tile is-child notification is-3">
            <ProjSquare />
          </article>
        </div>
      </div>

    </div>
  )
}
