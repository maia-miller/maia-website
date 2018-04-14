import React from 'react'

import ProjSquare from './Projects/ProjSquare'
import PantryToPlate from './Projects/PantryToPlate'
import MakeMeAcro from './Projects/MakeMeAcro'

export default (props) => {
    return (
      <div id='work' className='work'>
        <div className='project-tiles'>
          <div className="project-tile" data-aos="flip-left" data-aos-duration="1000"><PantryToPlate /></div>
          <div className="project-tile" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200"><MakeMeAcro /></div>
        </div>
      </div>
    )
}
