import React , {useContext} from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png';
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { useRef } from "react";
import dropdownicon from '../Assets/drop-down.png'

function Navbar() {
    const [menu, SetMenu] = useState("shop")
    const { cartItem, getTotalCartItems } = useContext(ShopContext)
    

    const menuRef = useRef()

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />

                <p>Jeff ecomm</p>
            </div>
            <img className="nav-dropdown" onClick={dropdown_toggle} src={dropdownicon} alt="" />
            <ul className="nav-menu" ref={menuRef}>
                <li onClick={()=>{SetMenu("Shop")}} > <Link style={{textDecoration:"none"}} to='/'>Shop</Link>{menu=="Shop"? <hr />:null}</li>
                <li onClick={()=>{SetMenu("Men")}}><Link  style={{textDecoration:"none"}} to='/mens'>Men</Link>{menu=="Men"? <hr />:null}</li>
                <li onClick={()=>{SetMenu("Women")}}><Link style={{textDecoration:"none"}}  to='/womens'>Women</Link>{menu=="Women"? <hr />:null}</li>
                <li onClick={()=>{SetMenu("Kids")}}><Link  style={{textDecoration:"none"}} to='/kids'>Kids</Link>{menu=="Kids"? <hr />:null}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem("auth-token") ? <button onClick={() => {
                    localStorage.removeItem("auth-token");
                        window.location.replace("/")
                }}>
                    Log out
                </button> :  <Link style={{textDecoration:"none"}}  to='/Login'>  <button>
                    Login
                </button></Link>}
               
                    <Link  to='/cart' style={{textDecoration:"none"}}>  <button>
                       <img src={cart_icon} alt="" />
                </button></Link>
              
             
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
       </div>
    )
}

export default Navbar