import React from 'react'

import Testimonial2 from './Testimonial2'

export default (props) => {
  return (
    <div className='embarrassing' id='beginnings'>
      <div className='embarrassing-heading'>
        <h1 id='embarrassing' className='section-title' data-aos="fade-left" data-aos-duration="800">Well, this is embarrassing</h1>
        <h1 id='embarrassing' className='section-title' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">. </h1>
        <h1 id='embarrassing' className='section-title' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">. </h1>
        <h1 id='embarrassing' className='section-title' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000">. </h1>
      </div>

      <div className=''>
        <p>The ability and curiosity to learn is one of the most important skils a developer can have. As a graduate of Enspiral Dev Academy, <strong>I learned how to code full stack in 9 weeks.</strong> This website you're looking at right now? I designed and built it from the ground up, based on the skills I learned in this short time frame. <strong><a href='https://maia-miller.github.io/'>Click here to see where my coding skills started out.</a></strong> In the meantime, I'm going to go hide in a corner and die of embarassment.</p>
      </div>
      <Testimonial2 />
    </div>
  )
}
