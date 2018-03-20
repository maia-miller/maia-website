import React from 'react'

import ProjSquare from './ProjSquare'
import PantryToPlate from './PantryToPlate'
import MakeMeAcro from './MakeMeAcro'

export default (props) => {
    return (
      <div id='work' className='work'>

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
