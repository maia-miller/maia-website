import React from 'react'

import ProjSquare from './ProjSquare'
import PantryToPlate from './PantryToPlate'
import MakeMeAcro from './MakeMeAcro'

export default (props) => {
  return (
    <div id='work' className='work'>
      <div className='hero'>
        <div className='container has-text-centered'>
          <h1 className='title is-2' data-aos='fade-up' data-aos-duration="800">My Work</h1>

{/* can map thru tags for each proj in db to display categories*/}
          <button className='button is-danger'>Show All</button>
          <button className='button is-danger is-inverted is-outlined'>Coding</button>
          <button className='button is-danger is-inverted is-outlined'>Marketing</button>
          <button className='button is-danger is-inverted is-outlined'>Design</button>
          <button className='button is-danger is-inverted is-outlined'>Writing</button>
        </div>
      </div>

      <div className='tile is-ancestor'>
        <div className="tile is-parent">
          <article className="tile is-child notification is-4" data-aos="flip-left" data-aos-duration="1000">
            <PantryToPlate />
          </article>
          <article className="tile is-child notification is-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200">
            <MakeMeAcro />
          </article>
          <article className="tile is-child notification is-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="250">
            <ProjSquare />
          </article>
        </div>
      </div>

      <div className='tile is-ancestor'>
        <div className="tile is-parent">
          <article className="tile is-child notification is-4" data-aos="flip-left" data-aos-duration="1000">
            <ProjSquare />
          </article>
          <article className="tile is-child notification is-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="250">
            <ProjSquare />
          </article>
        </div>
      </div>

    </div>
  )
}
