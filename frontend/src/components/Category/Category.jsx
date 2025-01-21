import React from 'react'
import style from "./style.module.css"

function Category() {
  return (
    <>
    
        <div className={style.category}>
            <div className={style.first}>
                <div className={style.card}>
                    <img src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/001-wallet.svg" alt=""/>
                    <h3>Money Savings</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>

                <div className={style.card}>
                    <img src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/004-cart.svg" alt=""/>
                    <h3>Money Savings</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>

                <div className={style.card}>
                    <img src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/006-credit-card.svg" alt=""/>
                    <h3>Money Savings</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
            </div>
            
            <div className={style.second}>
                <div className={style.image}>
                    <img src="https://preview.colorlib.com/theme/banker/images/about_2.jpg" alt="" />
                </div>
                <div className={style.content}>
                    <h3>Amortization Computation</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <p>Officia quaerat eaque neque</p>
                    <p>Officia quaerat eaque neque</p>
                    <p>Officia quaerat eaque neque</p>
                    <div className={style.input}>
                        <input type="text" placeholder='Enter your email' />
                        <button>Submit Email</button>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Category
