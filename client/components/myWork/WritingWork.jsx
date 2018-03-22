import React from 'react'

import ResearchSnapshot from './Projects/ResearchSnapshot'
import PressRelease from './Projects/PressRelease'
import AdvocacyMatters from './Projects/AdvocacyMatters'
import TCSnewsletter from './Projects/TCSnewsletter'

export default (props) => {
    return (
      <div id='work' className='work'>

        <div className='tile is-ancestor'>
          <div className="tile is-parent">
            <article className="tile is-child notification is-4" data-aos="flip-left" data-aos-duration="1000">
              <ResearchSnapshot />
            </article>
            <article className="tile is-child notification is-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200">
              <PressRelease />
            </article>
            <article className="tile is-child notification is-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200">
              <AdvocacyMatters />
            </article>
          </div>
        </div>

        <div className='tile is-ancestor'>
          <div className="tile is-parent">
            <article className="tile is-child notification is-4" data-aos="flip-left" data-aos-duration="1000">
              <TCSnewsletter />
            </article>
          </div>
        </div>

      </div>
    )
}
