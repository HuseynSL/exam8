import React from "react";
import style from "./style.module.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

function Hero() {
  return (
    <>
      <div className={style.hero}>
        {/* <div className={style.opacity}></div> */}

        <div className={style.wrapper}>

          <div className={style.navbar}>
            <div className={style.logo}>
                <h1>Banker.</h1>
            </div>
            <div className={style.list}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/add">Add</a></li>
                    <li><a href="/wishlist">Wishlist</a></li>
                    <li><a href="#about">About</a></li>
                    <li ><FaFacebookF /> <FaTwitter /> <FaLinkedinIn /></li>
                </ul>
            </div>
          </div>

        <div className={style.content}>
            <h1>Banking Solutions</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nesciunt quaerat molestias exercitationem blanditiis provident officiis aliquam.</p>
        </div>
        </div>

      </div>
    </>
  );
}

export default Hero;
