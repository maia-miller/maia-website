import React from 'react'

import Coverpage from './Coverpage'
import About from './About'
import MyWork from './MyWork'
import Embarrassing from './Embarrassing'
import CV from './CV'
import Contact from './Contact'
import Footer from './Footer'
import Testimonial from './Testimonial'
import Testimonial1 from './Testimonial1'
import Bars from './Bars'
import NavBar from './NavBar'
//import StickyNavBar from './StickyNavBar'

const App = () => {
  return (
    <div>
      <NavBar />
      <Coverpage />
      <div className=''>
        {/* <StickNavBar /> */}
        <Bars />
        <About />
        <MyWork />
        <Embarrassing />
        <CV />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App
