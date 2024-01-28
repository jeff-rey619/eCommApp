import React from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png';
import { useState } from "react";

function Navbar() {
    const[menu , SetMenu] =useState("shop")
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />

                <p>Jeff ecomm</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{SetMenu("Shop")}} >Shop{menu=="Shop"? <hr />:null}</li>
                <li onClick={()=>{SetMenu("Men")}}>Men{menu=="Men"? <hr />:null}</li>
                <li onClick={()=>{SetMenu("Women")}}>Women{menu=="Women"? <hr />:null}</li>
                <li onClick={()=>{SetMenu("Kids")}}>Kids{menu=="Kids"? <hr />:null}</li>
            </ul>
            <div className="nav-login-cart">
                <button>
                    Login
                </button>
                <img src={cart_icon} alt="" />
                <div className="nav-cart-count">0</div>
            </div>
       </div>
    )
}

export default Navbar