import React from 'react'

import Testimonial from './Testimonial'

export default (props) => {
  return (
    <div className='embarrassing'>
      <div className='hero'>
        <div className='container has-text-centered'>
          <div className="tile is-parent">
            <article className="tile is-child is-12" data-aos="fade-left" data-aos-duration="800">
              <h1 className='title is-2'>Well, this is embarassing</h1>
            </article>
            <article className="tile is-child" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
              <h1 className='title is-2'>. </h1>
            </article>
            <article className="tile is-child" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000">
              <h1 className='title is-2'>. </h1>
            </article>
            <article className="tile is-child" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1400">
              <h1 className='title is-2'>.</h1>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <p>The ability and curiosity to learn is one of the most important skils a developer can have. As a graduate of Enspiral Dev Academy, <strong>I learned how to code full stack in 9 weeks.</strong> This website you're looking at right now? I designed and built it from the ground up, based on the skills I learned in this short time frame. <a href='https://maia-miller.github.io/'>Click here to see where my coding skills started out.</a> In the meantime, I'm going to go hide in a corner and die of embarassment.</p>
        </div>
      </div>
    </div>
  )
}
