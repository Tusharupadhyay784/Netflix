import React, { useState } from 'react'
import './comp5.scss'
import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
const Component5 = () => {

    // const [prompt, setPrompt] = useState(["hide", "hide", "hide", "hide", "hide", "hide"]);

    // do this things by multiple usestate hooks

    const [one, setOne] = useState("hide");
    const [one2, setOne2] = useState("hide");
    const [one3, setOne3] = useState("hide");
    const [one4, setOne4] = useState("hide");
    const [one5, setOne5] = useState("hide");
    const [one6, setOne6] = useState("hide");
    return (
        <div className='comp5'>
            <div className='comp5-1'>
                <h1>Frequently Asked Questions</h1>
                <ul>

                    <li onClick={() => one === "hide" ? setOne("show") : setOne("hide")}>What is Netflix?      {one === "hide" ? <AiOutlinePlus className='icon' /> : <RxCross1 className='icon2' />}</li>
                    <div className={one}>
                        <p>
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br /><br />You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                        </p>

                    </div>
                    <li onClick={() => one2 === "hide" ? setOne2("show") : setOne2("hide")}>How much does Netflix cost? {one2 === "hide" ? <AiOutlinePlus className='icon' /> : <RxCross1 className='icon2' />}</li>
                    <div className={one2}>
                        <p>
                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                        </p>

                    </div>
                    <li onClick={() => one3 === "hide" ? setOne3("show") : setOne3("hide")}>Where can I Watch? {one3 === "hide" ? <AiOutlinePlus className='icon' /> : <RxCross1 className='icon2' />}</li>
                    <div className={one3}>
                        <p>
                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br /> <br />

                            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                        </p>

                    </div>
                    <li onClick={() => one4 === "hide" ? setOne4("show") : setOne4("hide")}>How do I Cancel? {one4 === "hide" ? <AiOutlinePlus className='icon' /> : <RxCross1 className='icon2' />}</li>
                    <div className={one4}>
                        <p>
                            Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                        </p>

                    </div>
                    <li onClick={() => one5 === "hide" ? setOne5("show") : setOne5("hide")}>What can I watch on Netflix? {one5 === "hide" ? <AiOutlinePlus className='icon' /> : <RxCross1 className='icon2' />}</li>
                    <div className={one5}>
                        <p>
                            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                        </p>

                    </div>
                    <li onClick={() => one6 === "hide" ? setOne6("show") : setOne6("hide")}>Is Netflix good for kids? {one6 === "hide" ? <AiOutlinePlus className='icon' /> : <RxCross1 className='icon2' />}</li>
                    <div className={one6}>
                        <p>
                            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                            <br /> <br />
                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                        </p>

                    </div>


                </ul>
            </div >
            <div className="comp5-2">
                {/* para and button for */}
                <p className='middle_p2'>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='bottom'>
                    <div className='bottom_first'>
                        <input type="text" id='x' className='inp' placeholder=" " required />
                        <label id="x" className='form-label' htmlFor="text">Email address</label>
                    </div>
                    <button>Get Started <AiOutlineRight /></button>
                </div>
            </div>
        </div >
    )
}

export default Component5