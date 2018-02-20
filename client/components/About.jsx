import React from 'react'

import Testimonial from './Testimonial'

export default (props) => {

return (
  <div className='about'>
    <div className='header'>
      <h1>About</h1>
    </div>

      <div className='columns'>
        <div className='column'>
          <h4>Team player</h4>
          <p>The days of the reclusive programmer are over. Today, developers work on teams with designers, marketers, project managers and other programmers. With practical teamwork experience, it has been my strong interpersonal and communication skills that has influenced time and time again to my team's success.</p>
        </div>

        <div className='column'>
          <h4>Default Mode: Problem Solver</h4>
          <p>I am an analytic person by nature, so my approach to any challenge is to investigate and optimize solutions. Nothing is impossible if turned over enough times, and I have a track record of providing clients with results that are professional, clean and creative. I love brainstorming solutions and solving problems, with a team or on my own.</p>
        </div>

        <div className='column'>
          <h4>Fast Learner</h4>
          <p>blurb about dev academy/learning in 18 weeks/insatiable curiosity</p>
        </div>

        <div className='column'>
          <h4>An Eye on Growth</h4>
          <p>Having worked for years in growth marketing to increase organizations' sales through print, web, email and social media, I understand the value of converting potential clients into actual users. Thanks to my Multidisciplinary background, I think creatively and unconventionally yet am grounded by best practices. Growth and sales are what keep a business alive, and these are familiar priorities to me.</p>
        </div>
      </div>

      <div className='content'>
        <p>My hobbies include...</p>
        <Testimonial />
      </div>
    </div>

  )
}
