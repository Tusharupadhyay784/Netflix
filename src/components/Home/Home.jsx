import React from 'react'
import './home.scss'
import { TbWorld } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai'
const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='container_image'>
            <div className='container'>
                <div className="top">
                    <div className="top-left">
                        <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_official_logo_icon_168085.png" alt="" />
                    </div>
                    <div className="top-right">
                        <div className='top-right-first'>
                            <TbWorld color='white' className='icon' />
                            <select name="lang" id="lang">
                                <option value="English" className='opt'>    English</option>
                                <option value="हिन्दी">हिन्दी</option>
                            </select>
                        </div>
                        <button className='top-right-btn' onClick={() => navigate('/signin')}>Sign In</button>
                    </div>
                </div>
                <div className="middle">
                    <h2 className='middle_h2'>Unlimited movies, TV shows and more.</h2>
                    <p className='middle_p'>Watch anywhere. Cancel anytime.</p>
                    <p className='middle_p2'>Ready to watch? Enter your email to create or restart your membership</p>
                    <div className='bottom'>
                        <div className='bottom_first'>
                            <input type="text" id='x' className='inp' placeholder=" " required />
                            <label id="x" className='form-label' htmlFor="text">Email address</label>
                        </div>
                        <button>Get Started <AiOutlineRight /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home