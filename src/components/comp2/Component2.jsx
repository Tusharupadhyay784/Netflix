import React from 'react'
import './comp2.scss'
const Component2 = () => {
  return (
    <div className='comp2'>
      <div className='comp2-1'>
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
        <div className='comp2-2-1'>
          <img className='img1' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
          <div>
            <h3>Stranger Things</h3>
            <p>Downloading...</p>
          </div>
          <img className='img2' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
        </div>
      </div>

      <div className='comp2-2'>
        <h2>Download your shows <br /> to watch offline.</h2>
        <p>Save your favourites easily and always have <br /> something to watch.</p>
      </div>
    </div>
  )
}

export default Component2