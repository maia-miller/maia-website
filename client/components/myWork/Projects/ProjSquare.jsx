import React from 'react'

export default (props) => {
  return (
    <div className='has-text-centered'>

      <h5 className='subtitle is-5'>Project Name</h5>
        <figure className="image is-128x128">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </figure>
        <p>Description</p>
        <div className='buttons is-centered'>
          <div className="button is-danger is-small">Tag</div>
          <div className="button is-danger is-small">Tag</div>
          <div className="button is-danger is-small">Tag</div>
        </div>
    </div>
  )
}
