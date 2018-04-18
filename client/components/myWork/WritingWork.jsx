import React from 'react'

import ResearchSnapshot from './Projects/ResearchSnapshot'
import PressRelease from './Projects/PressRelease'
import AdvocacyMatters from './Projects/AdvocacyMatters'
import TCSnewsletter from './Projects/TCSnewsletter'

export default (props) => {
  return (
    <div id='work' className=''>
      <div className='project-tiles'>
        <div className="project-tile" data-aos="flip-left" data-aos-duration="1000"><ResearchSnapshot /></div>
        <div className="project-tile" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200"><PressRelease /></div>
        <div className="project-tile" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200"><AdvocacyMatters /></div>
        <div className="project-tile" data-aos="flip-left" data-aos-duration="1000"><TCSnewsletter /></div>
      </div>
    </div>
    )
}
