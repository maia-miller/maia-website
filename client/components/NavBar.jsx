import React from 'react'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fixed: false
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

componentDidMount() {
  window.addEventListener('scroll', this.handleScroll, true);
}

handleScroll() {
  const nav = document.getElementById('navigation')
  const navTop = nav.offsetTop
  // console.log('navTop = ' + navTop)
  // console.log('scrollY = ' + window.scrollY)

  if (window.scrollY >= 606) {
    this.setState({fixed: true})
  } else {
    this.setState({fixed: false})
  }
}

  render() {
    return (
      <div onScroll={this.handleScroll}>
        <div id='navigation' className={this.state.fixed ? 'fixed-nav-bar' : 'hero-nav-bar'}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#embarassing">History</a></li>
            <li><a href="#cv">CV</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
  )

}
}
