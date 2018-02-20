import React from 'react'

export default (props) => {

  return (
    <div className='contact'>
      <h1>Conversations are fun!</h1>
      <p>You should <strong>get in touch with me</strong> below:</p>

      <form>
        <input type='text' placeholder='Your Name' />
        <input type='text' placeholder='Your Email' />
        <input type='textarea' rows="10" cols="30" placeholder="I hope you're having a great day!" />
        <button type='submit' />
      </form>

      <div className='icons'>
        <p>email</p>
        <p>phone</p>
        <p>LinkedIn</p>
      </div>

    </div>
  )
}
