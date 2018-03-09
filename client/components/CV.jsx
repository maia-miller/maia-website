import React from 'react'

import Testimonial2 from './Testimonial2'

export default (props) => {
  return (
    <div className='cv'>
      <div className='hero'>
        <div className='container has-text-centered'>
          <h1 className='title is-2' data-aos='fade-down' data-aos-duration="800">My CV</h1>
        </div>
      </div>

      <Testimonial2 />

      <div className='columns'>
        <div className='column'>
          <figure className="image is-128x128" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
          <h5 className='subtitle is-5'>Experience</h5>

          <p><strong>Digital Marketing Specialist</strong></p>
          <p>UJA Federation of Greater Toronto, January 2017 – July 2017</p>

          <p><strong>Marketing and Communications Coordinator</strong></p>
          <p>The Advocates' Society, September 2014 – January 2016</p>

          <p><strong>Social Media and Marketing Coordinator</strong></p>
          <p>The Cup Store, October 2013 – September 2014</p>

          <p><strong>Project Assistant</strong></p>
          <p>Public Interest, June 2013 – September 2013</p>

          <p><strong>Communications Assistant</strong></p>
          <p>Centre for Addiction and Mental Health (CAMH), June 2012 – August 2012</p>

        </div>

        <div className='column'>
          <figure className="image is-128x128" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
          <h5 className='subtitle is-5'>Education</h5>

          <p><strong>Full-Stack Web Development</strong></p>
          <p>Enspiral Dev Academy, Wellington, NZ, 2018</p>

          <p><strong>Specialization: Interaction Design</strong></p>
          <p>University of California, San Diego <em>(In progress)</em></p>

          <p><strong>Honours B.A. Humanities</strong></p>
          <p>York University, Toronto, Canada, 2013</p>
          <p><em>Graduated Cum Laude and Dean’s List</em></p>

          <p><strong>Professional Certificate in Management</strong></p>
          <p>York University, Toronto, Canada, 2013</p>

          <p><strong>Certificate of Proficiency in Advanced French</strong></p>
          <p>York University, Toronto, Canada, 2013</p>
        </div>

        <div className='column'>
          <figure className="image is-128x128" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
          <h5 className='subtitle is-5'>Awards</h5>
          <p><strong><a href='http://yourreview.journals.yorku.ca/index.php/yourreview/article/view/40307'>Published Academic Article</a></strong></p>
          <p>York Online Undergraduate Research Review (YOUR Review 2014)</p>
          <p><em><a href='http://yourreview.journals.yorku.ca/index.php/yourreview/article/view/40307'>Read "Claws of Catharsis: The Food Narrative of Lobster Eating"</a></em></p>

          <p><strong>Nominee, Best Essay</strong></p>
          <p>York University, 2013</p>
          <p><em>Among 20 students nominated for the award within the largest department at York University</em></p>

          <p><strong>Emerging Global Leaders Program</strong></p>
          <p>York International from York University, Toronto, Canada, 2012</p>

          <p><strong>Honourable Mention, Best Poster</strong></p>
          <p>York University Undergraduate Research Fair, 2010</p>

          <p><strong>Top Public Speaker</strong></p>
          <p>McGill University Debating Tournament, Montreal, Canada, 2009</p>
        </div>
      </div>
    </div>
  )
}
