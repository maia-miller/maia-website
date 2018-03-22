import React from 'react'

import AnnouncementEmail from './Projects/AnnouncementEmail'
import UJAinfographic from './Projects/UJAinfographic'
import TASmag from './Projects/TASmag'
import Banners from './Projects/Banners'

export default (props) => {
    return (
      <div id='work' className='work'>

        <div className='tile is-ancestor'>
          <div className="tile is-parent">
            <article className="tile is-child notification is-4" data-aos="flip-left" data-aos-duration="1000">
              <AnnouncementEmail />
            </article>
            <article className="tile is-child notification is-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200">
              <UJAinfographic />
            </article>
            <article className="tile is-child notification is-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200">
              <TASmag />
            </article>
          </div>
        </div>

        <div className='tile is-ancestor'>
          <div className="tile is-parent">
            <article className="tile is-child notification is-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="600">
              <Banners />
            </article>
          </div>
        </div>

      </div>
    )
}
