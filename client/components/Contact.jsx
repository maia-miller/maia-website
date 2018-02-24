import React from 'react'

export default (props) => {

  return (
    <div className='contact'>
      <div className='hero'>
        <div className='container has-text-centered'>
          <h1 className='title is-2'>Conversations are fun!</h1>
          <p>You should <strong>get in touch with me</strong> below:</p>
        </div>
      </div>

      <div class="field is-grouped">
          <div class="control">
            <input class="input" type="text" placeholder="Name" />
          </div>

        <div class="control has-icons-left has-icons-right">
          <input class="input is-danger" type="email" placeholder="Email" />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p class="help is-danger">This email is invalid</p>
      </div>

      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Hi, I hope you're having a terrific day!"></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-centered">
        <div class="control">
          <button class="button is-danger">Submit</button>
        </div>
        <div class="control">
          <button class="button is-text">Cancel</button>
        </div>
      </div>

    <div className='icons'>
      <div className='columns'>
        <div className='column'>
          <span class="icon is-large">
            <i class="fas fa-home"></i>
          </span>
          <p>Email</p>
        </div>
        <div className='column'>
          <span class="icon is-large">
            <i class="fas fa-home"></i>
          </span>
          <p>Phone</p>
        </div>
        <div className='column'>
          <span class="icon is-large">
            <i class="fas fa-home"></i>
          </span>
          <p>LinkedIn</p>
        </div>
      </div>
    </div>

  </div>
  )
}
