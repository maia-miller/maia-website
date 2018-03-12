import React from 'react'

import ProjItem from './ProjItem'

export default (props) => {
  return (
    <div className='has-text-centered'>
      <h5 className='subtitle is-5'><strong>Pantry To Plate</strong></h5>
        <figure className=''>
          <img src="../images/pantrytoplate.png" />
        </figure>
        <p className="description">Tired of staring into your fridge or pantry and thinking, "I have nothing to eat!" As our final project at EDA, our group of five solved this problem by developing a website to offer recipe ideas based on what you have, and a shopping list of what you need.</p>
        <div className='buttons is-centered'>
          <span className="tag is-danger">React</span>
          <span className="tag is-danger">Redux</span>
          <span className="tag is-danger">API</span>
          <span className="tag is-danger">Teamwork</span>
        </div>

        <div className='buttons is-centered'>
          <a href='https://pantry-to-plate.herokuapp.com/#/' className='button is-primary is-outlined'>See it live</a>
        </div>
    </div>
  )
}
