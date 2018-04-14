import React from 'react'

export default (props) => {
  return (
    <div className=''>
      <h2 className='subject-title'>Monthly Newsletter: The Cup Store</h2>
      <div className='img-container'>
        <a href="../images/TCSnewsletter.jpg"><img className='tile-img' src="../images/TCSnewsletter.jpg" /></a>
      </div>
      <p className="tile-text">For this edition of the monthly newsletter, I conducted a client interview over phone and email. I initiated contact with the client, developed questions for the interview, and distilled the answers to useful information. The article was reviewed and approved by the client.</p>

      <div className='tags'>
        <div className="tag">Writing</div>
        <div className="tag">Layout</div>
        <div className="tag">Client Relations</div>
      </div>

      <div className='demo'>
        <a href='../images/TCSnewsletter.jpg' className='demo-button'>Read the Issue</a>
      </div>

    </div>
  )
}
