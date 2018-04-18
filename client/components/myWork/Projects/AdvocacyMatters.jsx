import React from 'react'

export default (props) => {
  return (
    <div className=''>
      <h2 className='subject-title'>Monthly Newsletter: "Advocacy Matters"</h2>
      <div className='img-container'>
        <a href="../images/AdvocacyMatters.jpg"><img className='tile-img' src="../images/AdvocacyMatters.jpg" /></a>
      </div>
      <p className="tile-text">In addition to being responsible for layout, proof reading, ad creation, and photography, I was also the lead to ensure that contributors met editorial deadlines.</p>

      <div className='tags'>
        <div className="tag">Written Communication</div>
        <div className="tag">Layout</div>
        <div className="tag">InDesign</div>
        <div className="tag">Coordination</div>
      </div>

      <div className='demo'>
        <a href='http://www.advocates.ca/TAS/Publications_Resources/Advocacy_Matters_Archive.aspx' className='demo-button'>View Whole Issues</a>
      </div>

    </div>
  )
}
