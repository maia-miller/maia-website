import React from 'react'

export default (props) => {
  return (
    <div className='has-text-centered'>
      <h5 className='subtitle is-5'><strong>Monthly Newsletter - The Cup Store</strong></h5>
      <figure className='projimg'>
          <a href="../images/TCSnewsletter.jpg"><img className='tile-img' src="../images/TCSnewsletter.jpg" /></a>
        </figure>
        <p className="description">For this edition of the monthly newsletter, I conducted a client interview over phone and email. I initiated contact with the client, developed questions for the interview, and distilled the answers to useful information. The article was reviewed and approved by the client.</p>
        <div className='buttons is-centered'>
          <span className="tag is-danger">Writing</span>
          <span className="tag is-danger">Layout</span>
          <span className="tag is-danger">Client Relations</span>
        </div>

        <div className='buttons is-centered'>
          <a href='../images/TCSnewsletter.jpg' className='button is-primary is-outlined'>Read the Issue</a>
        </div>

    </div>
  )
}
