import React from 'react'
import './comp6.scss'
import { TbWorld } from 'react-icons/tb'
const Component6 = () => {
    return (
        <div className='comp6'>
            <p>Questions? Call <span>000-800-919-1694</span></p>
            <div className='comp6-2'>
                <div>
                    <a href="#">FAQ</a><br />
                    <a href="#">Account</a><br />
                    <a href="#">Jobs</a><br />
                    <a href="#">Privacy</a><br />
                    <a href="#">Contact Us</a><br />
                    <a href="#">Only on Netflix</a><br />
                    {/* button  */}
                    <div className='top-right-first2'>
                        <TbWorld color='white' className='icon' />
                        <select name="lang" id="lang2">
                            <option value="English" className='opt'>    English</option>
                            <option value="हिन्दी">हिन्दी</option>
                        </select>
                    </div>
                    <h4>Netflix India</h4>
                </div>
                <div>
                    <a href="#">Gift Card Terms</a><br />
                    <a href="#">Media Centre</a><br />
                    <a href="#">Ways to Watch</a><br />
                    <a href="#">Cookie Preferences</a><br />
                    <a href="#">Speed Test</a><br />
                </div>
                <div>
                    <a href="#">Help Centre</a><br />
                    <a href="#">Investor Relations</a><br />
                    <a href="#">Terms of Use</a><br />
                    <a href="#">Corporate Information</a><br />
                    <a href="#">Legal Notices</a><br />
                </div>
            </div>
        </div>
    )
}

export default Component6












