import React from 'react'

import Testimonial1 from './Testimonial1'

export default (props) => {

return (
  <div className='about'>
    <div className='heading'>
      <h2 className='section-title' data-aos="fade-right" data-aos-duration="800">About</h2>
      <h4 className='section-subtitle' data-aos="fade-right" data-aos-duration="800">An empathetic, multidisciplinary approach to building the web</h4>
      <br />
    </div>

      <div className='columns'>
        <div className='column'>
          <figure className="col-figure image is-128x128 symbol" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200"><img className='col-img' src="../images/teamwork.png" /></figure>
        <h5 className='subtitle is-5 has-text-centered'><strong>Team player</strong></h5>
          <p className="description">The days of the reclusive programmer are over. Today, developers work on teams with designers, marketers, project managers and other programmers. With practical teamwork experience, it has been my strong interpersonal and communication skills that has contributed time and time again to my team's success.</p>
        </div>

        <div className='column'>
          <figure className="col-figure image is-128x128 symbol" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="250">
            <img className='col-img' src="../images/problemsolve.png" />
          </figure>
          <h5 className='subtitle is-5 has-text-centered'><strong>Problem Solver</strong></h5>
          <p  className="description">I am an analytic person by nature, so my approach to any challenge is to investigate and optimize solutions. Nothing is impossible if turned over enough times, and I have a track record of providing clients with results that are professional, clean and creative. I love brainstorming solutions and solving problems, with a team or on my own.</p>
        </div>

        <div className='column'>
          <figure className="col-figure image is-128x128 symbol" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
            <img className='col-img' src="../images/fastlearner.png" />
          </figure>
          <h5 className='subtitle is-5 has-text-centered'><strong>Fast Learner</strong></h5>
          <p className="description">I learned how to code in just 18 weeks. Programmers need to be constantly learning in order to stay up-to-date with the field, and need to be able to do so quickly to stay relevant. I have a deep and insatiable curiosity for learning, and the self motivation and direction to put my intentions into action.</p>
        </div>

        <div className='column'>
          <figure className="col-figure image is-128x128 symbol" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="350">
            <img className='col-img' src="../images/chart.png" />
          </figure>
          <h5 className='subtitle is-5 has-text-centered'><strong>Multidisciplinary</strong></h5>
          <p className="description">With an education in Humanities, professional experience in marketing and graphic design, and training in Human-Computer Interactions, I bring a knowledge base that is both wide and deep. I think creatively and unconventionally, yet am grounded by best practices and an emphasis on accessibility and inclusivity.</p>
        </div>
      </div>

      <div className='container has-text-centered is-fullhd'>
        <p>When I'm not coding, I'm spending time doing acroyoga, cooking delicious vegan food, cylcing/hiking, or making pottery.</p>
      </div>
<br />
      <div>
        <Testimonial1 />
      </div>

    </div>

  )
}
