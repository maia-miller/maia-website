import React from 'react'

import Testimonial from './Testimonial'

export default (props) => {
  return (
    <div className='cv'>
      <div className='header'>
        <h1>My CV</h1>
        <Testimonial />
      </div>

      <div className='columns'>
        <div className='column'>
          <h4>Experience</h4>

          <h5>Digital Marketing Specialist</h5>
          <p>UJA Federation of Greater Toronto, January 2017 – July 2017</p>

          <h5>Marketing and Communications Coordinator</h5>
          <p>The Advocates' Society, September 2014 – January 2016</p>

          <h5>Social Media and Marketing Coordinator</h5>
          <p>The Cup Store, October 2013 – September 2014</p>

          <h5>Project Assistant</h5>
          <p>Public Interest, June 2013 – September 2013</p>

          <h5>Communications Assistant</h5>
          <p>Centre for Addiction and Mental Health (CAMH), June 2012 – August 2012</p>

        </div>

        <div className='column'>
          <h4>Education</h4>

          <h5>Full-Stack Web Development</h5>
          <p>Enspiral Dev Academy, Wellington, NZ 2018</p>

          <h5>Specialization: Interaction Design</h5>
          <p>University of California, San Diego <em>(In progress)</em></p>

          <h5>Honours B.A. Humanities</h5>
          <p>York University, Toronto, Canada 2013</p>
          <p><em>Graduated Cum Laude and Dean’s List</em></p>

          <h5>SProfessional Certificate in Management</h5>
          <p>York University, Toronto, Canada 2013</p>

          <h5>Certificate of Proficiency in Advanced French</h5>
          <p>York University, Toronto, Canada 2013</p>
        </div>

        <div className='column'>
          <h4>Awards</h4>
          <h5><a href='http://yourreview.journals.yorku.ca/index.php/yourreview/article/view/40307'>Published Academic Article</a></h5>
          <p>York Online Undergraduate Research Review (YOUR Review 2014</p>
          <p><em><a href='http://yourreview.journals.yorku.ca/index.php/yourreview/article/view/40307'>Read "Claws of Catharsis: The Food Narrative of Lobster Eating"</a></em></p>

          <h5>Nominee, Best Essay</h5>
          <p>York University 2013</p>
          <p><em>Among 20 students nominated for the award within the largest department at York University</em></p>

          <h5>Emerging Global Leaders Program</h5>
          <p>York International from York University, Toronto, Canada 2012</p>

          <h5>Honourable Mention, Best Poster</h5>
          <p>York University Undergraduate Research Fair 2010</p>

          <h5>Top Public Speaker</h5>
          <p>McGill University Debating Tournament, Montreal, Canada 2009</p>
        </div>
      </div>
    </div>
  )
}
