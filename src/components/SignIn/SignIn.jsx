import React from 'react'
import './signin.scss'
// import '../comp6/comp6.scss'
import { TbWorld } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
const SignIn = () => {
const navigate = useNavigate();
  return (
    
    <div className="signin">
      <div>
      <div className="signin_content">
        <img onClick={()=>navigate('/')} src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_official_logo_icon_168085.png" alt="" />
      </div>

      <div className="form_content">
        <div>
          <h3>Sign In</h3>
          <input type="text" placeholder='Email or Phone Number' />
          <input type="password" placeholder='Password' />
          <button>Sign In</button>
          <div>
            <span><input className='sinp' type="checkbox" style={{height:"10vh",width:"1.1vw",backgroundColor:"black",color:"black"}} />  Remember me</span>
            <p>Need help?</p>
          </div>
          <p id='one'>New to Netflix? <button>Sign up now.</button></p>
          <p id='two'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more.</span></p>
        </div>
      </div>
    </div>
    <div className='comp8'>
            <p>Questions? Call <span>000-800-919-1694</span></p>
            <div className='comp8-2'>
                <div>
                    <a href="#">FAQ</a><br />
                    <a href="#">Cookie Preferences</a><br />
                    {/* button  */}
                    <div className='top-right-first8'>
                        <TbWorld color='white' className='icon' />
                        <select name="lang" id="lang2">
                            <option value="English" className='opt'>    English</option>
                            <option value="हिन्दी">हिन्दी</option>
                        </select>
                    </div>
                    {/* <h4>Netflix India</h4> */}
                </div>
                <div>
                    <a href="#">Help Centre</a><br />
                    <a href="#">Corporate Information</a><br />
                </div>
                <div>
                    <a href="#">Terms of Use</a><br />
                </div>
                <div>
                    <a href="#">Privacy</a><br />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn














