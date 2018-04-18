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

const App = () => {
  return (
    <div>
        <NavBar />
        <Coverpage />
        <Bars />
        <About />
        <MyWork />
        <Embarrassing />
        <CV />
        <Contact />
        <Footer />

    </div>
  )
}

export default App
