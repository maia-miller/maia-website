import React from 'react'

import Testimonial2 from './Testimonial2'

export default (props) => {
  return (
    <div className='cv'>
      <a name="myCV"></a>
      <div className='heading'>
        <h1 className='section-title-white' data-aos='fade-down' data-aos-duration="800">My CV</h1>
      </div>

      <div className='columns'>
        <div className='cv-column'>
          <div className='purple-block'></div>
          {/* <img className="col-figure image is-128x128" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200 col-img" src="../images/experience.png" /> */}
          <h3 className='subject-title'>Experience</h3>
          <p className="cv-text"><strong>Digital Marketing Specialist</strong>
          <br/>UJA Federation of Greater Toronto, January 2017 – July 2017</p>
          <p className="cv-text"><strong>Marketing and Communications Coordinator</strong><br />The Advocates' Society, September 2014 – January 2016</p>
          <p className="cv-text"><strong>Social Media and Marketing Coordinator</strong><br />The Cup Store, October 2013 – September 2014</p>
          <p className="cv-text"><strong>Project Assistant</strong><br />Public Interest, June 2013 – September 2013</p>
          <p className="cv-text"><strong>Communications Assistant</strong><br />Centre for Addiction and Mental Health (CAMH), June 2012 – August 2012</p>
        </div>

        <div className='cv-column'>
          <div className='purple-block'></div>
          {/* <img className='col-figure image is-128x128" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200" col-img' src="../images/education.png" /> */}
          <h3 className='subject-title'>Education</h3>
          <p className="cv-text"><strong>Full-Stack Web Development</strong><br />Enspiral Dev Academy, Wellington, NZ, 2018</p>
          <p className="cv-text"><strong>Specialization: Interaction Design</strong><br />University of California, San Diego <em>(In progress)</em></p>
          <p className="cv-text"><strong>Honours B.A. Humanities</strong><br />York University, Toronto, Canada, 2013<br /><em>Graduated Cum Laude and Dean’s List</em></p>
          <p className="cv-text"><strong>Professional Certificate in Management</strong><br />York University, Toronto, Canada, 2013</p>
          <p className="cv-text"><strong>Certificate of Proficiency in Advanced French</strong><br />York University, Toronto, Canada, 2013</p>
        </div>

        <div className='cv-column'>
          <div className='purple-block'></div>
          {/* <img className='col-figure image is-128x128" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200" col-img' src="../images/awards.png" /> */}
          <h3 className='subject-title'>Awards</h3>
          <p className="cv-text"><strong><a href='http://yourreview.journals.yorku.ca/index.php/yourreview/article/view/40307'>Published Academic Article</a></strong><br />York Online Undergraduate Research Review (YOUR Review 2014)
          <br /><em><a href='http://yourreview.journals.yorku.ca/index.php/yourreview/article/view/40307'>Read "Claws of Catharsis: The Food Narrative of Lobster Eating"</a></em></p>
          <p className="cv-text"><strong>Nominee, Best Essay</strong><br />York University, 2013<br /><em>Among 20 students nominated for the award within the largest department at York University</em></p>
          <p className="cv-text"><strong>Emerging Global Leaders Program</strong><br />York International from York University, Toronto, Canada, 2012</p>
          <p className="cv-text"><strong>Top Public Speaker</strong><br />McGill University Debating Tournament, Montreal, Canada, 2009</p>
        </div>
      </div>
    </div>
  )
}
