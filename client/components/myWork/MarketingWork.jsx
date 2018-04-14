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
        <div className='project-tiles'>
          <div className="project-tile" data-aos="flip-left" data-aos-duration="1000"><TCSMarketingPlan /></div>
          <div className="project-tile" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200"><TCSsmResults /></div>
          <div className="project-tile" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="400"><ArtAuction /></div>
          <div className="project-tile" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="600"><CustomerJourney /></div>
        </div>
      </div>
    )
}
