import React from 'react'

import Testimonial1 from './Testimonial1'

export default (props) => {

return (
  <div className='about'>
    <div className='hero'>
      <div className='container has-text-centered'>
        <h1 className='title is-2' data-aos="fade-right" data-aos-duration="800">About</h1>
      </div>
    </div>

      <div className='columns'>
        <div className='column'>
          <figure className="image is-128x128" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
          <h5 className='subtitle is-5'>Team player</h5>
          <p>The days of the reclusive programmer are over. Today, developers work on teams with designers, marketers, project managers and other programmers. With practical teamwork experience, it has been my strong interpersonal and communication skills that has influenced time and time again to my team's success.</p>
        </div>

        <div className='column'>
          <figure className="image is-128x128" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="250">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
          <h5 className='subtitle is-5'>Default Mode: Problem Solver</h5>
          <p>I am an analytic person by nature, so my approach to any challenge is to investigate and optimize solutions. Nothing is impossible if turned over enough times, and I have a track record of providing clients with results that are professional, clean and creative. I love brainstorming solutions and solving problems, with a team or on my own.</p>
        </div>

        <div className='column'>
          <figure className="image is-128x128" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
          <h5 className='subtitle is-5'>Fast Learner</h5>
          <p>blurb about dev academy/learning in 18 weeks/insatiable curiosity</p>
        </div>

        <div className='column'>
          <figure className="image is-128x128" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="350">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
          <h5 className='subtitle is-5'>An Eye on Growth</h5>
          <p>Having worked for years in growth marketing to increase organizations' sales through print, web, email and social media, I understand the value of converting potential clients into actual users. Thanks to my Multidisciplinary background, I think creatively and unconventionally yet am grounded by best practices. Growth and sales are what keep a business alive, and these are familiar priorities to me.</p>
        </div>
      </div>

      <div className='container has-text-centered is-fullhd'>
        <p>When I'm not coding, I'm spending time doing acroyoga, cooking delicious vegan food, cylcing/hiking, or making pottery.</p>
        <Testimonial1 />
      </div>
    </div>

  )
}
