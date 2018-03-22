import React from 'react'

export default (props) => {
  return (
    <div className='has-text-centered'>
      <h5 className='subtitle is-5'><strong>Monthly Newsletter - "Advocacy Matters"</strong></h5>
      <figure className='projimg'>
          <a href="../images/AdvocacyMatters.jpg"><img className='tile-img' src="../images/AdvocacyMatters.jpg" /></a>
        </figure>
        <p className="description">In addition to being responsible for layout, proof reading, ad creation, and photography, I was also the lead to ensure that contributors met editorial deadlines.</p>
        <div className='buttons is-centered'>
          <span className="tag is-danger">Written Communication</span>
          <span className="tag is-danger">Layout</span>
          <span className="tag is-danger">InDesign</span>
          <span className="tag is-danger">Coordination</span>
        </div>

        <div className='buttons is-centered'>
          <a href='http://www.advocates.ca/TAS/Publications_Resources/Advocacy_Matters_Archive.aspx' className='button is-primary is-outlined'>View Whole Issues</a>
        </div>

    </div>
  )
}
