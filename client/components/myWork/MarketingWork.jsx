import React from 'react'

import ProjSquare from './Projects/ProjSquare'
import TCSMarketingPlan from './Projects/TCSMarketingPlan'
import TCSsmResults from './Projects/TCSsmResults'
import ArtAuction from './Projects/ArtAuction'
import CustomerJourney from './Projects/CustomerJourney'

export default (props) => {
    return (
      <div id='work' className='work'>
        <a name="MarketingWork"></a>
        <div className='tile is-ancestor'>
          <div className="tile is-parent">
            <article className="tile is-child notification is-4" data-aos="flip-left" data-aos-duration="1000">
              <TCSMarketingPlan />
            </article>
            <article className="tile is-child notification is-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200">
              <TCSsmResults />
            </article>
            <article className="tile is-child notification is-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="400">
              <ArtAuction />
            </article>
          </div>
        </div>

        <div className='tile is-ancestor'>
          <div className="tile is-parent">
            <article className="tile is-child notification is-4" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="600">
              <CustomerJourney />
            </article>
          </div>
        </div>

      </div>
    )
}
