import React from 'react'

export default (props) => {
  return (
    <div className=''>
      <h2 className='subject-title'>Wine and Art Auction</h2>
      <div className='img-container'>
        <a href="../images/auctionPackage.pdf"><img className='tile-img' src="../images/wineAndArt.jpg" /></a>
      </div>
      <p className="tile-text">I compiled the necessary information, in the correct order and in the appropriate tone, to convey confidence and professionalism to artists considering donating artwork to the auction. Nearly 70 artists applied as a result.</p>

      <div className='tags'>
        <div className="tag">Marketing strategy</div>
        <div className="tag">Communication</div>
        <div className="tag">InDesign</div>
      </div>

      <div className='demo'>
        <a href='../images/auctionPackage.pdf' className='demo-button'>View the Registration Package</a>
      </div>

    </div>
  )
}
