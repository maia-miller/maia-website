import React from 'react'

import ProjItem from './ProjItem'

export default (props) => {
  return (
    <div className='has-text-centered'>
{/* onClick of image or title, goes to ProjItem.jsx, passes thru e.target.value to define activeProj */}

      <h5 className='subtitle is-5'>Project Name</h5>
        <figure class="image is-128x128">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </figure>
        <p>Description</p>
        <div className='buttons'>
          <span class="button is-danger is-small">Tag</span>
          <span class="button is-danger is-small">Tag</span>
          <span class="button is-danger is-small">Tag</span>
        </div>
    </div>
  )
}
