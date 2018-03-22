import React from 'react'

export default (props) => {

  return (
    <form id='contact' className='contact'>
      <div className='hero'>
        <div className='container has-text-centered'>
          <h1 className='title is-2'>Conversations are fun!</h1>
          <p>You should <strong>get in touch with me</strong> through one of the means below:</p>
          <br />
          <br />

          <div className='columns has-text-centered'>
            <div className='column '>
              <a href="mailto:maiamiller25@gmail.com">
                <img className='icon-img' src="../images/email.png" />
                <p>Email</p>
              </a>
            </div>

            <div className='column '>
              <a href="https://github.com/maia-miller">
                <img className='icon-img' src="../images/github.png" />
                <p>GitHub</p>
              </a>
            </div>

            <div className='column '>
              <a href="https://www.linkedin.com/in/maiamiller/">
                <img className='icon-img' src="../images/linkedin.png" />
                <p>LinkedIn</p>
              </a>
            </div>

          </div>

        </div>
      </div>
    </form>
  )
}
