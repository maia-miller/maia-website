import React from 'react'

import Testimonial from './Testimonial'

export default (props) => {
  return (
    <div className='embarassing'>
      <h1>Well, this is embarrassing...</h1>
      <p>The ability and curiosity to learn is one of the most important skils a developer can have. As a graduate of Enspiral Dev Academy, <strong>I learned how to code full stack in 18 weeks.</strong> This website you're looking at right now? I designed and built it from the ground up, based on the skills I learned in this short time frame. <a href='https://maia-miller.github.io/'>Click here to see where my coding skills started out.</a> In the meantime, I'm going to go hide in a corner and die of embarassment.</p>
      <Testimonial />
    </div>
  )
}
