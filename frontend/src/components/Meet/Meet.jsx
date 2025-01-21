import React from 'react'
import style from "./style.module.css"

function Meet() {
  return (
    <>
    
        <div className={style.meet}>
            <div className={style.head}>
                <h1 className='text-orange-500 text-3xl font-bold self-center'>Meet Team</h1>
                {/* <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> */}
            </div>

            <div className={style.cards}>
                <div className={style.card}>
                    <img src="https://preview.colorlib.com/theme/banker/images/person_5.jpg" alt="" />
                    <h3>Kaiara Spencer</h3>
                    <span>Finance Manager</span>
                </div>

                <div className={style.card}>
                    <img src="https://preview.colorlib.com/theme/banker/images/person_6.jpg" alt="" />
                    <h3>Kaiara Spencer</h3>
                    <span>Finance Manager</span>
                </div>

                <div className={style.card}>
                    <img src="https://preview.colorlib.com/theme/banker/images/person_7.jpg" alt="" />
                    <h3>Kaiara Spencer</h3>
                    <span>Finance Manager</span>
                </div>

                <div className={style.card}>
                    <img src="https://preview.colorlib.com/theme/banker/images/person_8.jpg" alt="" />
                    <h3>Kaiara Spencer</h3>
                    <span>Finance Manager</span>
                </div>

                <div className={style.card}>
                    <img src="https://preview.colorlib.com/theme/banker/images/person_1.jpg" alt="" />
                    <h3>Kaiara Spencer</h3>
                    <span>Finance Manager</span>
                </div>

                <div className={style.card}>
                    <img src="https://preview.colorlib.com/theme/banker/images/person_2.jpg" alt="" />
                    <h3>Kaiara Spencer</h3>
                    <span>Finance Manager</span>
                </div>

                <div className={style.card}>
                    <img src="https://preview.colorlib.com/theme/banker/images/person_3.jpg" alt="" />
                    <h3>Kaiara Spencer</h3>
                    <span>Finance Manager</span>
                </div>

                <div className={style.card}>
                    <img src="https://preview.colorlib.com/theme/banker/images/person_4.jpg" alt="" />
                    <h3>Kaiara Spencer</h3>
                    <span>Finance Manager</span>
                </div>
            </div>
        </div>

    </>
  )
}

export default Meet
