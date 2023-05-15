import React from 'react'
import './comp3.scss'
const Component3 = () => {
    return (
        <div className='comp3'>
            <div className='comp3-1'>
                <h2>Watch everywhere.</h2>
                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div className="comp3-2">
                <div className='comp3-2-1'>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" />
                    <video playsInline muted autoPlay loop >
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
                        {/* <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" /> */}
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Component3