import React from 'react'

export default (props) => {

  return (
    <div id='contact' className='contact'>
      <div className='hero'>
        <div className='container has-text-centered'>
          <h1 className='title is-2'>Conversations are fun!</h1>
          <p>You should <strong>get in touch with me</strong> below:</p>
        </div>
      </div>

      <div className="field is-grouped">
          <div className="control">
            <input className="input" type="text" placeholder="Name" />
          </div>

        <div className="control has-icons-left has-icons-right">
          <input className="input is-danger" type="email" placeholder="Email" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p className="help is-danger">This email is invalid</p>
      </div>

      <div className="field">
        <div className="control">
          <textarea className="textarea" placeholder="Hi, I hope you're having a terrific day!"></textarea>
        </div>
      </div>

      <div className="field is-grouped is-grouped-centered">
        <div className="control">
          <button className="button is-danger">Submit</button>
        </div>
        <div className="control">
          <button className="button is-text">Cancel</button>
        </div>
      </div>

    <div className='icons'>
      <div className='columns'>
        <div className='column'>
          <span className="icon is-large">
            <i className="fas fa-home"></i>
          </span>
          <p>Email</p>
        </div>
        <div className='column'>
          <span className="icon is-large">
            <i className="fas fa-home"></i>
          </span>
          <p>GitHub</p>
        </div>
        <div className='column'>
          <span className="icon is-large">
            <i className="fas fa-home"></i>
          </span>
          <p>LinkedIn</p>
        </div>
      </div>
    </div>

  </div>
  )
}
