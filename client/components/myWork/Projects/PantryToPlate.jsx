import React from 'react'

export default (props) => {
  return (
    <div className=''>
      <h2 className='subject-title'>Pantry To Plate</h2>
      <div className='img-container'>
        <a href="https://pantry-to-plate.herokuapp.com/#/"><img className='tile-img' src="../images/pantrytoplate.png" /></a>
      </div>
      <p className="tile-text">Tired of staring into your fridge or pantry and thinking, "I have nothing to eat!" As our final project at EDA, our group of five solved this problem by developing a website to offer recipe ideas based on what you have, and a shopping list of what you need.</p>

      <div className='tags'>
        <button className="tag">React</button>
        <button className="tag">Redux</button>
        <button className="tag">API</button>
        <button className="tag">Teamwork</button>
      </div>

      <div className='demo'>
          <a href='https://pantry-to-plate.herokuapp.com/#/'><button className='demo-button'>See it live</button></a>
      </div>

    </div>
  )
}
