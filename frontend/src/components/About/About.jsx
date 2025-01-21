import React from 'react'
import style  from "./style.module.css"

function About() {
  return (
    <>
    
        <div className={style.about}>
            <div className={style.head}>
                <h2 className='text-orange-600 text-3xl font-bold'>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
            </div>
            <div className={style.second}>
                            <div className={style.image}>
                                <img src="https://preview.colorlib.com/theme/banker/images/hero_1.jpg" alt="" />
                            </div>
                            <div className={style.content}>
                                <h3>We Solve Your Financial Problem</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            </div>
                        </div>
        </div>
    
    </>
  )
}

export default About
