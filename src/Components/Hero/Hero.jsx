import React from "react";
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'
function Hero() {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>New arrivals only</h2>
                   <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        <img src={hand_icon} alt="" />
                         </div>
                        <p>collections</p>
                        <p>for everyone</p>
                   
                    <div className="hero-latest-btn">
                        <div>Latest Collection</div>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            </div>
            <div className="hero-right">
             <img src={hero_img} alt="" />
              </div>
        </div>
    )
}


export default Hero