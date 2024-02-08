import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'
function CartItems() {
    const { all_product, cartItem, removefromcart } = useContext(ShopContext)
    console.log(cartItem , "Allls")
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                 <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
                <hr />
                </div>
                  {all_product?.map((e) => {
                        if (cartItem[e.id] > 0) {
                            return    <div>
                    <div className="cartItems-format cartitems-format-main">
                        <img src={e.image} alt="" className="carticon-product-icon" />
                                    <p>{e.name}</p>
                                    <p>${ e.new_price}</p>
                        <button className="cartitems-quantity">
                        {cartItem[e.id]}
                        </button>
                        <p>
                           $ {e.new_price*cartItem[e.id]}
                        </p>
                        <img src={remove_icon} className='cartitems-remove-icon' onClick={() => {
                            removefromcart(e.id)
                        }} alt="" />
                    </div>
                    <hr />
                  
                </div>
                      }
                      return null
                    })}
             

            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>subtotal</p>
                            <p>${0}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${0}</h3>
                        </div>
                    </div>
                    <button>
                        Proceed to checkout
                    </button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code , Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" name="" id="" placeholder="Promocode" />
                        <button>submit</button>
                    </div>
                </div>
</div>
        </div>
    )
}

export default CartItems