import React from 'react'

import Coverpage from './Coverpage'
import About from './About'
import Projects from './Projects'
import Embarrassing from './Embarrassing'
import CV from './CV'
import Contact from './Contact'
import Footer from './Footer'
// import NavBar from './NavBar'

const App = () => {
  return (
    <div>
      <div className='nav'>
        {/* <NavBar /> */}
      </div>

      <div className=''>
        <Coverpage />
        <About />
        <Projects />
        <Embarrassing />
        <CV />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App
