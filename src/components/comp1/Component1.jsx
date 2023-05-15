import React from 'react'
import './component.scss'
const Component1 = () => {
    return (
        <div className='comp1'>
            <div className='comp1-1'>
                <h2>Enjoy on Your TV.</h2>
                <p>Watch on smart TVs, PlayStation, Xbox, <br /> Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className="comp1-2">
                <div className='comp1-2-1'>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
                    <video playsInline muted autoPlay loop >
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Component1