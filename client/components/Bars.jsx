import React from 'react'

export default (props) => {

  return (
    <div className='bars'>
      <svg height='1000'>
       <line x1={0} y1={35} x2={0} y2={800} stroke='#C39E37' strokeWidth={15} />
       <line x1={10} y1={35} x2={10} y2={800} stroke='#DDB41D' strokeWidth={7} />

       <line x1={30} y1={0} x2={30} y2={800} stroke='#C39E37' strokeWidth={7} />
       <line x1={36} y1={0} x2={36} y2={800} stroke='#DDB41D' strokeWidth={7} />

       <line x1={55} y1={35} x2={55} y2={800} stroke='#C39E37' strokeWidth={7} />
       <line x1={61} y1={35} x2={61} y2={800} stroke='#DDB41D' strokeWidth={7} />
       </svg>

       <svg height='1000'>
        <line x1={0} y1={35} x2={0} y2={800} stroke='#C39E37' strokeWidth={15} />
        <line x1={10} y1={35} x2={10} y2={800} stroke='#DDB41D' strokeWidth={7} />

        <line x1={30} y1={0} x2={30} y2={800} stroke='#C39E37' strokeWidth={7} />
        <line x1={36} y1={0} x2={36} y2={800} stroke='#DDB41D' strokeWidth={7} />

        <line x1={55} y1={35} x2={55} y2={800} stroke='#C39E37' strokeWidth={7} />
        <line x1={61} y1={35} x2={61} y2={800} stroke='#DDB41D' strokeWidth={7} />
        </svg>
        
    </div>

  )
}
