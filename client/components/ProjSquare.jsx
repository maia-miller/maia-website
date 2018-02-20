import React from 'react'

import ProjItem from './ProjItem'

export default (props) => {
  return (
    <div>
{/* onClick of image or title, goes to ProjItem.jsx, passes thru e.target.value to define activeProj */}

      Image goes here
      <h4>Title</h4>
      <p>Description</p>
      <p>Tag1</p>
      <p>Tag2</p>
      <p>Tag3</p>
    </div>
  )
}
