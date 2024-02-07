import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import './CartItems.css'
function CartItems() {
    const {all_product , CartItems , removeFromCart} = useContext(ShopContext)
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Pro  ducts</p>
                <p>Title</p>
                <p>Price</p>
                 <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
                <hr />
                <div>
                    <div className="cartItems-format">
                        <img src="" alt="" className="carticon-product-icon" />
                        <p></p>
                        <p></p>
                        <button className="cartitems-quantity">

                        </button>
                        <p>
                            
                        </p>
                        <img src="" alt="" />
                    </div>
                </div>

</div>
        </div>
    )
}

export default CartItems