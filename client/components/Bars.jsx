import React from 'react'

export default class Bars extends React.Component {
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
  const nav = document.getElementById('bars')
  const navTop = nav.offsetTop
  // console.log('navTop = ' + navTop)
  // console.log('scrollY = ' + window.scrollY)

  if (window.scrollY >= 400) {
    this.setState({fixed: true})
  } else {
    this.setState({fixed: false})
  }
}

  render() {
    return (
    <div onScroll={this.handleScroll} id='bars' className={this.state.fixed ? 'bars' : 'hide'}>

      <span className='left-bar-placement'>
        <svg className='left-bars' height='1000' width='64'>
         <line x1={0} y1={35} x2={0} y2={1000} stroke='#C39E37' strokeWidth={15} />
         <line x1={10} y1={35} x2={10} y2={1000} stroke='#DDB41D' strokeWidth={7} />

         <line x1={30} y1={0} x2={30} y2={1000} stroke='#C39E37' strokeWidth={7} />
         <line x1={36} y1={0} x2={36} y2={1000} stroke='#DDB41D' strokeWidth={7} />

         <line x1={55} y1={35} x2={55} y2={1000} stroke='#C39E37' strokeWidth={7} />
         <line x1={61} y1={35} x2={61} y2={1000} stroke='#DDB41D' strokeWidth={7} />
         </svg>
       </span>

       <span className='right-bar-placement'>
         <svg className='right-bars' height='1000' width='84'>
          <line x1={0} y1={35} x2={0} y2={1000} stroke='#C39E37' strokeWidth={15} />
          <line x1={10} y1={35} x2={10} y2={1000} stroke='#DDB41D' strokeWidth={7} />

          <line x1={30} y1={0} x2={30} y2={1000} stroke='#C39E37' strokeWidth={7} />
          <line x1={36} y1={0} x2={36} y2={1000} stroke='#DDB41D' strokeWidth={7} />

          <line x1={55} y1={35} x2={55} y2={1000} stroke='#C39E37' strokeWidth={7} />
          <line x1={61} y1={35} x2={61} y2={1000} stroke='#DDB41D' strokeWidth={7} />
          </svg>
        </span>
    </div>

  )

}
}
