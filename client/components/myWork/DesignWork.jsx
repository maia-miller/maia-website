import React from 'react'

import AnnouncementEmail from './Projects/AnnouncementEmail'
import UJAinfographic from './Projects/UJAinfographic'
import TASmag from './Projects/TASmag'
import Banners from './Projects/Banners'

export default (props) => {
  return (
    <div id='work' className=''>
      <div className='project-tiles'>
        <div className="project-tile" data-aos="flip-left" data-aos-duration="1000"><AnnouncementEmail /></div>
        <div className="project-tile" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200"><UJAinfographic /></div>
        <div className="project-tile" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="400"><TASmag /></div>
        <div className="project-tile" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200"><Banners /></div>
      </div>
    </div>
  )
}
